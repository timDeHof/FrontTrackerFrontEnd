import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import MyRoutines from "./MyRoutines";
import Navbar from "./Navbar";
import Routines from "./Routines";
import SignUp from "./SignUp";
function Main() {
  return (
    <div className="web-page">
      <Navbar />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/routines">
          <Routines />
        </Route>
        <Route path="/Signup">
          <SignUp />
        </Route>
        <Route path="/MyRoutines">
          <MyRoutines />
        </Route>
      </Switch>
    </div>
  );
}

export default Main;
