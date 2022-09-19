import React from "react";
import { HeaderContainer } from "./HeaderStyles";
import { Grid, Typography } from "@mui/material";

function DesktopHeader({ sx }) {
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
      </HeaderContainer>
    </Grid>
  );
}

export default DesktopHeader;
