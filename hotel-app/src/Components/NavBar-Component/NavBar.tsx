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
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import DownloadApp from "./DownLoad/DownloadApp";
import MyBooking from "./MyBooking/MyBooking";
import LoginForm from "./Login/LoginForm";
import RegisterForm from "./Register/RegisterForm";
import { UserState } from "../../reducers/login.reducer";
import { useSelector } from "react-redux";
import UserAccount from "./UserAccount/UserAccount";

export default function NavBar() {
  const userLogin: UserState = useSelector((state: any) => state.loginReducer);
  console.log("useLogin: ", userLogin);
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

                <Box sx={{ display: `${userLogin.isLogin ? "none" : "flex"}` }}>
                  {/* Login */}
                  <LoginForm />

                  {/* Sign Up */}
                  {/* <RegisterBtn /> */}
                  <RegisterForm />
                </Box>
                {/* Logged User */}
                <Box
                  sx={{
                    display: `${userLogin.isLogin ? "inline-block" : "none"}`,
                  }}
                >
                  <UserAccount
                    username={userLogin.user.username}
                    avatar={userLogin.user.image}
                  />
                </Box>
              </Toolbar>
            </Box>
          </Container>
        </AppBar>
      </Box>
      <h1></h1>
    </React.Fragment>
  );
}
