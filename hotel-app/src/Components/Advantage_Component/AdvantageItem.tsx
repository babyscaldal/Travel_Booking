import { Stack } from "@mui/material";
import * as React from "react";

export interface IAdvatageItemProps {
  imgSrc: string;
  title: string;
  description: string;
}

export default function AdvantageItem({
  imgSrc,
  title,
  description,
}: IAdvatageItemProps) {
  return (
    <Stack sx={{ textAlign: "center" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={imgSrc} alt={title} style={{ width: 150, height: 150 }} />
      </div>
      <h4 style={{ margin: "48px 0 16px 0" }}>{title}</h4>
      <p style={{ textAlign: "justify" }}>{description}</p>
    </Stack>
  );
}
