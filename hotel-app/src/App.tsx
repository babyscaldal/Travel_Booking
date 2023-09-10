import { Box } from "@mui/system";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CssBaseline } from "@mui/material";
import NavBar from "./Components/NavBar-Component/NavBar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllProvince } from "./actions/province.action";
import styled from "styled-components";
import { FilterFormLayOut } from "./Components/Search_Page_Component/HotelCard/FilterFormLayOut";
import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./Pages/Homepage/HomePage";
import Footer from "./Components/Footer_Component/footer/Footer";

const NavBarWrapper = styled.div`
  position: fixed;
  z-index: 3;
  width: 100%;
`;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProvince());
  }, []);

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
