import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ReactNode } from "react";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import { Box } from "@mui/material";

interface IPeople {
  children: ReactNode;
}

export default function People({ children }: IPeople) {
  return (
    <div>
      <Accordion
        disableGutters
        sx={{
          border: "1px solid #00000033",
          boxShadow: "none",
          "&:hover": {
            border: "1px solid #00000099",
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Box display={"flex"} gap={"15px"} alignItems={"center"}>
            <PeopleRoundedIcon sx={{ color: "primary.main" }} />
            <Typography>Số lượng người + phòng</Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    </div>
  );
}
