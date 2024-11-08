import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Icon } from '@/components/base'
import useAppLayoutStore from '@/layouts/app/store/useAppLayoutStore'
import { cn } from '@/utils/cn'

interface MenuItemProps {
  icon: string
  activeIcon: string
  label: string
  route: string
}

const MenuItem: React.FC<MenuItemProps> = ({
  icon,
  activeIcon,
  label,
  route,
}) => {
  const pathname = usePathname()
  const isActive = pathname === route

  const { isDrawerOpen, isDrawerCollapsed } = useAppLayoutStore()
  const showLabel = !isDrawerCollapsed || isDrawerOpen

  return (
    <li className='group'>
      <Link
        href={route}
        className={cn(
          'flex items-center gap-2 rounded-md p-2 outline-none hover:bg-gray-100 hover:transition-colors focus-visible:outline-primary-600 dark:hover:bg-gray-800 dark:focus-visible:outline-primary-400',
          {
            'bg-gray-100 dark:bg-gray-800': isActive,
          },
        )}
      >
        <Icon
          name={isActive ? activeIcon : icon}
          className={cn('transition-colors', {
            'text-primary-600 dark:text-primary-400': isActive,
            'text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-400':
              !isActive,
          })}
        />

        {showLabel && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={cn('whitespace-nowrap font-medium transition-colors', {
              'text-primary-650 dark:text-primary-350': isActive,
              'text-gray-600 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300':
                !isActive,
            })}
          >
            {label}
          </motion.span>
        )}
      </Link>
    </li>
  )
}

export default MenuItem
