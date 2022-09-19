import React from "react";
import { HeaderContainer } from "./HeaderStyles";
import UserAvatar from "../../components/ui/UserAvatar";

import { Grid, Typography } from "@mui/material";

function MobileHeader({ sx, avatar }) {
  return (
    <Grid sx={sx}>
      <HeaderContainer>
        <Typography
          sx={{
            fontWeight: "bold",
          }}
          variant="h1"
        >
          Feedback
        </Typography>
        <UserAvatar src={avatar} alt="Gertie" />
      </HeaderContainer>
    </Grid>
  );
}

export default MobileHeader;
