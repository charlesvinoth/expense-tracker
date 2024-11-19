import { Field as FieldPrimitive } from '@ark-ui/react/field'
import InputField from './InputField'

interface InputTextProps {
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

const InputText: React.FC<InputTextProps> = ({
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
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className='h-full w-full bg-transparent px-1 outline-none placeholder:text-gray-500'
        onChange={onChange}
      />
    </InputField>
  )
}

export default InputText
