'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import logout from '@/actions/auth/logout'
import avatarImg from '@/assets/avatar.png'
import { Menu, MenuItem, MenuSeparator } from '@/components/base'

const User = () => {
  const router = useRouter()

  const handleSelect = (menu: string) => {
    if (menu === 'logout') {
      logout()
      return
    }

    router.push(menu)
  }

  const trigger = (
    <Image
      src={avatarImg}
      alt='user avatar'
      width={36}
      height={36}
      tabIndex={0}
      className='inline-block size-9 cursor-pointer rounded-full outline-none focus-visible:ring-2 focus-visible:ring-primary-600 dark:focus-visible:ring-primary-400'
    />
  )

  return (
    <Menu trigger={trigger} onSelect={handleSelect}>
      <div className='flex items-center gap-3 p-2'>
        <Image
          src={avatarImg}
          alt='user avatar'
          width={40}
          height={40}
          className='inline-block size-10 rounded-full'
        />

        <div>
          <p className='font-semibold'>Charles Vinoth</p>
          <p className='text-xs leading-5 text-gray-600 dark:text-gray-400'>
            charles@gmail.com
          </p>
        </div>
      </div>

      <MenuSeparator />

      <MenuItem
        value='settings'
        label='Profile'
        icon='icon-[material-symbols--person-outline]'
      />
      <MenuItem
        value='privacy-policy'
        label='Privacy Policy'
        icon='icon-[material-symbols--shield-outline-rounded]'
      />
      <MenuItem
        color='tertiary'
        value='logout'
        label='Log out'
        icon='icon-[material-symbols--logout-rounded]'
      />
    </Menu>
  )
}

export default User
