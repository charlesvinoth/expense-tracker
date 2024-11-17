import { cn } from '@/utils/cn'
import { Icon } from '..'
import getButtonClasses from './styles'
import { ButtonColor, ButtonSize, ButtonVariant } from './types'

interface ButtonProps {
  color?: ButtonColor
  icon?: string
  iconClass?: string
  disabled?: boolean
  loading?: boolean
  label: string
  size?: ButtonSize
  suffixIcon?: string
  suffixIconClass?: string
  variant?: ButtonVariant
  className?: string
  type?: 'button' | 'submit'
  onClick?: (e: React.MouseEvent) => void
}

const Button: React.FC<ButtonProps> = ({
  color = 'primary',
  icon,
  iconClass,
  disabled,
  loading,
  label,
  size = 'md',
  suffixIcon,
  suffixIconClass,
  variant = 'primary',
  className,
  type = 'button',
  onClick,
}) => {
  const buttonClassName = cn(
    getButtonClasses(variant, color),
    {
      'h-8 px-2.5 py-1.5': size === 'xs',
      'h-9 px-3 py-2': size === 'sm',
      'h-10 px-3.5 py-2.5': size === 'md',
      'h-11 px-4 py-3': size === 'lg',
    },
    'whitespace-nowrap rounded-md font-medium',
    className,
  )

  return (
    <button
      disabled={disabled || loading}
      className={buttonClassName}
      type={type}
      onClick={onClick}
    >
      {loading && <Icon name='icon-[gg--spinner]' className='animate-spin' />}
      {!loading && icon && <Icon name={icon} className={iconClass} />}
      {label}
      {!loading && suffixIcon && (
        <Icon name={suffixIcon} className={suffixIconClass} />
      )}
    </button>
  )
}

export default Button
