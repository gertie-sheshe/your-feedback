import React, { useEffect } from "react";
import { Typography, Grid } from "@mui/material";
import LoginCard from "../../components/LoginCard/LoginCard";
import { useNavigate } from "react-router-dom";

const Auth = ({ selectedUser, setSelectedUser }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedUser) {
      navigate("/dashboard/share-feedback");
    }
  }, [selectedUser, navigate]);

  const handleAuth = (user) => {
    setSelectedUser(user);
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
      {!selectedUser && (
        <>
          <Typography
            sx={{
              fontWeight: "bold",
              paddingBottom: "10px",
            }}
            variant="h2"
          >
            Login
          </Typography>
          <LoginCard
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
            handleAuth={handleAuth}
          />
        </>
      )}
    </Grid>
  );
};

export default Auth;
