import { Button } from "@mui/material";
import * as React from "react";
import ListAltIcon from "@mui/icons-material/ListAlt";

export interface IMyBookingProps {}

export default function MyBooking(props: IMyBookingProps) {
  return (
    <React.Fragment>
      <Button color="inherit">
        <ListAltIcon color="primary" sx={{ mr: 0.5 }} /> Chỗ đã đặt
      </Button>
    </React.Fragment>
  );
}
