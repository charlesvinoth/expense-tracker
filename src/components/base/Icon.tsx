import { cn } from '@/utils/cn'

interface IconProps {
  name: string
  className?: string
  onClick?: (e: React.MouseEvent) => void
}

const Icon = ({ name, className, onClick }: IconProps) => {
  return (
    <i className={cn('size-5 shrink-0', name, className)} onClick={onClick} />
  )
}

export default Icon
