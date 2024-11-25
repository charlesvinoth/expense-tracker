import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Icon } from '@/components/base'
import useAppLayoutStore from '@/layouts/app/store/useAppLayoutStore'
import { cn } from '@/utils/cn'

interface MenuItemProps {
  icon: string
  label: string
  route: string
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, route }) => {
  const pathname = usePathname()
  const isActive = pathname === route

  const { isDrawerOpen, isDrawerCollapsed } = useAppLayoutStore()
  const showLabel = !isDrawerCollapsed || isDrawerOpen

  return (
    <li className='group'>
      <Link
        href={route}
        className={cn(
          'flex items-center gap-2 rounded-md p-2 outline-none hover:bg-gray-200 hover:transition-colors focus-visible:outline-primary-600 dark:hover:bg-gray-800 dark:focus-visible:outline-primary-400',
          {
            'bg-primary-600/[0.075] dark:bg-secondary-300/[0.075]': isActive,
          },
        )}
      >
        <Icon
          name={icon}
          className={cn('transition-colors', {
            'text-primary-600 dark:text-secondary-300': isActive,
            'text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-400':
              !isActive,
          })}
        />

        {showLabel && (
          <span
            className={cn('whitespace-nowrap font-medium transition-colors', {
              'text-primary-650 dark:text-primary-350': isActive,
              'text-gray-600 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300':
                !isActive,
            })}
          >
            {label}
          </span>
        )}
      </Link>
    </li>
  )
}

export default MenuItem
