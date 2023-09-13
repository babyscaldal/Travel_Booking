import { Box, Slide } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import PictureComponent from "../Slide_Component/PictureComponent";

const BedRoom: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    autoplay: true,
    centerPadding: "50px",
    autoplaySpeed: 1500,
    adaptiveHeight: true,
    focusOnSelect: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 5,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 825,
        settings: {
          slidesToShow: 2,
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

  const bedRoomImg: string[] = [
    "https://a0.muscache.com/im/pictures/miso/Hosting-931433141813173131/original/7d36c342-fde7-4518-9d15-a80c6c3d2d66.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-931433141813173131/original/43231729-a17b-4c8c-8d81-2072ed4caf91.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-931433141813173131/original/97838906-94ce-44d2-b6fa-6ee9a2e4be09.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-931433141813173131/original/6c9f8e2b-c379-4d83-bf62-814b2398bac0.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-931433141813173131/original/c944b051-bed4-4624-af2a-110e5e5aaa44.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-931433141813173131/original/c38f7694-f698-42c1-bfe8-9ca2a2604962.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-931433141813173131/original/7bffc115-b71d-4e26-978d-a1e2d7d6a3d9.jpeg?im_w=720",
  ];

  return (
    <Box
      sx={{
        //   display: "flex",
        //   justifyContent: "center",
        //   alignItems: "center",
        paddingBottom: "48px",
      }}
    >
      <Slider {...settings}>
        {bedRoomImg.map((imgUrl, index) => (
          <PictureComponent key={index} url={imgUrl} />
        ))}
      </Slider>
    </Box>
  );
};

export default BedRoom;
