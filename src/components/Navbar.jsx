import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div className="navbar">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Routines">Routines</Link>
        <Link to="/Login">Log In</Link>
        <Link to="/Sign up">Sign up</Link>
        <Link to="/MyRoutines"> My Routines </Link>
        <Link to="/Activities">My Activities</Link>
      </nav>
    </div>
  );
}

export default Navbar;
