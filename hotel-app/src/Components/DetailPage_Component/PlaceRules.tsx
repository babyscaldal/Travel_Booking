import { Grid } from "@mui/material";
import * as React from "react";

const rules: string[] = [
  "Nhận phòng sau 15:00",
  "Trả phòng trước 11:00",
  "Không vượt quá số người qui định mỗi phòng",
];

const safeAccommodation: string[] = [
  "Có công trùng",
  "Hồ, sông, nguồn nước khác gần đó",
  "Vị trí trên cao không có lan can hoặc cấu trúc bảo vệ",
];

const CancellationPolicy: string[] = ["Hủy phòng tối thiểu trước 3 ngày"];

export default function PlaceRules() {
  return (
    <React.Fragment>
      <h5 style={{ paddingBottom: "20px" }}>Những điều cần biết</h5>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: { xs: "center", md: "start" } }}
      >
        <Grid item xs={12} md={4}>
          <h6 style={{ fontWeight: "bold" }}>Nội quy nhà</h6>
          {rules.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </Grid>
        <Grid item xs={12} md={4}>
          <h6 style={{ fontWeight: "bold" }}>An toàn và chỗ ở</h6>
          {safeAccommodation.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </Grid>
        <Grid item xs={12} md={4}>
          <h6 style={{ fontWeight: "bold" }}>Chính sách hủy</h6>
          {safeAccommodation.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
