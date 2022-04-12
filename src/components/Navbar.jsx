import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div className="navbar">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/routines">Routines</Link>
        <Link to="/Login">Log In</Link>
        <Link to="/Signup">Signup</Link>
        <Link to="/MyRoutines"> My Routines </Link>
      </nav>
    </div>
  );
}

export default Navbar;

{
  /* <ul className="navlist">
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
</ul> */
}
