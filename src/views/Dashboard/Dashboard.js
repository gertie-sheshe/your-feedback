import React from "react";
import Button from "@mui/material/Button";

import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div>Dashboard</div>
      <nav>
        <Link to="/">Auth</Link>
      </nav>
      <Button variant="contained">Hello World</Button>
    </>
  );
};

export default Dashboard;
