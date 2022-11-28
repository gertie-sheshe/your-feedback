import React, { useState } from "react";

import { Card, CardContent, CardActions, Button } from "@mui/material";
import LoginForm from "../../components/LoginForm";

function LoginCard({ handleAuth, setSelectedUser }) {
  const [user, setUser] = useState("");

  return (
    <Card
      sx={{
        width: { xs: "80%", md: "50%", lg: "30%" },
        padding: "20px",
      }}
    >
      <CardContent>
        <LoginForm
          setSelectedUser={setSelectedUser}
          setUser={setUser}
          user={user}
        />
      </CardContent>
      <CardActions>
        <Button
          disabled={user === ""}
          sx={{ width: "100%" }}
          variant="contained"
          onClick={() => handleAuth(user)}
        >
          Login
        </Button>
      </CardActions>
    </Card>
  );
}

export default LoginCard;
