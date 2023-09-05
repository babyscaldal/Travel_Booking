import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Rating,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

export interface IRatingCheckBoxField {
  name: string;
  label?: string;
}

export interface IOption {
  label: string;
  value: string;
}

const options = [
  {
    label: "",
    value: "1",
  },
  {
    label: "",
    value: "2",
  },
  {
    label: "",
    value: "3",
  },
  {
    label: "",
    value: "4",
  },
  {
    label: "",
    value: "5",
  },
];

export const RatingCheckBoxField = ({ name, label }: IRatingCheckBoxField) => {
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
        {options.map((option: IOption, index) => {
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
              <Rating
                name="read-only"
                readOnly
                defaultValue={index + 1}
                max={index + 1}
                value={index + 1}
              />
            </Box>
          );
        })}
      </Box>
    </FormControl>
  );
};
