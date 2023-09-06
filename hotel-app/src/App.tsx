import { Box } from "@mui/system";
import "./App.css";
import BookingTabPanel from "./Components/HomePage_Component/BookingTabPanel/BookingTabs/BookingTabPanel";
import { FilterFormLayOut } from "./Components/Search_Page_Component/HotelCard/FilterFormLayOut";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <Box>
      <CssBaseline />
      {/* <BookingTabPanel /> */}
      <FilterFormLayOut />
    </Box>
  );
}

export default App;
