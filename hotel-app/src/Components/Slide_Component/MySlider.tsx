import React from "react";
import Slider from "react-slick";
import PictureComponent from "./PictureComponent";
import { useSelector } from "react-redux";
import { RootState } from "../../stores.ts/stores";
import { Box, Container } from "@mui/material";
import { IProvince } from "../../types/provinceType";

const MySlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    centerPadding: "50px",
    autoplaySpeed: 2000,
    adaptiveHeight: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 5,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 825,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const provincesList: IProvince[] = useSelector(
    (state: RootState) => state.provincesReducer.listProvinces
  );

  return (
    <Box
      sx={{
        backgroundColor: "success.light",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "96px 0 48px 0",
      }}
    >
      <Container maxWidth="lg">
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
      </Container>
    </Box>
  );
};

export default MySlider;
