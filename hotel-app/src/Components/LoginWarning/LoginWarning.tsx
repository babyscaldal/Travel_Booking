import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

interface IBooleanState {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleCloseMenu?: () => void;
}

export default function LoginWarning({
  open,
  setOpen,
  handleCloseMenu,
}: IBooleanState) {
  // const [open, setOpen] = React.useState(props.booleanState);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    handleCloseMenu && handleCloseMenu();
  };

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Cảnh báo đăng nhập"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Để đặt được khách sạn và có trải nghiệm tốt nhất, bạn nên đăng nhập
            / đăng ký tài khoản trước!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleClose();
            }}
            autoFocus
          >
            Tôi đã hiểu
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
