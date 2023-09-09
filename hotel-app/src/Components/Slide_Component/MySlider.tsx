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
    centerMode: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 825,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
        backgroundColor: "primary.light",
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
