import React from "react";
import { Link } from "react-router-dom";

import useAuth from "../hooks/useAuth";

function Navbar() {
  const { user } = useAuth();

  // console.log("USER FROM APP.JS", user);

  return (
    <div className="navbar">
      <nav>
        <h1>Welcome, {user.username} !</h1>
        <Link to="/">Home</Link>
        <Link to="/routines">Routines</Link>
        <Link to="/Login">Log In</Link>
        <Link to="/Signup">Signup</Link>
        <Link to="/MyRoutines"> My Routines </Link>
        <Link to="/Activities">Activities</Link>
      </nav>
    </div>
  );
}

export default Navbar;
