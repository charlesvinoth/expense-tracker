'use client'

import Link from 'next/link'
import { useActionState } from 'react'
import { InitialState } from '@/actions/auth/login/definitions'
import login from '@/actions/auth/login/login'
import {
  Button,
  InputCheckbox,
  InputPassword,
  InputText,
} from '@/components/base'

const LoginForm = () => {
  const [state, action, isPending] = useActionState(login, InitialState)

  return (
    <form action={action}>
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

      <div className='my-6 flex items-center justify-between'>
        <InputCheckbox name='remember' label='Remember me' defaultChecked />

        <Link
          href='/forgot-password'
          className='font-semibold text-primary-600 outline-none hover:underline focus-visible:underline'
        >
          Forgot password?
        </Link>
      </div>

      <Button
        type='submit'
        label='Login'
        loading={isPending}
        className='w-full'
      />
    </form>
  )
}

export default LoginForm
