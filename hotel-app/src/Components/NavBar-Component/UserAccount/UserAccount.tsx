import { Button, Menu, MenuItem } from "@mui/material";
import * as React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useDispatch, useSelector } from "react-redux";
import { LogoutRes } from "../../../actions/login.actions";
import { UserState } from "../../../reducers/login.reducer";
import DownloadApp from "../DownLoad/DownloadApp";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import { useNavigate } from "react-router-dom";
import MyBooking from "../MyBooking/MyBooking";

export interface IUserAccountProps {
  username: string;
  avatar: string;
}

export default function UserAccount({ username, avatar }: IUserAccountProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const dispatch = useDispatch();
  const userLogin: UserState = useSelector((state: any) => state.loginReducer);
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={<ArrowDropDownIcon />}
        color="inherit"
      >
        <img
          src={avatar}
          alt=""
          style={{ height: "26px", borderRadius: "50px", marginRight: "5px" }}
        />
        {username}
      </Button>

      {/* Profile */}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => handleClose()}>
          <p style={{ margin: 0 }}>Cập nhật thông tin</p>
        </MenuItem>
        <MenuItem
          onClick={() => handleClose()}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <MyBooking />
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigate("/contact");
            handleClose();
          }}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <Button color="inherit" onClick={() => navigate("/contact")}>
            <HandshakeOutlinedIcon
              color="primary"
              sx={{ mr: 0.5 }}
              fontSize="small"
            />
            Hợp tác
          </Button>
        </MenuItem>
        <MenuItem
          onClick={() => handleClose()}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <DownloadApp />
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            dispatch(LogoutRes());
          }}
          sx={{ alignItems: "center" }}
        >
          <p style={{ margin: 0 }}>Logout</p>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
