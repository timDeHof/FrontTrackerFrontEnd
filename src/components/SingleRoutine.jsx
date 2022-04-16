import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import { deleteRoutine, updateRoutine } from "../api/routines";

const SingleRoutine = ({ userRoutine, userRoutines, setUserRoutines, id }) => {
  const { user, token } = useAuth();
  const [newRoutineName, setNewRoutineName] = useState("");
  const [newRoutineGoal, setNewRoutineGoal] = useState("");
  const [newRoutineIsPublic, setNewRoutineIsPublic] = useState("");

  const handleSubmit = async (e, routineId) => {
    e.preventDefault();
    //console.log("Submitted");
    const routine = {};
    if (newRoutineName !== "") {
      routine.name = newRoutineName;
    }
    if (newRoutineGoal !== "") {
      routine.goal = newRoutineGoal;
    }
    const data = await updateRoutine(routine, routineId, token);
    //const params = { title: routineName, routineId };
    console.log(data);
  };

  const handleDelete = async (id) => {
    //console.log("userRoutine id:", id);
    const data = await deleteRoutine(token, id);
    //console.log("deleted data:", data);
    const filteredRoutines = userRoutines.filter(
      (routine) => routine.id !== id
    );
    const newArray = [...filteredRoutines];
    setUserRoutines(filteredRoutines);
  };

  return (
    <div className="routineList">
      <h2>Routine {id + 1}:</h2>
      <ul>
        <li>
          <p>Name: {userRoutine.name}</p>
          <form onSubmit={(e) => handleSubmit(e, userRoutine.id)}>
            <input
              placeholder="name"
              value={newRoutineName}
              onChange={(e) => setNewRoutineName(e.target.value)}
            />
            <button type="submit">Update Name!</button>
          </form>
        </li>
        <li>
          <p>Goal: {userRoutine.goal}</p>
          <form onSubmit={(e) => handleSubmit(e, userRoutine.id)}>
            <input
              placeholder="goal"
              value={newRoutineGoal}
              onChange={(e) => setNewRoutineGoal(e.target.value)}
            />
            <button type="submit">Update goal!</button>
          </form>
        </li>
        <li>
          <p>Is Public: {JSON.stringify(userRoutine.isPublic)}</p>
        </li>
        <li>
          <p>Activities: </p>
          <ul>
            {userRoutine.activities && userRoutine.activities.length
              ? userRoutine.activities.map((activity, i) => {
                  return (
                    <div key={`activity${i}`}>
                      <li>Activity Name: {activity.name}</li>
                      <li>Count:{activity.count}</li>
                      <li>Duration:{activity.duration}</li>
                    </div>
                  );
                })
              : null}
          </ul>
        </li>
      </ul>
      <button onClick={() => handleDelete(userRoutine.id)}>
        Delete Routine
      </button>
    </div>
  );
};

export default SingleRoutine;
