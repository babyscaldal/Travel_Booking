import { Controller, useFormContext } from "react-hook-form";
import { Autocomplete, TextField, Alert, Button, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../stores.ts/stores";
import { IProvince } from "../../../types/provinceType";
import InputField from "../../HomePage_Component/BookingTabPanel/BookingTabs/BookingFormField/InputField";

interface ISearchField {
  onAdd: () => void;
  onRemove: () => void;
}

export default function SearchField({ onAdd, onRemove }: ISearchField) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const cities = useSelector(
    (state: RootState) => state.provincesReducer.listProvinces
  );
  return (
    <>
      <Stack spacing={2}>
        <Controller
          rules={{ required: true }}
          name="city"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Autocomplete
              autoSelect
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
                  error={!!errors.city}
                  size="small"
                  autoComplete="off"
                />
              )}
            />
          )}
        />
        <InputField
          label="Số phòng:"
          onAdd={onAdd}
          onRemove={onRemove}
          name={"bookingNums"}
        />

        <Button
          fullWidth
          type="submit"
          variant="contained"
          sx={{ color: "background.paper" }}
        >
          Tìm kiếm
        </Button>

        {errors?.city && <Alert severity="error">City is required</Alert>}
      </Stack>
    </>
  );
}
