import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";
import { Box, Stack } from "@mui/material";

export interface IHotelListSkeletonProps {
  length?: number;
}

export default function HotelListSkeleton({
  length = 10,
}: IHotelListSkeletonProps) {
  return (
    <Grid container spacing={2}>
      {Array.from({ length: length }, (_, index) => (
        <Grid key={index} item xs={12} md={4} lg={3}>
          <Stack
            spacing={2}
            width="268px"
            height={"355px"}
            sx={{
              border: "1px solid gray",
              borderRadius: "8px",
              margin: { xs: "auto", md: "auto" },
            }}
          >
            <Skeleton variant="rounded" width={"268px"} height={"134px"} />
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={"15px"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Skeleton variant="rounded" width={"236px"} height={"24px"} />
              <Skeleton variant="rounded" width={"236px"} height={"21px"} />
              <Skeleton variant="rounded" width={"236px"} height={"21px"} />
              <Skeleton variant="rounded" width={"236px"} height={"21px"} />
              <Skeleton variant="rounded" width={"236px"} height={"21px"} />
            </Box>

            <Box
              display={"flex"}
              justifyContent={"space-around"}
              alignItems={"center"}
            >
              <Skeleton variant="rectangular" width={"80px"} height={"30px"} />
              <Skeleton
                sx={{ margin: "12px 0" }}
                variant="rectangular"
                width={"120px"}
                height={"30px"}
              />
            </Box>
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
}
