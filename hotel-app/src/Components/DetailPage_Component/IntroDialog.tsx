import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";

import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { IHotel } from "../../types/hotelType";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const hotel: IHotel = {
  provinceId: 1,
  location: "Hà Nội",
  type: "hotel",
  id: 1,
  name: "InterContinental Hanoi Westlake",
  address: "1A Nghi Tam, Tay Ho, Hanoi",
  rating: 4.3,
  price: 150,
  stars: 3,
  amenities: ["Swimming pool", "Spa", "Fitness center"],
  description:
    "InterContinental Hanoi Westlake is a luxurious 5-star hotel located on the peaceful waters of West Lake. It offers stunning lake views and top-notch amenities, including a swimming pool, spa, and fitness center.",
  image: [
    "https://a0.muscache.com/im/pictures/13ee20e4-8255-4e9b-9252-cf5146fc4599.jpg?im_w=960",
    "https://a0.muscache.com/im/pictures/29a0069a-28d9-4fa9-914c-0cffa6bca754.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/6c49f73e-284c-4e69-8012-9870e122f086.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/b2298cc1-2df3-4d26-ac9c-15391b17e5a1.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/0a6ed1ce-83ba-4ab2-bf94-70e911373ab8.jpg?im_w=720",
  ],
  numberOfRoom: 33,
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function IntroDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
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
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
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
        <div
          style={{
            padding: "0px 30px",
            paddingTop: "25px",
            textAlign: "justify",
          }}
        >
          <h4>Giới thiệu về chỗ ở này</h4>

          <p>
            Hãy tưởng tượng thức dậy với âm thanh của sóng vỗ vào bờ, ngâm mình
            trong hồ bơi riêng của bạn và được đi ngắm nhìn một trong số bãi
            biển đẹp nhất thế giới. Đây chính xác là những gì bạn có thể trải
            nghiệm tại đây, một khu nghỉ dưỡng {hotel.stars}⭐ nằm ngay trung
            tâm Việt Nam.
          </p>
          <h5>Chỗ ở</h5>
          <p>
            Biệt thự của chúng tôi nằm ở một vị trí tuyệt vời, gần bãi biển, sân
            golf, trung tâm thành phố và Hội An, chỉ cách đó 15 phút lái xe.
            Điều này có nghĩa là bạn sẽ dễ dàng tiếp cận một loạt các hoạt động
            và điểm tham quan, cho dù bạn muốn thư giãn trên bãi biển hay khám
            phá khu vực địa phương. Ngoài vị trí đắc địa, Villa K8 còn cung cấp
            một loạt các dịch vụ được bao gồm hàng ngày. Các dịch vụ này bao gồm
            vệ sinh, sử dụng tất cả các bể bơi tại khu nghỉ dưỡng, wifi miễn
            phí, xe máy và đồ vệ sinh cá nhân. Điều này có nghĩa là bạn sẽ không
            phải lo lắng về bất cứ điều gì trong thời gian lưu trú, cho phép bạn
            thư giãn hoàn toàn và tận hưởng môi trường xung quanh sang trọng.
          </p>
          <h5>Tiện nghi khách có quyền sử dụng</h5>
          <p>Tận hưởng toàn quyền sử dụng các tiện nghi của khu nghỉ dưỡng:</p>
          <ul>
            <li>Các hồ bơi ngoài trời</li>
            <li>Beach Club</li>
            <li>Nhà hàng White Caps</li>
            <li>Nhà hàng và quán bar phản chiếu</li>
            <li>Tides Spa</li>
            <li>Sân quần vợt</li>
            <li>Trung tâm thể dục (có tính thêm phí)</li>
            <li>Sân golf</li>
          </ul>
          <h5>Những điều cần lưu ý khác</h5>
          <p style={{ marginBottom: 0 }}>
            Vui lòng thông báo cho chúng tôi nếu bạn yêu cầu bất kỳ thỏa thuận
            nào khác, chẳng hạn như dịch vụ trong biệt thự hoặc phương tiện di
            chuyển.....
          </p>
        </div>

        <DialogActions sx={{ padding: 0, paddingRight: "20px" }}>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
