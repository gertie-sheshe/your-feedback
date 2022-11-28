import React from "react";
import { Grid, Typography } from "@mui/material";
import UserAvatar from "../../ui/UserAvatar";
import GertieOne from "../../assets/images/gertrude-1.png";

function QuestionTitle({ title }) {
  if (!title) return null;

  return (
    <Grid container sx={{ width: "60%", margin: "30px 0" }}>
      <Grid item xs={10}>
        <Typography variant="h2">{title}</Typography>
        <Typography
          sx={{
            padding: "10px 0",
            textTransform: "uppercase",
            color: "gray",
            fontWeight: "500",
          }}
        >
          {" "}
          Share your feedback for Gertrude Kwanza
        </Typography>
      </Grid>
      <Grid item xs={2} sx={{ display: "flex", justifyContent: "end" }}>
        <UserAvatar
          src={GertieOne}
          alt="Gertie"
          sx={{ width: 60, height: 60 }}
        />
      </Grid>
    </Grid>
  );
}

export default QuestionTitle;
