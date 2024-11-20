'use server'

import { produce } from 'immer'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { AppwriteException } from 'node-appwrite'
import * as v from 'valibot'
import { createAdminClient } from '@/lib/appwrite'
import { InitialState, LoginSchema, LoginState } from './definitions'

export default async function login(
  previousState: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const result = v.safeParse(
    LoginSchema,
    { email, password },
    { abortPipeEarly: true },
  )

  if (result.issues) {
    const errors = v.flatten(result.issues).nested

    const nextState = produce(InitialState, (draft) => {
      draft.email = email
      draft.password = password
      draft.errors.email = errors?.email ? errors.email[0] : ''
      draft.errors.password = errors?.password ? errors.password[0] : ''
    })

    return nextState
  }

  try {
    const { account } = await createAdminClient()
    const session = await account.createEmailPasswordSession(email, password)
    const cookieStore = await cookies()

    cookieStore.set('appwrite-session', session.secret, {
      httpOnly: true,
      sameSite: 'strict',
      secure: true,
      expires: new Date(session.expire),
      path: '/',
    })
  } catch (error) {
    let message = 'Login failed. Please try again.'

    if (error instanceof AppwriteException) {
      if (error.type === 'user_invalid_credentials') {
        message = 'Invalid login details. Please try again.'
      }
    }

    const nextState = produce(InitialState, (draft) => {
      draft.email = email
      draft.password = password
      draft.appwriteError = message
    })

    return nextState
  }

  redirect('/')
}
