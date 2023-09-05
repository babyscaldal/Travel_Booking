import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Button from "@mui/material/Button";
import BookingTabPanel from "../BookingTabs/BookingTabPanel";
import { Box } from "@mui/material";

export default function HomePage() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      {/* <Button onClick={handleOpen}>Show backdrop</Button> */}
      <Box onClick={() => setOpen(true)}>
        <BookingTabPanel />
      </Box>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <BookingTabPanel />
      </Backdrop>
    </div>
  );
}
