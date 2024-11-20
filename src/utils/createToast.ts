import { createToaster } from '@ark-ui/react/toast'

export const toaster = createToaster({
  placement: 'bottom-end',
  gap: 24,
  duration: 3000,
})

interface Toast {
  title: string
  description: string
  type: 'success' | 'error'
}

export function createToast({ title, description, type }: Toast) {
  toaster.create({
    title,
    description,
    type,
  })
}
