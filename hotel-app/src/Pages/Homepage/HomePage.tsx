import { Box } from "@mui/material";
import AdvantageContainer from "../../Components/Advantage_Component/AdvantageContainer";
import ControlledCarousel from "../../Components/Search_Page_Component/HeroComponent/Carousels";
import MySlider from "../../Components/Slide_Component/MySlider";
import Footer from "../../Components/Footer_Component/footer/Footer";

export const HomePage = () => {
  return (
    <>
      <Box>
        <ControlledCarousel />
        <MySlider />
        <AdvantageContainer />
      </Box>
    </>
  );
};
