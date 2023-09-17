import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useFormContext } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function BookingSuccessAlert() {
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const {
    formState: { isSubmitting },
  } = useFormContext();

  return (
    <div>
      <Button
        onClick={handleClickOpen}
        size="large"
        type="submit"
        variant="contained"
        sx={{ width: "100%", height: "40px" }}
        color="success"
        disabled={isSubmitting === true}
      >
        Đặt phòng
      </Button>

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent>
          <DialogContentText
            color={"success.main"}
            sx={{ fontWeight: "bold", fontSize: "30px" }}
          >
            🚀 Bạn đã đặt phòng thành công 🚀
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            sx={{ fontWeight: "bold" }}
            autoFocus
            onClick={() => {
              navigate("/order-hotel");
              handleClose();
            }}
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
