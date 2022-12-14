import React from "react";
import TextField from "@mui/material/TextField";

function Text() {
  return (
    <div>
      <TextField
        multiline
        maxRows={40}
        sx={{
          width: "100%",
          "& .MuiInputBase-root": {
            height: "100%",
          },
          height: "40vh",
          border: "1px solid #E5E5E5",
          borderRadius: "10px",
        }}
      />
    </div>
  );
}

export default Text;
