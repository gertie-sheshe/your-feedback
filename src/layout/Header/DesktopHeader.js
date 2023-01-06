import React from "react";
import { Link } from "react-router-dom";
import { HeaderContainer } from "./HeaderStyles";
import UserAvatar from "../../ui/UserAvatar";
import { Grid, Typography, Tab, Tabs } from "@mui/material";

function DesktopHeader({ sx, avatar, setTabValue, tabValue, selectedUser }) {
  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };
  return (
    <Grid sx={sx}>
      <HeaderContainer>
        <Typography
          sx={{
            fontWeight: "bold",
          }}
          variant="h1"
        >
          Feedback
        </Typography>
        {true && (
          <Tabs onChange={handleChange} value={tabValue}>
            <Tab
              component={Link}
              value="/dashboard/share-feedback"
              to="/dashboard/share-feedback"
              label="Share Feedback"
              id="share-feedback"
            />
            <Tab
              component={Link}
              to="/dashboard/my-feedback"
              value="/dashboard/my-feedback"
              label="My Feedback"
              id="my-feedback"
            />
            <Tab
              component={Link}
              to="/dashboard/team-feedback"
              value="/dashboard/team-feedback"
              label="Team Feedback"
              id="team-feedback"
            />
          </Tabs>
        )}
        <UserAvatar src={avatar} alt="Gertie" />
      </HeaderContainer>
    </Grid>
  );
}

export default DesktopHeader;
