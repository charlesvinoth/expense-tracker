'use client'

import { Toast as ToastPrimitive, Toaster } from '@ark-ui/react/toast'
import { Icon } from '@/components/base'
import { cn } from '@/utils/cn'
import { toaster } from '@/utils/createToast'

const Toast = () => {
  return (
    <Toaster toaster={toaster}>
      {(toast) => (
        <ToastPrimitive.Root
          key={toast.id}
          className={cn(
            'flex animate-fadeLeft items-start gap-2 rounded-md p-4 ring-1',
            {
              'bg-primary-600/5 ring-primary-600/20': toast.type === 'success',
              'bg-tertiary-600/5 ring-tertiary-400/20': toast.type === 'error',
            },
          )}
        >
          <div className='w-72 flex-1'>
            <div className='mb-1 flex items-center gap-2'>
              <Icon
                name={
                  toast.type === 'success'
                    ? 'icon-[material-symbols--check-circle-rounded]'
                    : 'icon-[material-symbols--error-rounded]'
                }
                className={cn({
                  'text-primary-600': toast.type === 'success',
                  'text-tertiary-400': toast.type === 'error',
                })}
              />
              <ToastPrimitive.Title className='font-semibold'>
                {toast.title}
              </ToastPrimitive.Title>
            </div>
            <ToastPrimitive.Description className='ml-7 text-gray-500'>
              {toast.description}
            </ToastPrimitive.Description>
          </div>

          <ToastPrimitive.CloseTrigger>
            <Icon
              name='icon-[material-symbols--close-rounded]'
              className='text-gray-500'
            />
          </ToastPrimitive.CloseTrigger>
        </ToastPrimitive.Root>
      )}
    </Toaster>
  )
}

export default Toast
