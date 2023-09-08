import { Box } from "@mui/system";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BookingTabPanel from "./Components/HomePage_Component/BookingTabPanel/BookingTabs/BookingTabPanel";
// import BookingTabPanel from "./Components/HomePage_Component/BookingTabPanel/BookingTabs/BookingTabPanel";
import { FilterFormLayOut } from "./Components/Search_Page_Component/HotelCard/FilterFormLayOut";
import { CssBaseline } from "@mui/material";
import NavBar from "./Components/NavBar-Component/NavBar";
import Footer from "./Components/Footer_Component/footer/Footer";
import MySlider from "./Components/Slide_Component/MySlider";
import ControlledCarousel from "./Components/Search_Page_Component/HeroComponent/Carousels";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllProvince } from "./actions/province.action";
import HotelInfo from "./Components/Search_Page_Component/HotelCard/HotelInfo";
import SlideComponent from "./Components/Slide_Component/SlideComponent";
import AdvantageContainer from "./Components/Advantage_Component/AdvantageContainer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProvince());
  }, []);

  return (
    <Box bgcolor={"green"}>
      <CssBaseline />
      <ControlledCarousel />
      {/* <NavBar /> */}
      {/* <MySlider /> */}
      {/* <HotelInfo /> */}
      {/* <SlideComponent /> */}
      <MySlider />
      {/* <BookingTabPanel /> */}
      {/* <FilterFormLayOut /> */}
      {/* <FilterFormLayOut /> */}
      {/* <AdvantageContainer /> */}
      {/* <Footer /> */}
    </Box>
  );
}

export default App;
