import { Box } from "@mui/system";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CssBaseline } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProvince } from "./actions/province.action";
import { FilterFormLayOut } from "./Components/Search_Page_Component/HotelCard/FilterFormLayOut";
import { Routes, Route, Navigate } from "react-router-dom";
import Footer from "./Components/Footer_Component/footer/Footer";
import OrderHotelList from "./Components/NavBar-Component/MyBooking/OrderHotelList";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { RootState } from "./stores.ts/stores";
import DetailPage from "./Components/DetailPage_Component/DetailePage";
import { FavoriteList } from "./Components/NavBar-Component/Favorite/FavoriteList";
import ResponsiveAppBar from "./Components/NavBar-Component/ResponsiveAppBar";
import Contact from "./Components/NavBar-Component/Contact/Contact";
import React from "react";
import { HomePage } from "./Pages/Homepage/HomePage";
import LoginSuccess from "./Components/NavBar-Component/Login/LoginSusccess";

function App() {
  const dispatch = useDispatch();

  const [submittedDone, setSubmittedDone] = useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);

  const handleSubmittedDone = () => {
    setSubmittedDone(true);
  };

  useEffect(() => {
    dispatch(fetchAllProvince());
  }, []);

  const themeApply = useSelector(
    (state: RootState) => state.darkModeReducer.isDark
  );

  const darkTheme = createTheme({
    palette: {
      mode: themeApply ? "dark" : "light",
    },
    typography: {
      fontSize: 16,
    },
  });

  const isLogin: boolean = useSelector(
    (state: any) => state.loginReducer.isLogin
  );

  React.useEffect(() => {
    if (isLogin && submittedDone) {
      setShowSuccess(true);
      setSubmittedDone(false);
      return;
    }
  }, [isLogin, submittedDone]);

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={darkTheme}>
        <Box>
          <ResponsiveAppBar handleSubmittedDone={handleSubmittedDone} />
        </Box>
      </ThemeProvider>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<HomePage />} />
        <Route path={`/accommodation/:city/`} element={<FilterFormLayOut />} />
        <Route path={"/accommodation/:city/:id"} element={<DetailPage />} />
        <Route path={"contact"} element={<Contact />} />
        <Route
          path={"order-hotel"}
          element={
            <ThemeProvider theme={darkTheme}>
              <OrderHotelList />
            </ThemeProvider>
          }
        />
        <Route path={"favorite-hotel"} element={<FavoriteList />} />
        <Route path={"favorite-hotel/:id"} element={<DetailPage />} />
      </Routes>
      <LoginSuccess showSuccess={showSuccess} onSuccess={setShowSuccess} />
      <Footer />
    </>
  );
}

export default App;
