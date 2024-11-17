import { Menu as MenuPrimitive } from '@ark-ui/react/menu'
import { Icon } from '@/components/base'
import { cn } from '@/utils/cn'

interface MenuItemProps {
  value: string
  label: string
  icon?: string
  color?: 'default' | 'tertiary'
}

const MenuItem: React.FC<MenuItemProps> = ({
  value,
  label,
  icon,
  color = 'default',
}) => {
  return (
    <MenuPrimitive.Item
      value={value}
      className='group flex cursor-pointer items-center gap-2 rounded-md p-2 font-medium outline-none transition-colors hover:bg-gray-100 focus-visible:outline-primary-600 data-[highlighted]:bg-gray-100 dark:hover:bg-gray-800 dark:focus-visible:outline-primary-400 dark:data-[highlighted]:bg-gray-800'
    >
      {icon && (
        <Icon
          name={icon}
          className={cn({
            'text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-400':
              color === 'default',
            'text-tertiary-400': color === 'tertiary',
          })}
        />
      )}

      <span
        className={cn('flex-1', {
          'text-gray-700 group-hover:text-gray-800 dark:text-gray-300 dark:group-hover:text-gray-200':
            color === 'default',
          'text-tertiary-400': color === 'tertiary',
        })}
      >
        {label}
      </span>
    </MenuPrimitive.Item>
  )
}

export default MenuItem
