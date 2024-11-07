import { Logo as _Logo, LogoMark } from '@/components/base'
import useAppLayoutStore from '@/layouts/app/store/useAppLayoutStore'

const Logo = () => {
  const { isDrawerOpen, isDrawerCollapsed } = useAppLayoutStore()
  const showFullLogo = !isDrawerCollapsed || isDrawerOpen

  return (
    <div className='flex h-16 items-center px-4'>
      {showFullLogo ? <_Logo /> : <LogoMark className='size-8' />}
    </div>
  )
}

export default Logo
