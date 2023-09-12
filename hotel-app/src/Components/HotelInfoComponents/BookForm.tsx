import { Box, Button, Grid } from "@mui/material";
import { FormProvider, useForm, useWatch } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import dayjs, { Dayjs } from "dayjs";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import DateRangePickerField from "../HomePage_Component/BookingTabPanel/BookingTabs/BookingFormField/DateRangePickerField";
import People from "../HomePage_Component/BookingTabPanel/BookingTabs/People";
import InputField from "../HomePage_Component/BookingTabPanel/BookingTabs/BookingFormField/InputField";

export type IBookingFormValue = {
  bookingDate: Dayjs | null;
  nightNumber: string;
  adult: number;
  child: number;
  baby: number;
  room: number;
};

export default function HotelBookingFormLayout() {
  const form = useForm<IBookingFormValue>({
    defaultValues: {
      bookingDate: [dayjs(), dayjs().add(1, "day")],
      adult: 1,
      child: 0,
      baby: 0,
      room: 1,
    },
  });

  const { control, handleSubmit, watch, setValue } = form;

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

  const onSubmit = (data: IBookingFormValue) => {
    console.log(data);
  };

  const watchedValues = useWatch({
    control,
    name: ["adult", "child", "room", "baby"],
  });

  console.log(watchedValues[0], watchedValues[1], watchedValues[2]);

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
        <Box>
          <Grid container spacing={3} justifyContent={"center"}>
            {/* Date */}
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <DateRangePickerField name={"bookingDate"} />
                </Grid>
              </Grid>
            </Grid>

            {/* Adult */}
            <Grid item xs={12}>
              <People
                adult={watchedValues[0]}
                child={watchedValues[1]}
                room={watchedValues[2]}
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

            {/* Submit Btn */}
            <Grid item xs={12} justifyContent={"center"} alignItems={"stretch"}>
              <Button
                size="large"
                type="submit"
                variant="contained"
                sx={{ width: "100%", height: "48px" }}
                color="success"
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
