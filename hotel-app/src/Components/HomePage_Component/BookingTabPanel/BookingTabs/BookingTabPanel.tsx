import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import FlightTakeoffRoundedIcon from "@mui/icons-material/FlightTakeoffRounded";
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import AirportShuttleRoundedIcon from "@mui/icons-material/AirportShuttleRounded";
import PaidRoundedIcon from "@mui/icons-material/PaidRounded";
import FestivalRoundedIcon from "@mui/icons-material/FestivalRounded";
import DirectionsCarFilledRoundedIcon from "@mui/icons-material/DirectionsCarFilledRounded";
import { Container } from "@mui/material";
import HotelBookingFormLayout from "./HotelBookFormLayout";
import { ComingSoon } from "./ComingSoonTab";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      style={{ width: "100%" }}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </Box>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BookingTabPanel() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          width: "100%",
          border: "1px solid black",
          height: "fit-content",
          borderRadius: "6px",
        }}
      >
        <Box
          sx={{
            borderBottom: 2,
            borderColor: "divider",
          }}
        >
          <Tabs
            centered
            variant="fullWidth"
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              iconPosition="start"
              icon={<BusinessRoundedIcon />}
              label="Khách sạn"
              {...a11yProps(0)}
            />

            <Tab
              iconPosition="start"
              icon={<FlightTakeoffRoundedIcon />}
              label="Vé máy bay"
              {...a11yProps(1)}
            />

            <Tab
              iconPosition="start"
              icon={<PaidRoundedIcon />}
              label="Combo tiết kiệm"
              {...a11yProps(2)}
            />
            <Tab
              iconPosition="start"
              icon={<AirportShuttleRoundedIcon />}
              label="Đưa đón sân bay"
              {...a11yProps(3)}
            />
            <Tab
              iconPosition="start"
              icon={<FestivalRoundedIcon />}
              label="Điểm thăm quan"
              {...a11yProps(4)}
            />
            <Tab
              iconPosition="start"
              icon={<DirectionsCarFilledRoundedIcon />}
              label="Cho thuê xe"
              {...a11yProps(5)}
            />
          </Tabs>
        </Box>

        <CustomTabPanel value={value} index={0}>
          <HotelBookingFormLayout />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <ComingSoon />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <ComingSoon />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <ComingSoon />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
          <ComingSoon />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={5}>
          <ComingSoon />
        </CustomTabPanel>
      </Box>
    </Container>
  );
}
