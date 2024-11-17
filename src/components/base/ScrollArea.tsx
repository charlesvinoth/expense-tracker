import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
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
    <ScrollAreaPrimitive.Root
      type={type}
      className={cn('overflow-hidden', className)}
    >
      <ScrollAreaPrimitive.Viewport
        asChild
        className='size-full rounded-[inherit]'
      >
        {children}
      </ScrollAreaPrimitive.Viewport>

      <ScrollAreaPrimitive.Scrollbar
        className={cn('flex touch-none select-none p-0.5 transition-colors', {
          'h-full w-2': orientation === 'vertical',
          'h-2 flex-col': orientation === 'horizontal',
        })}
        orientation={orientation}
      >
        <ScrollAreaPrimitive.Thumb className='relative flex-1 rounded-full bg-gray-400 dark:bg-gray-600' />
      </ScrollAreaPrimitive.Scrollbar>
      <ScrollAreaPrimitive.Corner className='bg-transparent' />
    </ScrollAreaPrimitive.Root>
  )
}

export default ScrollArea
