import { Box } from "@mui/system";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import BookingTabPanel from "./Components/HomePage_Component/BookingTabPanel/BookingTabs/BookingTabPanel";
// import BookingTabPanel from "./Components/HomePage_Component/BookingTabPanel/BookingTabs/BookingTabPanel";
// import { FilterFormLayOut } from "./Components/Search_Page_Component/HotelCard/FilterFormLayOut";
import { CssBaseline } from "@mui/material";
import NavBar from "./Components/NavBar-Component/NavBar";
// import Footer from "./Components/Footer_Component/footer/Footer";
// import MySlider from "./Components/Slide_Component/MySlider";
// import ControlledCarousel from "./Components/Search_Page_Component/HeroComponent/Carousels";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllProvince } from "./actions/province.action";
// import HotelInfo from "./Components/Search_Page_Component/HotelCard/HotelInfo";
// import SlideComponent from "./Components/Slide_Component/SlideComponent";
// import AdvantageContainer from "./Components/Advantage_Component/AdvantageContainer";
// import HomePage from "./Components/HomePage_Component/BookingTabPanel/HomePage";
import styled from "styled-components";
import { FilterFormLayOut } from "./Components/Search_Page_Component/HotelCard/FilterFormLayOut";
import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./Pages/Homepage/HomePage";

const NavBarWrapper = styled.div`
  position: fixed;
  z-index: 3;
  width: 100%;
`;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProvince());
  }, []);

  return (
    <>
      <Box>
        <CssBaseline />
        <NavBarWrapper>
          <NavBar />
        </NavBarWrapper>
        {/* <HomePage /> */}
        {/* <FilterFormLayOut /> */}
      </Box>
      <Routes>
        <Route path="*" element={<Navigate to="./home" />} />
        <Route path="/" element={<Navigate to="./home" />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/accommodation/:id" element={<FilterFormLayOut />} />
      </Routes>
    </>
  );
}

export default App;
