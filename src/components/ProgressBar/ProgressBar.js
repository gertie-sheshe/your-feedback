import React from "react";
import { LinearProgress } from "@mui/material";

function ProgressBar() {
  return (
    <div>
      <LinearProgress
        variant="determinate"
        value={10}
        color="success"
        sx={{
          margin: "30px 0",
        }}
      />
    </div>
  );
}

export default ProgressBar;
