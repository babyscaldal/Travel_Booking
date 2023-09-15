import { Box } from "@mui/system";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CssBaseline } from "@mui/material";
import NavBar from "./Components/NavBar-Component/NavBar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProvince } from "./actions/province.action";
import { FilterFormLayOut } from "./Components/Search_Page_Component/HotelCard/FilterFormLayOut";
import { Routes, Route, Navigate } from "react-router-dom";
import Contact from "./Components/NavBar-Component/Contact/Contact";
import DetailPage from "./Components/DetailPage_Component/DetailePage";
import Footer from "./Components/Footer_Component/footer/Footer";
import OrderHotelList from "./Components/NavBar-Component/MyBooking/OrderHotelList";
import { UserState } from "./reducers/login.reducer";
import { HomePage } from "./Pages/Homepage/HomePage";

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
        <NavBar />
        {/* <LoginWarning booleanState={!userLogin.isLogin} /> */}
      </Box>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<HomePage />} />
        <Route path={`/accommodation/:city/`} element={<FilterFormLayOut />} />
        <Route path={"/accommodation/:city/:id"} element={<DetailPage />} />
        <Route path={"contact"} element={<Contact />} />
        <Route path={"order-hotel"} element={<OrderHotelList />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
