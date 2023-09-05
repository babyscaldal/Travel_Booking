import { FormControl } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Controller, useFormContext } from "react-hook-form";

export interface IInputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  type?: string;
  title?: string;
}

export default function InputField({ name, type, label }: IInputFieldProps) {
  const { control } = useFormContext();

  return (
    <FormControl fullWidth>
      <Controller
        name={name}
        control={control}
        render={({ field: { onBlur, onChange, value } }) => {
          return (
            <TextField
              label={label}
              type={type}
              onChange={onChange}
              value={value}
              onBlur={onBlur}
              variant="outlined"
              size="small"
            />
          );
        }}
      />
    </FormControl>
  );
}
