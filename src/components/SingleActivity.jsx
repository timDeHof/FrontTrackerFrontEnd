import React, { useState } from "react";
import { updateRoutineActivity } from "../api/routine_activities";
import useAuth from "../hooks/useAuth";
const SingleActivity = ({ userRoutine, activity, id }) => {
  const { token } = useAuth();
  const [newCount, setNewCount] = useState(0);
  const [newDuration, setNewDuration] = useState(0);

  const handleDeleteActivity = async (activity) => {
    console.log("selected activity:", activity.activities);
  };

  const handleUpdateActivity = async (ev, routineActivityId) => {
    ev.preventDefault();
    console.log("update activity:", routineActivityId);
    const activity = {};
    if (newCount !== "") {
      activity.count = newCount;
    }
    if (newDuration !== "") {
      activity.duration = newDuration;
    }
    const data = await updateRoutineActivity(
      activity,
      routineActivityId,
      token
    );
    console.log("data back:", data);
  };
  return (
    <div key={`activity${id}`}>
      <li>Activity Name: {activity.name}</li>
      <button onClick={() => handleDeleteActivity(activity.routineActivityId)}>
        Delete Activity from Routine
      </button>
      <li>Count:{activity.count} reps</li>
      <form
        onSubmit={(ev) => handleUpdateActivity(ev, activity.routineActivityId)}
      >
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
