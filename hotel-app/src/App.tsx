import { Box } from "@mui/system";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CssBaseline, Typography, Grid, Container } from "@mui/material";
import NavBar from "./Components/NavBar-Component/NavBar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProvince } from "./actions/province.action";
import styled from "styled-components";
import { FilterFormLayOut } from "./Components/Search_Page_Component/HotelCard/FilterFormLayOut";
import { Routes, Route, Navigate } from "react-router-dom";
import { RootState } from "./stores.ts/stores";
import { handleSearchHotelsByLocation } from "./actions/sortHotel.actions";
import { HomePage } from "./Pages/Homepage/HomePage";
import Contact from "./Components/NavBar-Component/Contact/Contact";
import { HotelCard } from "./Components/Search_Page_Component/HotelCard/HotelCard";
import { createTheme } from "@mui/material/styles";
import { HotelInfoPage } from "./Components/HotelInfoComponents/HotelInfoPage";

const defaultTheme = createTheme();

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

  // const provinces = useSelector(
  //   (state: RootState) => state.provincesReducer.listProvinces
  // );

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
        <Route path={`/accommodation/:city/`} element={<FilterFormLayOut />} />
        <Route
          path="/accommodation/:city/:id"
          element={
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis veritatis nesciunt delectus itaque? Animi modi velit et
              voluptatum eius labore molestias, odit dolor, error blanditiis
              quisquam dolore, dicta totam fugit ad quas minima eveniet soluta
              numquam a sint. In eos accusamus accusantium laboriosam sed.
              Accusamus quam atque temporibus impedit eos.
            </h1>
          }
        />
        <Route path={"contact"} element={<Contact />} />
      </Routes>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={4.5}>
            <HotelInfoPage />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
