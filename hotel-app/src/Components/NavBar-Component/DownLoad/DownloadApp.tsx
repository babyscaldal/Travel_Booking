import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DownloadLink from "./DownloadLink";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

export default function DownloadApp() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={<ArrowDropDownIcon />}
        sx={{ color: "text.primary" }}
      >
        <CloudDownloadIcon color="primary" sx={{ mr: 0.5 }} fontSize="small" />
        Tải ứng dụng
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={handleClose}
          sx={{ cursor: "auto", justifyContent: "center" }}
        >
          <img
            src="https://ik.imagekit.io/tvlk/image/imageResource/2021/05/20/1621505512045-e090f5237022cf86afd98eb132f19086.png?tr=h-116,q-75,w-116"
            alt=""
          />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <DownloadLink
            href={"https://app.adjust.com/ie88tj"}
            imgUrl={
              "https://ik.imagekit.io/tvlk/image/imageResource/2021/05/21/1621579427565-4b746b647c0424ee0409b835fd35b175.svg?tr=q-75,w-123"
            }
          />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <DownloadLink
            href={"https://app.adjust.com/hc9if0"}
            imgUrl={
              "https://ik.imagekit.io/tvlk/image/imageResource/2021/05/21/1621579433637-f60b505ed1f8f78c11172d55430a1819.svg?tr=q-75,w-123"
            }
          />
        </MenuItem>
      </Menu>
    </div>
  );
}
