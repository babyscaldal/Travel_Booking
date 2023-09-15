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
import Footer from "./Components/Footer_Component/footer/Footer";
import OrderHotelList from "./Components/NavBar-Component/MyBooking/OrderHotelList";
import { HomePage } from "./Pages/Homepage/HomePage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { RootState } from "./stores.ts/stores";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProvince());
  }, []);

  const themeApply = useSelector(
    (state: RootState) => state.darkModeReducer.isDark
  );

  console.log(themeApply);

  const darkTheme = createTheme({
    palette: {
      mode: themeApply ? "dark" : "light",
    },
    typography: {
      fontSize: 16,
    },
  });

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={darkTheme}>
        <Box>
          <NavBar />
          {/* <LoginWarning booleanState={!userLogin.isLogin} /> */}
        </Box>
      </ThemeProvider>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<HomePage />} />
        <Route path={`/accommodation/:city/`} element={<FilterFormLayOut />} />
        {/* <Route path={"/accommodation/:city/:id"} element={<DetailPage />} /> */}
        <Route path={"contact"} element={<Contact />} />
        <Route path={"order-hotel"} element={<OrderHotelList />} />
      </Routes>
      <Footer />
      {/* <Button onClick={() => dispatch(changeTheme())}>Toggle Theme</Button> */}
      {/* <OrderdHotelList /> */}
    </>
  );
}

export default App;
