// import * as React from "react";
// import Button from "@mui/joy/Button";
// import Modal from "@mui/joy/Modal";
// import ModalClose from "@mui/joy/ModalClose";
// import Sheet from "@mui/joy/Sheet";
// import BookingTabPanel from "../../HomePage_Component/BookingTabPanel/BookingTabs/BookingTabPanel";
// import { useSelector } from "react-redux";
// import { RootState } from "../../../stores.ts/stores";

// export default function BookingModal() {
//   const [open, setOpen] = React.useState<boolean>(false);

//   return (
//     <React.Fragment>
//       <Button
//         sx={{
//           width: "80%",
//           height: "60px",
//           fontSize: "24px",
//           marginTop: "20px",
//           "&:hover": {
//             backgroundColor: "rgba(76, 175,80,1)",
//           },
//           backgroundColor: "rgba(255, 255, 255,0.2)",
//           animation: "myAnimation 2s ease-in-out infinite",
//           "@keyframes myAnimation": {
//             "0%": {
//               transform: "scale(1)",
//             },
//             "50%": {
//               transform: "scale(1.2)",
//               boxShadow: "0 0 24px #ccc",
//             },
//             "100%": {
//               transform: "scale(1)",
//             },
//           },
//         }}
//         onClick={() => setOpen(true)}
//       >
//         Start Booking Now
//       </Button>
//       <Modal
//         aria-labelledby="modal-title"
//         aria-describedby="modal-desc"
//         open={open}
//         onClose={() => setOpen(false)}
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <Sheet
//           variant="outlined"
//           sx={{
//             borderRadius: "md",
//             p: 3,
//             boxShadow: "lg",
//           }}
//         >
//           <ModalClose
//             variant="outlined"
//             sx={{
//               top: "calc(-1/4 * var(--IconButton-size))",
//               right: "calc(-1/4 * var(--IconButton-size))",
//               boxShadow: "0 2px 12px 0 rgba(0 0 0 / 0.2)",
//               borderRadius: "50%",
//               bgcolor: "background.surface",
//             }}
//           />
//           <BookingTabPanel />
//         </Sheet>
//       </Modal>
//     </React.Fragment>
//   );
// }

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import BookingTabPanel from "../../HomePage_Component/BookingTabPanel/BookingTabs/BookingTabPanel";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BookingModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        sx={{
          fontSize: {
            xs: "20px",
            md: "30px",
            lg: "40px",
          },
          color: "#fff",
          width: "80%",
          height: "60px",
          marginTop: "20px",
          "&:hover": {
            backgroundColor: "rgba(76, 175,80,1)",
          },
          backgroundColor: "rgba(255, 255, 255,0.2)",
          animation: "myAnimation 2s ease-in-out infinite",
          "@keyframes myAnimation": {
            "0%": {
              transform: "scale(1)",
            },
            "50%": {
              transform: "scale(1.2)",
              boxShadow: "0 0 24px #ccc",
            },
            "100%": {
              transform: "scale(1)",
            },
          },
        }}
        onClick={handleOpen}
      >
        Start Booking Now
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={style}>
          <BookingTabPanel />
        </Box>
      </Modal>
    </div>
  );
}
