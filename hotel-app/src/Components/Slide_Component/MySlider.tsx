import React from "react";
import Slider from "react-slick";
import PictureComponent from "./PictureComponent";
import { useSelector } from "react-redux";
import { RootState } from "../../stores.ts/stores";
import { Box, Container } from "@mui/material";

const MySlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  const provincesList = useSelector(
    (state: RootState) => state.provincesReducer.listProvinces
  );

  return (
    <Box
      sx={{
        backgroundColor: "primary.light",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "96px 0 48px 0",
      }}
    >
      <Container maxWidth="lg">
        {/* <Box
          sx={{
            width: "auto",
            height: "500px",
            // margin: "0 2rem",
          }}
        > */}
        <Slider {...settings}>
          {provincesList.map((province) => (
            <PictureComponent key={province.name} url={province.image} />
          ))}
        </Slider>
        <h2
          style={{
            textAlign: "center",
            marginTop: "30px",
            fontWeight: "bolder",
          }}
        >
          Sale khách sạn hot 9.9
        </h2>
        {/* </Box> */}
      </Container>
    </Box>
  );
};

export default MySlider;
