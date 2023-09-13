import { Box, Button, Grid, MenuItem } from "@mui/material";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import dayjs, { Dayjs } from "dayjs";
import DateRangePickerField from "./BookingFormField/DateRangePickerField.tsx";
import InputField from "./BookingFormField/InputField.tsx";
import SelectField from "./BookingFormField/SelectField.tsx";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import CitySearchField from "./BookingFormField/CitySearchField.tsx";
import People from "./People.tsx";
import { IProvince } from "../../../../types/provinceType.ts";
import { getAllHotelsByLocation } from "../../../../actions/getHotels.actions.ts";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../../stores.ts/stores.tsx";

type childAge = {
  age: number;
};

export type IBookingFormValue = {
  city: IProvince | null;
  bookingDate: Dayjs | null;
  nightNumber: string;
  adult: number;
  child: number;
  room: number;
  childsAge: childAge[];
};

export default function HotelBookingFormLayout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const form = useForm<IBookingFormValue>({
    defaultValues: {
      city: null,
      bookingDate: [dayjs(), dayjs().add(1, "day")],
      adult: 1,
      child: 0,
      room: 1,
      childsAge: [] as childAge[],
    },
  });

  // Provinces
  const provinces = useSelector(
    (state: RootState) => state.provincesReducer.listProvinces
  );
  console.log("Provinces: ", provinces);

  const { control, handleSubmit, watch, setValue, reset } = form;

  const { append, fields, remove } = useFieldArray({
    name: "childsAge",
    control,
  });

  const handleAddAdult = () => {
    const currentAdultValue = watch("adult");
    if (currentAdultValue < 30) {
      const newAdultValue = currentAdultValue + 1;
      setValue("adult", newAdultValue);
    }
  };
  const handleAddChild = () => {
    const currentChildValue = watch("child");
    if (currentChildValue < 6) {
      const newChildValue = currentChildValue + 1;
      setValue("child", newChildValue);
      append({ age: 0 });
    }
  };
  const handleAddRoom = () => {
    const currentRoomValue = watch("room");
    if (currentRoomValue < 100) {
      const newRoomValue = currentRoomValue + 1;
      setValue("room", newRoomValue);
    }
  };

  const handleRemoveAdult = () => {
    const currentAdultValue = watch("adult");
    if (currentAdultValue > 1) {
      const newAdultValue = currentAdultValue - 1;
      setValue("adult", newAdultValue);
    }
  };

  const handleRemoveChild = () => {
    const currentChildValue = watch("child");
    if (currentChildValue > 0) {
      const newChildValue = currentChildValue - 1;
      setValue("child", newChildValue);
      remove(currentChildValue - 1);
    }
  };

  const handleRemoveRoom = () => {
    const currentRoomValue = watch("room");
    if (currentRoomValue > 1) {
      const newRoomValue = currentRoomValue - 1;
      setValue("room", newRoomValue);
    }
  };

  const onSubmit = (data: IBookingFormValue) => {
    console.log("data serach: ", data);
    data &&
      data.city &&
      dispatch(getAllHotelsByLocation(data.city.id, data.room));
    const domain = data.city?.domain;
    console.log("domain: ", domain);
    navigate(`/accommodation/${domain}`);
    reset();
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <Grid container spacing={3} justifyContent={"center"}>
            {/* City */}
            <Grid item xs={6}>
              <CitySearchField />
            </Grid>

            {/* Date */}
            <Grid item xs={6}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <DateRangePickerField name={"bookingDate"} />
                </Grid>
              </Grid>
            </Grid>

            {/* Rooms */}
            <Grid item xs={6}>
              <Box
                display={"flex"}
                justifyContent={"flex-start"}
                alignItems={"stretch"}
                gap={"4px"}
              >
                <Button
                  onClick={() => {
                    handleRemoveRoom();
                  }}
                  type="button"
                  variant="outlined"
                >
                  <RemoveCircleIcon sx={{ fontSize: "24px" }} />
                </Button>
                <InputField name="room" label="Số phòng" />
                <Button
                  onClick={() => {
                    handleAddRoom();
                  }}
                  type="button"
                  variant="outlined"
                >
                  <AddCircleIcon sx={{ fontSize: "24px" }} />
                </Button>
              </Box>
            </Grid>

            {/* Submit Btn */}
            <Grid item xs={6} justifyContent={"center"} alignItems={"stretch"}>
              <Button
                size="large"
                type="submit"
                variant="contained"
                sx={{ width: "100%", height: "48px" }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </form>
      <DevTool control={control} />
    </FormProvider>
  );
}
