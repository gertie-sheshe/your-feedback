import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

function LoginForm({ setUser, user }) {
  const handleChange = (event) => {
    setUser(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="auth-select">Login</InputLabel>
      <Select
        labelId="auth-select"
        label="Login"
        value={user}
        onChange={handleChange}
      >
        <MenuItem value="gertrude">Gertrude</MenuItem>
        <MenuItem value="kidoti">Kidoti</MenuItem>
        <MenuItem value="rufina">Rufina</MenuItem>
      </Select>
    </FormControl>
  );
}

export default LoginForm;
