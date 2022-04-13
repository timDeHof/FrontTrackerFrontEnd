import React, { useState, useEffect } from "react";
import { createRoutines } from "../api/myRoutines";
import useAuth from "../hooks/useAuth";

const CreatingRoutines = () => {
  const { token, user } = useAuth();
  const [title, setTitle] = useState("");
  const [goal, setGoal] = useState("");
  const [routines, setRoutines] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const routineObj = { name: title, goal };
    console.log(routineObj, "Making sure that the routineObj is connected");
    const response = await createRoutines(routineObj, token);
    console.log(response, "Getting response?");
    const newRoutine = response.data;
  };

  return (
    <div className="newRoutines">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="title"
        />
        <input
          type="text"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          placeholder="Goal"
        />
        <button type="submit">Create Routines</button>
      </form>
    </div>
  );
};

const MyRoutines = ({ post, setPost }) => {
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  //const [routines, setRoutines] = useState("");

  return (
    <div>
      <h1> My Routines</h1>
      <CreatingRoutines />
    </div>
  );
};

export default MyRoutines;

// look at the create post file in strangerthings for reference
