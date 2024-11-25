import { Tabs as TabsPrimitive } from '@ark-ui/react/tabs'
import { cn } from '@/utils/cn'

interface TabProps {
  value: string
  isActive: boolean
  children: React.ReactNode
}

const Tab: React.FC<TabProps> = ({ value, isActive, children }) => {
  return (
    <TabsPrimitive.Trigger
      value={value}
      className={cn('px-1 pb-3 font-semibold', {
        'text-primary-600': isActive,
        'text-gray-500': !isActive,
      })}
    >
      {children}
    </TabsPrimitive.Trigger>
  )
}

export default Tab
