import * as React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../stores.ts/stores";
import { IBookedUser, IOrderHotel } from "../../../reducers/hotelList.reducer";
import { OrderedHotelListItem } from "./OrderedHotelListItem";
import {
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { Box, Typography } from "@mui/joy";

export default function OrderHotelList() {
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
  // data list
  const orderHotelList: IOrderHotel[] = useSelector(
    (state: RootState) => state.sortHotel.infoUser.orderHotelList
  );
  console.log("orderList: ", orderHotelList);

  const userOrderHotelList: IBookedUser = useSelector(
    (state: RootState) => state.sortHotel.infoUser
  );

  console.log("OrderHotelList", orderHotelList);
  console.log("userOrderHotelList: ", userOrderHotelList);
  return (
    <>
      <Stack sx={{ paddingTop: 10 }}>
        {orderHotelList.length ? (
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: "86vh" }}>
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
                  {orderHotelList.length &&
                    orderHotelList
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((item, index) => (
                        <OrderedHotelListItem
                          arr={orderHotelList}
                          key={index}
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
              count={orderHotelList.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        ) : (
          <Box textAlign={"center"}>
            <h3>Thông báo</h3>
            <p>Theo như dữ liệu hệ thống thì bạn chưa đặt phòng nào cả.</p>
          </Box>
        )}
      </Stack>
    </>
  );
}
