import React, { useEffect } from "react";
import Activities from "./Activities";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import MyRoutines from "./MyRoutines";
import Navbar from "./Navbar";
import Routines from "./Routines";
import SignUp from "./SignUp";
import useAuth from "../hooks/useAuth";

function Main() {
  const { token, setToken, isLoggedIn, setIsLoggedIn } = useAuth();
  useEffect(() => {
    let localStorageToken = localStorage.getItem("token");
    if (localStorageToken) {
      setToken(localStorageToken);
    }
  }, [token]);

  return (
    <div className="web-page">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/Routines" element={<Routines />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/MyRoutines" element={<MyRoutines />} />
        <Route path="/activities" element={<Activities />} />
      </Routes>
    </div>
  );
}

export default Main;
