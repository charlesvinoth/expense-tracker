import LogoMark from './LogoMark'

const Logo = () => {
  return (
    <div className='flex items-center gap-2'>
      <LogoMark className='size-8 shrink-0' />
      <div className='text-xl font-bold text-primary-600 dark:text-primary-400'>
        Logo
      </div>
    </div>
  )
}

export default Logo
