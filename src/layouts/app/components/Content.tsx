'use client'

import useLargeScreen from '@/hooks/useLargeScreen'
import useAppLayoutStore from '@/layouts/app/store/useAppLayoutStore'
import { cn } from '@/utils/cn'
import Header from './header/Header'

interface ContentProps {
  children: React.ReactNode
}

const Content: React.FC<ContentProps> = ({ children }) => {
  const isLargeScreen = useLargeScreen()
  const { isDrawerCollapsed } = useAppLayoutStore()

  return (
    <main
      className={cn('transition-[margin-left]', {
        'ml-52': isLargeScreen && !isDrawerCollapsed,
        'ml-16': isLargeScreen && isDrawerCollapsed,
      })}
    >
      <Header />
      <div className='px-6 py-6 xl:px-10'>{children}</div>
    </main>
  )
}

export default Content
