import { Controller, useFormContext } from "react-hook-form";
import {
  Autocomplete,
  TextField,
  Alert,
  Button,
  FormControl,
  Box,
} from "@mui/material";

import { useSelector } from "react-redux";
import { RootState } from "../../../stores.ts/stores";
import { IProvince } from "../../../types/provinceType";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

interface ISearchField {
  onAddRoom: () => void;
  onRemoveRoom: () => void;
}

export default function SearchField({ onAddRoom, onRemoveRoom }: ISearchField) {
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
        <Box
          display={"flex"}
          justifyContent={"flex-start"}
          alignItems={"stretch"}
          gap={"4px"}
          marginTop={"20px"}
        >
          <Button
            onClick={() => {
              onRemoveRoom();
            }}
            type="button"
          >
            <RemoveCircleIcon sx={{ fontSize: "24px" }} />
          </Button>

          <Controller
            name="bookingNums"
            control={control}
            render={({
              field: { value, onBlur, onChange },
              fieldState: { error },
            }) => (
              <TextField
                type="text"
                onChange={onChange}
                value={value}
                helperText={error ? error?.message : null}
                error={!!error}
                onBlur={onBlur}
                variant="outlined"
                size="small"
                label="Số phòng"
              />
            )}
          />

          <Button
            onClick={() => {
              onAddRoom();
            }}
            type="button"
          >
            <AddCircleIcon sx={{ fontSize: "24px" }} />
          </Button>
        </Box>
      </FormControl>
      <Button
        type="submit"
        variant="contained"
        sx={{ color: "background.paper" }}
      >
        Tìm kiếm
      </Button>
      {errors?.city && <Alert severity="error">City is required</Alert>}
    </>
  );
}
