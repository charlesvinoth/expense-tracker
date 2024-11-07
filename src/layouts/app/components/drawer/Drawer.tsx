'use client'

import useLargeScreen from '@/hooks/useLargeScreen'
import DrawerLargeScreen from './DrawerLargeScreen'
import DrawerSmallScreen from './DrawerSmallScreen'

const Drawer = () => {
  const isLargeScreen = useLargeScreen()
  return isLargeScreen ? <DrawerLargeScreen /> : <DrawerSmallScreen />
}

export default Drawer
