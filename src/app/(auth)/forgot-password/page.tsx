import { Button, InputText } from '@/components/base'
import Description from '../components/Description'
import RedirectLink from '../components/RedirectLink'
import Title from '../components/Title'

const ForgotPasswordPage = () => {
  return (
    <div>
      <Title>Forgot password?</Title>
      <Description>
        Reset your password and regain access to your account.
      </Description>

      <form>
        <InputText name='email' label='Email' className='mb-6' />

        <Button type='submit' label='Reset password' className='w-full' />
      </form>

      <RedirectLink
        label='Remember your password?'
        route='/login'
        routeLabel='Login'
      />
    </div>
  )
}

export default ForgotPasswordPage
