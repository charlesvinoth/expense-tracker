import { Button, InputPassword, InputText } from '@/components/base'
import Description from '../components/Description'
import RedirectLink from '../components/RedirectLink'
import Title from '../components/Title'

const SignUpPage = () => {
  return (
    <div>
      <Title>Create your account</Title>
      <Description>Get started with budgeting and savings.</Description>

      <form>
        <InputText name='name' label='Name' className='mb-4' />
        <InputText name='email' label='Email' className='mb-4' />
        <InputPassword name='password' label='Password' className='mb-6' />

        <Button type='submit' label='Create account' className='w-full' />
      </form>

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
