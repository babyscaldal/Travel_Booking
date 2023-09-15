import { Box, Button, Grid, Stack } from "@mui/material";
import { FormProvider, useForm, useWatch } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import dayjs, { Dayjs } from "dayjs";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import DateRangePickerField from "../HomePage_Component/BookingTabPanel/BookingTabs/BookingFormField/DateRangePickerField";
import People from "../HomePage_Component/BookingTabPanel/BookingTabs/People";
import InputField from "../HomePage_Component/BookingTabPanel/BookingTabs/BookingFormField/InputField";
import { Divider, Typography } from "@mui/joy";
import { useSelector } from "react-redux";
import { RootState } from "../../stores.ts/stores";
import { useDispatch } from "react-redux";
import { handleOrderHotel } from "../../actions/getHotels.actions";
import BookingSuccessAlert from "./BookingSuccessAlert";
import { UserState } from "../../reducers/login.reducer";
import LoginForm from "../NavBar-Component/Login/LoginForm";

export type IBookingFormValue = {
  bookingDate: Dayjs[];
  nightNumber: string;
  adult: number;
  child: number;
  baby: number;
  room: number;
};

export default function BookForm() {
  const selectedHotel = useSelector(
    (state: RootState) => state.sortHotel.selectedHotel
  );

  const form = useForm<IBookingFormValue>({
    defaultValues: {
      bookingDate: [dayjs(), dayjs().add(1, "day")],
      adult: 1,
      child: 0,
      baby: 0,
      room: 1,
    },
  });

  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { isSubmitting },
  } = form;

  const handleAddAdult = () => {
    const currentAdultValue = watch("adult");
    if (currentAdultValue < 30) {
      const newAdultValue = currentAdultValue + 1;
      setValue("adult", newAdultValue);
    }
  };

  const handleAddChild = () => {
    const currentChildValue = watch("child");
    if (currentChildValue < 100) {
      const newChildValue = currentChildValue + 1;
      setValue("child", newChildValue);
    }
  };

  const handleAddBaby = () => {
    const currentBabyValue = watch("baby");
    if (currentBabyValue < 100) {
      const newBabyValue = currentBabyValue + 1;
      setValue("baby", newBabyValue);
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
    }
  };

  const handleRemoveBaby = () => {
    const currentBabyValue = watch("baby");
    if (currentBabyValue > 0) {
      const newBabyValue = currentBabyValue - 1;
      setValue("baby", newBabyValue);
    }
  };

  const handleRemoveRoom = () => {
    const currentRoomValue = watch("room");
    if (currentRoomValue > 1) {
      const newRoomValue = currentRoomValue - 1;
      setValue("room", newRoomValue);
    }
  };

  const watchedValues = useWatch({
    control,
    name: ["room", "adult", "child", "baby", "bookingDate"],
  });

  console.log(
    watchedValues[0],
    watchedValues[1],
    watchedValues[2],
    watchedValues[3],
    watchedValues[4]
  );

  const dateValue: any = watchedValues[4];

  const start1 = dayjs(dateValue[0]).format("YYYY-MM-DD");
  const end1 = dayjs(dateValue[1]).format("YYYY-MM-DD");

  const dayConvert: number = 1000 * 3600 * 24;
  const night =
    start1 !== end1
      ? Math.floor((Date.parse(end1) - Date.parse(start1)) / dayConvert)
      : 1;

  // console.log("Type number day: ", numberOfDate);

  console.log("start: ", start1);
  console.log("end: ", end1);

  const total = watchedValues[0] * selectedHotel.price * night;

  const dispatch = useDispatch();

  const isLogin: UserState = useSelector(
    (state: any) => state.loginReducer.isLogin
  );

  const onSubmit = (data: IBookingFormValue) => {
    console.log(data);

    const bookingInfoData = {
      ...selectedHotel,
      adultQuantity: data.adult,
      childrenQuantity: Number(data.baby) + Number(data.child),
      totalPrice: total,
      checkInDate: start1,
      checkOutDate: end1,
      roomQuantity: data.room,
    };
    dispatch(handleOrderHotel(bookingInfoData));
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
        <Box>
          <Grid container spacing={2} justifyContent={"center"}>
            {/* Date */}
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <DateRangePickerField name={"bookingDate"} />
                  <span>
                    *
                    <em style={{ fontSize: "14px" }}>
                      {selectedHotel.type === "resort" &&
                        "Resort cho phép tối đa 12 người"}
                    </em>
                  </span>
                  <span>
                    <em style={{ fontSize: "14px" }}>
                      {selectedHotel.type === "hotel" &&
                        "1 phòng tối đa 4 người"}
                    </em>
                  </span>
                  <span>
                    <em style={{ fontSize: "14px" }}>
                      {selectedHotel.type === "motel" &&
                        "1 phòng tối đa 4 người"}
                    </em>
                  </span>
                </Grid>
              </Grid>
            </Grid>

            {/* Adult */}
            <Grid item xs={12}>
              <People
                adult={watchedValues[1]}
                child={watchedValues[2]}
                room={watchedValues[0]}
                baby={watchedValues[3]}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
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
                  <Grid item xs={12}>
                    <Box
                      display={"flex"}
                      justifyContent={"flex-start"}
                      alignItems={"stretch"}
                      gap={"4px"}
                    >
                      <Button
                        onClick={() => {
                          handleRemoveAdult();
                        }}
                        type="button"
                        variant="outlined"
                      >
                        <RemoveCircleIcon sx={{ fontSize: "24px" }} />
                      </Button>
                      <InputField name="adult" label="Người lớn" />
                      <Button
                        onClick={() => {
                          handleAddAdult();
                        }}
                        type="button"
                        variant="outlined"
                      >
                        <AddCircleIcon sx={{ fontSize: "24px" }} />
                      </Button>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box
                      display={"flex"}
                      justifyContent={"flex-start"}
                      alignItems={"stretch"}
                      gap={"4px"}
                    >
                      <Button
                        onClick={() => {
                          handleRemoveChild();
                        }}
                        type="button"
                        variant="outlined"
                      >
                        <RemoveCircleIcon sx={{ fontSize: "24px" }} />
                      </Button>
                      <InputField
                        name={"child"}
                        label="Trẻ em độ tuổi 2 - 12"
                      />
                      <Button
                        onClick={() => {
                          handleAddChild();
                        }}
                        type="button"
                        variant="outlined"
                      >
                        <AddCircleIcon sx={{ fontSize: "24px" }} />
                      </Button>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box
                      display={"flex"}
                      justifyContent={"flex-start"}
                      alignItems={"stretch"}
                      gap={"4px"}
                    >
                      <Button
                        onClick={() => {
                          handleRemoveBaby();
                        }}
                        type="button"
                        variant="outlined"
                      >
                        <RemoveCircleIcon sx={{ fontSize: "24px" }} />
                      </Button>
                      <InputField name={"baby"} label="Trẻ em độ tuổi < 2" />
                      <Button
                        onClick={() => {
                          handleAddBaby();
                        }}
                        type="button"
                        variant="outlined"
                      >
                        <AddCircleIcon sx={{ fontSize: "24px" }} />
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </People>
            </Grid>

            <Grid item xs={12} justifyContent={"center"} alignItems={"stretch"}>
              {/* <Button
                size="large"
                type="submit"
                variant="contained"
                sx={{ width: "100%", height: "40px" }}
                color="success"
              >
                Đặt phòng
              </Button> */}
              {isLogin ? (
                <BookingSuccessAlert />
              ) : (
                <LoginForm
                  color="warning"
                  type="contained"
                  material="background.paper"
                >
                  Đăng nhập để đặt phòng
                </LoginForm>
              )}
            </Grid>
            <Grid item xs={12}>
              <Divider
                sx={{
                  backgroundColor: "#000",
                  height: "2px",
                  marginBottom: "16px",
                }}
              />
              <Stack spacing={2}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography
                    sx={{
                      textAlign: "left",
                    }}
                  >
                    🏠 Số phòng đặt:
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: "left",
                    }}
                  >
                    {watchedValues[0]} phòng
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography
                    sx={{
                      textAlign: "left",
                    }}
                  >
                    💸 Giá mỗi phòng:
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: "left",
                    }}
                  >
                    ${selectedHotel.price}/đêm
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography
                    sx={{
                      textAlign: "left",
                    }}
                  >
                    🕐 Số đêm muốn đặt:
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: "left",
                    }}
                  >
                    {night} đêm
                  </Typography>
                </Box>
                <Divider sx={{ backgroundColor: "#000", height: "2px" }} />
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography
                    sx={{
                      textAlign: "right",
                    }}
                  >
                    🤑 Total
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      textAlign: "right",
                      color: "red",
                    }}
                  >
                    ${total}
                  </Typography>
                </Box>
              </Stack>

              {/* <Typography variant="body1" color="initial">
                      $33 x 14 đêm
                    </Typography>
                    <Typography variant="body1" color="initial">
                      $465
                    </Typography> */}
              {/* <Typography variant="body1" color="initial">
                      $33 x 14 đêm
                    </Typography>
                    <Typography variant="body1" color="initial">
                      $465
                    </Typography> */}
              {/* <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="body1" color="initial">
                  $33 x 14 đêm
                </Typography>
                <Typography variant="body1" color="initial">
                  $465
                </Typography>
              </Box> */}
            </Grid>
          </Grid>
        </Box>
      </form>
      <DevTool control={control} />
    </FormProvider>
  );
}
