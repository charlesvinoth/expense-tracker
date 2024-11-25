import { tv } from 'tailwind-variants'
import type { ButtonColor, ButtonVariant } from './types'

export default function getButtonClasses(
  variant: ButtonVariant,
  color: ButtonColor,
) {
  const styles = tv({
    base: 'relative inline-flex shrink-0 select-none appearance-none items-center justify-center gap-2 overflow-hidden outline-none transition-colors focus-visible:ring-2 focus-visible:ring-primary-600 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-primary-400',
    variants: {
      variant: {
        primary: 'shadow-sm',
        secondary:
          'border bg-white border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-800 active:bg-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-850 dark:hover:text-gray-200 dark:active:bg-gray-800',
        tertiary:
          'text-gray-600 hover:bg-gray-100 hover:text-gray-700 active:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-850 dark:hover:text-gray-300 dark:active:bg-gray-800',
        quaternary: '',
      },
      color: {
        primary: '',
        secondary: '',
        error: '',
      },
    },
    compoundVariants: [
      {
        variant: 'primary',
        color: 'primary',
        class:
          'bg-primary-600 hover:bg-primary-700 active:bg-primary-800 text-white',
      },
      {
        variant: 'primary',
        color: 'secondary',
        class:
          'bg-secondary-300 hover:bg-secondary-400 active:bg-secondary-500 text-gray-900',
      },
      {
        variant: 'primary',
        color: 'error',
        class:
          'bg-tertiary-400 hover:bg-tertiary-500 active:bg-tertiary-600 text-white',
      },
    ],
  })

  return styles({ variant, color })
}
