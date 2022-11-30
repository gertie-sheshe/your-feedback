import React from "react";
import {
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
} from "@mui/material";

function PanelHeading({ label }) {
  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "space-between",
        margin: "40px 0",
      }}
    >
      <Typography variant="h2">{label}</Typography>
      <FormControl sx={{ width: "30%" }}>
        <InputLabel id="feedback-period-label">Feedback Period:</InputLabel>
        <Select labelId="feedback-period-label">
          <MenuItem value="week1">Week 1</MenuItem>
          <MenuItem value="week2">Week 2</MenuItem>
          <MenuItem value="week3">Week 3</MenuItem>
        </Select>
      </FormControl>
    </Grid>
  );
}

export default PanelHeading;
