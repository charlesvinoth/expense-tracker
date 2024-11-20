import logout from '@/actions/auth/logout'
import { Icon } from '@/components/base'
import useAppLayoutStore from '@/layouts/app/store/useAppLayoutStore'

const Logout = () => {
  const { isDrawerCollapsed } = useAppLayoutStore()

  return (
    <ul className='mb-4 px-3.5'>
      <li
        className='flex cursor-pointer items-center gap-2 rounded-md p-2 text-tertiary-400 outline-none hover:bg-gray-150 hover:transition-colors focus-visible:outline-primary-600 dark:hover:bg-gray-850 dark:focus-visible:outline-primary-400'
        onClick={logout}
      >
        <Icon name='icon-[material-symbols--logout-rounded]' />

        {!isDrawerCollapsed && (
          <span className='whitespace-nowrap font-medium'>Log out</span>
        )}
      </li>
    </ul>
  )
}

export default Logout
