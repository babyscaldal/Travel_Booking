import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { handleFilterTypeAccommodation } from "../../../actions/sortHotel.actions";

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
    value: "hotel",
  },
  {
    label: "Motel",
    value: "motel",
  },
  {
    label: "Resort",
    value: "resort",
  },
];

export const TypeCheckBoxField = ({ name, label }: ITypeCheckBoxField) => {
  const { control, setValue } = useFormContext();

  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  // get type accommodation
  const accommodationValue: string[] = useSelector(
    (state: any) => state.sortHotel.filterTypeAccommodation
  );

  // START: handle filter type accommodation
  const dispatch = useDispatch();

  const handleSelect = (value: string) => {
    const isPresent = selectedItems.indexOf(value);
    if (isPresent !== -1) {
      const remaining = selectedItems.filter((item: string) => item !== value);
      setSelectedItems(remaining);
    } else {
      setSelectedItems((prevItems: string[]) => [...prevItems, value]);
    }
  };

  useEffect(() => {
    console.log("start handleSelect: ", selectedItems);
    dispatch(handleFilterTypeAccommodation(selectedItems));
  }, [selectedItems]);

  // END: handle filter type accommodation

  useEffect(() => {
    setSelectedItems(accommodationValue);
  }, [accommodationValue]);

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
                          checked={selectedItems.includes(option.value)}
                          onChange={() => handleSelect(option.value)}
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
