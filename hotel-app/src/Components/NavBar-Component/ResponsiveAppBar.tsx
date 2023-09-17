import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../stores.ts/stores";
import {
  Avatar,
  Button,
  Checkbox,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import LightModeSharpIcon from "@mui/icons-material/LightModeSharp";
import DarkModeSharpIcon from "@mui/icons-material/DarkModeSharp";
import { changeTheme } from "../../actions/changeTheme";
import DownloadApp from "./DownLoad/DownloadApp";
import FavoriteBtn from "./Favorite/FavoriteBtn";
import MyBooking from "./MyBooking/MyBooking";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import LoginForm from "./Login/LoginForm";
import RegisterForm from "./Register/RegisterForm";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { UserState } from "../../reducers/login.reducer";
import { LogoutRes } from "../../actions/login.actions";
import LogoutIcon from "@mui/icons-material/Logout";

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const themeApply = useSelector(
    (state: RootState) => state.darkModeReducer.isDark
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLogin: UserState = useSelector((state: any) => state.loginReducer);
  const isLogin: UserState = useSelector(
    (state: any) => state.loginReducer.isLogin
  );
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "background.paper" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Checkbox
            icon={<LightModeSharpIcon sx={{ color: "primary.main" }} />}
            checkedIcon={<DarkModeSharpIcon sx={{ color: "primary.main" }} />}
            onChange={() => dispatch(changeTheme())}
          />
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

          {/* Menu DeskTop */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <DownloadApp />
            <Button
              sx={{ color: "text.primary", display: "block" }}
              onClick={() => navigate("/contact")}
            >
              <HandshakeOutlinedIcon
                color="primary"
                sx={{ mr: 0.5 }}
                fontSize="small"
              />
              Hợp tác
            </Button>
            <FavoriteBtn />
            <MyBooking />
            <Box sx={{ display: isLogin ? "none" : "inline-block" }}>
              <LoginForm type="text">
                <AccountCircleIcon color="primary" sx={{ mr: 0.5 }} />
                Đăng nhập
              </LoginForm>
            </Box>
            <Box sx={{ display: isLogin ? "none" : "inline-block" }}>
              <RegisterForm>
                <HowToRegIcon color="primary" sx={{ mr: 0.5 }} /> Đăng ký
              </RegisterForm>
            </Box>
          </Box>

          {/* Menu Responsive */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "start",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: "primary.main" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                textAlign: "start",
              }}
            >
              {/* <Stack> */}
              {/* <UserAccount
                username={userLogin.user.username}
                avatar={userLogin.user.image}
              /> */}
              <MenuItem onClick={() => handleCloseUserMenu()}>
                <LoginForm type="text">
                  <AccountCircleIcon color="primary" sx={{ mr: 0.5 }} />
                  Đăng nhập
                </LoginForm>
              </MenuItem>
              <MenuItem onClick={() => handleCloseUserMenu()}>
                <RegisterForm>
                  <HowToRegIcon color="primary" sx={{ mr: 0.5 }} />
                  Đăng ký
                </RegisterForm>
              </MenuItem>
              <MenuItem onClick={() => handleCloseUserMenu()}>
                <DownloadApp />
              </MenuItem>
              <MenuItem onClick={() => handleCloseUserMenu()}>
                <Button
                  sx={{ color: "text.primary", display: "block" }}
                  onClick={() => navigate("/contact")}
                >
                  <HandshakeOutlinedIcon
                    color="primary"
                    sx={{ mr: 0.5 }}
                    fontSize="small"
                  />
                  Hợp tác
                </Button>
              </MenuItem>
              <MenuItem onClick={() => handleCloseUserMenu()}>
                <FavoriteBtn />
              </MenuItem>
              <MenuItem onClick={() => handleCloseUserMenu()}>
                <MyBooking />
              </MenuItem>
            </Menu>
          </Box>

          {/* register&Login */}
          <Box
            sx={{ flexGrow: 0, display: !isLogin ? "none" : "inline-block" }}
          >
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt={userLogin.user.username.toUpperCase()}
                  src="/static/images/avatar/2.jpg"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={() => handleCloseUserMenu()}>
                <Typography component={"span"} sx={{ margin: 0 }}>
                  Cập nhật thông tin
                </Typography>
              </MenuItem>
              <MenuItem onClick={() => handleCloseUserMenu()}>
                <FavoriteBtn />
              </MenuItem>
              <MenuItem onClick={() => handleCloseUserMenu()}>
                <MyBooking />
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCloseUserMenu();
                  dispatch(LogoutRes());
                }}
                sx={{ alignItems: "center" }}
              >
                <Typography component={"span"} sx={{ margin: 0 }}>
                  <LogoutIcon sx={{ color: "primary.main" }} />
                  Logout
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
