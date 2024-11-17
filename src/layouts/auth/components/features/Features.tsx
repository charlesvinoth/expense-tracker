'use client'

import { useEffect, useState } from 'react'
import React from 'react'
import { IconButton } from '@/components/base'
import { cn } from '@/utils/cn'
import Feature from './Feature'
import Illustration from './Illustration'

const features = [
  {
    title: 'Your Financial World, Simplified',
    description:
      'Effortlessly track your income, expenses, and savings. Gain control of your finances with our intuitive dashboard and powerful tools.',
  },
  {
    title: 'Take Charge of Your Money',
    description:
      'Set financial goals, create budgets, and monitor your progress. Our app empowers you to make informed financial decisions.',
  },
  {
    title: 'Your Financial Future, Secured',
    description:
      'Protect your financial future with our advanced security features. Your data is safe with us, ensuring peace of mind.',
  },
  {
    title: 'Financial Insights, at Your Fingertips',
    description:
      'Get personalized insights into your spending habits and financial health. Make data-driven decisions to improve your financial well-being.',
  },
]

const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const nextIndex = activeIndex + 1
    const lastIndex = features.length - 1
    const index = nextIndex > lastIndex ? 0 : nextIndex
    const timeout = setTimeout(() => setActiveIndex(index), 6000)
    return () => clearTimeout(timeout)
  }, [activeIndex])

  return (
    <div className='h-dvh p-4'>
      <div className='flex h-full items-center justify-center rounded-xl bg-gray-50 dark:bg-gray-950'>
        <div className='flex max-w-sm flex-col items-center justify-center px-4 md:max-w-md md:px-0 lg:max-w-lg xl:max-w-xl'>
          <div className='-ml-12'>
            <Illustration />
          </div>

          {features.map((feature, index) => (
            <React.Fragment key={index}>
              {index === activeIndex && (
                <Feature
                  title={feature.title}
                  description={feature.description}
                />
              )}
            </React.Fragment>
          ))}

          <div className='mt-10 flex items-center'>
            {features.map((_, index) => (
              <IconButton
                key={index}
                variant='tertiary'
                size='xs'
                icon={
                  activeIndex === index
                    ? 'icon-[material-symbols--remove-rounded]'
                    : 'icon-[mdi--dot]'
                }
                iconClass='size-7'
                className={cn('text-gray-300 dark:text-gray-700', {
                  'text-primary-600 dark:text-primary-600':
                    activeIndex === index,
                })}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
