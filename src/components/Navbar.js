import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link> | <Link to="/login">Login</Link> |
      <Link to="/account"> Account</Link> |{" "}
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
};

export default Navbar;
