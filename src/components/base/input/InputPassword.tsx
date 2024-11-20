'use client'

import { Field as FieldPrimitive } from '@ark-ui/react/field'
import { useState } from 'react'
import { IconButton } from '@/components/base'
import InputField from './InputField'

interface InputPasswordProps {
  name: string
  label: string
  description?: string
  required?: boolean
  error?: string
  readOnly?: boolean
  disabled?: boolean
  placeholder?: string
  value?: string
  defaultValue?: string
  className?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputPassword: React.FC<InputPasswordProps> = ({
  name,
  label,
  required,
  description,
  error,
  readOnly,
  disabled,
  placeholder,
  value,
  defaultValue,
  className,
  onChange,
}) => {
  const [showPassword, setShowPassword] = useState(false)

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowPassword(!showPassword)
  }

  return (
    <InputField
      label={label}
      required={required}
      description={description}
      error={error}
      readOnly={readOnly}
      disabled={disabled}
      className={className}
    >
      <FieldPrimitive.Input
        name={name}
        type={showPassword ? 'text' : 'password'}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className='h-full w-full bg-transparent px-1 outline-none placeholder:text-gray-500'
        onChange={onChange}
      />

      <IconButton
        variant='tertiary'
        size='xs'
        icon={
          showPassword
            ? 'icon-[material-symbols--visibility-off-outline-rounded]'
            : 'icon-[material-symbols--visibility-outline-rounded]'
        }
        onClick={handleClick}
      />
    </InputField>
  )
}

export default InputPassword
