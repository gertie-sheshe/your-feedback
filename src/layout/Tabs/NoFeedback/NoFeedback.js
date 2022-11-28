import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";

function NoFeedback() {
  return (
    <Grid container alignItems="center">
      <Card
        variant="outlined"
        sx={{
          padding: "30px",
          margin: "30px",
        }}
      >
        <CardContent>
          <Typography sx={{ fontSize: "2rem", fontWeight: "bold" }}>
            No feedback to display
          </Typography>
          <Typography>
            There is no feedback to display at this time - check back in a bit
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default NoFeedback;
