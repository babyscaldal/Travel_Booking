import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface ILoginSuccess {
  onSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  showSuccess: boolean;
}

export default function LoginSuccess({
  onSuccess,
  showSuccess,
}: ILoginSuccess) {
  const handleClose = (_?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    onSuccess(false);
  };

  return (
    <Snackbar open={showSuccess} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
        Bạn đã đăng nhập thành công!
      </Alert>
    </Snackbar>
  );
}
