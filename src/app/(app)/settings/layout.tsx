import LayoutTabs from './components/LayoutTabs'

interface SettingsLayoutProps {
  children: React.ReactNode
}

const SettingsLayout: React.FC<SettingsLayoutProps> = ({ children }) => {
  return (
    <>
      <div className='space-y-6 p-6'>
        <LayoutTabs />
        {children}
      </div>
    </>
  )
}

export default SettingsLayout
