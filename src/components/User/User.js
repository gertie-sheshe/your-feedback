import React from "react";
import { ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { Link } from "./UserStyles";
import UserAvatar from "../../ui/UserAvatar";

function User({ user }) {
  return (
    <ListItem
      sx={{
        "&:hover": {
          backgroundColor: "#f5f5f5",
        },
      }}
      key={user.name}
      secondaryAction={
        <Link to={`/user/${user.id}/question/q1`}>View Submission</Link>
      }
    >
      <ListItemAvatar sx={{ display: "flex", padding: "10px" }}>
        <UserAvatar src={user.avatar} alt={user.name} />
        <ListItemText
          sx={{ marginLeft: "20px", fontWeight: "bold" }}
          primary={user.name}
        />
      </ListItemAvatar>
    </ListItem>
  );
}

export default User;
