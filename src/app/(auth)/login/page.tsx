import Link from 'next/link'
import {
  Button,
  InputCheckbox,
  InputPassword,
  InputText,
} from '@/components/base'

const LoginPage = () => {
  return (
    <div className=''>
      <h1 className='mb-2 text-2xl font-bold'>Welcome back!</h1>
      <p className='mb-10 text-gray-500'>
        Log in to manage your expenses and savings.
      </p>

      <form>
        <InputText label='Email' className='mb-5' />
        <InputPassword label='Password' className='mb-6' />

        <div className='mb-6 flex items-center justify-between'>
          <InputCheckbox label='Remember me' />

          <Link
            href='/forgot-password'
            className='font-semibold text-primary-600 outline-none hover:underline focus-visible:underline'
          >
            Forgot password?
          </Link>
        </div>

        <Button type='submit' label='Login' className='w-full' />
      </form>

      <Button
        variant='secondary'
        label='Login with Google'
        icon='icon-[logos--google-icon]'
        className='mt-4 w-full'
      />

      <p className='mt-8 flex items-center justify-center gap-1 text-center text-gray-500'>
        Don&apos;t have an account?
        <Link
          href='/signup'
          className='font-semibold text-primary-600 outline-none hover:underline focus-visible:underline'
        >
          Sign up
        </Link>
      </p>
    </div>
  )
}

export default LoginPage
