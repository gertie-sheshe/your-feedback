import React from "react";
import { Grid, Typography } from "@mui/material";

function QuestionTitle({ title }) {
  if (!title) return null;

  return (
    <Grid>
      <Typography variant="h2">{title}</Typography>
    </Grid>
  );
}

export default QuestionTitle;
