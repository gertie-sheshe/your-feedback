import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";

function NoUserCard() {
  return (
    <Grid container alignItems="center" justifyContent="center">
      <Card
        variant="outlined"
        sx={{
          padding: "30px",
          margin: "30px",
        }}
      >
        <CardContent>
          <Typography sx={{ fontSize: "2rem", fontWeight: "bold" }}>
            Select user
          </Typography>
          <Typography>
            Choose a user from the list to display their feedback
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default NoUserCard;
