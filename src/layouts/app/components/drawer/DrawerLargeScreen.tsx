import useAppLayoutStore from '@/layouts/app/store/useAppLayoutStore'
import { cn } from '@/utils/cn'
import Logo from './components/Logo'
import Logout from './components/Logout'
import Menu from './components/Menu'

const DrawerLargeScreen = () => {
  const { isDrawerCollapsed } = useAppLayoutStore()

  return (
    <div
      className={cn('flex h-dvh flex-col gap-y-6 transition-[width]', {
        'w-52': !isDrawerCollapsed,
        'w-16': isDrawerCollapsed,
      })}
    >
      <Logo />

      <nav className='flex flex-1 flex-col justify-between'>
        <Menu />
        <Logout />
      </nav>
    </div>
  )
}

export default DrawerLargeScreen
