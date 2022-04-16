import React, { useEffect, useState } from "react";
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
  const { activities, setActivities } = useState([]);
  console.log("activities:", activities);
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
        <Route
          path="/MyRoutines"
          element={
            <MyRoutines activities={activities} setActivities={setActivities} />
          }
        />
        <Route
          path="/activities"
          element={
            <Activities activities={activities} setActivities={setActivities} />
          }
        />
      </Routes>
    </div>
  );
}

export default Main;
