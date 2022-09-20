import React from "react";
import { Button, Grid } from "@mui/material";

import { Link } from "react-router-dom";

const Dashboard = ({ tabValue }) => {
  return (
    <Grid
      sx={{
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div>Dashboard</div>
      <div id="share-feedback" role="tabpanel" hidden={tabValue !== 0}>
        SHARE FEEDBACK CONTENT
      </div>
      <div id="my-feedback" role="tabpanel" hidden={tabValue !== 1}>
        MY FEEDBACK CONTENT
      </div>

      <div id="team-feedback" role="tabpanel" hidden={tabValue !== 2}>
        TEAM FEEDBACK CONTENT
      </div>

      <nav>
        <Link to="/">Auth</Link>
      </nav>
      <Button variant="contained">Hello World</Button>
    </Grid>
  );
};

export default Dashboard;
