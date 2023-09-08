import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";

interface IPictureComponent {
  url: string;
  width?: string;
  height?: string;
}

export default function PictureComponent({
  url,
  height = "260px",
  width = "180px",
}: IPictureComponent) {
  return (
    <Card sx={{ height: { height }, width: { width }, margin: "auto" }}>
      <CardCover>
        <img
          src={url}
          loading="lazy"
          alt=""
          width="100%"
          height="100%"
          style={{ objectFit: "cover" }}
        />
      </CardCover>
    </Card>
  );
}
