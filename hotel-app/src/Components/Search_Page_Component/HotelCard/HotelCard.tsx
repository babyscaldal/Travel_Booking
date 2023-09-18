import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import { capitalizeFirstLetter } from "../../../Ultiliti/CapitalizeFirstLetter";
import { Box, Checkbox, Rating } from "@mui/material";
import { useSelector } from "react-redux";
import getRandomImage from "../../../Ultiliti/Random";
import { IHotel } from "../../../types/hotelType";
import { Carousel } from "react-bootstrap";

import FavoriteIcon from "@mui/icons-material/Favorite";
export interface IAccommodation {
  address: string;
  name: string;
  star: number;
  rating: number;
  price: number;
  // imgUrl: string[];
  // subImgUrl: string[];
  typeAccommodation: string;
  numberOfRoom: number;
  onClick: () => void;
  favoriteToggle: () => void;
}

export function HotelCard({
  address,
  name,
  star,
  rating,
  price,
  typeAccommodation,
  numberOfRoom,
  onClick,
  favoriteToggle,
}: IAccommodation) {
  const sortHotel: IHotel[] = useSelector(
    (state: any) => state.sortHotel.locationHotelList
  );

  return (
    <Box onClick={onClick}>
      <Card
        variant="outlined"
        sx={{ width: 270, margin: { xs: "auto", md: "auto" } }}
      >
        <CardOverflow>
          <AspectRatio ratio="2">
            <Carousel data-bs-theme="dark">
              {sortHotel.map((item) => (
                <Carousel.Item key={item.id}>
                  <img
                    className="d-block w-100"
                    src={getRandomImage(item.image)}
                    srcSet={getRandomImage(item.image)}
                    alt="hotel image"
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </AspectRatio>
          <Checkbox
            sx={{
              position: "absolute",
              top: "10px",
              right: "10px",
              zIndex: 8,
            }}
            icon={<FavoriteIcon sx={{ color: "secondary.main" }} />}
            checkedIcon={<FavoriteIcon sx={{ color: "error.main" }} />}
            onClick={(e) => {
              e.stopPropagation();
              favoriteToggle();
            }}
          />
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
            ❤️ Rating:{" "}
            <Typography
              component={"span"}
              color={"success"}
              sx={{ fontWeight: "bold" }}
            >
              {rating}
            </Typography>
          </Typography>
          {/* <RatingComponent rating={rating} /> */}
          <Typography level="body-sm">
            🚪 Số phòng còn lại:{" "}
            <Typography
              component={"span"}
              color={"success"}
              sx={{ fontWeight: "bold" }}
            >
              {numberOfRoom}
            </Typography>
          </Typography>
          <Typography level="body-sm">
            🏠 Loai hình lưu trú:
            <Typography
              component={"span"}
              color={"success"}
              sx={{ fontWeight: "bold" }}
            >
              {" "}
              {capitalizeFirstLetter(typeAccommodation)}
            </Typography>
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
              <Rating name="read-only" value={star} readOnly />
              {/* {star}⭐ */}
            </Typography>
          </CardContent>
        </CardOverflow>
      </Card>
    </Box>
  );
}
