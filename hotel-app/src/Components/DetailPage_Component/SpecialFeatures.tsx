import { Grid } from "@mui/material";
import * as React from "react";

export default function SpecialFeatures() {
  const featuesArr: string[] = [
    "🌇 Hướng nhìn ra đường chân trời thành phố",
    "🌳 Hướng nhìn ra vườn cây",
    "🌊 Lối ra bãi biển",
    "🥣 Bếp",
    "📶 Wi-fi",
    "🏠 Không gian riêng để làm việc",
    "🚘 Chỗ đỗ xe miễn phí tại nơi ở",
    "🚿 Bể bơi Riêng ngoài trời có sẵn hoặc phục vụ quanh năm, mở cửa 24 giờ, nước mặn",
    "🛁Bồn tắm nước nóng riêng",
    "🧯Máy báo khói - cháy",
  ];
  return (
    <React.Fragment>
      <h5>Nơi này có những gì cho bạn</h5>
      <Grid container>
        {featuesArr.map((feature, index) => (
          <Grid item key={index} xs={10} sm={6}>
            <p>{feature}</p>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}
