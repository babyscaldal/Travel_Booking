import { Controller, useFormContext } from "react-hook-form";
import {
  Autocomplete,
  TextField,
  Alert,
  Button,
  FormControl,
} from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../stores.ts/stores";
import { IProvince } from "../../../types/provinceType";

export default function SearchField() {
  const cities = useSelector(
    (state: RootState) => state.provincesReducer.listProvinces
  );


  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <>
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
    </>
  );
}
