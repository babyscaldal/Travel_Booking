import { Box } from "@mui/system";
import "./App.css";
import BookingTabPanel from "./Components/HomePage_Component/BookingTabPanel/BookingTabs/BookingTabPanel";
import { FilterFormLayOut } from "./Components/Search_Page_Component/HotelCard/FilterFormLayOut";
import { CssBaseline } from "@mui/material";
import NavBar from "./Components/NavBar-Component/NavBar";

function App() {
  return (
    <Box>
      <NavBar />
      <CssBaseline />
      <BookingTabPanel />
      <FilterFormLayOut />
    </Box>
  );
}

export default App;
