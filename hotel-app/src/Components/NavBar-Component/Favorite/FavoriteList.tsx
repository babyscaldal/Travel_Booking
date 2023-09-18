import { Container, Typography, Grid, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { IHotel } from "../../../types/hotelType";
import { useDispatch } from "react-redux";
import {
  handleToggleFavoriteHotelList,
  selectedHotel,
} from "../../../actions/getHotels.actions";
import { HotelCard } from "../../Search_Page_Component/HotelCard/HotelCard";
import { RootState } from "../../../stores.ts/stores";
import { useNavigate } from "react-router-dom";
import { IProvince } from "../../../types/provinceType";
import { Box } from "@mui/joy";

export const FavoriteList = () => {
  const navigate = useNavigate();
  const favoriteList: IHotel[] = useSelector(
    (state: any) => state.sortHotel.favoriteList
  );

  const dispatch = useDispatch();

  const handleOnClick = (selectedData: IHotel) => {
    console.log("Selected data: ", selectedData);
    dispatch(selectedHotel(selectedData));
  };

  const handleToggle = (selectedData: IHotel) => {
    console.log("Selected data: ", selectedData);
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
  };

  const selectedHotelState: IHotel = useSelector(
    (state: RootState) => state.sortHotel.selectedHotel
  );

  const selectedProvince: IProvince = useSelector(
    (state: RootState) => state.provincesReducer.selectedProvince
  );

  const themeApply = useSelector(
    (state: RootState) => state.darkModeReducer.isDark
  );

  return (
    <Box
      sx={{
        fontSize: "90px",
        height: "100vh",
        backgroundColor: themeApply ? "text.primary" : "background.paper",
        color: themeApply ? "background.paper" : "text.primary",
        textAlign: "center",
      }}
    >
      <Container maxWidth="lg" sx={{ paddingTop: 10 }}>
        {favoriteList.length ? (
          <Grid container sx={{ justifyItems: "center" }}>
            <Grid
              item
              xs={12}
              sx={{
                margin: "0 0 16px 0",
                backgroundColor: themeApply
                  ? "text.primary"
                  : "background.paper",
                color: themeApply ? "background.paper" : "text.primary",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  textIndent: "10px",
                  fontWeight: "bold",
                }}
              >
                Bạn có{" "}
                <Typography
                  component={"span"}
                  sx={{ color: "error.main", fontWeight: "bold" }}
                >
                  {favoriteList.length}
                </Typography>{" "}
                địa điểm đã lưu!
              </Typography>
            </Grid>

            {/* Map */}
            {favoriteList.map(
              (
                { name, address, stars, rating, price, type, numberOfRoom },

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
                      },
                    }}
                  >
                    <HotelCard
                      address={address}
                      name={name}
                      star={stars}
                      rating={rating}
                      price={price}
                      typeAccommodation={type}
                      numberOfRoom={numberOfRoom}
                      onClick={() => {
                        navigate(
                          `/accommodation/${selectedProvince.domain}/${selectedHotelState.id}`
                        );
                        handleOnClick(favoriteList[index]);
                      }}
                      favoriteToggle={() => handleToggle(favoriteList[index])}
                    />
                  </Grid>
                );
              }
            )}
          </Grid>
        ) : (
          <Box
            height="100vh"
            mb={"30px"}
            textAlign={"center"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            color="text.primary"
          >
            <Typography
              variant="h6"
              component={"h3"}
              sx={{ color: themeApply ? "background.paper" : "text.primary" }}
            >
              Thông báo
            </Typography>
            <Typography
              sx={{ color: themeApply ? "background.paper" : "text.primary" }}
            >
              Theo như dữ liệu hệ thống thì bạn chưa thêm phòng nào vào mục yêu
              thích.
            </Typography>
            <Box height={200} width={200}>
              <img
                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/9bdd8040b334d31946f49e36beaf32db.png"
                alt="order-nothing"
                width="100%"
                height="100%"
                style={{ objectFit: "cover" }}
              />
            </Box>
            <Button
              variant="contained"
              color="success"
              onClick={() => navigate("/")}
            >
              Start Booking Now
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  );
};
