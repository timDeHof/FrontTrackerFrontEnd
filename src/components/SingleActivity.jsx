import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
const SingleActivity = ({ userRoutine, activity, i }) => {
  const { token } = useAuth();
  const [newCount, setNewCount] = useState(0);
  const [newDuration, setNewDuration] = useState(0);

  const handleDeleteActivity = (ev) => {
    console.log("deleted activity");
  };

  const handleUpdateActivity = (ev) => {
    ev.preventDefault();
    console.log("update activity");
  };
  return (
    <div key={`activity${i}`}>
      <li>Activity Name: {activity.name}</li>
      <button onClick={() => handleDeleteActivity(userRoutine.id)}>
        Delete Activity from Routine
      </button>
      <li>Count:{activity.count} reps</li>
      <form onSubmit={(ev) => handleUpdateActivity(ev, userRoutine.id)}>
        <input
          type="number"
          name="count"
          placeholder="count"
          value={newCount}
          onChange={(ev) => setNewCount(ev.target.value)}
          min="0"
          max="100"
        />
        <button type="submit">Update Count</button>
      </form>
      <li>Duration:{activity.duration} minutes</li>
      <form onSubmit={(ev) => handleUpdateActivity(ev, userRoutine.id)}>
        <input
          type="number"
          name="duration"
          placeholder="duration"
          value={newDuration}
          onChange={(ev) => setNewDuration(ev.target.value)}
          min="0"
          max="100"
        />
        <button type="submit">Update Duration</button>
      </form>
    </div>
  );
};

export default SingleActivity;
