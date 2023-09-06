import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";

export default function OverflowCard() {
  return (
    <Card variant="outlined" sx={{ width: 280 }}>
      <CardOverflow>
        <AspectRatio ratio="2">
          <img
            src="https://th.bing.com/th/id/OIG.JxEAhYjKHZv8dat1PixG?pid=ImgGn"
            srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="title-md">Yosemite National Park</Typography>
        <Typography level="body-sm">California</Typography>
      </CardContent>
      <CardOverflow variant="soft" sx={{ bgcolor: "background.level1" }}>
        <Divider inset="context" />
        <CardContent
          orientation="horizontal"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography
            level="body-md"
            fontWeight="md"
            textColor="text.secondary"
          >
            $500/đêm
          </Typography>
          <Typography
            level="body-md"
            fontWeight="md"
            textColor="text.secondary"
          >
            ⭐5
          </Typography>
        </CardContent>
      </CardOverflow>
    </Card>
  );
}
