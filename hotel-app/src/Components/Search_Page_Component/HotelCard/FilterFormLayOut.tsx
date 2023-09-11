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

import { HotelCard } from "./HotelCard";
import { useSelector } from "react-redux";
import { IHotel } from "../../../types/hotelType";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllHotelsByLocation } from "../../../actions/getHotels.actions";
import { IProvince } from "../../../types/provinceType";
import { Link, useNavigate } from "react-router-dom";
export interface IFilterFormValue {
  radio: string;
  city: IProvince | null;
  room: number;
  bookingNums: number;
}

export const FilterFormLayOut = () => {
  const navigate = useNavigate();
  const form = useForm<IFilterFormValue>({
    defaultValues: {
      radio: "1",
      city: null,
      room: 1,
      bookingNums: 1,
    },
  });

  const { handleSubmit, control, reset, setValue, watch } = form;

  const sortHotel: IHotel[] = useSelector(
    (state: any) => state.sortHotel.locationHotelList
  );

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
  const check = sortHotel.length && sortHotel[1].id;

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

  const dispatch = useDispatch();

  // const { domain } = useParams<string>();

  // const currentSearchDomain = provinces.find((item) => item.domain === domain);

  const onSubmit = (data: IFilterFormValue) => {
    console.log(data);
    data &&
      data.city &&
      dispatch(getAllHotelsByLocation(data.city.id, data.bookingNums));
    const domain = data.city?.domain;
    console.log("domain: ", domain);
    navigate(`/accommodation/${domain}`);
  };

  const handleAddRoom = () => {
    const currentRoomValue = watch("bookingNums");
    if (currentRoomValue < 100) {
      const newRoomValue = currentRoomValue + 1;
      setValue("bookingNums", newRoomValue);
    }
  };

  const handleRemoveRoom = () => {
    const currentRoomValue = watch("bookingNums");

    if (currentRoomValue > 1) {
      const newRoomValue = currentRoomValue - 1;
      setValue("bookingNums", newRoomValue);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ paddingTop: 10 }}>
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

                <SearchField
                  onAddRoom={handleAddRoom}
                  onRemoveRoom={handleRemoveRoom}
                />

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
            <Grid item xs={12} sx={{ margin: "0 0 16px 0" }}>
              <Typography
                variant="body1"
                color="initial"
                sx={{ textIndent: "10px", fontWeight: "bold" }}
              >
                Tìm thấy{" "}
                <span style={{ color: "red" }}>{renderList.length}</span> kết
                quả phù hợp với yêu cầu của bạn tại{" "}
                <span style={{ color: "red" }}>
                  {renderList.length && renderList[0].location}
                </span>
              </Typography>
            </Grid>

            {/* Map */}

            {renderList.map(
              (
                {
                  name,

                  address,

                  stars,

                  rating,

                  price,

                  image,

                  type,

                  numberOfRoom,
                  id,
                },

                index
              ) => {
                return (
                  <Grid
                    key={index}
                    item
                    md={6}
                    lg={4}
                    sx={{ margin: "auto", marginBottom: "15px" }}
                  >
                    <Link to={String(id)} style={{ textDecoration: "none" }}>
                      <HotelCard
                        address={address}
                        name={name}
                        star={stars}
                        rating={rating}
                        price={price}
                        imgUrl={image[0]}
                        subImgUrl={image[1]}
                        typeAccommodation={type}
                        numberOfRoom={numberOfRoom}
                      />
                    </Link>
                  </Grid>
                );
              }
            )}
          </Grid>
        </Grid>
      </Grid>

      <DevTool control={control} />
    </Container>
  );
};
