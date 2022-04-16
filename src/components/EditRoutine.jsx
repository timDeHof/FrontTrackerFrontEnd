import React, { useState } from "react";
import { updatedRoutine } from "../api/routines";

function EditRoutine({ userRoutine, setuserRoutine }) {
  const [newName, setNewName] = useState("");
  const [newGoal, setNewGoal] = useState("");

  return <form className="post" onSubmit={(e) => {}}></form>;
}

export default EditRoutine;
