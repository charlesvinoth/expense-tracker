'use server'

import { produce } from 'immer'
import { redirect } from 'next/navigation'
import { AppwriteException, ID } from 'node-appwrite'
import * as v from 'valibot'
import { createAdminClient } from '@/lib/appwrite'
import { InitialState, SignUpSchema, SignUpState } from './definitions'

export default async function signup(
  previousState: SignUpState,
  formData: FormData,
): Promise<SignUpState> {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const result = v.safeParse(
    SignUpSchema,
    { name, email, password },
    { abortPipeEarly: true },
  )

  if (result.issues) {
    const errors = v.flatten(result.issues).nested

    const nextState = produce(InitialState, (draft) => {
      draft.name = name
      draft.email = email
      draft.password = password

      draft.errors.name = errors?.name ? errors.name[0] : ''
      draft.errors.email = errors?.email ? errors.email[0] : ''
      draft.errors.password = errors?.password ? errors.password[0] : ''
    })

    return nextState
  }

  try {
    const { account } = await createAdminClient()
    await account.create(ID.unique(), email, password, name)
  } catch (error) {
    let message = 'SignUp failed. Please try again.'

    if (error instanceof AppwriteException) {
      if (error.type === 'user_already_exists') {
        message = 'A user with the same email already exists.'
      }
    }

    const nextState = produce(InitialState, (draft) => {
      draft.name = name
      draft.email = email
      draft.password = password
      draft.appwriteError = message
    })

    return nextState
  }

  redirect('/login?initial=true')
}
