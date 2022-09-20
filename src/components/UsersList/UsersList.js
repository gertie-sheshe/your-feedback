import React from "react";
import { List } from "@mui/material";
import User from "../User/User";

import gertrudeone from "../../assets/images/gertrude-1.png";
import gertrudetwo from "../../assets/images/gertrude-2.png";
import gertrudethree from "../../assets/images/gertrude-3.png";
import gertrudefour from "../../assets/images/gertrude-4.png";
import gertrudefive from "../../assets/images/gertrude-5.png";

const users = [
  { id: 1, name: "Gertrude Kwanza", avatar: gertrudeone },
  { id: 2, name: "Gertrude Wapili", avatar: gertrudetwo },
  { id: 3, name: "Gertrude Watatu", avatar: gertrudethree },
  { id: 4, name: "Gertrude Wanne", avatar: gertrudefour },
  { id: 5, name: "Gertrude Watano", avatar: gertrudefive },
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
