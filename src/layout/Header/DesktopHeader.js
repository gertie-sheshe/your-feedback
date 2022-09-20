import React from "react";
import { HeaderContainer } from "./HeaderStyles";
import UserAvatar from "../../components/ui/UserAvatar";
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
        {selectedUser && (
          <Tabs onChange={handleChange} value={tabValue}>
            <Tab label="Share Feedback" id="share-feedback" />
            <Tab label="My Feedback" id="my-feedback" />
            <Tab label="Team Feedback" id="team-feedback" />
          </Tabs>
        )}
        <UserAvatar src={avatar} alt="Gertie" />
      </HeaderContainer>
    </Grid>
  );
}

export default DesktopHeader;
