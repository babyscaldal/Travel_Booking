import React from "react";
import Slider from "react-slick";
import { HotelCardInfo1 } from "../HotelCard/HotelCard";

const MySlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div style={{ width: "1000px", height: "500px", margin: "0 2rem" }}>
      <h2>Center Mode</h2>
      <Slider {...settings}>
        <HotelCardInfo1 />
        <HotelCardInfo1 />
        <HotelCardInfo1 />
        <HotelCardInfo1 />
        <HotelCardInfo1 />
        <HotelCardInfo1 />
        <HotelCardInfo1 />
        <HotelCardInfo1 />
        {/* <div>
          <h3
            style={{
              border: "1px solid red",
              backgroundColor: "blue",
              textAlign: "center",
              color: "#fff",
            }}
          >
            1
          </h3>
        </div>
        <div>
          <h3
            style={{
              border: "1px solid red",
              backgroundColor: "blue",
              textAlign: "center",
              color: "#fff",
            }}
          >
            2
          </h3>
        </div>
        <div>
          <h3
            style={{
              border: "1px solid red",
              backgroundColor: "blue",
              textAlign: "center",
              color: "#fff",
            }}
          >
            3
          </h3>
        </div>
        <div>
          <h3
            style={{
              border: "1px solid red",
              backgroundColor: "blue",
              textAlign: "center",
              color: "#fff",
            }}
          >
            4
          </h3>
        </div>
        <div>
          <h3
            style={{
              border: "1px solid red",
              backgroundColor: "blue",
              textAlign: "center",
              color: "#fff",
            }}
          >
            5
          </h3>
        </div>
        <div>
          <h3
            style={{
              border: "1px solid red",
              backgroundColor: "blue",
              textAlign: "center",
              color: "#fff",
            }}
          >
            6
          </h3>
        </div>
        <div>
          <h3
            style={{
              border: "1px solid red",
              backgroundColor: "blue",
              textAlign: "center",
              color: "#fff",
            }}
          >
            7
          </h3>
        </div>
        <div>
          <h3
            style={{
              border: "1px solid red",
              backgroundColor: "blue",
              textAlign: "center",
              color: "#fff",
            }}
          >
            8
          </h3>
        </div>
        <div>
          <h3
            style={{
              border: "1px solid red",
              backgroundColor: "blue",
              textAlign: "center",
              color: "#fff",
            }}
          >
            9
          </h3>
        </div> */}
      </Slider>
    </div>
  );
};

export default MySlider;
