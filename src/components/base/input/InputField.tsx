import { Field as FieldPrimitive } from '@ark-ui/react/field'
import { Icon, Tooltip } from '@/components/base'
import { cn } from '@/utils/cn'

interface InputFieldProps {
  label: string
  description?: string
  required?: boolean
  error?: string
  readOnly?: boolean
  disabled?: boolean
  children: React.ReactNode
  className?: string
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  required,
  description,
  error,
  readOnly,
  disabled,
  children,
  className,
}) => {
  return (
    <FieldPrimitive.Root
      readOnly={readOnly}
      disabled={disabled}
      className={className}
    >
      <FieldPrimitive.Label className='mb-1.5 flex items-end gap-1 font-medium text-gray-700 transition-colors dark:text-gray-300'>
        {label}
        {required && <span className='dark:text-tertiary-400'>*</span>}
        {description && (
          <Tooltip content={description}>
            <Icon
              name='icon-[material-symbols--info-rounded]'
              className='ml-1 cursor-pointer text-gray-400 outline-none transition-colors hover:text-gray-500 dark:text-gray-600 dark:hover:text-gray-500'
            />
          </Tooltip>
        )}
      </FieldPrimitive.Label>

      <div
        className={cn(
          'flex h-10 items-center gap-1 rounded-md border border-gray-200 bg-gray-50 px-2 transition-colors hover:border-gray-300 dark:border-gray-800 dark:bg-gray-850 dark:hover:border-gray-700',
          {
            'focus-within:border-primary-600 hover:focus-within:border-primary-600 dark:focus-within:border-primary-600 dark:hover:focus-within:border-primary-600':
              !error,
            'border-tertiary-400 focus-within:border-tertiary-400 hover:border-tertiary-400 dark:border-tertiary-400 dark:focus-within:border-tertiary-400 dark:hover:border-tertiary-400':
              error,
            'pointer-events-none': readOnly,
            'pointer-events-none opacity-50': disabled,
          },
        )}
      >
        {children}
      </div>

      {error && <p className='mt-1.5 text-xs text-tertiary-400'>{error}</p>}
    </FieldPrimitive.Root>
  )
}

export default InputField
