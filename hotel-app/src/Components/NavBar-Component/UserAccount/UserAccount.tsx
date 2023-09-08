import { Button } from "@mui/material";
import * as React from "react";

export interface IUserAccountProps {
  username: string;
  avatar: string;
}

export default function UserAccount({ username, avatar }: IUserAccountProps) {
  return (
    <React.Fragment>
      <Button color="inherit">
        <img
          src={avatar}
          alt=""
          style={{ height: "26px", borderRadius: "50px", marginRight: "5px" }}
        />
        {username}
      </Button>
    </React.Fragment>
  );
}
