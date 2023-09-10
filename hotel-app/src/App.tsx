import { Box } from "@mui/system";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CssBaseline } from "@mui/material";
import NavBar from "./Components/NavBar-Component/NavBar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProvince } from "./actions/province.action";
import styled from "styled-components";
import { FilterFormLayOut } from "./Components/Search_Page_Component/HotelCard/FilterFormLayOut";
import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./Pages/Homepage/HomePage";
import { RootState } from "./stores.ts/stores";
import { handleSearchHotelsByLocation } from "./actions/sortHotel.actions";
import { DatePickerWithRange } from "./Components/HomePage_Component/BookingTabPanel/BookingTabs/BookingFormField/ShadCNDateRangePicker";

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

  useEffect(() => {
    dispatch(fetchAllProvince());
  }, []);

  useEffect(() => {
    dispatch(handleSearchHotelsByLocation(hotelsDataByLocation));
  }, [hotelsDataByLocation]);

  return (
    <>
      <Box>
        <CssBaseline />
        <NavBarWrapper>
          <NavBar />
        </NavBarWrapper>
      </Box>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/accommodation" element={<FilterFormLayOut />}>
          <Route path=":id" element={<FilterFormLayOut />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
