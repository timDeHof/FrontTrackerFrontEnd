import React, { useState } from "react";
import { createRoutines } from "../api/routines";
import useAuth from "../hooks/useAuth";
function CreatingRoutines({ userRoutines, setUserRoutines }) {
  const { token } = useAuth();
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const routineObj = { name, goal };
    const response = await createRoutines(routineObj, token);

    const newUserRoutine = response;

    setUserRoutines([newUserRoutine, ...userRoutines]);
    //console.log("new userRoutines list:", userRoutines);
    setName("");
    setGoal("");
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
