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
  { label: "None", value: "1" },
  { label: "Astra Zenecca", value: "2" },
  { label: "Pfizer", value: "3" },
  { label: "Moderna", value: "4" },
  { label: "Sinopharm", value: "5" },
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
            row
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
