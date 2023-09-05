import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ReactNode } from "react";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
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

// import Accordion from "react-bootstrap/Accordion";

// export default function People() {
//   return (
//     <Accordion defaultActiveKey="0">
//       <Accordion.Item eventKey="0">
//         <Accordion.Header>Accordion Item #1</Accordion.Header>
//         <Accordion.Body>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat. Duis aute irure dolor in
//           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//           culpa qui officia deserunt mollit anim id est laborum.
//         </Accordion.Body>
//       </Accordion.Item>
//     </Accordion>
//   );
// }
