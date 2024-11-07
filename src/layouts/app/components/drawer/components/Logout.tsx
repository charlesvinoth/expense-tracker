import Link from 'next/link'
import { Icon } from '@/components/base'
import useAppLayoutStore from '@/layouts/app/store/useAppLayoutStore'

const Logout = () => {
  const { isDrawerCollapsed } = useAppLayoutStore()

  return (
    <ul className='mb-4 px-3.5'>
      <li className='group'>
        <Link
          href='/login'
          className='flex items-center gap-2 rounded-md p-2 text-error-600 outline-none hover:bg-gray-150 hover:transition-colors focus-visible:outline-primary-600 dark:text-error-400 dark:hover:bg-gray-850 dark:focus-visible:outline-primary-400'
        >
          <Icon name='icon-[material-symbols--logout-rounded]' />

          {!isDrawerCollapsed && (
            <div className='whitespace-nowrap font-medium'>Log out</div>
          )}
        </Link>
      </li>
    </ul>
  )
}

export default Logout
