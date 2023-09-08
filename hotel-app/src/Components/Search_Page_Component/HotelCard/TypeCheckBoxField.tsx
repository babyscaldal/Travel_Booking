import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

export interface ITypeCheckBoxField {
  name: string;
  label?: string;
}

export interface IOption {
  label: string;
  value: string;
}

const options = [
  {
    label: "Hotel",
    value: "1",
  },
  {
    label: "Motel",
    value: "2",
  },
  {
    label: "Resort",
    value: "3",
  },
];

export const TypeCheckBoxField = ({ name, label }: ITypeCheckBoxField) => {
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
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"flex-start"}
              key={option.value}
            >
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
              />
            </Box>
          );
        })}
      </Box>
    </FormControl>
  );
};
