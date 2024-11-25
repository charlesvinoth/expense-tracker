'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Tab, Tabs } from '@/components/base'

const LayoutTabs = () => {
  const [activeTab, setActiveTab] = useState('profile')
  const router = useRouter()

  const tabs = [
    {
      label: 'Profile',
      value: 'profile',
      route: '/settings',
    },
    {
      label: 'Categories',
      value: 'categories',
      route: '/settings/categories',
    },
    {
      label: 'Family',
      value: 'family',
      route: '/settings/family',
    },
  ]

  const handleValueChange = (value: string) => {
    setActiveTab(value)

    const tab = tabs.find((tab) => tab.value === value)
    if (tab) {
      router.push(tab.route)
    }
  }

  return (
    <Tabs value={activeTab} onValueChange={handleValueChange}>
      {tabs.map((tab) => (
        <Tab
          key={tab.value}
          value={tab.value}
          isActive={activeTab === tab.value}
        >
          {tab.label}
        </Tab>
      ))}
    </Tabs>
  )
}

export default LayoutTabs
