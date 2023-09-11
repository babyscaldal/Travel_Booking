import * as React from "react";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Sheet from "@mui/joy/Sheet";
import BookingTabPanel from "../../HomePage_Component/BookingTabPanel/BookingTabs/BookingTabPanel";

export default function BookingModal() {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <React.Fragment>
      <Button
        sx={{
          width: "80%",
          height: "60px",
          fontSize: "24px",
          marginTop: "20px",
          // "&:hover": {
          //   color: "#000",
          // },
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
        onClick={() => setOpen(true)}
      >
        Start Booking Now
      </Button>

      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet
          variant="outlined"
          sx={{
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
          }}
        >
          <ModalClose
            variant="outlined"
            sx={{
              top: "calc(-1/4 * var(--IconButton-size))",
              right: "calc(-1/4 * var(--IconButton-size))",
              boxShadow: "0 2px 12px 0 rgba(0 0 0 / 0.2)",
              borderRadius: "50%",
              bgcolor: "background.surface",
            }}
          />
          <BookingTabPanel />
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}
