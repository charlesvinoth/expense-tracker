import { Menu as MenuPrimitive } from '@ark-ui/react/menu'
import { cn } from '@/utils/cn'

interface MenuProps {
  trigger: React.ReactNode
  children: React.ReactNode
  dense?: boolean
  triggerAsChild?: boolean
  onSelect: (menu: string) => void
}

const Menu: React.FC<MenuProps> = ({
  trigger,
  triggerAsChild = true,
  children,
  dense = false,
  onSelect,
}) => {
  return (
    <MenuPrimitive.Root loopFocus onSelect={(menu) => onSelect(menu.value)}>
      <MenuPrimitive.Trigger asChild={triggerAsChild}>
        {trigger}
      </MenuPrimitive.Trigger>

      <MenuPrimitive.Positioner>
        <MenuPrimitive.Content
          className={cn(
            'z-30 min-w-24 rounded-md bg-white p-2 shadow-sm outline-none ring-1 ring-gray-200 will-change-[opacity,transform] data-[placement=bottom-end]:animate-fadeDown data-[placement=bottom-start]:animate-fadeDown data-[placement=top-end]:animate-fadeUp data-[placement=top-start]:animate-fadeUp dark:bg-gray-900 dark:shadow-gray-800 dark:ring-gray-800',
            {
              'space-y-1': dense,
              'space-y-2': !dense,
            },
          )}
        >
          {children}
        </MenuPrimitive.Content>
      </MenuPrimitive.Positioner>
    </MenuPrimitive.Root>
  )
}

export default Menu
