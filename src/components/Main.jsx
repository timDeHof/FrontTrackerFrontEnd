import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import MyRoutines from "./MyRoutines";
import Navbar from "./Navbar";
import Routines from "./Routines";
import SignUp from "./SignUp";
import Activities from "./Activities";

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
      <Routes>
        <Route
          path="/login"
          element={<Login setToken={setToken} setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/Routines" element={<Routines />} />
        <Route path="/Signup" element={<SignUp setToken={setToken} />} />
        <Route path="/MyRoutines" element={<MyRoutines />} />
        <Route path="/Activities" element={<Activities />} />
      </Routes>
    </div>
  );
}

export default Main;
