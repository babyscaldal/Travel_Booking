import { Container, Typography, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { IHotel } from "../../../types/hotelType";
import { useDispatch } from "react-redux";
import {
  handleToggleFavoriteHotelList,
  selectedHotel,
} from "../../../actions/getHotels.actions";
import { IProvince } from "../../../types/provinceType";
import { Link } from "react-router-dom";
import { HotelCard } from "../../Search_Page_Component/HotelCard/HotelCard";

export const FavoriteList = () => {
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

  return (
    <Container maxWidth="lg" sx={{ paddingTop: 10 }}>
      {favoriteList.length ? (
        <Grid container sx={{ justifyItems: "center" }}>
          <Grid item xs={12} sx={{ margin: "0 0 16px 0" }}>
            <Typography
              variant="body1"
              color="initial"
              style={{
                textIndent: "10px",
                fontWeight: "bold",
              }}
            >
              Bạn có <span style={{ color: "red" }}>{favoriteList.length}</span>{" "}
              địa điểm đã lưu!
            </Typography>
          </Grid>

          {/* Map */}

          {favoriteList.map(
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
                  lg={3}
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
                      onClick={() => handleOnClick(favoriteList[index])}
                      favoriteToggle={() => handleToggle(favoriteList[index])}
                    />
                  </Link>
                </Grid>
              );
            }
          )}
        </Grid>
      ) : (
        <h3>Bạn chưa thêm mục gì vào danh sách yêu thích của bạn</h3>
      )}
    </Container>
  );
};
