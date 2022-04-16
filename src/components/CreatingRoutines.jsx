import React, { useState } from "react";
import { createRoutines } from "../api/routines";
import useAuth from "../hooks/useAuth";
function CreatingRoutines({ userRoutines, setUserRoutines }) {
  const { token } = useAuth();
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [isPublic, setIsPublic] = useState(true);
  //console.log("token:", token);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const routineObj = { name, goal, isPublic };
    const response = await createRoutines(routineObj, token);
    const newUserRoutine = response;
    const newArray = [newUserRoutine, ...userRoutines];
    setUserRoutines(newArray);
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
        {/* create a select box for "isPublic" */}
        <button type="submit">Create Routine</button>
      </form>
    </div>
  );
}

export default CreatingRoutines;
