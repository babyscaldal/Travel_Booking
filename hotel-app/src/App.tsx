import "./App.css";
import BookingTabPanel from "./Components/HomePage_Component/BookingTabPanel/BookingTabs/BookingTabPanel";
import { FilterFormLayOut } from "./Components/Search_Page_Component/HotelCard/FilterFormLayOut";

function App() {
  return (
    <>
      <BookingTabPanel />
      <FilterFormLayOut />
    </>
  );
}

export default App;
