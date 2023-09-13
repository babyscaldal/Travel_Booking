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

  adult: number;

  child: number;

  room: number;

  baby: number;
}

export default function People({
  children,

  adult,

  child,

  room,

  baby,
}: IPeople) {
  const totalChilden = Number(child) + Number(baby);

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

            <Typography component={"p"}>
              <Typography
                component={"span"}
                variant="body1"
                sx={{ color: "primary.main", fontWeight: "bold" }}
              >
                {adult}{" "}
              </Typography>
              người lớn,{" "}
              <Typography
                component={"span"}
                variant="body1"
                sx={{ color: "primary.main", fontWeight: "bold" }}
              >
                {totalChilden}
              </Typography>{" "}
              trẻ em,{" "}
              <Typography
                component={"span"}
                variant="body1"
                sx={{ color: "primary.main", fontWeight: "bold" }}
              >
                {room}{" "}
              </Typography>{" "}
              phòng
            </Typography>
          </Box>
        </AccordionSummary>

        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    </div>
  );
}
