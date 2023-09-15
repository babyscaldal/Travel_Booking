import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { useFormContext } from "react-hook-form";
import { useSelector } from "react-redux";
import { UserState } from "../../../reducers/login.reducer";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function LoginSuccess() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const isLogin: UserState = useSelector(
    (state: any) => state.loginReducer.isLogin
  );

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Button
        color="primary"
        type="submit"
        variant="contained"
        onClick={handleClick}
      >
        Login
      </Button>
      <>
        {/* {isValid && (
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert severity="error">
              Đăng nhập không thành công!
              <br /> Hãy xem lại email và mật khẩu
            </Alert>
          </Snackbar>
        )} */}

        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Bạn đã đăng nhập thành công!
          </Alert>
        </Snackbar>
      </>
    </Stack>
  );
}
