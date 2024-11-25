'use client'

import { ScrollArea } from '@/components/base'
import useAppLayoutStore from '@/layouts/app/store/useAppLayoutStore'
import { cn } from '@/utils/cn'
import Logo from './components/Logo'
import Logout from './components/Logout'
import Menu from './components/Menu'

const DrawerLargeScreen = () => {
  const { isDrawerCollapsed } = useAppLayoutStore()

  return (
    <div
      className={cn(
        'fixed inset-0 hidden h-dvh flex-col gap-y-5 border-r border-gray-200 bg-gray-50 transition-[width] dark:border-gray-800 dark:bg-gray-900 xl:flex',
        {
          'w-52': !isDrawerCollapsed,
          'w-16': isDrawerCollapsed,
        },
      )}
    >
      <Logo />

      <ScrollArea asChild className='h-[calc(100dvh-4rem)]'>
        <nav className='flex h-full flex-col justify-between gap-10'>
          <Menu />
          <Logout />
        </nav>
      </ScrollArea>
    </div>
  )
}

export default DrawerLargeScreen
