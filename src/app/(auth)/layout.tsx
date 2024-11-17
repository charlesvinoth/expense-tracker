import AuthLayout from '@/layouts/auth/AuthLayout'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <AuthLayout>{children}</AuthLayout>
}

export default Layout
