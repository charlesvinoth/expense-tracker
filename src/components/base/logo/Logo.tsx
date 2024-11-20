import LogoMark from './LogoMark'

const Logo = () => {
  return (
    <div className='flex items-end gap-1.5'>
      <LogoMark className='size-8 shrink-0' />
      <div className='text-xl font-bold'>Logo</div>
    </div>
  )
}

export default Logo
