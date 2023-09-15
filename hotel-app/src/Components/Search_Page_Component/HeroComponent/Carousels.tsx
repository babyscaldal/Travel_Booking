import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import BookingModal from "./BookingModal";
import { useSelector } from "react-redux";
import { RootState } from "../../../stores.ts/stores";
import { Box, Typography } from "@mui/material";

const Hero = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.7;
    z-index: 1;
  }
`;

const CarouselsBox = styled.div`
  position: relative;
`;

const Caption = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform:translate(-50%,-50%);
    z-index: 2;
    color:#fff;
    text-align:center;
    & em{
      font-size:24px;
    }
  }
`;

const captionStyle = {
  color: "#fff",
  zIndex: "4",
};

const titleStyle = {
  fontSize: "24px",
  padding: "0",
  fontWeight: "bold",
  marginBottom: "10px",
  color: "#fff",
};

const descriptionStyle = {
  fontSize: "18px",
  padding: "0",
  color: "#fff",
};

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: any) => {
    setIndex(selectedIndex);
  };

  const provincesList = useSelector(
    (state: RootState) => state.provincesReducer.listProvinces
  );

  // console.log(provincesList);

  const heroImageUrl: string[] = Array.from(
    { length: 10 },
    (_, i) => `../../../../public/hero_image/image_${i + 1}.jpg`
  );

  const newProvinceList = provincesList.map((province, index) => {
    return { ...province, heroImageUrl: heroImageUrl[index] };
  });

  return (
    <>
      <CarouselsBox>
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          interval={4000}
          controls={true}
          indicators={true}
          pause={false}
        >
          {newProvinceList.map((province) => (
            <Carousel.Item key={province.name}>
              <Hero>
                <img
                  src={province.heroImageUrl}
                  alt={province.name}
                  width="100%"
                  height="100%"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </Hero>
              <Carousel.Caption style={captionStyle}>
                <h3 style={titleStyle}>{province.name}</h3>
                <em style={descriptionStyle}>{province.slogan}</em>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
        <Caption>
          <Box>
            <Typography
              sx={{
                fontSize: {
                  xs: "32px",
                  md: "48px",
                  lg: "60px",
                },
                overflowWrap: "break-word",
              }}
            >
              ✈ Discover the World ✈ Live Your Travel Dream!
            </Typography>
          </Box>
          <BookingModal />
        </Caption>
      </CarouselsBox>
    </>
  );
}

export default ControlledCarousel;
