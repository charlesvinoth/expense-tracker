'use client'

import { Checkbox } from '@ark-ui/react/checkbox'
import { Icon } from '@/components/base'
import { cn } from '@/utils/cn'

interface InputCheckboxProps {
  name: string
  label: string
  checked?: boolean
  defaultChecked?: boolean
  className?: string
  onCheckedChange?: (checked: boolean) => void
}

const InputCheckbox: React.FC<InputCheckboxProps> = ({
  name,
  label,
  checked,
  defaultChecked,
  className,
  onCheckedChange,
}) => {
  const handleCheckedChange = (details: { checked: boolean }) => {
    const checked = details.checked
    onCheckedChange?.(checked)
  }

  return (
    <Checkbox.Root
      name={name}
      checked={checked}
      defaultChecked={defaultChecked}
      className={cn('flex items-center gap-2', className)}
      onCheckedChange={handleCheckedChange}
    >
      <Checkbox.Control>
        <Checkbox.Indicator className='group flex items-center justify-center'>
          <Icon
            name='icon-[material-symbols--check-box-outline-blank]'
            className='text-gray-300 group-data-[state=checked]:hidden dark:text-gray-700'
          />
          <Icon
            name='icon-[material-symbols--check-box-rounded]'
            className='text-primary-600 group-data-[state=unchecked]:hidden'
          />
        </Checkbox.Indicator>
      </Checkbox.Control>
      <Checkbox.Label className='font-medium text-gray-700 dark:text-gray-300'>
        {label}
      </Checkbox.Label>
      <Checkbox.HiddenInput />
    </Checkbox.Root>
  )
}

export default InputCheckbox
