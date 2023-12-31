import { Box, Grid, Typography } from "@mui/material";
import maintainingImage from "../../../../assets/comming-soon.png";
import travelImage from "../../../../assets/travel-themes.jpg";

export const ComingSoon = () => {
  return (
    <Grid container alignItems={"center"}>
      <Grid item xs={6}>
        <Box position={"relative"} zIndex={"1"}>
          <Box height={"300px"}>
            <img
              src={travelImage}
              alt="maintaining"
              width="100%"
              height="100%"
              style={{ objectFit: "cover" }}
            />
          </Box>
          <Box position={"absolute"} height={"150px"} top={"0px"}>
            <img
              src={maintainingImage}
              alt="maintaining"
              width="100%"
              height="100%"
              style={{ objectFit: "contain" }}
            />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "300px",
            fontFamily: "Pacifico, cursive",
          }}
        >
          <Typography
            sx={{
              marginBottom: "20px",
              fontFamily: "Pacifico, cursive",
              fontWeight: "bold",
            }}
            variant="h2"
            color="textPrimary"
          >
            Coming Soon
          </Typography>
          <Typography
            sx={{ marginBottom: "20px" }}
            variant="h6"
            color="textSecondary"
          >
            We're working on something amazing!
          </Typography>
          <Typography variant="h6" color="textSecondary">
            Stay tuned for exciting updates!
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};
