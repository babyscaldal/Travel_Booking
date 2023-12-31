import { Box, ThemeProvider, Typography, createTheme } from "@mui/material";
import BookForm from "./BookForm";
import { useSelector } from "react-redux";
import { RootState } from "../../stores.ts/stores";

export interface IHotelInfoPage {}

export const HotelInfoPage = () => {
  const selectedHotel = useSelector(
    (state: RootState) => state.sortHotel.selectedHotel
  );

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
      <Box
        border={"1px solid rgb(221, 221, 221)"}
        boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        sx={{
          borderRadius: "12px",
        }}
      >
        <Box>
          <Box
            sx={{
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "60px",
              width: "100%",
              backgroundColor: `primary.main`,
              marginBottom: "24px",
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "30px",
                textAlign: "center",
                color: "background.paper",
              }}
              component={"span"}
              variant="body1"
            >
              Booking hotel
            </Typography>
          </Box>
          <Box sx={{ padding: " 0 30px 30px 30px" }}>
            <Typography
              component={"p"}
              variant="body1"
              sx={{
                fontWeight: "bold",
                fontSize: "16px",
                marginBottom: "24px",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "22px",
                  color: "success.main",
                }}
                component={"span"}
                variant="body1"
              >
                ${selectedHotel.price}
              </Typography>{" "}
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "22px",
                  color: "success.main",
                }}
                component={"span"}
                variant="body1"
              >
                /
              </Typography>{" "}
              night
            </Typography>
            <BookForm />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
