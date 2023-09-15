import { Button } from "@mui/material";
import * as React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { UserState } from "../../../reducers/login.reducer";
import LoginWarning from "../../LoginWarning/LoginWarning";
import { useState } from "react";

export interface IMyBookingProps {
  handleClose?: () => void;
}

export default function FavoriteBtn({ handleClose }: IMyBookingProps) {
  const [open, setOpen] = useState<boolean>(false);
  const userLogin: UserState = useSelector((state: any) => state.loginReducer);
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Button
        sx={{ color: "text.primary" }}
        onClick={() =>
          userLogin.isLogin ? navigate("favorite-hotel") : setOpen(true)
        }
      >
        <FavoriteIcon color="primary" sx={{ mr: 0.5 }} /> Yêu thích
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
