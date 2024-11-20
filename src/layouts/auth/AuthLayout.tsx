import { LogoMark } from '@/components/base'
import Features from './components/features/Features'

interface AuthLayoutProps {
  children: React.ReactNode
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className='grid grid-cols-1 xl:grid-cols-2'>
      <Features />

      <div className='flex h-dvh items-center justify-center'>
        <div className='w-96 space-y-8 px-4 md:px-0'>
          <LogoMark />
          {children}
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
