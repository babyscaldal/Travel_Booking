import { FormControl, InputLabel, Select, Typography } from "@mui/material";
import { ReactNode } from "react";
import { Controller, useFormContext } from "react-hook-form";

export interface ISelectFieldProps {
  name: string;
  children: ReactNode;
  title?: string;
  label?: string;
}

export default function SelectField({
  name,
  children,
  title,
  label,
}: ISelectFieldProps) {
  const { control } = useFormContext();

  return (
    <FormControl fullWidth>
      <Typography sx={{ fontWeight: "bold", fontSize: "14px" }}>
        {title}
      </Typography>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value, onBlur } }) => (
          <>
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
            <Select
              label={label}
              size="small"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
            >
              {children}
            </Select>
          </>
        )}
      />
    </FormControl>
  );
}
