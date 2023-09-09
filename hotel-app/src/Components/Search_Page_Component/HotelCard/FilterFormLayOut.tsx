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
import { useSelector } from "react-redux";

// Test Ha Noi hotel
import hanoiList from "../../../../public/test-data-accommudation/accommodation.json";
import { IHotel } from "../../../types/hotelType";
import { IInitHotelState } from "../../../reducers/hotelList.reducer";
import { useEffect, useRef, useState } from "react";
console.log("HaNoi: ", hanoiList);
export interface IFilterFormValue {
  radio: string;
  // star: number[];
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
      // star: [],
      type: "",
      city: {
        id: 1,
        name: "Hà Nội",
      } as ICity,
    },
    mode: "all",
  });

  const { handleSubmit, control, getValues } = form;
  // const starValue = getValues("star");
  // console.log("starvalue:", starValue);
  const sortHotel: IHotel[] = useSelector(
    (state: any) => state.sortHotel.locationHotelList
  );
  console.log("sortHotel: ", sortHotel);

  const [renderList, setRenderList] = useState<IHotel[]>(sortHotel);

  // get stars
  const starsValue: number[] = useSelector(
    (state: any) => state.sortHotel.filterStarHotel
  );
  // get type accommodation
  const accommodationValue: string[] = useSelector(
    (state: any) => state.sortHotel.filterTypeAccommodation
  );

  // following
  const check = sortHotel[1].id;
  console.log("check: ", check);

  useEffect(() => {
    // All
    if (!starsValue.length && !accommodationValue.length) {
      setRenderList(sortHotel);
      return;
    }

    // by stars
    if (!accommodationValue.length) {
      const newHotelList: IHotel[] = sortHotel.filter((item) =>
        starsValue.includes(item.stars)
      );
      setRenderList(newHotelList);
      return;
    }

    // by type accommodation
    if (!starsValue.length) {
      const newHotelList: IHotel[] = sortHotel.filter((item) =>
        accommodationValue.includes(item.type)
      );
      setRenderList(newHotelList);
      return;
    }

    // by stars and type accommodation
    if (accommodationValue.length && starsValue.length) {
      const newHotelList: IHotel[] = sortHotel.filter((item) => {
        return (
          accommodationValue.includes(item.type) &&
          starsValue.includes(item.stars)
        );
      });
      setRenderList(newHotelList);
      return;
    }
  }, [check, starsValue, accommodationValue]);

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
                Tìm thấy{" "}
                <span style={{ color: "red" }}>{renderList.length}</span> kết
                quả phù hợp với yêu cầu của bạn!
              </Typography>
            </Grid>
            {/* Map */}
            {renderList.map(
              ({ name, address, stars, rating, price, image, type }, index) => {
                return (
                  <Grid
                    key={index}
                    item
                    md={6}
                    lg={4}
                    sx={{ margin: "auto", marginBottom: "15px" }}
                  >
                    <HotelCard
                      address={address}
                      name={name}
                      star={stars}
                      rating={rating}
                      price={price}
                      imgUrl={image[0]}
                      subImgUrl={image[1]}
                      typeAccommodation={type}
                    />
                  </Grid>
                );
              }
            )}
          </Grid>
        </Grid>
      </Grid>
      {/* </Grid>
      </Grid> */}
      <DevTool control={control} />
    </Container>
  );
};
