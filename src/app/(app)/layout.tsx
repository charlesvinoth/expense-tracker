import AppLayout from '@/layouts/app/AppLayout'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <AppLayout>{children}</AppLayout>
}

export default Layout
