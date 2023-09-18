import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

export interface ICheckBoxField {
  name: string;
  label?: string;
}

export interface IOption {
  label: string;
  value: string;
}

const options = [
  {
    label: "Fiber",
    value: "1",
  },
  {
    label: "Fever",
    value: "2",
  },
  {
    label: "Sore throat",
    value: "3",
  },
  {
    label: "Difficulty of breathing",
    value: "4",
  },
];

export const CheckBoxField = ({ name, label }: ICheckBoxField) => {
  const { control, setValue } = useFormContext();

  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const handleSelect = (value: number) => {
    const isPresent = selectedItems.indexOf(value);
    if (isPresent !== -1) {
      const remaining = selectedItems.filter((item: number) => item !== value);
      setSelectedItems(remaining);
    } else {
      setSelectedItems((prevItems: number[]) => [...prevItems, value]);
    }
  };

  useEffect(() => {
    setValue(name, selectedItems);
  }, [name, selectedItems, setValue]);

  return (
    <FormControl size={"small"} variant={"outlined"}>
      <FormLabel component="legend">{label}</FormLabel>
      <Box>
        {options.map((option: IOption) => {
          return (
            <FormControlLabel
              control={
                <Controller
                  name={name}
                  control={control}
                  render={() => {
                    return (
                      <Checkbox
                        checked={selectedItems.includes(Number(option.value))}
                        onChange={() => handleSelect(Number(option.value))}
                      />
                    );
                  }}
                />
              }
              label={option.label}
              key={option.value}
            />
          );
        })}
      </Box>
    </FormControl>
  );
};
