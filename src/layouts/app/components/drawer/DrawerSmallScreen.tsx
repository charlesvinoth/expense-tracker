'use client'

import { Sheet } from '@/components/base'
import { ScrollArea } from '@/components/base'
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

        <ScrollArea className='h-[calc(100dvh-4rem)]'>
          <nav className='flex h-full flex-col justify-between gap-10'>
            <Menu />
            <Logout />
          </nav>
        </ScrollArea>
      </div>
    </Sheet>
  )
}

export default DrawerSmallScreen
