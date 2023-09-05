import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

export default function RateStar() {
  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Rating name="customized-10" defaultValue={1} max={1} />
    </Box>
  );
}
