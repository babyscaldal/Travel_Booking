import { Box } from "@mui/system";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Checkbox, CssBaseline, useMediaQuery } from "@mui/material";
import NavBar from "./Components/NavBar-Component/NavBar";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProvince } from "./actions/province.action";
import styled from "styled-components";
import { FilterFormLayOut } from "./Components/Search_Page_Component/HotelCard/FilterFormLayOut";
import { Routes, Route, Navigate } from "react-router-dom";
import { RootState } from "./stores.ts/stores";
import { handleSearchHotelsByLocation } from "./actions/sortHotel.actions";
import Contact from "./Components/NavBar-Component/Contact/Contact";
import DetailPage from "./Components/DetailPage_Component/DetailePage";
import Footer from "./Components/Footer_Component/footer/Footer";
import { HomePage } from "./Pages/Homepage/HomePage";
import OrderdHotelList from "./Components/OrderedHotelList/OrderdHotelList";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const NavBarWrapper = styled.div`
  position: fixed;
  z-index: 3;
  width: 100%;
`;

function App() {
  const dispatch = useDispatch();
  const hotelsDataByLocation = useSelector(
    (state: RootState) => state.hotelsByLocationReducer.hotelsListByLocation
  );

  // const provinces = useSelector(
  //   (state: RootState) => state.provincesReducer.listProvinces
  // );

  useEffect(() => {
    dispatch(fetchAllProvince());
  }, []);

  useEffect(() => {
    dispatch(handleSearchHotelsByLocation(hotelsDataByLocation));
  }, [hotelsDataByLocation]);

  const themeApply = useSelector(
    (state: RootState) => state.darkModeReducer.isDark
  );

  console.log(themeApply);

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
      <CssBaseline />
      <ThemeProvider theme={darkTheme}>
        <Box>
          <NavBarWrapper>
            <NavBar />
          </NavBarWrapper>
        </Box>
      </ThemeProvider>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<HomePage />} />
        <Route path={`/accommodation/:city/`} element={<FilterFormLayOut />} />
        {/* <Route path={"/accommodation/:city/:id"} element={<DetailPage />} /> */}
        <Route path={"contact"} element={<Contact />} />
      </Routes>
      <Footer />
      {/* <Button onClick={() => dispatch(changeTheme())}>Toggle Theme</Button> */}
      {/* <OrderdHotelList /> */}
    </>
  );
}

export default App;
