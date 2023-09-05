import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

export interface IRadioField {
  name: string;
  label?: string;
}

const radioOptions = [
  { label: "Giá cao nhất", value: "1" },
  { label: "Giá thấp nhất", value: "2" },
  { label: "Điểm đánh giá", value: "3" },
];

export const RadioField = ({ name, label = "" }: IRadioField) => {
  const { control } = useFormContext();

  const generateRadioOptions = () => {
    return radioOptions.map((singleOption) => (
      <FormControlLabel
        key={singleOption.value}
        value={singleOption.value}
        label={singleOption.label}
        control={<Radio />}
      />
    ));
  };
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <RadioGroup
            aria-labelledby="demo-row-radio-buttons-group-label"
            value={value}
            onChange={onChange}
          >
            {generateRadioOptions()}
          </RadioGroup>
        )}
      />
    </FormControl>
  );
};
