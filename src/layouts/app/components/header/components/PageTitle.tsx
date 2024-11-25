'use client'

import { usePathname } from 'next/navigation'

const PageTitle = () => {
  const pathname = usePathname()
  const pageTitle = pathname?.split('/')[1]

  return (
    <h1 className='text-2xl font-semibold capitalize leading-9'>
      {pageTitle || 'Dashboard'}
    </h1>
  )
}

export default PageTitle
