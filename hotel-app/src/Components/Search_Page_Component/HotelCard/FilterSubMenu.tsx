import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Button } from "@mui/material";
import { RatingCheckBoxField } from "./RatingCheckBoxField";
import { TypeCheckBoxField } from "./TypeCheckBoxField";

export default function FilterSubMenu() {
  return (
    <Box>
      <Box
        bgcolor="background.paper"
        padding="0 0 15px 15px"
        borderRadius="5px"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="baseline"
        >
          <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
            Lọc kết quả
          </Typography>
          <Button>Reset</Button>
        </Box>
        <Typography sx={{ fontSize: "14px", color: "#687176" }}>
          Hiển thị kết quả phân loại theo:
        </Typography>
      </Box>

      {/* Sắp xếp theo star*/}
      <Accordion disableGutters>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
            Hạng sao
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <RatingCheckBoxField name={"star"} />
        </AccordionDetails>
      </Accordion>

      {/* Sắp xếp theo loại hình lưu trứ */}
      <Accordion disableGutters>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
            Loại hình lưu trú
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TypeCheckBoxField name="type" />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
