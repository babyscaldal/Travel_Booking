import TextField from "@mui/material/TextField";
import { FormControl, Stack, Typography } from "@mui/material";
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

export default function InputField({
  name,
  title,
  type,
  placeholder,
}: IInputFieldProps) {
  const { control } = useFormContext();

  return (
    <FormControl fullWidth>
      <Stack spacing="4px">
        <Typography sx={{ fontWeight: "bold" }}>{title}</Typography>
        <Controller
          name={name}
          control={control}
          render={({
            field: { value, onBlur, onChange },
            fieldState: { error },
          }) => (
            <TextField
              type={type}
              placeholder={placeholder}
              onChange={onChange}
              value={value}
              helperText={error ? error?.message : null}
              error={!!error}
              onBlur={onBlur}
              variant="outlined"
              size="small"
            />
          )}
        />
      </Stack>
    </FormControl>
  );
}
