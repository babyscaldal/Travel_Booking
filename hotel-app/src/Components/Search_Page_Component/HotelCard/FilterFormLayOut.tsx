import {
  Container,
  Stack,
  Typography,
  Grid,
  TablePagination,
} from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import SearchField from "./SearchField";
import { HotelCard } from "./HotelCard";
import { useSelector } from "react-redux";
import { IHotel } from "../../../types/hotelType";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  getAllHotelsByLocation,
  selectedHotel,
} from "../../../actions/getHotels.actions";
import { IProvince } from "../../../types/provinceType";
import { Link, useNavigate } from "react-router-dom";
import { RootState } from "../../../stores.ts/stores";
import AppBar from "@mui/material/AppBar";
import PersistentDrawerLeft from "./Drawer";
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

  console.log(selectedProvince);

  const form = useForm<IFilterFormValue>({
    defaultValues: {
      radio: "1",
      city: selectedProvince,
      room: 1,
      bookingNums: 1,
    },
  });

  const { handleSubmit, control, setValue, watch } = form;

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
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Container maxWidth="lg" sx={{ paddingTop: "78px" }}>
      <Grid container spacing={2}>
        <AppBar
          position={"fixed"}
          sx={{
            backgroundColor: "#fff",
            marginTop: "64px",
            paddingTop: "20px",
            zIndex: 2,
          }}
        >
          <Grid container spacing={2} justifyContent={"space-between"}>
            <Grid item xs={12}>
              <FormProvider {...form}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Grid container spacing={2} justifyContent={"space-between"}>
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
                  rowsPerPageOptions={[6, 25, 100]}
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
        </AppBar>

        {/* Map */}
        <Grid container marginTop={"140px"}>
          {renderList
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map(
              (
                { name, address, stars, rating, price, type, numberOfRoom, id },

                index
              ) => {
                return (
                  <Grid
                    key={index}
                    item
                    xs={12}
                    md={6}
                    lg={4}
                    sx={{
                      margin: "auto",
                      marginBottom: "15px",
                      transition: "all 0.25s",
                      "&:hover": {
                        cursor: "pointer",
                        transform: "translateY(-15px)",
                      },
                    }}
                  >
                    <Link to={String(id)} style={{ textDecoration: "none" }}>
                      <HotelCard
                        address={address}
                        name={name}
                        star={stars}
                        rating={rating}
                        price={price}
                        typeAccommodation={type}
                        numberOfRoom={numberOfRoom}
                        onClick={() => handleOnClick(renderList[index])}
                        favoriteToggle={() => handleToggle(renderList[index])}
                      />
                    </Link>
                  </Grid>
                );
              }
            )}
        </Grid>
      </Grid>
      <Stack spacing={2}>
        <TablePagination
          rowsPerPageOptions={[6, 25, 100]}
          component="div"
          count={renderList.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Stack>

      <DevTool control={control} />
    </Container>
  );
};
