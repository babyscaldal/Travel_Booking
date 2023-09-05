import { FormControl } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";

interface IDateRangePickerField {
  name: string;
}

export default function DateRangePickerField({ name }: IDateRangePickerField) {
  const { control } = useFormContext();

  return (
    <FormControl fullWidth>
      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange } }) => {
          // console.log(value);
          return (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateRangePicker
                format="LL"
                disablePast
                value={value}
                onChange={onChange}
                localeText={{
                  start: "Check In",
                  end: "Check Out",
                }}
                slotProps={{
                  fieldSeparator: { children: "To" },
                  textField: {
                    size: "small",
                    variant: "outlined",
                    InputProps: {
                      endAdornment: (
                        <CalendarMonthRoundedIcon
                          sx={{ color: "primary.main" }}
                        />
                      ),
                    },
                  },
                }}
              />
            </LocalizationProvider>
          );
        }}
      />
    </FormControl>
  );
}
