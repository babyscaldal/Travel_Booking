import { Box, Rating, Stack, Typography, Container } from "@mui/material";
import hotel from "../../assets/travel-themes.jpg";

export interface IHotelCardProps {}

export default function HotelCard() {
  return (
    <Container maxWidth="lg">
      <Box display={"flex"} gap="10px" bgcolor={"purple"} borderRadius={"10px"}>
        <Box width={"150px"} height={"150px"}>
          <img
            src={hotel}
            width={"100%"}
            height={"100%"}
            style={{
              objectFit: "cover",
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: "10px",
            }}
          />
        </Box>
        <Box flexGrow={1}>
          <Stack spacing={1}>
            <Typography variant="h6" color="initial">
              AAAAAA
            </Typography>
            <Stack spacing={1}>
              <Typography variant="body1" color="initial">
                Khách sạn
              </Typography>
              <Rating name="read-only" value={3} readOnly />
            </Stack>
          </Stack>
        </Box>
        <Box width={"150px"}>
          <Typography variant="body1" color="initial">
            Price
          </Typography>
          <Typography variant="h6">
            <span style={{ color: "red" }}>$50</span>/ đêm
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
