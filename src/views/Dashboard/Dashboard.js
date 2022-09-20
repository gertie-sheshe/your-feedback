import React from "react";
import { Button, Grid } from "@mui/material";
import ShareFeedback from "../../layout/Tabs/ShareFeedback";

import { Link } from "react-router-dom";

const Dashboard = ({ tabValue }) => {
  return (
    <Grid
      sx={{
        // height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Grid
        sx={{
          width: { xs: "90vw", sm: "80vw", md: "60vw", lg: "60vw" },
          // height: "100vh",
        }}
        id="share-feedback"
        role="tabpanel"
        hidden={tabValue !== 0}
      >
        <ShareFeedback />
      </Grid>
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
