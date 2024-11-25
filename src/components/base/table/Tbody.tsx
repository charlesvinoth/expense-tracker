import { cn } from '@/utils/cn'

const Tbody: React.FC<React.HTMLAttributes<HTMLTableSectionElement>> = ({
  className,
  ...props
}) => {
  return (
    <tbody {...props} className={cn('[&_tr:last-child]:border-0', className)} />
  )
}

export default Tbody
