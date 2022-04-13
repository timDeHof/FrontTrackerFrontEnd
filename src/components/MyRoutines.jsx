import React, { useState, useEffect } from "react";
import { createRoutines } from "../api/myRoutines";

createRoutines = ({ token, posts, setPosts }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [routines, setRoutines] = useState("");
  return (
    <div>
      <h1> My Routines</h1>
    </div>
  );
};

export default createRoutines;
