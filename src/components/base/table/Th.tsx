import { cn } from '@/utils/cn'

const Th: React.FC<React.ThHTMLAttributes<HTMLTableCellElement>> = ({
  className,
  ...props
}) => {
  return (
    <th
      {...props}
      className={cn(
        'bg-gray-50 px-6 py-3 text-left text-xs font-semibold text-gray-500 dark:bg-gray-900',
        className,
      )}
    />
  )
}

export default Th
