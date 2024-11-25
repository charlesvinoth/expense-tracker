import { cn } from '@/utils/cn'

interface ChipProps {
  label: string
  color?: 'primary' | 'secondary' | 'tertiary'
}

const Chip: React.FC<ChipProps> = ({ label, color = 'primary' }) => {
  return (
    <span
      className={cn('rounded-md px-2 py-1 text-xs font-semibold', {
        'bg-primary-600/10 text-primary-600': color === 'primary',
        'bg-secondary-300/10 text-secondary-400': color === 'secondary',
        'bg-tertiary-400/10 text-tertiary-400': color === 'tertiary',
      })}
    >
      {label}
    </span>
  )
}

export default Chip
