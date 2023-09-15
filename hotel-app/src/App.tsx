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
import { RootState } from "./stores.ts/stores";
import { handleSearchHotelsByLocation } from "./actions/sortHotel.actions";
import Contact from "./Components/NavBar-Component/Contact/Contact";
import DetailPage from "./Components/DetailPage_Component/DetailePage";
import Footer from "./Components/Footer_Component/footer/Footer";
import { HomePage } from "./pages/Homepage/HomePage";
import OrderHotelList from "./Components/NavBar-Component/MyBooking/OrderHotelList";
import LoginWarning from "./Components/LoginWarning/LoginWarning";
import { UserState } from "./reducers/login.reducer";
import { FavoriteList } from "./Components/NavBar-Component/Favorite/FavoriteList";

const NavBarWrapper = styled.div`
  position: fixed;
  z-index: 3;
  width: 100%;
  top: 0;
  left: 0;
`;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProvince());
  }, []);

  const userLogin: UserState = useSelector((state: any) => state.loginReducer);

  return (
    <>
      <Box>
        <CssBaseline />
        <NavBarWrapper>
          <NavBar />
        </NavBarWrapper>
        {/* <LoginWarning booleanState={!userLogin.isLogin} /> */}
      </Box>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<HomePage />} />
        <Route path={`/accommodation/:city/`} element={<FilterFormLayOut />} />
        <Route path={"/accommodation/:city/:id"} element={<DetailPage />} />
        <Route path={"contact"} element={<Contact />} />
        <Route path={"order-hotel"} element={<OrderHotelList />} />
        <Route path={"favorite-hotel"} element={<FavoriteList />} />
        <Route path={"favorite-hotel/:id"} element={<DetailPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
