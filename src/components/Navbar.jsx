import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div className="navbar">
      <ul className="navlist">
        <li className="link">
          <Link to="/">Home</Link>
        </li>
        <li className="link">
          <Link to="/Routines">Routines</Link>
        </li>
        <li className="link">
          <Link to="/Login">Log In</Link>
        </li>
        <li className="link">
          <Link to="/Signup">Signup</Link>
        </li>
        <li className="link">
          <Link to="/MyRoutines"> My Routines </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
