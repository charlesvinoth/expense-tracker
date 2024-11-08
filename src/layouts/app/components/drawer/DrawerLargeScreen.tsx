'use client'

import { motion } from 'framer-motion'
import { ScrollArea } from '@/components/base'
import useAppLayoutStore from '@/layouts/app/store/useAppLayoutStore'
import { cn } from '@/utils/cn'
import Logo from './components/Logo'
import Logout from './components/Logout'
import Menu from './components/Menu'

const DrawerLargeScreen = () => {
  const { isDrawerCollapsed } = useAppLayoutStore()

  return (
    <motion.div
      initial={{ width: '4rem' }}
      animate={{ width: isDrawerCollapsed ? '4rem' : '13rem' }}
      className={cn(
        'hidden h-dvh flex-col gap-y-5 bg-white dark:bg-gray-900 xl:flex',
      )}
    >
      <Logo />

      <ScrollArea className='h-[calc(100dvh-4rem)]'>
        <nav className='flex h-full flex-col justify-between gap-10'>
          <Menu />
          <Logout />
        </nav>
      </ScrollArea>
    </motion.div>
  )
}

export default DrawerLargeScreen
