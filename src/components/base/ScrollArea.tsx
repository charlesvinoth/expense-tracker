import * as RadixScrollArea from '@radix-ui/react-scroll-area'
import { cn } from '@/utils/cn'

interface ScrollAreaProps {
  children: React.ReactNode
  className?: string
  orientation?: 'vertical' | 'horizontal'
  type?: 'auto' | 'hover'
}

const ScrollArea: React.FC<ScrollAreaProps> = ({
  children,
  className,
  orientation = 'vertical',
  type = 'auto',
}) => {
  return (
    <RadixScrollArea.Root
      type={type}
      className={cn('overflow-hidden', className)}
    >
      <RadixScrollArea.Viewport
        className={cn('size-full rounded-[inherit]', {
          'pr-2': orientation === 'vertical',
          'pb-2': orientation === 'horizontal',
        })}
      >
        {children}
      </RadixScrollArea.Viewport>

      <RadixScrollArea.Scrollbar
        className={cn('flex touch-none select-none p-0.5 transition-colors', {
          'h-full w-2': orientation === 'vertical',
          'h-2 flex-col': orientation === 'horizontal',
        })}
        orientation={orientation}
      >
        <RadixScrollArea.Thumb className='relative flex-1 rounded-full bg-gray-400 dark:bg-gray-600' />
      </RadixScrollArea.Scrollbar>
      <RadixScrollArea.Corner className='bg-transparent' />
    </RadixScrollArea.Root>
  )
}

export default ScrollArea
