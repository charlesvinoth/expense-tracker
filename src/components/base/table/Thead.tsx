import { cn } from '@/utils/cn'

const Thead: React.FC<React.HTMLAttributes<HTMLTableSectionElement>> = ({
  className,
  ...props
}) => {
  return (
    <thead
      {...props}
      className={cn(
        '[&_th:first-child]:rounded-t-md [&_th:last-child]:rounded-t-md',
        className,
      )}
    />
  )
}

export default Thead
