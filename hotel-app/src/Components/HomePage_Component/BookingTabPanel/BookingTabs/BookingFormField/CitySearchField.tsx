import { Controller, useFormContext } from "react-hook-form";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import {
  Autocomplete,
  TextField,
  InputAdornment,
  FormControl,
  Alert,
} from "@mui/material";
import { IProvince } from "../../../../../types/provinceType";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../stores.ts/stores";

export default function CitySearchField() {
  const cities: IProvince[] = useSelector(
    (state: RootState) => state.provincesReducer.listProvinces
  );

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
              getOptionLabel={(city: IProvince) => city.name}
              onChange={(_, city: IProvince | null) => onChange(city)}
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
