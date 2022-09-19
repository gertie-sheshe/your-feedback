import React from "react";
import { HeaderContainer } from "./HeaderStyles";

import { Grid } from "@mui/material";

function MobileHeader({ sx }) {
  return (
    <Grid sx={sx}>
      <HeaderContainer>Feedback</HeaderContainer>
    </Grid>
  );
}

export default MobileHeader;
