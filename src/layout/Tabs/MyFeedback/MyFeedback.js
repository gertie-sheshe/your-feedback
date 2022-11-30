import React from "react";
import { List, ListItem, Typography, Grid } from "@mui/material";

import PanelHeading from "../../../components/PanelHeading";

import { Link } from "react-router-dom";
import { styled } from "@mui/system";

export const Section = styled("section")({
  width: "400px",
  borderRight: "1px solid gray",
});

// temporary users list
const users = [
  "Gertrude Kwanza",
  "Gertrude Waili",
  "Gertrude Watatu",
  "Gertrude Wanne",
  "Gertrude Watano",
];

function MyFeedback() {
  return (
    <>
      <PanelHeading label="My Feedback" />
      <Grid
        container
        sx={{
          border: "1px solid gray",
          height: "70vh",
        }}
      >
        <Section>
          <Typography
            sx={{
              textTransform: "uppercase",
              fontSize: "1rem",
              fontWeight: "600",
              color: "gray",
              padding: "10px 10px",
            }}
            variant="h3"
          >
            Feedback given
          </Typography>
          <List>
            {users.map((name) => (
              <ListItem
                sx={{
                  padding: "30px",
                  borderTop: "1px solid gray",
                  borderBottom: "1px solid gray",
                  "&:hover": {
                    backgroundColor: "#E8E8E8",
                  },
                }}
                key={name}
              >
                <Link to={`/${name}`}>{name}</Link>
              </ListItem>
            ))}
          </List>
        </Section>
        <section>
          <Typography variant="h3">Gertrude Kwanza's Feedback</Typography>
        </section>
      </Grid>
    </>
  );
}

export default MyFeedback;
