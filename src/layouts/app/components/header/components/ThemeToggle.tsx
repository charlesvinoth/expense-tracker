'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { IconButton } from '@/components/base'

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return null
  }

  const handleClick = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <IconButton
      icon={
        theme === 'dark'
          ? 'icon-[material-symbols--light-mode-rounded]'
          : 'icon-[material-symbols--dark-mode-rounded]'
      }
      variant='tertiary'
      className='transition-none'
      onClick={handleClick}
    />
  )
}

export default ThemeToggle
