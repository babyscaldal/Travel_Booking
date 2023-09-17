import { TableRow, TableCell, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DeleteButton from "./DeleteButton";
import { IHotel } from "../../../types/hotelType";
import getRandomImage from "../../../Ultiliti/Random";
import { useSelector } from "react-redux";
import { RootState } from "../../../stores.ts/stores";
import DetailsIcon from "@mui/icons-material/Details";

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
  const navigate = useNavigate();
  const selectedProvince = useSelector(
    (state: RootState) => state.provincesReducer.selectedProvince
  );

  const selectedHotel = useSelector(
    (state: RootState) => state.sortHotel.selectedHotel
  );
  return (
    <TableRow
      sx={{
        "&:last-child td, &:last-child th": { border: 0 },
        "&:hover": { backgroundColor: "action.hover", cursor: "pointer" },
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
        <Typography sx={{ fontWeight: "bold", color: "secondary.main" }}>
          {roomQuantity}
        </Typography>
      </TableCell>
      <TableCell align="center">
        <Typography
          component={"span"}
          sx={{ fontWeight: "bold", color: "secondary.main" }}
        >
          {adultQuantity}
        </Typography>
      </TableCell>
      <TableCell align="center">
        <Typography
          component={"span"}
          sx={{ fontWeight: "bold", color: "secondary.main" }}
        >
          {childrenQuantity}
        </Typography>
      </TableCell>
      <TableCell align="center">
        <Typography
          component={"span"}
          sx={{ fontWeight: "bold", color: "secondary.main" }}
        >
          ${totalPrice}
        </Typography>
      </TableCell>
      <TableCell align="center">
        <Typography
          component={"span"}
          sx={{ fontWeight: "bold", color: "secondary.main" }}
        >
          {" "}
          {checkinDate}
        </Typography>
      </TableCell>
      <TableCell align="center">
        <Typography
          component={"span"}
          sx={{ fontWeight: "bold", color: "secondary.main" }}
        >
          {" "}
          {checkoutDate}
        </Typography>
      </TableCell>
      <TableCell align="center">
        <Button
          variant="text"
          startIcon={<DetailsIcon />}
          onClick={() =>
            navigate(
              `/accommodation/${selectedProvince.domain}/${selectedHotel.id}`
            )
          }
        >
          Detail
        </Button>
      </TableCell>
      <TableCell align="center">
        <DeleteButton hotelId={id} />
      </TableCell>
    </TableRow>
  );
};
