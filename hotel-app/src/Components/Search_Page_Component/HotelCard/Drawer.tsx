import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import FilterSubMenu from "./FilterSubMenu";
import SearchField from "./SearchField";
import map from "../../../assets/map.png";
import { RadioField } from "./RadioField";
import { Button, Container } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";

const drawerWidth = 300;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Button
        fullWidth
        sx={{ height: "40px", borderRadius: "10px", width: "100%" }}
        color="secondary"
        variant="contained"
        onClick={handleDrawerOpen}
        startIcon={<TuneIcon />}
      >
        Bộ lọc
      </Button>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            overflow: "auto",
            top: "64px",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Container>
          {/* Radio */}
          <Box bgcolor="white" padding="10px" borderRadius="6px">
            <Typography
              sx={{ fontSize: "16px", fontWeight: "bold" }}
              component="p"
            >
              Sắp xếp kết quả
            </Typography>
            <Typography sx={{ fontSize: "14px", color: "#687176" }}>
              Sắp xếp kết quả theo lựa chọn
            </Typography>
            <RadioField name="radio" />
          </Box>

          {/* Filter */}
          <Box>
            <FilterSubMenu />
          </Box>

          <Box paddingTop={"10px"}>
            <img
              src={map}
              alt="map"
              width={"100%"}
              height={"100%"}
              style={{ borderRadius: "6px" }}
            />
          </Box>
        </Container>
      </Drawer>
      <Main open={open} sx={{ padding: 0 }}>
        {/* <DrawerHeader />
        aaaaa */}
      </Main>
    </Box>
  );
}
