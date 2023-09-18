import { Box, ThemeProvider, createTheme } from "@mui/material";
import AdvantageContainer from "../../Components/Advantage_Component/AdvantageContainer";
import ControlledCarousel from "../../Components/Search_Page_Component/HeroComponent/Carousels";
import MySlider from "../../Components/Slide_Component/MySlider";
import { useSelector } from "react-redux";
import { RootState } from "../../stores.ts/stores";

export const HomePage = () => {
  const themeApply = useSelector(
    (state: RootState) => state.darkModeReducer.isDark
  );

  const darkTheme = createTheme({
    palette: {
      mode: themeApply ? "dark" : "light",
    },
    typography: {
      fontSize: 16,
    },
  });
  return (
    <>
      <Box>
        <ThemeProvider theme={darkTheme}>
          <ControlledCarousel />
        </ThemeProvider>
        <MySlider />
        <ThemeProvider theme={darkTheme}>
          <AdvantageContainer />
        </ThemeProvider>
      </Box>
    </>
  );
};
