import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Stack } from "@mui/material";
import { OrderedHotelListItem } from "./OrderedHotelListItem";

const arr = [
  {
    provinceId: 7,
    location: "Phú Quốc",
    type: "resort",
    id: 229,
    name: "Harmony Resort",
    address: "25 Le Duan Street, Hoan Kiem, Phu Quoc",
    description:
      "Harmony Resort is a harmonious blend of luxury and comfort in the Hoan Kiem district. With its stylish rooms, rooftop bar, and a range of wellness facilities, it offers an unforgettable experience.",
    rating: 2.4,
    price: 200,
    stars: 2,
    amenities: ["Rooftop bar", "Wellness facilities", "Spa", "Fitness center"],
    image: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-792510074034625170/original/6a17e24d-d7c2-4bc8-ac29-7448d25adfdc.jpeg?im_w=960",
      "https://a0.muscache.com/im/pictures/miso/Hosting-792510074034625170/original/03bebc4d-fdda-47b3-9bb2-22c58e3a7ba1.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-792510074034625170/original/3804027d-013d-4f8a-b61c-c09a70704503.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-792510074034625170/original/b3302040-fd3f-41e8-9d5d-1894a838886c.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-792510074034625170/original/6acb9d80-15f4-467c-b3ce-150f95b7e4c3.jpeg?im_w=720",
    ],
    numberOfRoom: 14,
    adultQuantity: 2,
    childrenQuantity: 4,
    totalPrice: 1200,
    checkInDate: "2023-09-13",
    checkOutDate: "2023-09-16",
    roomQuantity: 3,
  },
  {
    provinceId: 7,
    location: "Phú Quốc",
    type: "resort",
    id: 229,
    name: "Harmony Resort",
    address: "25 Le Duan Street, Hoan Kiem, Phu Quoc",
    description:
      "Harmony Resort is a harmonious blend of luxury and comfort in the Hoan Kiem district. With its stylish rooms, rooftop bar, and a range of wellness facilities, it offers an unforgettable experience.",
    rating: 2.4,
    price: 200,
    stars: 2,
    amenities: ["Rooftop bar", "Wellness facilities", "Spa", "Fitness center"],
    image: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-792510074034625170/original/6a17e24d-d7c2-4bc8-ac29-7448d25adfdc.jpeg?im_w=960",
      "https://a0.muscache.com/im/pictures/miso/Hosting-792510074034625170/original/03bebc4d-fdda-47b3-9bb2-22c58e3a7ba1.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-792510074034625170/original/3804027d-013d-4f8a-b61c-c09a70704503.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-792510074034625170/original/b3302040-fd3f-41e8-9d5d-1894a838886c.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-792510074034625170/original/6acb9d80-15f4-467c-b3ce-150f95b7e4c3.jpeg?im_w=720",
    ],
    numberOfRoom: 14,
    adultQuantity: 2,
    childrenQuantity: 4,
    totalPrice: 1200,
    checkInDate: "2023-09-13",
    checkOutDate: "2023-09-16",
    roomQuantity: 3,
  },
  {
    provinceId: 7,
    location: "Phú Quốc",
    type: "resort",
    id: 229,
    name: "Harmony Resort",
    address: "25 Le Duan Street, Hoan Kiem, Phu Quoc",
    description:
      "Harmony Resort is a harmonious blend of luxury and comfort in the Hoan Kiem district. With its stylish rooms, rooftop bar, and a range of wellness facilities, it offers an unforgettable experience.",
    rating: 2.4,
    price: 200,
    stars: 2,
    amenities: ["Rooftop bar", "Wellness facilities", "Spa", "Fitness center"],
    image: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-792510074034625170/original/6a17e24d-d7c2-4bc8-ac29-7448d25adfdc.jpeg?im_w=960",
      "https://a0.muscache.com/im/pictures/miso/Hosting-792510074034625170/original/03bebc4d-fdda-47b3-9bb2-22c58e3a7ba1.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-792510074034625170/original/3804027d-013d-4f8a-b61c-c09a70704503.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-792510074034625170/original/b3302040-fd3f-41e8-9d5d-1894a838886c.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-792510074034625170/original/6acb9d80-15f4-467c-b3ce-150f95b7e4c3.jpeg?im_w=720",
    ],
    numberOfRoom: 14,
    adultQuantity: 2,
    childrenQuantity: 4,
    totalPrice: 1200,
    checkInDate: "2023-09-13",
    checkOutDate: "2023-09-16",
    roomQuantity: 3,
  },
  {
    provinceId: 7,
    location: "Phú Quốc",
    type: "resort",
    id: 229,
    name: "Harmony Resort",
    address: "25 Le Duan Street, Hoan Kiem, Phu Quoc",
    description:
      "Harmony Resort is a harmonious blend of luxury and comfort in the Hoan Kiem district. With its stylish rooms, rooftop bar, and a range of wellness facilities, it offers an unforgettable experience.",
    rating: 2.4,
    price: 200,
    stars: 2,
    amenities: ["Rooftop bar", "Wellness facilities", "Spa", "Fitness center"],
    image: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-792510074034625170/original/6a17e24d-d7c2-4bc8-ac29-7448d25adfdc.jpeg?im_w=960",
      "https://a0.muscache.com/im/pictures/miso/Hosting-792510074034625170/original/03bebc4d-fdda-47b3-9bb2-22c58e3a7ba1.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-792510074034625170/original/3804027d-013d-4f8a-b61c-c09a70704503.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-792510074034625170/original/b3302040-fd3f-41e8-9d5d-1894a838886c.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-792510074034625170/original/6acb9d80-15f4-467c-b3ce-150f95b7e4c3.jpeg?im_w=720",
    ],
    numberOfRoom: 14,
    adultQuantity: 2,
    childrenQuantity: 4,
    totalPrice: 1200,
    checkInDate: "2023-09-13",
    checkOutDate: "2023-09-16",
    roomQuantity: 3,
  },
  {
    provinceId: 7,
    location: "Phú Quốc",
    type: "resort",
    id: 229,
    name: "Harmony Resort",
    address: "25 Le Duan Street, Hoan Kiem, Phu Quoc",
    description:
      "Harmony Resort is a harmonious blend of luxury and comfort in the Hoan Kiem district. With its stylish rooms, rooftop bar, and a range of wellness facilities, it offers an unforgettable experience.",
    rating: 2.4,
    price: 200,
    stars: 2,
    amenities: ["Rooftop bar", "Wellness facilities", "Spa", "Fitness center"],
    image: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-792510074034625170/original/6a17e24d-d7c2-4bc8-ac29-7448d25adfdc.jpeg?im_w=960",
      "https://a0.muscache.com/im/pictures/miso/Hosting-792510074034625170/original/03bebc4d-fdda-47b3-9bb2-22c58e3a7ba1.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-792510074034625170/original/3804027d-013d-4f8a-b61c-c09a70704503.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-792510074034625170/original/b3302040-fd3f-41e8-9d5d-1894a838886c.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-792510074034625170/original/6acb9d80-15f4-467c-b3ce-150f95b7e4c3.jpeg?im_w=720",
    ],
    numberOfRoom: 14,
    adultQuantity: 2,
    childrenQuantity: 4,
    totalPrice: 1200,
    checkInDate: "2023-09-13",
    checkOutDate: "2023-09-16",
    roomQuantity: 3,
  },
  {
    provinceId: 7,
    location: "Phú Quốc",
    type: "resort",
    id: 229,
    name: "Harmony Resort",
    address: "25 Le Duan Street, Hoan Kiem, Phu Quoc",
    description:
      "Harmony Resort is a harmonious blend of luxury and comfort in the Hoan Kiem district. With its stylish rooms, rooftop bar, and a range of wellness facilities, it offers an unforgettable experience.",
    rating: 2.4,
    price: 200,
    stars: 2,
    amenities: ["Rooftop bar", "Wellness facilities", "Spa", "Fitness center"],
    image: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-792510074034625170/original/6a17e24d-d7c2-4bc8-ac29-7448d25adfdc.jpeg?im_w=960",
      "https://a0.muscache.com/im/pictures/miso/Hosting-792510074034625170/original/03bebc4d-fdda-47b3-9bb2-22c58e3a7ba1.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-792510074034625170/original/3804027d-013d-4f8a-b61c-c09a70704503.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-792510074034625170/original/b3302040-fd3f-41e8-9d5d-1894a838886c.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-792510074034625170/original/6acb9d80-15f4-467c-b3ce-150f95b7e4c3.jpeg?im_w=720",
    ],
    numberOfRoom: 14,
    adultQuantity: 2,
    childrenQuantity: 4,
    totalPrice: 1200,
    checkInDate: "2023-09-13",
    checkOutDate: "2023-09-16",
    roomQuantity: 3,
  },
  {
    provinceId: 7,
    location: "Phú Quốc",
    type: "resort",
    id: 229,
    name: "Harmony Resort",
    address: "25 Le Duan Street, Hoan Kiem, Phu Quoc",
    description:
      "Harmony Resort is a harmonious blend of luxury and comfort in the Hoan Kiem district. With its stylish rooms, rooftop bar, and a range of wellness facilities, it offers an unforgettable experience.",
    rating: 2.4,
    price: 200,
    stars: 2,
    amenities: ["Rooftop bar", "Wellness facilities", "Spa", "Fitness center"],
    image: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-792510074034625170/original/6a17e24d-d7c2-4bc8-ac29-7448d25adfdc.jpeg?im_w=960",
      "https://a0.muscache.com/im/pictures/miso/Hosting-792510074034625170/original/03bebc4d-fdda-47b3-9bb2-22c58e3a7ba1.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-792510074034625170/original/3804027d-013d-4f8a-b61c-c09a70704503.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-792510074034625170/original/b3302040-fd3f-41e8-9d5d-1894a838886c.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-792510074034625170/original/6acb9d80-15f4-467c-b3ce-150f95b7e4c3.jpeg?im_w=720",
    ],
    numberOfRoom: 14,
    adultQuantity: 2,
    childrenQuantity: 4,
    totalPrice: 1200,
    checkInDate: "2023-09-13",
    checkOutDate: "2023-09-16",
    roomQuantity: 3,
  },
];
export default function OrderdHotelList() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  // const orderedHotel = useSelector(
  //   (state: RootState) => state.hotelsByLocationReducer.hotelsListByLocation
  // );

  return (
    <Stack>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 450 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow className="MuiTableRow-divider">
                <TableCell
                  align="center"
                  sx={{ fontWeight: "bold" }}
                ></TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Nơi đặt
                </TableCell>

                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Số phòng
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Người lớn
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Trẻ em
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Giá
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Ngày check in
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Ngày check out
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Chi tiết
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Hủy đặt phòng
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {arr.length &&
                arr
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((item) => (
                    <OrderedHotelListItem
                      arr={arr}
                      key={item.id}
                      hotelName={item.name}
                      address={item.address}
                      totalPrice={item.price}
                      adultQuantity={item.adultQuantity}
                      childrenQuantity={item.childrenQuantity}
                      checkinDate={item.checkInDate}
                      checkoutDate={item.checkOutDate}
                      roomQuantity={item.roomQuantity}
                      imageUrl={item.image}
                    />
                  ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10]}
          component="div"
          count={arr.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Stack>
  );
}
