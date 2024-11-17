import { Dialog as DialogPrimitive } from '@ark-ui/react/dialog'
import { Portal } from '@ark-ui/react/portal'
import { cn } from '@/utils/cn'

interface SheetProps {
  open: boolean
  children: React.ReactNode
  position?: 'left' | 'right'
  setOpen: (open: boolean) => void
}

const Sheet: React.FC<SheetProps> = ({
  open,
  children,
  position = 'left',
  setOpen,
}) => {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={() => setOpen(!open)}>
      <Portal>
        <DialogPrimitive.Backdrop className='fixed inset-0 z-10 h-dvh w-dvw bg-gray-500/60 transition-opacity' />
        <DialogPrimitive.Positioner className='fixed inset-0 z-20'>
          <DialogPrimitive.Content
            className={cn(
              'absolute h-dvh bg-white will-change-[opacity,transform] dark:bg-gray-900',
              {
                'left-0 data-[state=open]:animate-fadeRight':
                  position === 'left',
                'right-0 data-[state=open]:animate-fadeLeft':
                  position === 'right',
              },
            )}
          >
            {children}
          </DialogPrimitive.Content>
        </DialogPrimitive.Positioner>
      </Portal>
    </DialogPrimitive.Root>
  )
}

export default Sheet
