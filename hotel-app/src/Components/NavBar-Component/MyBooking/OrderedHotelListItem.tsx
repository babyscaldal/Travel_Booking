import { TableRow, TableCell, Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import DeleteButton from "./DeleteButton";
import Carousel from "react-bootstrap/Carousel";
import { IHotel } from "../../../types/hotelType";
import getRandomImage from "../../../Ultiliti/Random";
// import getRandomImage from "../../Ultiliti/Random";
// import { IHotel } from "../../types/hotelType";

interface IOrderedHotelListItem {
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
  id: number;
}

export const OrderedHotelListItem = ({
  id,
  arr,
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
      <TableCell align="center">
        <img
          height="100px"
          width="100%"
          className="d-block w-100"
          src={getRandomImage(imageUrl)}
          srcSet={getRandomImage(imageUrl)}
          alt="hotel image"
          style={{ objectFit: "cover" }}
        />
      </TableCell>
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
