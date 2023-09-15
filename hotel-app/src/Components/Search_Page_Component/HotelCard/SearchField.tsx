import { Controller, useFormContext } from "react-hook-form";
import {
  Autocomplete,
  TextField,
  Alert,
  Button,
  FormControl,
  Box,
  IconButton,
  Grid,
} from "@mui/material";

import { useSelector } from "react-redux";
import { RootState } from "../../../stores.ts/stores";
import { IProvince } from "../../../types/provinceType";
import AddIcon from "@mui/icons-material/AddCircle";
import RemoveIcon from "@mui/icons-material/RemoveCircle";

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
      <Grid container spacing={2} justifyContent={"space-around"}>
        <Grid item xs={12} md={4}>
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
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            display={"flex"}
            justifyContent={"start"}
            alignItems={"center"}
            gap={"4px"}
          >
            <IconButton
              type="button"
              color="primary"
              aria-label="delete"
              onClick={() => {
                onRemoveRoom();
              }}
            >
              <RemoveIcon sx={{ fontSize: "24px" }} />
            </IconButton>

            <Controller
              name="bookingNums"
              control={control}
              render={({
                field: { value, onBlur, onChange },
                fieldState: { error },
              }) => (
                <TextField
                  autoFocus
                  type="text"
                  onChange={onChange}
                  value={value}
                  helperText={error ? error?.message : null}
                  error={!!error}
                  onBlur={onBlur}
                  variant="outlined"
                  size="small"
                  label="Số phòng"
                  fullWidth
                />
              )}
            />

            <IconButton
              type="button"
              color="primary"
              aria-label="delete"
              onClick={() => {
                onAddRoom();
              }}
            >
              <AddIcon sx={{ fontSize: "24px" }} />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{ color: "background.paper" }}
          >
            Tìm kiếm
          </Button>
        </Grid>
      </Grid>
      {errors?.city && <Alert severity="error">City is required</Alert>}
    </>
  );
}
