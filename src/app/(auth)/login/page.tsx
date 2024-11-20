'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { Button, Toast } from '@/components/base'
import { createToast } from '@/utils/createToast'
import Description from '../components/Description'
import RedirectLink from '../components/RedirectLink'
import Title from '../components/Title'
import LoginForm from './components/LoginForm'

const LoginPage = () => {
  const params = useSearchParams()

  useEffect(() => {
    if (params.get('initial')) {
      createToast({
        title: 'Success!',
        description:
          'Your account has been created successfully. Please log in to continue.',
        type: 'success',
      })
    }
  }, [params])

  return (
    <div>
      <Title>Welcome back!</Title>
      <Description>Log in to manage your expenses and savings.</Description>

      <LoginForm />

      <Button
        variant='secondary'
        label='Login with Google'
        icon='icon-[logos--google-icon]'
        className='mt-4 w-full'
      />

      <RedirectLink
        label="Don't have an account?"
        route='/sign-up'
        routeLabel='Sign up'
      />

      <Toast />
    </div>
  )
}

export default LoginPage
