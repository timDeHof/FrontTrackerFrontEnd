import React, { useState, useEffect } from "react";
import { createRoutines } from "../api/myRoutines";
import useAuth from "../hooks/useAuth";
function CreatingRoutines() {
  const { token, user } = useAuth();
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [routines, setRoutines] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const routineObj = { name, goal };
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
          value={name}
          onChange={(e) => setName(e.target.value)}
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
}

export default CreatingRoutines;
