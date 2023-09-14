import { Button } from "@mui/material";
import * as React from "react";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { UserState } from "../../../reducers/login.reducer";
import LoginForm from "../Login/LoginForm";
import LoginWarning from "../../LoginWarning/LoginWarning";
import { useState } from "react";

export interface IMyBookingProps {}

export default function MyBooking(props: IMyBookingProps) {
  const [open, setOpen] = useState<boolean>(false);
  const userLogin: UserState = useSelector((state: any) => state.loginReducer);
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Button
        color="inherit"
        onClick={() =>
          userLogin.isLogin ? navigate("order-hotel") : setOpen(true)
        }
      >
        <ListAltIcon color="primary" sx={{ mr: 0.5 }} /> Chỗ đã đặt
      </Button>
      {<LoginWarning open={open} setOpen={setOpen} />}
    </React.Fragment>
  );
}
