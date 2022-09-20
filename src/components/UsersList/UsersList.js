import React from "react";
import { List } from "@mui/material";
import User from "../User/User";

import gertrudeone from "../../assets/images/gertrude-1.png";
import gertrudetwo from "../../assets/images/gertrude-2.png";
import gertrudethree from "../../assets/images/gertrude-3.png";
import gertrudefour from "../../assets/images/gertrude-4.png";
import gertrudefive from "../../assets/images/gertrude-5.png";

const users = [
  { name: "Gertrude Kwanza", avatar: gertrudeone },
  { name: "Gertrude Wapili", avatar: gertrudetwo },
  { name: "Gertrude Watatu", avatar: gertrudethree },
  { name: "Gertrude Wanne", avatar: gertrudefour },
  { name: "Gertrude Watano", avatar: gertrudefive },
];

function UsersList() {
  return (
    <List sx={{ width: "inherit" }}>
      {users.map((user) => (
        <User user={user} />
      ))}
    </List>
  );
}

export default UsersList;
