import { Box, Button, Grid } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import dayjs, { Dayjs } from "dayjs";
import DateRangePickerField from "./BookingFormField/DateRangePickerField.tsx";
import InputField from "./BookingFormField/InputField.tsx";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CitySearchField from "./BookingFormField/CitySearchField.tsx";
import { IProvince } from "../../../../types/provinceType.ts";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../../stores.ts/stores.tsx";
import { setFormValue } from "../../../../actions/province.action.ts";
import { getAllHotelsByLocation } from "../../../../actions/getHotels.actions.ts";

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

  const selectedProvince: IProvince = useSelector(
    (state: RootState) => state.provincesReducer.selectedProvince
  );

  const form = useForm<IBookingFormValue>({
    defaultValues: {
      city: Object.keys(selectedProvince).length
        ? selectedProvince
        : {
            domain: "hanoi",
            id: 1,
            image:
              "https://ik.imagekit.io/tvlk/mchitm/imageResource/template/304/vi_VN/2023/08/25/e75b05f4-bd30-3060-9e83-1a49acbfeed0?tr=w-256",
            name: "Hà Nội",
            picture:
              "https://ik.imagekit.io/tvlk/image/imageResource/2022/12/13/1670914149934-a914657087e8c5f1a01724d92eb3f7b9.jpeg?tr=q-75,w-320",
            slogan: "Vùng đất của những bí ẩn và huyền thoại sâu thẳm.",
          },
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

  const handleAddRoom = () => {
    const currentRoomValue = watch("room");
    if (currentRoomValue < 100) {
      const newRoomValue = currentRoomValue + 1;
      setValue("room", newRoomValue);
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
    data && data.city && dispatch(setFormValue(data.city));
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
    </FormProvider>
  );
}
