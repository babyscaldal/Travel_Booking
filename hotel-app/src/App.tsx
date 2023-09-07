import { Box } from "@mui/system";
import "./App.css";
import { FilterFormLayOut } from "./Components/Search_Page_Component/HotelCard/FilterFormLayOut";
import { CssBaseline } from "@mui/material";
import NavBar from "./Components/NavBar-Component/NavBar";
import Footer from "./Components/Footer_Component/footer/Footer";
import AdvantageContainer from "./Components/Advantage_Component/AdvantageContainer";

function App() {
  return (
    <Box>
      <NavBar />
      <CssBaseline />
      {/* <BookingTabPanel /> */}
      <FilterFormLayOut />
      <AdvantageContainer />
      <Footer />
    </Box>
  );
}

export default App;
