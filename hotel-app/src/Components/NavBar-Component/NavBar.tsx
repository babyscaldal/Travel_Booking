import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import DownloadApp from "./DownLoad/DownloadApp";
import MyBooking from "./MyBooking/MyBooking";
import LoginBtn from "./Login/LoginBtn";
import RegisterBtn from "./Register/RegisterBtn";
import { display } from "@mui/system";
import LoginForm from "./Login/LoginForm";

export default function NavBar() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box sx={{}}>
        <AppBar
          position="static"
          sx={{ color: "#000", bgcolor: "#fff", top: "0" }}
        >
          <Container maxWidth="lg">
            <Box>
              <Toolbar>
                {/* Side bar */}
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>

                {/* Logo Home */}
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  LOGO(HOME)
                </Typography>

                {/* Download app mobile */}
                <DownloadApp />

                {/* Cooperate */}
                <Button color="inherit">
                  <HandshakeOutlinedIcon
                    color="primary"
                    sx={{ mr: 0.5 }}
                    fontSize="small"
                  />
                  Hợp tác
                </Button>

                {/* My booking */}
                <MyBooking />

                {/* Language */}
                {/* <Button color="inherit">
                  <img
                    src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/a3478fc6e57b8681609c1458bd50cbb9.svg"
                    alt=""
                  />{" "}
                  USA
                  <ArrowDropDownIcon />
                </Button> */}
                <Box sx={{ display: "flex" }}>
                  <LoginForm />

                  {/* Sign Up */}
                  <RegisterBtn />
                </Box>
              </Toolbar>
            </Box>
          </Container>
        </AppBar>
      </Box>
    </React.Fragment>
  );
}
