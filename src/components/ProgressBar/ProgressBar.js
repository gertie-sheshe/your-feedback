import React from "react";
import { LinearProgress, Typography } from "@mui/material";

function ProgressBar() {
  return (
    <div>
      <LinearProgress
        variant="determinate"
        value={10}
        color="primary"
        sx={{
          margin: "30px 0",
          height: "10px",
          backgroundColor: "#f2f2f2",
          borderRadius: "10px",
          "& .MuiLinearProgress-barColorPrimary": {
            backgroundColor: "#0dba86",
          },
        }}
      />
      <Typography sx={{ textTransform: "uppercase", fontWeight: "500" }}>
        Questions Completed
      </Typography>
      <Typography sx={{ margin: "5px 0" }}>3/10</Typography>
    </div>
  );
}

export default ProgressBar;
