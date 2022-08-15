import React from "react";
import { Link } from "react-router-dom";

const Auth = () => {
  return (
    <>
      <div>Auth</div>
      <nav>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
    </>
  );
};

export default Auth;
