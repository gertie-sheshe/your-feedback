import React from "react";
import { Grid } from "@mui/material";
import ShareFeedback from "../../layout/Tabs/ShareFeedback";
import NoFeedback from "../../layout/Tabs/NoFeedback";
import MyFeedback from "../../layout/Tabs/MyFeedback";

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
        hidden={tabValue !== "share-feedback"}
      >
        <ShareFeedback />
      </Grid>
      <Grid
        sx={{
          width: { xs: "90vw", sm: "80vw", md: "60vw", lg: "60vw" },
          // height: "100vh",
        }}
        id="my-feedback"
        role="tabpanel"
        hidden={tabValue !== "my-feedback"}
      >
        <MyFeedback />
      </Grid>

      <div
        id="team-feedback"
        role="tabpanel"
        hidden={tabValue !== "team-feedback"}
      >
        <NoFeedback />
      </div>

      {/* <nav>
        <Link to="/">Auth</Link>
      </nav>
      <Button variant="contained">Hello World</Button> */}
    </Grid>
  );
};

export default Dashboard;
