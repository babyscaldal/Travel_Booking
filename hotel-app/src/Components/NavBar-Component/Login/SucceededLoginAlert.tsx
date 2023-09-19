import * as React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { SnackbarOrigin } from "@mui/material/Snackbar";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface ISucceededLoginAlert {
  show: boolean;
}

export default function SucceededLoginAlert({ show }: ISucceededLoginAlert) {
  interface State extends SnackbarOrigin {
    open: boolean;
  }
  const [state, setState] = React.useState<State>({
    open: false,
    vertical: "bottom",
    horizontal: "right",
  });

  const { vertical, horizontal } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      {/* <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button> */}
      <Snackbar
        open={show}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert severity="success">Bạn đã đăng nhập thành công!</Alert>
      </Snackbar>
    </Stack>
  );
}
