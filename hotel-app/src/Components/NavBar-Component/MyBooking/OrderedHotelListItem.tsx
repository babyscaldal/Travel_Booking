import { TableRow, TableCell, Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import DeleteButton from "./DeleteButton";
import Carousel from "react-bootstrap/Carousel";
import { IHotel } from "../../../types/hotelType";
import getRandomImage from "../../../Ultiliti/Random";
// import getRandomImage from "../../Ultiliti/Random";
// import { IHotel } from "../../types/hotelType";

interface IOrderedHotelListItem {
  id: number;
  imageUrl: string[];
  hotelName: string;
  address: string;
  totalPrice: number;
  adultQuantity: number;
  childrenQuantity: number;
  checkinDate: string;
  checkoutDate: string;
  roomQuantity: number;
  arr: IHotel[];
}

export const OrderedHotelListItem = ({
  arr,
  id,
  imageUrl,
  hotelName,
  address,
  totalPrice,
  adultQuantity,
  childrenQuantity,
  checkinDate,
  checkoutDate,
  roomQuantity,
}: IOrderedHotelListItem) => {
  return (
    <TableRow
      sx={{
        "&:last-child td, &:last-child th": { border: 0 },
      }}
    >
      <Carousel
        data-bs-theme="dark"
        slide={false}
        fade
        indicators={false}
        controls={false}
      >
        {arr.map((item) => (
          <Carousel.Item>
            <Box
              sx={{
                height: "100px",
                width: "200px",
                padding: "2.5px 0",
                backgroundColor: "transparent",
              }}
            >
              <img
                height="100%"
                width="100%"
                className="d-block w-100"
                src={getRandomImage(item.image)}
                srcSet={getRandomImage(item.image)}
                alt="hotel image"
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Carousel.Item>
        ))}
      </Carousel>
      {/* </Box> */}
      {/* </TableCell> */}
      <TableCell align="center">
        <Typography
          component={"span"}
          sx={{
            fontWeight: "bold",
            color: "secondary.main",
            textOverflow: "ellipsis",
          }}
        >
          {hotelName}
        </Typography>
        <br />
        <Typography>{address}</Typography>
      </TableCell>
      <TableCell align="center">
        <Typography style={{ fontWeight: "bold", color: "secondary.main" }}>
          {roomQuantity}
        </Typography>
      </TableCell>
      <TableCell align="center">
        <Typography
          component={"span"}
          style={{ fontWeight: "bold", color: "secondary.main" }}
        >
          {adultQuantity}
        </Typography>
      </TableCell>
      <TableCell align="center">
        <Typography
          component={"span"}
          style={{ fontWeight: "bold", color: "secondary.main" }}
        >
          {childrenQuantity}
        </Typography>
      </TableCell>
      <TableCell align="center">
        <Typography
          component={"span"}
          style={{ fontWeight: "bold", color: "secondary.main" }}
        >
          ${totalPrice}
        </Typography>
      </TableCell>
      <TableCell align="center">
        <Typography
          component={"span"}
          style={{ fontWeight: "bold", color: "secondary.main" }}
        >
          {" "}
          {checkinDate}
        </Typography>
      </TableCell>
      <TableCell align="center">
        <Typography
          component={"span"}
          style={{ fontWeight: "bold", color: "secondary.main" }}
        >
          {" "}
          {checkoutDate}
        </Typography>
      </TableCell>
      <TableCell align="center">
        <NavLink to={"/"}>Detail</NavLink>
      </TableCell>
      <TableCell align="center">
        <DeleteButton hotelId={id} />
      </TableCell>
    </TableRow>
  );
};
