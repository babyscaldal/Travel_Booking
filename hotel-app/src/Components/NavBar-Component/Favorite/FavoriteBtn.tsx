import { Badge, Button } from "@mui/material";
import * as React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { UserState } from "../../../reducers/login.reducer";
import LoginWarning from "../../LoginWarning/LoginWarning";
import { useState } from "react";
import { IHotel } from "../../../types/hotelType";

export interface IMyBookingProps {
  handleClose?: () => void;
}

export default function FavoriteBtn({ handleClose }: IMyBookingProps) {
  const [open, setOpen] = useState<boolean>(false);
  const userLogin: UserState = useSelector((state: any) => state.loginReducer);
  const navigate = useNavigate();
  const favoriteList: IHotel[] = useSelector(
    (state: any) => state.sortHotel.favoriteList
  );

  const isLogin: UserState = useSelector(
    (state: any) => state.loginReducer.isLogin
  );

  return (
    <React.Fragment>
      <Button
        sx={{ color: "text.primary", display: "block" }}
        onClick={() =>
          userLogin.isLogin ? navigate("favorite-hotel") : setOpen(true)
        }
      >
        <Badge
          badgeContent={isLogin ? favoriteList.length : null}
          color="error"
          sx={{ mr: 1.5 }}
        >
          <FavoriteIcon color="primary" />
          {/* <FavoriteIcon color="primary" sx={{ mr: 0.5 }} /> */}
        </Badge>
        Yêu thích
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
