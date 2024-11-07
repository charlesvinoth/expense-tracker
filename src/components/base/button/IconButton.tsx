import { cn } from '@/utils/cn'
import { Icon } from '..'
import getButtonClasses from './styles'
import { ButtonColor, ButtonSize, ButtonVariant } from './types'

interface IconButtonProps {
  color?: ButtonColor
  icon: string
  iconClass?: string
  disabled?: boolean
  loading?: boolean
  size?: ButtonSize
  variant?: ButtonVariant
  className?: string
  onClick?: (e: React.MouseEvent) => void
}

const IconButton: React.FC<IconButtonProps> = ({
  color = 'primary',
  icon,
  iconClass,
  disabled,
  loading,
  size = 'md',
  variant = 'primary',
  className,
  onClick,
}) => {
  const buttonClassName = cn(
    getButtonClasses(variant, color),
    {
      'size-8': size === 'xs',
      'size-9': size === 'sm',
      'size-10': size === 'md',
      'size-11': size === 'lg',
    },
    'rounded-full',
    className,
  )

  return (
    <button
      disabled={disabled || loading}
      className={buttonClassName}
      onClick={onClick}
    >
      {loading ? (
        <Icon name='icon-[gg--spinner]' className='animate-spin' />
      ) : (
        <Icon name={icon} className={iconClass} />
      )}
    </button>
  )
}

export default IconButton
