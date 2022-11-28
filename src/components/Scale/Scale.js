import React from "react";
import { Rating, Grid } from "@mui/material";
import SquareIcon from "@mui/icons-material/Square";
import SquareOutlinedIcon from "@mui/icons-material/SquareOutlined";

import { styled } from "@mui/material/styles";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#0dba86",
  },
  "& .MuiRating-iconHover": {
    color: "#0dba86",
  },
});

function Scale() {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{
        height: "10vh",
      }}
    >
      <StyledRating
        defaultValue={1}
        max={10}
        icon={<SquareIcon sx={{ width: "80px", height: "80px" }} />}
        emptyIcon={
          <SquareOutlinedIcon
            sx={{ width: "80px", height: "80px", border: "none" }}
          />
        }
      />
    </Grid>
  );
}

export default Scale;
