import { Box, Button, IconButton, Menu, MenuItem } from "@mui/material";
import * as React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useDispatch, useSelector } from "react-redux";
import { LogoutRes } from "../../../actions/login.actions";
import MenuIcon from "@mui/icons-material/Menu";
import DownloadApp from "../DownLoad/DownloadApp";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import { useNavigate } from "react-router-dom";
import MyBooking from "../MyBooking/MyBooking";
import LoginForm from "../Login/LoginForm";
import RegisterForm from "../Register/RegisterForm";
import UserAccount from "../UserAccount/UserAccount";
import { UserState } from "../../../reducers/login.reducer";

export interface IUserAccountProps {
  username: string;
  avatar: string;
}

export default function MenuResponsive() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLogin: UserState = useSelector((state: any) => state.loginReducer);

  return (
    <React.Fragment>
      <IconButton
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2, display: { xs: "inline-block", md: "none" } }}
      >
        <MenuIcon />
      </IconButton>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
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
          <Box
            sx={{
              display: `${userLogin.isLogin ? "none" : "flex"}`,
              flexDirection: "column",
            }}
          >
            {/* Dowload App */}
            <DownloadApp />
            {/* Contact */}
            <Button
              color="inherit"
              onClick={() => {
                navigate("/contact");
                handleClose();
              }}
              // sx={{ display: `${userLogin.isLogin ? "none" : "inline-block"}` }}
            >
              <HandshakeOutlinedIcon
                color="primary"
                sx={{ mr: 0.5 }}
                fontSize="small"
              />
              Hợp tác
            </Button>

            {/* My booking */}

            <MyBooking handleClose={handleClose} />

            <Box
              sx={{
                display: `${userLogin.isLogin ? "none" : "flex"}`,
                flexDirection: "column",
              }}
            >
              {/* Login */}

              <LoginForm handleCloseMenu={handleClose} />

              {/* Sign Up */}
              <RegisterForm handleCloseMenu={handleClose} />
            </Box>
          </Box>
        </Box>
      </Menu>
    </React.Fragment>
  );
}
