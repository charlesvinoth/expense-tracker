import { Tooltip as TooltipPrimitive } from '@ark-ui/react/tooltip'
import { cn } from '@/utils/cn'

type Placement = 'end' | 'start'
type Side = 'top' | 'right' | 'bottom' | 'left'
type Position = Side | `${Side}-${Placement}`

interface TooltipProps {
  color?: 'default' | 'primary' | 'success' | 'warning' | 'error'
  content: string
  gutter?: number
  position?: Position
  withArrow?: boolean
  children: React.ReactNode
}

const Tooltip: React.FC<TooltipProps> = ({
  color = 'default',
  content,
  gutter = 8,
  position = 'top',
  withArrow = true,
  children,
}) => {
  return (
    <TooltipPrimitive.Root
      openDelay={200}
      closeDelay={100}
      positioning={{ placement: position, gutter }}
    >
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>

      <TooltipPrimitive.Positioner>
        <TooltipPrimitive.Content
          className={cn(
            'z-50 text-balance rounded-md px-3 py-1.5 text-xs font-medium text-white dark:text-black',
            {
              'bg-gray-900 dark:bg-white': color === 'default',
              'bg-primary-600 dark:bg-primary-400': color === 'primary',
              'bg-error-600 dark:bg-error-400': color === 'error',
              'bg-success-600 dark:bg-success-400': color === 'success',
              'bg-warning-600 dark:bg-warning-400': color === 'warning',
            },
          )}
        >
          {withArrow && (
            <TooltipPrimitive.Arrow>
              <TooltipPrimitive.ArrowTip
                className={cn('!bg-current', {
                  'text-gray-900 dark:text-white': color === 'default',
                  'text-primary-600 dark:text-primary-400': color === 'primary',
                  'text-error-600 dark:text-error-400': color === 'error',
                  'text-success-600 dark:text-success-400': color === 'success',
                  'text-warning-600 dark:text-warning-400': color === 'warning',
                })}
              />
            </TooltipPrimitive.Arrow>
          )}
          {content}
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Positioner>
    </TooltipPrimitive.Root>
  )
}

export default Tooltip
