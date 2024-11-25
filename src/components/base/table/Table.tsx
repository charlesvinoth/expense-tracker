import { ScrollArea } from '@/components/base'
import { cn } from '@/utils/cn'

const Table: React.FC<React.HTMLAttributes<HTMLTableElement>> = ({
  className,
  ...props
}) => {
  return (
    <ScrollArea orientation='horizontal' className='w-full pb-2'>
      <div
        className={cn(
          'rounded-md border border-gray-200 dark:border-gray-800',
          className,
        )}
      >
        <table className='w-full text-nowrap' {...props} />
      </div>
    </ScrollArea>
  )
}

export default Table
