import { Button } from '@/components/base'
import Description from '../components/Description'
import RedirectLink from '../components/RedirectLink'
import Title from '../components/Title'
import SignUpForm from './components/SignUpForm'

const SignUpPage = () => {
  return (
    <div>
      <Title>Create your account</Title>
      <Description>Get started with budgeting and savings.</Description>

      <SignUpForm />

      <Button
        variant='secondary'
        label='Sign up with Google'
        icon='icon-[logos--google-icon]'
        className='mt-4 w-full'
      />

      <RedirectLink
        label='Already have an account?'
        route='/login'
        routeLabel='Login'
      />
    </div>
  )
}

export default SignUpPage
