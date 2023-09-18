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
  onFail: React.Dispatch<React.SetStateAction<boolean>>;
  showFail: boolean;
}

export default function LoginFail({ onFail, showFail }: ILoginSuccess) {
  const handleClose = (_?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    onFail(false);
  };

  return (
    <Snackbar open={showFail} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
        Email hoặc mật khâu không chính xác! Xin hãy xác nhận lại trước khi đăng
        nhập
      </Alert>
    </Snackbar>
  );
}
