import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export interface IInputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  type?: string;
  title?: string;
  onAdd?: () => void;
  onRemove?: () => void;
}

export default function InputField({
  onAdd,
  onRemove,
  name,
  type,
  label,
}: IInputFieldProps) {
  const { control } = useFormContext();

  return (
    <FormControl fullWidth>
      <Controller
        name={name}
        control={control}
        render={({ field: { onBlur, onChange, value } }) => {
          return (
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                {label}
              </InputLabel>
              <OutlinedInput
                sx={{ textAlign: "center" }}
                className="outlined-adornment-password"
                label={label}
                onChange={onChange}
                onBlur={onBlur}
                size="small"
                value={value}
                type={type}
                startAdornment={
                  <InputAdornment position="start">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => onRemove && onRemove()}
                      edge="end"
                    >
                      <RemoveCircleIcon
                        sx={{
                          color: "primary.main",
                          textAlign: "center",
                        }}
                      />
                    </IconButton>
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => onAdd && onAdd()}
                      edge="end"
                    >
                      <AddCircleIcon sx={{ color: "primary.main" }} />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          );
        }}
      />
    </FormControl>
  );
}
