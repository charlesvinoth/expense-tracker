import { Sheet } from '@/components/base'
import useAppLayoutStore from '@/layouts/app/store/useAppLayoutStore'
import Logo from './components/Logo'
import Logout from './components/Logout'
import Menu from './components/Menu'

const DrawerSmallScreen = () => {
  const { isDrawerOpen, setDrawerOpen } = useAppLayoutStore()

  return (
    <Sheet open={isDrawerOpen} setOpen={setDrawerOpen}>
      <div className='flex h-dvh w-52 flex-col gap-y-6'>
        <Logo />

        <nav className='flex flex-1 flex-col justify-between'>
          <Menu />
          <Logout />
        </nav>
      </div>
    </Sheet>
  )
}

export default DrawerSmallScreen
