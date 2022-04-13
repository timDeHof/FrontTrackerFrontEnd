import React from "react";
import Activities from "./Activities";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import MyRoutines from "./MyRoutines";
import Navbar from "./Navbar";
import Routines from "./Routines";
import SignUp from "./SignUp";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";

function Main() {
  const { token, setToken, isLoggedIn, setIsLoggedIn } = useAuth();

  useEffect(() => {
    let localStorageToken = localStorage.getItem("token");

    if (localStorageToken) {
      setToken(localStorageToken);
    }
  }, [token]);

  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     setIsLoggedIn(true);
  //   }
  // }, [isLoggedIn]);

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
