import { cn } from '@/utils/cn'

const Tr: React.FC<React.HTMLAttributes<HTMLTableRowElement>> = ({
  className,
  ...props
}) => {
  return (
    <tr
      {...props}
      className={cn(
        'border-b border-gray-200 hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-900',
        className,
      )}
    />
  )
}

export default Tr
