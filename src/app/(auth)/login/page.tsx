import { Button } from '@/components/base'
import Description from '../components/Description'
import RedirectLink from '../components/RedirectLink'
import Title from '../components/Title'
import LoginForm from './components/LoginForm'

const LoginPage = () => {
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
    </div>
  )
}

export default LoginPage
