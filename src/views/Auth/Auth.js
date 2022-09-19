import React from "react";
import { Typography, Grid } from "@mui/material";
import LoginCard from "../../components/LoginCard/LoginCard";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();

  const handleAuth = () => {
    navigate("/dashboard");
  };
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
      <Typography
        sx={{
          fontWeight: "bold",
        }}
        variant="h2"
      >
        Login Form
      </Typography>
      <LoginCard handleAuth={handleAuth} />
    </Grid>
  );
};

export default Auth;
