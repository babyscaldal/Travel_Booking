import * as React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../stores.ts/stores";
import { IOrderHotel } from "../../../reducers/hotelList.reducer";
import { OrderedHotelListItem } from "./OrderedHotelListItem";
import {
  Button,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { Box } from "@mui/joy";
import { useNavigate } from "react-router-dom";

export default function OrderHotelList() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const navigate = useNavigate();

  const handleChangePage = (_: unknown, newPage: number) => {
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

  const themeApply = useSelector(
    (state: RootState) => state.darkModeReducer.isDark
  );

  const darkTheme = createTheme({
    palette: {
      mode: themeApply ? "dark" : "light",
    },
    typography: {
      fontSize: 16,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Stack
        sx={{
          marginTop: "64px",
          backgroundColor: "background.paper",
          color: "text.primary",
        }}
      >
        {orderHotelList.length ? (
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: "80vh" }}>
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
                          id={item.id}
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
          <Box
            height="100vh"
            mb={"30px"}
            textAlign={"center"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
          >
            <Typography variant="h6" component={"h3"}>
              Thông báo
            </Typography>
            <Typography>
              Theo như dữ liệu hệ thống thì bạn chưa đặt phòng nào cả.
            </Typography>
            <Box height={200} width={200}>
              <img
                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/9bdd8040b334d31946f49e36beaf32db.png"
                alt="order-nothing"
                width="100%"
                height="100%"
                style={{ objectFit: "cover" }}
              />
            </Box>
            <Button
              variant="contained"
              color="success"
              onClick={() => navigate("/")}
            >
              Start Booking Now
            </Button>
          </Box>
        )}
      </Stack>
    </ThemeProvider>
  );
}
