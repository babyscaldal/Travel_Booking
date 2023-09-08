import { Container, Grid } from "@mui/material";
import AdvantageItem, { IAdvatageItemProps } from "./AdvantageItem";

import * as React from "react";

export default function AdvantageContainer() {
  const advantage: IAdvatageItemProps[] = [
    {
      title: "Giải pháp tối ưu nhất",
      imgSrc:
        "https://ik.imagekit.io/tvlk/image/imageResource/2017/05/17/1495008495760-d92160ea2b56fc1128cbdff93aa43774.png?tr=h-150,q-75,w-150",
      description:
        "Giải pháp toàn diện - giúp bạn tìm chuyến bay và khách sạn khắp Việt Nam và Đông Nam Á một cách tiết kiệm.",
    },
    {
      title: "Giá rẻ mỗi ngày",
      imgSrc:
        "https://ik.imagekit.io/tvlk/image/imageResource/2017/05/17/1495008504598-6c1d5675c41e47eee0b27c59c07a2bbd.png?tr=h-150,q-75,w-150",
      description:
        "Giá bạn thấy là giá bạn trả! Dễ dàng so sánh khi không cần phải trả thêm chi phí ẩn! ",
    },
    {
      title: "Thanh toán tiện lợi",
      imgSrc:
        "https://ik.imagekit.io/tvlk/image/imageResource/2017/05/17/1495008514239-c1d0a51538cd02053c9b1a6c567fe5b5.png?tr=h-150,q-75,w-150",
      description:
        "Giao dịch trực tuyến an toàn với nhiều lựa chọn như thanh toán tại cửa hàng tiện lợi, chuyển khoản ngân hàng, thẻ tín dụng đến Internet Banking. Không tính phí giao dịch.",
    },
    {
      title: "Hỗ trợ khách hàng 24/7",
      imgSrc:
        "https://ik.imagekit.io/tvlk/image/imageResource/2017/05/17/1495008521046-3cee046bb3ddb863398300f89d83c0f9.png?tr=h-150,q-75,w-150",
      description:
        "Đội ngũ nhân viên hỗ trợ khách hàng luôn sẵn sàng giúp đỡ bạn trong từng bước của quá trình đặt vé",
    },
  ];
  return (
    <React.Fragment>
      <Container maxWidth="lg" sx={{ padding: "48px 0" }}>
        <h2 style={{ textAlign: "center", fontWeight: "bolder" }}>
          Tại sao nên đặt chỗ với TravelDream?
        </h2>
        <Grid container spacing={2}>
          {advantage.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <AdvantageItem
                imgSrc={item.imgSrc}
                title={item.title}
                description={item.description}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}
