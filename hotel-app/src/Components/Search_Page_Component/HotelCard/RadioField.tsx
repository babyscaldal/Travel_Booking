import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { useDispatch } from "react-redux";
import { handleSortHotel } from "../../../actions/sortHotel.actions";
import { IActionProps } from "../../../reducers/hotelList.reducer";
import { useSelector } from "react-redux";
import { IHotel } from "../../../types/hotelType";

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
  const dispatch = useDispatch();
  const initHotelList: IHotel[] = useSelector(
    (state: any) => state.sortHotel.locationHotelList
  );
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
            onChange={(e) => {
              onChange(e.target.value);
              dispatch(
                handleSortHotel(e.target.value, initHotelList) as IActionProps
              );
            }}
          >
            {generateRadioOptions()}
          </RadioGroup>
        )}
      />
    </FormControl>
  );
};
