import { Box } from "@mui/system";
import "./App.css";
// import BookingTabPanel from "./Components/HomePage_Component/BookingTabPanel/BookingTabs/BookingTabPanel";
import { FilterFormLayOut } from "./Components/Search_Page_Component/HotelCard/FilterFormLayOut";
import { CssBaseline } from "@mui/material";
import NavBar from "./Components/NavBar-Component/NavBar";
import Footer from "./Components/Footer_Component/footer/Footer";
import SlideComponent from "./Components/Slide_Component/SlideComponent";

function App() {
  return (
    <Box>
      <NavBar />
      <CssBaseline />
      <SlideComponent />
      {/* <BookingTabPanel /> */}
      <FilterFormLayOut />
      <AdvantageContainer />
      <Footer />
    </Box>
  );
}

export default App;
