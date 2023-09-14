import { Button } from "@mui/material";
import * as React from "react";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { useSelector } from "react-redux";
import { RootState } from "../../../stores.ts/stores";

export interface IMyBookingProps {}

export default function MyBooking(props: IMyBookingProps) {
  const themeApply = useSelector(
    (state: RootState) => state.darkModeReducer.isDark
  );
  return (
    <React.Fragment>
      <Button
        sx={{
          color: "text.primary",
        }}
      >
        <ListAltIcon color="primary" sx={{ mr: 0.5 }} /> Chỗ đã đặt
      </Button>
    </React.Fragment>
  );
}
