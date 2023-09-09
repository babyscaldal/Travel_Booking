import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import { capitalizeFirstLetter } from "../../../Ultiliti/CapitalizeFirstLetter";

export interface IAccommodation {
  address: string;
  name: string;
  star: number;
  rating: number;
  price: number;
  imgUrl: string;
  subImgUrl: string;
  typeAccommodation: string;
}

export function HotelCard({
  address,
  name,
  star,
  rating,
  price,
  imgUrl,
  subImgUrl,
  typeAccommodation,
}: IAccommodation) {
  return (
    <Card variant="outlined" sx={{ width: 270, margin: "auto" }}>
      <CardOverflow>
        <AspectRatio ratio="2">
          <div>
            <img
              src={imgUrl}
              srcSet={subImgUrl}
              loading="lazy"
              alt="hotel image"
            />
          </div>
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography
          level="title-md"
          textOverflow={"ellipsis"}
          overflow={"hidden"}
          whiteSpace={"nowrap"}
        >
          {name}
        </Typography>
        <Typography
          level="body-sm"
          textOverflow={"ellipsis"}
          overflow={"hidden"}
          whiteSpace={"nowrap"}
        >
          {address}
        </Typography>
        <Typography level="body-sm">
          Rating: <span style={{ fontWeight: "bold" }}>{rating}</span> ❤️
        </Typography>
        <Typography level="body-sm">
          🏠 {capitalizeFirstLetter(typeAccommodation)}
        </Typography>
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
            ${price}/đêm
          </Typography>
          <Typography
            level="body-md"
            fontWeight="md"
            textColor="text.secondary"
          >
            ⭐{star}
          </Typography>
        </CardContent>
      </CardOverflow>
    </Card>
  );
}
