import { Controller, useFormContext } from "react-hook-form";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import {
  Autocomplete,
  TextField,
  InputAdornment,
  FormControl,
  Alert,
} from "@mui/material";
import { ICity } from "../HotelBookFormLayout";

const cities: ICity[] = [
  { id: 1, name: "New York", country: "United States", population: 8623000 },
  { id: 2, name: "London", country: "United Kingdom", population: 8908081 },
  { id: 3, name: "Paris", country: "France", population: 2140526 },
  { id: 4, name: "Tokyo", country: "Japan", population: 13929286 },
];

export default function CitySearchField() {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <FormControl fullWidth>
      <Controller
        rules={{ required: true }}
        name="city"
        control={control}
        render={({ field: { onChange, value } }) => (
          <>
            <Autocomplete
              autoHighlight
              autoComplete
              // value={
              //   value ? cities.find((city) => city.id === value.id) ?? null : null
              // }
              value={value}
              options={cities}
              getOptionLabel={(city: ICity) => city.name}
              onChange={(_, city: ICity | null) => onChange(city)}
              isOptionEqualToValue={(option, value) => option.id === value.id}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={"Thành phố, địa điểm:"}
                  variant="outlined"
                  InputProps={{
                    ...params.InputProps,
                    type: "search",
                    endAdornment: (
                      <InputAdornment position="start">
                        <LocationOnRoundedIcon sx={{ color: "primary.main" }} />
                      </InputAdornment>
                    ),
                  }}
                  error={!!errors.city}
                  size="small"
                />
              )}
            />
            {errors?.city && <Alert severity="error">City is required</Alert>}
          </>
        )}
      />
    </FormControl>
  );
}
