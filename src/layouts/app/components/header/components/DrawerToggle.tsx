'use client'

import { IconButton } from '@/components/base'
import useLargeScreen from '@/hooks/useLargeScreen'
import useAppLayoutStore from '@/layouts/app/store/useAppLayoutStore'

const DrawerToggle = () => {
  const isLargeScreen = useLargeScreen()
  const { setDrawerOpen, setDrawerCollapsed } = useAppLayoutStore()

  return (
    <IconButton
      icon='icon-[tabler--menu-3]'
      variant='tertiary'
      onClick={isLargeScreen ? setDrawerCollapsed : setDrawerOpen}
    />
  )
}

export default DrawerToggle
