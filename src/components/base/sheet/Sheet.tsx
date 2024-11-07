'use client'

import { Dialog } from '@ark-ui/react/dialog'
import { Portal } from '@ark-ui/react/portal'
import { motion } from 'framer-motion'
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
            className={cn('absolute h-dvh bg-white dark:bg-gray-900', {
              'left-0': position === 'left',
              'right-0': position === 'right',
            })}
          >
            {open && (
              <motion.div
                initial={{ opacity: 0, x: position === 'left' ? -100 : 100 }}
                animate={{ opacity: 1, x: 0 }}
              >
                {children}
              </motion.div>
            )}
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}

export default Sheet
