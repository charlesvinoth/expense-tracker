import Content from './components/Content'
import Drawer from './components/drawer/Drawer'
interface AppLayoutProps {
  children: React.ReactNode
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div>
      <Drawer />
      <Content>{children}</Content>
    </div>
  )
}

export default AppLayout
