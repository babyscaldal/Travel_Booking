import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";

interface IPictureComponent {
  url: string;
  width?: string;
  height?: string;
  onClick?: () => void;
}

export default function PictureComponent({
  url,
  height = "260px",
  width = "180px",
  onClick,
}: IPictureComponent) {
  return (
    <Card
      onClick={onClick}
      sx={{
        transition: "all 0.25s",
        "&:hover": {
          cursor: "pointer",
          scale: "0.95",
        },
        height: { height },
        width: { width },
        margin: "auto",
      }}
    >
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
