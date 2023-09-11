import React from "react";
import Slider from "react-slick";
import PictureComponent from "./PictureComponent";
import { useSelector } from "react-redux";
import { RootState } from "../../stores.ts/stores";
import { Box, Container } from "@mui/material";
import { IProvince } from "../../types/provinceType";
import { useDispatch } from "react-redux";
import { getAllHotelsByLocation } from "../../actions/getHotels.actions";
import { useNavigate } from "react-router-dom";

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

  // handle search
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleOnClick = (id: number, bookingNums: number, domain: string) => {
    // alert("onClick");
    dispatch(getAllHotelsByLocation(id, bookingNums));
    navigate(`/accommodation/${domain}`);
  };

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
            <PictureComponent
              key={province.name}
              url={province.image}
              onClick={() => handleOnClick(province.id, 0, province.domain)}
            />
          ))}
        </Slider>
        <h2
          style={{
            textAlign: "center",
            marginTop: "30px",
            fontWeight: "bolder",
            color: "#fff",
          }}
        >
          Sale khách sạn hot trong tháng này!
        </h2>
      </Container>
    </Box>
  );
};

export default MySlider;
