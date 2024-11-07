import { tv } from 'tailwind-variants'
import type { ButtonColor, ButtonVariant } from './types'

export default function getButtonClasses(
  variant: ButtonVariant,
  color: ButtonColor,
) {
  const styles = tv({
    base: 'relative inline-flex shrink-0 select-none appearance-none items-center justify-center gap-1 overflow-hidden outline-none transition-colors focus-visible:ring-2 focus-visible:ring-primary-600 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-primary-400',
    variants: {
      variant: {
        primary: 'text-white shadow-sm dark:text-black',
        secondary:
          'border bg-white border-gray-200 text-gray-700 hover:bg-gray-100 hover:text-gray-800 active:bg-gray-150 dark:border-gray-750 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-850 dark:hover:text-gray-200 dark:active:bg-gray-800',
        tertiary:
          'text-gray-600 hover:bg-gray-100 hover:text-gray-700 active:bg-gray-150 dark:text-gray-400 dark:hover:bg-gray-850 dark:hover:text-gray-300 dark:active:bg-gray-800',
        quaternary: '',
      },
      color: {
        primary: '',
        success: '',
        warning: '',
        error: '',
      },
    },
    compoundVariants: [
      {
        variant: 'primary',
        color: 'primary',
        class:
          'bg-primary-600 hover:bg-primary-700 active:bg-primary-800 dark:bg-primary-400 dark:hover:bg-primary-300 dark:active:bg-primary-200',
      },
      {
        variant: 'primary',
        color: 'success',
        class:
          'bg-success-600 hover:bg-success-700 active:bg-success-800 dark:bg-success-400 dark:hover:bg-success-300 dark:active:bg-success-200',
      },
      {
        variant: 'primary',
        color: 'warning',
        class:
          'bg-warning-600 hover:bg-warning-700 active:bg-warning-800 dark:bg-warning-400 dark:hover:bg-warning-300 dark:active:bg-warning-200',
      },
      {
        variant: 'primary',
        color: 'error',
        class:
          'bg-error-600 hover:bg-error-700 active:bg-error-800 dark:bg-error-400 dark:hover:bg-error-300 dark:active:bg-error-200',
      },
    ],
  })

  return styles({ variant, color })
}
