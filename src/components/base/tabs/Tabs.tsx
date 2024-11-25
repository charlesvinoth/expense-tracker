'use client'

import { Tabs as TabsPrimitive } from '@ark-ui/react/tabs'

interface TabsProps {
  children: React.ReactNode
  value?: string
  onValueChange?: (value: string) => void
}

const Tabs: React.FC<TabsProps> = ({ value, onValueChange, children }) => {
  const handleValueChange = (value: string) => {
    if (onValueChange) {
      onValueChange(value)
    }
  }

  return (
    <TabsPrimitive.Root
      value={value}
      onValueChange={(details) => handleValueChange(details.value)}
    >
      <TabsPrimitive.List className='relative flex items-center gap-3 border-b border-gray-100 dark:border-gray-850'>
        {children}
        <TabsPrimitive.Indicator
          className='bottom-0 h-0.5 rounded-full bg-primary-600 transition-all'
          style={{ width: 'var(--width)', left: 'var(--left)' }}
        />
      </TabsPrimitive.List>
    </TabsPrimitive.Root>
  )
}

export default Tabs
