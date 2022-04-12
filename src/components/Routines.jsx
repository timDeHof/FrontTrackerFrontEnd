import React, { useEffect, useState } from "react";

import { getRoutines } from "../api/routines";

function Routines({ userObj, token }) {
  const [routines, setRoutines] = useState([]);
  //const [userId, setUserId] = useState([]);

  useEffect(() => {
    const getAllRoutines = async () => {
      const response = await getRoutines();
      setRoutines(response);
      console.log("response:", response);
    };
    getAllRoutines();
  });
  const form = (
    <div className="routine" key={routines.id}>
      <h2>creatorId: {routines.creatorId}</h2>
      <h2>creator name: {routines.creatorName}</h2>
      <h2>isPublic: {routines.isPublic}</h2>
      <p>Name: {routines.name}</p>
      <p>Goal: {routines.goal}</p>
    </div>
  );
  return (
    <div className="posts">
      <h1>This is Routines page</h1>
      {routines.map((routine, i) => {
        return form;
      })}
    </div>
  );
}

export default Routines;
