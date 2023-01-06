import React from "react";
import { Button, Grid } from "@mui/material";
import ShareFeedback from "../../layout/Tabs/ShareFeedback";
import NoFeedback from "../../layout/Tabs/NoFeedback";
import MyFeedback from "../../layout/Tabs/MyFeedback";

import { useParams } from "react-router-dom";

const Dashboard = ({ tabValue }) => {
  console.log("TEST RENDERR");
  const { tab } = useParams();

  // console.log("TAB", tab);
  // console.log("CHECK TAB VALUE", tabValue !== 0);
  // console.log("CHECK TAB", tab !== "my-feedback");

  // console.log("TAB VALUE", tabValue);
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
        aria-labelledby="share feedback"
        hidden={tabValue !== "/dashboard/share-feedback"}
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
        aria-labelledby="my feedback"
        hidden={tabValue !== "/dashboard/my-feedback"}
      >
        <MyFeedback />
      </Grid>

      <div
        id="team-feedback"
        role="tabpanel"
        aria-labelledby="team feedback"
        hidden={tabValue !== "/dashboard/team-feedback"}
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
