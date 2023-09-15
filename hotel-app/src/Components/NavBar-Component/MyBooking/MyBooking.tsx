import { Button } from "@mui/material";
import * as React from "react";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { UserState } from "../../../reducers/login.reducer";
import LoginWarning from "../../LoginWarning/LoginWarning";
import { useState } from "react";
import { RootState } from "../../../stores.ts/stores";

export interface IMyBookingProps {
  handleClose?: () => void;
}

export default function MyBooking({ handleClose }: IMyBookingProps) {
  const [open, setOpen] = useState<boolean>(false);
  const userLogin: UserState = useSelector((state: any) => state.loginReducer);
  const navigate = useNavigate();
  const themeApply = useSelector(
    (state: RootState) => state.darkModeReducer.isDark
  );
  return (
    <React.Fragment>
      <Button
        sx={{
          color: "text.primary",
        }}
        onClick={() =>
          userLogin.isLogin ? navigate("order-hotel") : setOpen(true)
        }
      >
        <ListAltIcon color="primary" sx={{ mr: 0.5 }} /> Chỗ đã đặt
      </Button>
      {
        <LoginWarning
          open={open}
          setOpen={setOpen}
          handleCloseMenu={handleClose}
        />
      }
    </React.Fragment>
  );
}
