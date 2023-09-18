import * as React from "react";
import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { UserState } from "../../../reducers/login.reducer";
import { useSelector } from "react-redux";
// import { useFormContext } from "react-hook-form";
// import { useSelector } from "react-redux";
// import { UserState } from "../../../reducers/login.reducer";

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
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    onSuccess(false);
  };
  console.log("showSuccess: ", showSuccess);

  return (
    <Snackbar open={showSuccess} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
        Bạn đã đăng nhập thành công!
      </Alert>
    </Snackbar>
  );
}
