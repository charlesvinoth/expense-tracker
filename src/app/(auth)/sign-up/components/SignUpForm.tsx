'use client'

import { useActionState } from 'react'
import { InitialState } from '@/actions/auth/sign-up/definitions'
import signUp from '@/actions/auth/sign-up/signUp'
import { Button, InputPassword, InputText } from '@/components/base'

const SignUpForm = () => {
  const [state, action, isPending] = useActionState(signUp, InitialState)

  return (
    <form action={action}>
      <InputText
        name='name'
        label='Name'
        className='mb-4'
        defaultValue={state.name}
        error={state.errors.name}
      />
      <InputText
        name='email'
        label='Email'
        className='mb-4'
        defaultValue={state.email}
        error={state.errors.email}
      />
      <InputPassword
        name='password'
        label='Password'
        defaultValue={state.password}
        error={state.errors.password}
      />

      {state.appwriteError && (
        <p className='mt-4 text-tertiary-400'>{state.appwriteError}</p>
      )}

      <Button
        type='submit'
        label='Create account'
        loading={isPending}
        className='mt-6 w-full'
      />
    </form>
  )
}

export default SignUpForm
