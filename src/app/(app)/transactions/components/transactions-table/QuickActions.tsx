import { IconButton } from '@/components/base'

const QuickActions = () => {
  return (
    <div className='flex items-center'>
      <IconButton
        size='xs'
        variant='tertiary'
        icon='icon-[material-symbols--edit-outline-rounded]'
        className='rounded-md text-gray-400 hover:bg-gray-200 hover:text-gray-500 dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-gray-500'
      />
      <IconButton
        size='xs'
        variant='tertiary'
        icon='icon-[material-symbols--delete-outline-rounded]'
        className='rounded-md text-gray-400 hover:bg-gray-200 hover:text-tertiary-400 dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-tertiary-400'
      />
    </div>
  )
}

export default QuickActions
