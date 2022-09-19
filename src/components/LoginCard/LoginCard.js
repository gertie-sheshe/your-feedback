import React from "react";
import { Card, CardContent, CardActions, Button } from "@mui/material";
import LoginForm from "../../components/LoginForm";

function LoginCard({ handleAuth, selectedUser, setSelectedUser }) {
  return (
    <Card
      sx={{
        width: { xs: "80%", md: "50%", lg: "30%" },
        padding: "20px",
      }}
    >
      <CardContent>
        <LoginForm setSelectedUser={setSelectedUser} />
      </CardContent>
      <CardActions>
        <Button
          disabled={selectedUser === null}
          sx={{ width: "100%" }}
          variant="contained"
          onClick={handleAuth}
        >
          Login
        </Button>
      </CardActions>
    </Card>
  );
}

export default LoginCard;
