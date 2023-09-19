import {
  Container,
  Stack,
  Grid,
  TablePagination,
  createTheme,
  ThemeProvider,
  Box,
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
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../stores.ts/stores";
import AppBar from "@mui/material/AppBar";
import PersistentDrawerLeft from "./Drawer";
import HotelListSkeleton from "./hotelListSkeleton";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
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

  const favoriteList: IHotel[] = useSelector(
    (state: any) => state.sortHotel.favoriteList
  );

  const themeApply = useSelector(
    (state: RootState) => state.darkModeReducer.isDark
  );

  const darkTheme = createTheme({
    palette: {
      mode: themeApply ? "dark" : "light",
    },
    typography: {
      fontSize: 16,
    },
  });

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
  const selectedHotelState: IHotel = useSelector(
    (state: RootState) => state.sortHotel.selectedHotel
  );

  const isLoading: IHotel[] = useSelector(
    (state: any) => state.sortHotel.isLoading
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

  const onSubmit = (data: IFilterFormValue) => {
    data &&
      data.city &&
      dispatch(getAllHotelsByLocation(data.city.id, data.bookingNums));
    localStorage.setItem("selectedProvince", JSON.stringify({ ...data.city }));
    const domain = data.city?.domain;
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

  // const favoriteList = useSelector(
  //   (state: RootState) => state.sortHotel.favoriteList
  // );

  const handleToggle = (selectedData: IHotel) => {
    if (!favoriteList.length) {
      const newFavoriteList: IHotel[] = [selectedData];

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

  return (
    <Container maxWidth="lg" sx={{ paddingTop: "78px" }}>
      <Grid container spacing={2}>
        <ThemeProvider theme={darkTheme}>
          <AppBar
            position={"fixed"}
            sx={{
              backgroundColor: "background.paper",
              marginTop: "60px",
              padding: "10px 0",
              zIndex: 9,
            }}
          >
            <Container maxWidth="lg">
              <Grid item xs={12}>
                <Grid container spacing={2} justifyContent={"space-between"}>
                  <Grid item xs={12}>
                    <FormProvider {...form}>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container spacing={2} justifyContent={"start"}>
                          <Grid item xs={6} md={1}>
                            <PersistentDrawerLeft />
                          </Grid>
                          <Grid item xs={6} md={3}>
                            <Accordion
                              sx={{
                                backgroundColor: "background.paper",
                                border: "1px solid ",
                              }}
                            >
                              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography>
                                  <SearchIcon sx={{ color: "primary.main" }} />
                                  Tìm kiếm
                                </Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Box>
                                  <SearchField
                                    onAdd={handleAddRoom}
                                    onRemove={handleRemoveRoom}
                                  />
                                </Box>
                              </AccordionDetails>
                            </Accordion>
                          </Grid>
                          <Grid item xs={4} md={3.5}>
                            <Typography
                              variant="body1"
                              sx={{
                                color: "text.primary",
                                textAlign: "justify",
                              }}
                            >
                              Tìm thấy{" "}
                              <Typography
                                component="span"
                                sx={{ color: "error.main", fontWeight: "bold" }}
                              >
                                {renderList.length}
                              </Typography>{" "}
                              kết quả phù hợp với bạn tại{" "}
                              <Typography
                                component="span"
                                sx={{ color: "error.main", fontWeight: "bold" }}
                              >
                                {renderList.length && renderList[0].location}
                              </Typography>
                            </Typography>
                          </Grid>
                          <Grid item xs={7} md={4.5}>
                            <Stack spacing={2}>
                              <TablePagination
                                labelRowsPerPage="Hotel per page"
                                rowsPerPageOptions={[6, 12]}
                                component="div"
                                count={renderList.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                              />
                            </Stack>
                          </Grid>
                        </Grid>
                      </form>
                    </FormProvider>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </AppBar>
        </ThemeProvider>

        {/* Map */}
        <>
          {!isLoading ? (
            <Grid
              container
              sx={{
                justifyContent: { xs: "center", md: "center" },
                marginTop: { xs: "200px", md: "100px" },
              }}
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
                    const isFavorite = favoriteList.some(
                      (hotel) => hotel.id === id
                    );
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
                          },
                        }}
                      >
                        <HotelCard
                          tooltip={
                            !isFavorite
                              ? "Thêm vào mục ưa thích"
                              : "Xóa khỏi mục yêu thích"
                          }
                          isFavorite={isFavorite}
                          address={address}
                          name={name}
                          star={stars}
                          rating={rating}
                          price={price}
                          typeAccommodation={type}
                          numberOfRoom={numberOfRoom}
                          onClick={() => {
                            handleOnClick(renderList[index]);
                            navigate(
                              `/accommodation/${selectedProvince.domain}/${selectedHotelState.id}`
                            );
                          }}
                          favoriteToggle={() => handleToggle(renderList[index])}
                        />
                        {/* </Link> */}
                      </Grid>
                    );
                  }
                )}
            </Grid>
          ) : (
            <ThemeProvider theme={darkTheme}>
              <HotelListSkeleton length={renderList.length} />
            </ThemeProvider>
          )}
        </>
      </Grid>
      <ThemeProvider theme={darkTheme}>
        <Stack spacing={2}>
          <TablePagination
            labelRowsPerPage="Hotel per page"
            rowsPerPageOptions={[6, 12]}
            component="div"
            count={renderList.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Stack>
      </ThemeProvider>
    </Container>
  );
};
