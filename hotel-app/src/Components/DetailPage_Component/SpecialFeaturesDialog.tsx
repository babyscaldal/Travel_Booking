import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

const view: string[] = [
  "Hướng nhìn ra bãi biển",
  "Hướng nhìn ra đường chân trời thành phố",
  "Hướng nhìn ra vườn",
  "Hướng nhìn ra núi",
  "Hướng nhìn ra đại dương",
  "Hướng nhìn ra hồ bơi",
  "Hướng nhìn ra khu nghỉ dưỡng",
  "Hướng nhìn ra biển",
];
const bathroom: string[] = [
  "Bồn tắm",
  "Máy sấy tóc",
  "Sản phẩm vệ sinh",
  "Dầu gội đầu",
  "Dầu xả",
  "Xà phòng tắm",
  "Bồn cầu vệ sinh thông minh",
  "Vòi sen tắm ngoài trời",
  "Nước nóng",
  "Sữa tắm",
];

const bedroom: string[] = [
  "Máy giặt phí miễn phí trong căn hộ",
  "Khăn tắm, khăn trải giường, xà phòng và giấy vệ sinh",
  "Móc treo quần áo",
  "Chăn ga bằng vải cotton",
  "Thêm chăn gối",
  "Mành chắn sáng cho phòng",
  "Bàn là",
  "Giá phơi quần áo",
  "Két sắt",
  "Nơi để quần áo: tủ quần áo và tủ ngăn kéo",
];

const entertainment: string[] = [
  `60" HDTV với Netflix, truyền hình cáp cao cấp`,
  "Thiết bị tập thể dục: tạ tay, máy tập đạp xe, máy chạy bộ",
  "Sách và ấn phẩm để đọc",
];

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    // padding: theme.spacing(2),
    padding: "24px 50px",
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function SpecialFeaturesDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Xem toàn bộ...
      </Button> */}
      <p
        onClick={handleClickOpen}
        style={{
          fontWeight: "bolder",
          cursor: "pointer",
          textDecoration: "underline",
        }}
      >
        Xem thêm...
      </p>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle
          sx={{ m: 0, p: 2, textAlign: "center", fontSize: 30 }}
          id="customized-dialog-title"
        >
          Nơi này có gì cho bạn
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          {/* <h4></h4> */}

          {/* View */}
          <h5>Hướng nhìn đẹp mắt</h5>
          <ul>
            {view.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <hr />

          {/* bathroom */}
          <h5>Phòng tắm</h5>
          <ul>
            {bathroom.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <hr />

          {/* Bedroom and laundry */}
          <h5>Phòng ngủ và giặt ủi</h5>
          <ul>
            {bedroom.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <hr />
          {/* Entertainment */}
          <h5>Giải trí</h5>
          <ul>
            {entertainment.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </DialogContent>
        {/* <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions> */}
      </BootstrapDialog>
    </div>
  );
}
