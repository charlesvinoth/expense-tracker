import { cn } from '@/utils/cn'

const Td: React.FC<React.ThHTMLAttributes<HTMLTableCellElement>> = ({
  className,
  ...props
}) => {
  return (
    <td
      {...props}
      className={cn(
        'px-6 py-3 text-left text-gray-700 dark:text-gray-300',
        className,
      )}
    />
  )
}

export default Td
