import { Box } from "@mui/material";
import React from "react";
import AdvantageContainer from "../../Components/Advantage_Component/AdvantageContainer";
import Footer from "../../Components/Footer_Component/footer/Footer";
import ControlledCarousel from "../../Components/Search_Page_Component/HeroComponent/Carousels";
import MySlider from "../../Components/Slide_Component/MySlider";

export const HomePage = () => {
  return (
    <>
      <Box>
        <ControlledCarousel />
        <MySlider />
        <AdvantageContainer />
        <Footer />
      </Box>
    </>
  );
};
