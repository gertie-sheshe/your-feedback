import React from "react";
import Avatar from "@mui/material/Avatar";

function UserAvatar({ src, alt, sx }) {
  return <Avatar src={src} alt={alt} sx={sx} />;
}

export default UserAvatar;
