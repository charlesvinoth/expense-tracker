import Drawer from './components/drawer/Drawer'
import Header from './components/header/Header'

interface AppLayoutProps {
  children: React.ReactNode
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className='flex'>
      <Drawer />

      <main className='flex-1 bg-gray-50 dark:bg-gray-950'>
        <Header />
        <div className='container mx-auto'>{children}</div>
      </main>
    </div>
  )
}

export default AppLayout
