import { Dialog } from '@ark-ui/react/dialog'
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
    <Dialog.Root open={open} onOpenChange={() => setOpen(!open)}>
      <Portal>
        <Dialog.Backdrop className='fixed inset-0 z-10 h-dvh w-dvw bg-gray-500/60 transition-opacity' />
        <Dialog.Positioner className='fixed inset-0 z-20'>
          <Dialog.Content
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
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}

export default Sheet
