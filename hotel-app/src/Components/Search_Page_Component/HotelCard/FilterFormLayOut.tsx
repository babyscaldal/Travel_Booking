import {
  Box,
  Container,
  Stack,
  Typography,
  Divider,
  Grid,
} from "@mui/material";
import map from "../../../assets/map.png";
import { RadioField } from "./RadioField";
import { FormProvider, useForm } from "react-hook-form";
import FilterSubMenu from "./FilterSubMenu";
import { DevTool } from "@hookform/devtools";
import SearchField from "./SearchField";
import { ICity } from "../../HomePage_Component/BookingTabPanel/BookingTabs/HotelBookFormLayout";
import { HotelCard } from "./HotelCard";

export interface IFilterFormValue {
  radio: string;
  star: string;
  type: string;
  city: ICity;
}

const onSubmit = (data: IFilterFormValue) => {
  console.log(data);
};

export const FilterFormLayOut = () => {
  const form = useForm<IFilterFormValue>({
    defaultValues: {
      radio: "1",
      star: "",
      type: "",
      city: {
        id: 1,
        name: "Hà Nội",
      } as ICity,
    },
  });

  const { handleSubmit, control } = form;

  return (
    <Container maxWidth="lg" sx={{ paddingTop: 10 }}>
      {/* <Box display={"flex"} justifyContent={"space-between"} gap={"15px"}> */}
      <Grid
        container
        spacing={2}
        sx={{ flexWrap: "nowrap", justifyContent: "center" }}
      >
        <Grid item xs={3} sx={{ minWidth: "250px" }}>
          <FormProvider {...form}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={2}>
                {/* Map */}
                <Box>
                  <img
                    src={map}
                    alt="map"
                    width={"100%"}
                    height={"100%"}
                    style={{ borderRadius: "6px" }}
                  />
                </Box>

                <SearchField />

                {/* Radio */}
                <Box bgcolor="white" padding="10px" borderRadius="6px">
                  <Typography
                    sx={{ fontSize: "16px", fontWeight: "bold" }}
                    component="p"
                  >
                    Sắp xếp kết quả
                  </Typography>
                  <Typography sx={{ fontSize: "14px", color: "#687176" }}>
                    Sắp xếp kết quả theo lựa chọn
                  </Typography>
                  <Divider />
                  <RadioField name="radio" />
                </Box>

                <Box>
                  <FilterSubMenu />
                </Box>
              </Stack>
            </form>
          </FormProvider>
        </Grid>
        <Grid item xs={9}>
          <Grid container sx={{ justifyItems: "center" }}>
            {/* <Grid item xs={12} sx={{ marginBottom: "20px" }}>
              <Grid container spacing={3}> */}
            <Grid item xs={12} sx={{ margin: "0 0 16px 0" }}>
              <Typography
                variant="body1"
                color="initial"
                sx={{ textIndent: "10px", fontWeight: "bold" }}
              >
                Tìm thấy XXXX cơ sở lưu trú tại XXXX
              </Typography>
            </Grid>
            <Grid
              item
              md={6}
              lg={4}
              sx={{ margin: "auto", marginBottom: "15px" }}
            >
              <HotelCard />
            </Grid>
            <Grid
              item
              md={6}
              lg={4}
              sx={{ margin: "auto", marginBottom: "15px" }}
            >
              <HotelCard />
            </Grid>
            <Grid
              item
              md={6}
              lg={4}
              sx={{ margin: "auto", marginBottom: "15px" }}
            >
              <HotelCard />
            </Grid>
            <Grid
              item
              md={6}
              lg={4}
              sx={{ margin: "auto", marginBottom: "15px" }}
            >
              <HotelCard />
            </Grid>
            <Grid
              item
              md={6}
              lg={4}
              sx={{ margin: "auto", marginBottom: "15px" }}
            >
              <HotelCard />
            </Grid>
            <Grid
              item
              md={6}
              lg={4}
              sx={{ margin: "auto", marginBottom: "15px" }}
            >
              <HotelCard />
            </Grid>
            <Grid
              item
              md={6}
              lg={4}
              sx={{ margin: "auto", marginBottom: "15px" }}
            >
              <HotelCard />
            </Grid>
            <Grid
              item
              md={6}
              lg={4}
              sx={{ margin: "auto", marginBottom: "15px" }}
            >
              <HotelCard />
            </Grid>
            <Grid
              item
              md={6}
              lg={4}
              sx={{ margin: "auto", marginBottom: "15px" }}
            >
              <HotelCard />
            </Grid>
            <Grid
              item
              md={6}
              lg={4}
              sx={{ margin: "auto", marginBottom: "15px" }}
            >
              <HotelCard />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* </Grid>
      </Grid> */}
      <DevTool control={control} />
    </Container>
  );
};
