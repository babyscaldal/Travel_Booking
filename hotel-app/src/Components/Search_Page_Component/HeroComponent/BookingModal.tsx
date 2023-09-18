import * as React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import BookingTabPanel from "../../HomePage_Component/BookingTabPanel/BookingTabs/BookingTabPanel";
import { Box } from "@mui/material";

export default function BookingModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        sx={{
          fontSize: {
            xs: "15px",
            md: "25px",
            lg: "35px",
          },
          color: "#fff",
          width: "80%",
          height: "60px",
          marginTop: "20px",
          "&:hover": {
            backgroundColor: "rgba(76, 175,80,1)",
          },
          backgroundColor: "rgba(255, 255, 255,0.2)",
          animation: "myAnimation 2s ease-in-out infinite",
          "@keyframes myAnimation": {
            "0%": {
              transform: "scale(1)",
            },
            "50%": {
              transform: "scale(1.2)",
              boxShadow: "0 0 24px #ccc",
            },
            "100%": {
              transform: "scale(1)",
            },
          },
        }}
        onClick={handleOpen}
      >
        Start Booking Now
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <BookingTabPanel />
        </Box>
      </Modal>
    </div>
  );
}
