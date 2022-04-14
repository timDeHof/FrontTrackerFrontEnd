import React, { useState, useEffect } from "react";
import { createRoutines } from "../api/myRoutines";
import useAuth from "../hooks/useAuth";
function CreatingRoutines({ routines, setRoutines }) {
  const { token, user } = useAuth();
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    //console.log("user:", user);
    const routineObj = { name, goal };
    //console.log(routineObj, "Making sure that the routineObj is connected");
    const response = await createRoutines(routineObj, token);
    //console.log(response, "Getting response?");
    const newRoutine = response.data;
    //setRoutines([newRoutine, ...routines]);
  };

  return (
    <div className="newRoutines">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
        />
        <input
          type="text"
          placeholder="Goal"
          value={goal}
          onChange={(ev) => setGoal(ev.target.value)}
        />
        <button type="submit">Create Routine</button>
      </form>
    </div>
  );
}

export default CreatingRoutines;
