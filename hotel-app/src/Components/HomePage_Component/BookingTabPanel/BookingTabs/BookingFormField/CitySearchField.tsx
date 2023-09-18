import { Controller, useFormContext } from "react-hook-form";
import { Autocomplete, TextField, FormControl, Alert } from "@mui/material";
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
              autoSelect
              autoHighlight
              autoComplete
              value={value}
              options={cities}
              getOptionLabel={(city: IProvince) => city.name}
              onChange={(_, city: IProvince | null) => onChange(city)}
              isOptionEqualToValue={(city, value) => city.id === value.id}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={"Thành phố, địa điểm:"}
                  variant="outlined"
                  error={!!errors.city}
                  size="small"
                  autoComplete="off"
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
