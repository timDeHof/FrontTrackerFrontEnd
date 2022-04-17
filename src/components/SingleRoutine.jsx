import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import { deleteRoutine, updateRoutine } from "../api/routines";
import AddActivitiesToRoutines from "./AddActivitiesToRoutines";
import SingleActivity from "./SingleActivity";

const SingleRoutine = ({ userRoutine, userRoutines, setUserRoutines, id }) => {
  const { token } = useAuth();
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
    if (newRoutineIsPublic !== null) {
      routine.isPublic = newRoutineIsPublic;
    }
    const data = await updateRoutine(routine, routineId, token);
    setNewRoutineName("");
    setNewRoutineGoal("");
    setNewRoutineIsPublic("");
    const params = {
      name: routine.name,
      goal: routine.goal,
      isPublic: routine.isPublic,
      routineId,
    };
    console.log(params);
  };

  const handleDelete = async (id) => {
    //console.log("userRoutine id:", id);
    const data = await deleteRoutine(token, id);
    //console.log("deleted data:", data);
    const filteredRoutines = userRoutines.filter(
      (routine) => routine.id !== id
    );
    setUserRoutines(filteredRoutines);
  };

  return (
    <div className="routineList">
      <h2>Routine {id + 1}:</h2>
      <button onClick={() => handleDelete(userRoutine.id)}>
        Delete Routine
      </button>
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
          <form onSubmit={(e) => handleSubmit(e, userRoutine.id)}>
            <input
              placeholder="isPublic"
              value={newRoutineIsPublic}
              onChange={(e) => setNewRoutineIsPublic(Boolean(e.target.value))}
            />
            <button type="submit">Update Is Public</button>
          </form>
        </li>
        <li>
          <p>Activities: </p>
          <ul>
            {userRoutine.activities && userRoutine.activities.length
              ? userRoutine.activities.map((activity, i) => {
                  return (
                    <SingleActivity
                      key={`activity${i}`}
                      userRoutine={userRoutine}
                      activity={activity}
                    />
                  );
                })
              : null}
          </ul>
          <AddActivitiesToRoutines userRoutine={userRoutine} />
        </li>
      </ul>
    </div>
  );
};

export default SingleRoutine;
