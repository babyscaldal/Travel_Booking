import { Controller, useForm } from "react-hook-form";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import {
  Autocomplete,
  TextField,
  InputAdornment,
  FormControl,
  Alert,
  Button,
  Box,
  Grid,
} from "@mui/material";
import { ICity } from "../../HomePage_Component/BookingTabPanel/BookingTabs/HotelBookFormLayout";

const cities: ICity[] = [
  { id: 1, name: "New York", country: "United States", population: 8623000 },
  { id: 2, name: "London", country: "United Kingdom", population: 8908081 },
  { id: 3, name: "Paris", country: "France", population: 2140526 },
  { id: 4, name: "Tokyo", country: "Japan", population: 13929286 },
];

interface SearchValue {
  city: ICity;
}

export default function SearchField() {
  const form = useForm<SearchValue>({
    defaultValues: {
      city: {
        id: 1,
        name: "New York",
        country: "United States",
        population: 8623000,
      },
    },
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = form;
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: "flex", gap: "5px", alignItems: "stretch" }}
    >
      <FormControl fullWidth>
        <Controller
          rules={{ required: true }}
          name="city"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Autocomplete
              autoHighlight
              autoComplete
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
                  }}
                  error={!!errors.city}
                  size="small"
                />
              )}
            />
          )}
        />
      </FormControl>
      <Button type="submit" variant="contained" sx={{ color: "primary.main" }}>
        🔍
      </Button>
      {errors?.city && <Alert severity="error">City is required</Alert>}
    </form>
  );
}
