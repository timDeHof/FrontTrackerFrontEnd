import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import MyRoutines from "./MyRoutines";
import Navbar from "./Navbar";
import Routines from "./Routines";
import SignUp from "./SignUp";

function Main() {
  const [userObj, setUserObj] = useState({});
  const [token, setToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    let localStorageToken = localStorage.getItem("token");

    if (localStorageToken) {
      setToken(localStorageToken);
    }
  }, [token]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="web-page">
      <Navbar />
      <Switch>
        <Route path="/login">
          <Login setToken={setToken} setIsLoggedIn={setIsLoggedIn} />
        </Route>
        <Route path="/routines">
          <Routines />
        </Route>
        <Route path="/Signup">
          <SignUp setToken={setToken} />
        </Route>
        <Route path="/MyRoutines">
          <MyRoutines />
        </Route>
      </Switch>
    </div>
  );
}

export default Main;
