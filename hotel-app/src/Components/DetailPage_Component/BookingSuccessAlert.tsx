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
import { useSelector } from "react-redux";
import { RootState } from "../../stores.ts/stores";
import { Box } from "@mui/material";

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

  const themeApply = useSelector(
    (state: RootState) => state.darkModeReducer.isDark
  );

  return (
    <div>
      <Button
        onClick={handleClickOpen}
        size="large"
        type="submit"
        variant="contained"
        color="warning"
        disabled={isSubmitting === true}
        sx={{
          color: themeApply ? "#text.primary" : "#fff",
          width: "100%",
          height: "40px",
        }}
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
          <Box sx={{ display: "flex", justifyContent: "center", gap: "10px" }}>
            <Button
              variant="contained"
              color="success"
              sx={{
                fontWeight: "bold",
                color: themeApply ? "#text.primary" : "#fff",
              }}
              autoFocus
              onClick={() => {
                navigate("/");
                handleClose();
              }}
            >
              Quay về Trang chủ
            </Button>
            <Button
              variant="contained"
              color="secondary"
              sx={{
                fontWeight: "bold",
                color: themeApply ? "#text.primary" : "#fff",
              }}
              autoFocus
              onClick={() => {
                navigate("/order-hotel");
                handleClose();
              }}
            >
              Chỗ đã đặt
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{
                fontWeight: "bold",
                color: themeApply ? "#text.primary" : "#fff",
              }}
              autoFocus
              onClick={() => {
                handleClose();
              }}
            >
              Đặt tiếp
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </div>
  );
}
