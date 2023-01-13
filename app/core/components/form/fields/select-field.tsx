import { Controller, useForm } from "react-hook-form"

interface SelectFieldProps {
  name: string;
  label: string;
  options: { value: number; label: string }[];
}

export const SelectField: React.FC<SelectFieldProps> = ({ name, label, options }) => {
  const {control} = useForm()

  return (
    <Controller
      control={control}
      name="test"
      render={({}) => (
        <select name={name}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )}
    />
  )
};


