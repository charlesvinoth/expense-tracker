import DrawerToggle from './components/DrawerToggle'
import PageTitle from './components/PageTitle'
import ThemeToggle from './components/ThemeToggle'
import User from './components/User'

const Header = ({}) => {
  return (
    <header className='flex h-16 items-center justify-between px-4'>
      <div className='flex items-center gap-2 md:gap-4'>
        <DrawerToggle />
        <PageTitle />
      </div>

      <div className='flex items-center gap-2'>
        <ThemeToggle />
        <User />
      </div>
    </header>
  )
}

export default Header
