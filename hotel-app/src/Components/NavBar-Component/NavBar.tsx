import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import DownloadApp from "./DownLoad/DownloadApp";
import MyBooking from "./MyBooking/MyBooking";
import LoginForm from "./Login/LoginForm";
import RegisterForm from "./Register/RegisterForm";
import { UserState } from "../../reducers/login.reducer";
import { useDispatch, useSelector } from "react-redux";
import UserAccount from "./UserAccount/UserAccount";
import { NavLink, useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuResponsive from "./Menu/Menu";
import { Button, IconButton } from "@mui/material";
import { RootState } from "../../stores.ts/stores";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { changeTheme } from "../../actions/changeTheme";
import { Checkbox } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const styleLight = {
  backgroundColor: "background.paper",
  top: "0",
};
const styleDark = {
  backgroundColor: "#121212",
  top: "0",
};

export default function NavBar() {
  const userLogin: UserState = useSelector((state: any) => state.loginReducer);
  console.log("useLogin: ", userLogin);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const themeApply = useSelector(
    (state: RootState) => state.darkModeReducer.isDark
  );

  return (
    <React.Fragment>
      <CssBaseline />
      <Box>
        <AppBar position="fixed" sx={themeApply ? styleDark : styleLight}>
          <Container maxWidth="lg">
            <Box>
              <Toolbar>
                {/* Logo Home */}
                <Box sx={{ width: "50px", flexGrow: 1 }}>
                  <NavLink to={"/"}>
                    <img
                      src={
                        themeApply
                          ? "../../../public/white1.png"
                          : "../../../public/Black1.png"
                      }
                      height="60px"
                    />
                  </NavLink>
                </Box>

                {/* Right */}

                <Box sx={{ display: { xs: "none", md: "flex" } }}>
                  {/* Download app mobile */}
                  <DownloadApp />

                  {/* Cooperate */}
                  <Button
                    sx={{
                      color: "text.primary",
                    }}
                    onClick={() => navigate("/contact")}
                  >
                    <HandshakeOutlinedIcon
                      color="primary"
                      sx={{ mr: 0.5 }}
                      fontSize="small"
                    />
                    Hợp tác
                  </Button>

                  {/* My booking */}
                  <MyBooking />

                  <Box
                    sx={{
                      display: `${userLogin.isLogin ? "none" : "flex"}`,
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    {/* Login */}
                    <LoginForm type="text">
                      <AccountCircleIcon color="primary" sx={{ mr: 0.5 }} />
                      Đăng nhập
                    </LoginForm>

                    {/* Sign Up */}
                    <RegisterForm />
                    <Checkbox
                      icon={<FavoriteBorder sx={{ color: "primary.main" }} />}
                      checkedIcon={<Favorite sx={{ color: "error.main" }} />}
                      onChange={() => dispatch(changeTheme())}
                    />
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
                  {/*Dark mode nav */}
                  <Box></Box>
                </Box>

                {/* Menu responsive */}
                <MenuResponsive />
                <IconButton
                  size="large"
                  edge="start"
                  aria-label="menu"
                  sx={{ mr: 2, display: { xs: "inline-block", md: "none" } }}
                >
                  <MenuIcon />
                </IconButton>
              </Toolbar>
            </Box>
          </Container>
        </AppBar>
      </Box>
    </React.Fragment>
  );
}
