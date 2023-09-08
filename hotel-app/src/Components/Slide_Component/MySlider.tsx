import React from "react";
import Slider from "react-slick";
import PictureComponent from "./PictureComponent";
import { useSelector } from "react-redux";
import { RootState } from "../../stores.ts/stores";
import { Container } from "@mui/material";

// const PrevArrow = (props: any) => {
//   const { className, style, onClick } = props;
//   const arrowStyle = {
//     ...style,
//     zIndex: 1,
//     backgroundColor: "#FF0000", // Customize the color here
//     fontSize: "24px", // Customize the font size here
//   };

//   return <div className={className} style={arrowStyle} onClick={onClick}></div>;
// };

const MySlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    // prevArrow: <PrevArrow />,
  };

  const provincesList = useSelector(
    (state: RootState) => state.provincesReducer.listProvinces
  );

  return (
    <Container maxWidth="lg">
      <div style={{ width: "auto", height: "500px", margin: "0 2rem" }}>
        <Slider {...settings}>
          {provincesList.map((province) => (
            <PictureComponent key={province.name} url={province.image} />
          ))}
        </Slider>
      </div>
    </Container>
  );
};

export default MySlider;
