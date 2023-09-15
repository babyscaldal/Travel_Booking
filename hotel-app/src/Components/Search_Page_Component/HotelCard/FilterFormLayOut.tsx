import {
  Container,
  Stack,
  Typography,
  Grid,
  TablePagination,
  Checkbox,
} from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import SearchField from "./SearchField";
import { HotelCard } from "./HotelCard";
import { useSelector } from "react-redux";
import { IHotel } from "../../../types/hotelType";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  getAllHotelsByLocation,
  handleToggleFavoriteHotelList,
  selectedHotel,
} from "../../../actions/getHotels.actions";
import { IProvince } from "../../../types/provinceType";
import { Link, useNavigate } from "react-router-dom";
import { RootState } from "../../../stores.ts/stores";
import AppBar from "@mui/material/AppBar";
import PersistentDrawerLeft from "./Drawer";
import PaginationControlled from "./Pagination";
import HotelListSkeleton from "./hotelListSkeleton";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
export interface IFilterFormValue {
  radio: string;
  city: IProvince | null;
  room: number;
  bookingNums: number;
}

export const FilterFormLayOut = () => {
  const navigate = useNavigate();

  const selectedProvince: IProvince = useSelector(
    (state: RootState) => state.provincesReducer.selectedProvince
  );

  const form = useForm<IFilterFormValue>({
    defaultValues: {
      radio: "1",
      city: selectedProvince,
      room: 1,
      bookingNums: 1,
    },
  });

  const { handleSubmit, setValue, watch } = form;

  const sortHotel: IHotel[] = useSelector(
    (state: any) => state.sortHotel.locationHotelList
  );

  const isLoading: IHotel[] = useSelector(
    (state: any) => state.sortHotel.isLoading
  );
  // console.log(isLoading);
  const itemPerPage: number = 10;
  const totalPages: number = sortHotel.length
    ? Math.ceil(sortHotel.length / itemPerPage)
    : 1;

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

  const onSubmit = (data: IFilterFormValue) => {
    console.log(data);
    data &&
      data.city &&
      dispatch(getAllHotelsByLocation(data.city.id, data.bookingNums));
    localStorage.setItem("selectedProvince", JSON.stringify({ ...data.city }));
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

  const handleOnClick = (selectedData: IHotel) => {
    console.log("Selected data: ", selectedData);
    dispatch(selectedHotel(selectedData));
  };

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(12);

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const favoriteList = useSelector(
    (state: RootState) => state.sortHotel.favoriteList
  );

  const handleToggle = (selectedData: IHotel) => {
    console.log("Selected data: ", selectedData);

    console.log("favoriteList: ", favoriteList);

    if (!favoriteList.length) {
      const newFavoriteList: IHotel[] = [selectedData];

      console.log("newFavoriteList: ", newFavoriteList);

      dispatch(handleToggleFavoriteHotelList(newFavoriteList));
    } else {
      const newFavoriteList = favoriteList.filter((item) => {
        return item.id !== selectedData.id;
      });

      if (newFavoriteList.length !== favoriteList.length) {
        dispatch(handleToggleFavoriteHotelList(newFavoriteList));
      } else {
        dispatch(
          handleToggleFavoriteHotelList([selectedData, ...newFavoriteList])
        );
      }
    }
  };

  //Pagination:

  return (
    <Container maxWidth="lg" sx={{ paddingTop: "78px" }}>
      <Grid container spacing={2}>
        <AppBar
          position={"fixed"}
          sx={{
            backgroundColor: "#fff",
            marginTop: "64px",
            paddingTop: "20px",
            zIndex: 9,
          }}
        >
          <Grid item xs={12}>
            <Grid container spacing={2} justifyContent={"space-between"}>
              <Grid item xs={12}>
                <FormProvider {...form}>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid
                      container
                      spacing={2}
                      justifyContent={"space-between"}
                    >
                      <Grid item xs={12} md={2.5}>
                        <PersistentDrawerLeft />
                      </Grid>
                      <Grid item xs={12} md={8}>
                        <SearchField
                          onAddRoom={handleAddRoom}
                          onRemoveRoom={handleRemoveRoom}
                        />
                      </Grid>
                    </Grid>
                  </form>
                </FormProvider>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant="body1"
                  color="initial"
                  style={{
                    textIndent: "10px",
                    fontWeight: "bold",
                  }}
                >
                  Tìm thấy{" "}
                  <span style={{ color: "red" }}>{renderList.length}</span> kết
                  quả phù hợp với yêu cầu của bạn tại{" "}
                  <span style={{ color: "red" }}>
                    {renderList.length && renderList[0].location}
                  </span>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Stack spacing={2}>
                  <TablePagination
                    rowsPerPageOptions={[6, 12]}
                    component="div"
                    count={renderList.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  />
                  {/* <PaginationControlled totalPages={totalPages} /> */}
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </AppBar>

        {/* Map */}
        <>
          {!isLoading ? (
            <Grid
              container
              marginTop={"140px"}
              sx={{ justifyContent: { xs: "center", md: "center" } }}
            >
              {renderList
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(
                  (
                    {
                      name,
                      address,
                      stars,
                      rating,
                      price,
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
                        xs={12}
                        md={4}
                        lg={3}
                        sx={{
                          marginBottom: "15px",
                          transition: "all 0.25s",
                          "&:hover": {
                            cursor: "pointer",
                            transform: "translateY(-15px)",
                            position: "relative",
                          },
                        }}
                      >
                        <Checkbox
                          sx={{
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            zIndex: 8,
                          }}
                          icon={<FavoriteBorder />}
                          checkedIcon={<Favorite />}
                        />
                        <Link
                          to={String(id)}
                          style={{ textDecoration: "none" }}
                        >
                          <HotelCard
                            address={address}
                            name={name}
                            star={stars}
                            rating={rating}
                            price={price}
                            typeAccommodation={type}
                            numberOfRoom={numberOfRoom}
                            onClick={() => handleOnClick(renderList[index])}
                            favoriteToggle={() =>
                              handleToggle(renderList[index])
                            }
                          />
                        </Link>
                      </Grid>
                    );
                  }
                )}
            </Grid>
          ) : (
            <HotelListSkeleton length={renderList.length} />
          )}
        </>
      </Grid>
      <Stack spacing={2}>
        <TablePagination
          rowsPerPageOptions={[6, 12]}
          component="div"
          count={renderList.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Stack>
    </Container>
  );
};
