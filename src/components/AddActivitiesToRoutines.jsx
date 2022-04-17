import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import { attachActivityToRoutine } from "../api/routines";
/**
 *  A small form which has a dropdown for all activities,
 *  an inputs for count and duration
 */
function AddActivitiesToRoutines({
  userRoutine,
  userRoutines,
  setUserRoutines,
}) {
  const { activities, token } = useAuth();
  //console.log("activities:", activities);

  const [activityCount, setActivityCount] = useState(0);
  const [activityDuration, setActivityDuration] = useState(0);
  const [selectActivity, setSelectActivity] = useState(0);

  //console.log("listActivity:", activity.id);
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    console.log("userRoutine id:", userRoutine.id);
    const activityObj = {
      activityId: selectActivity,
      count: activityCount,
      duration: activityDuration,
    };
    const response = await attachActivityToRoutine(
      activityObj,
      userRoutine.id,
      token
    );
    const addedActivity = response;
    const newArray = [addedActivity, ...userRoutine.activities];
    console.log("userRoutine", userRoutine);
    setUserRoutines(newArray);
    console.log("userRoutines:", userRoutines);
  };
  const listActivity = activities.map((activity, id) => (
    <option key={`activityList${id}`} value={activity.id} id={activity.id}>
      {activity.name}
      {activity.id}
    </option>
  ));
  const handleSelect = (e) => {
    setSelectActivity(parseInt(e.target.value));
    console.log("selectActivity:", typeof selectActivity, selectActivity);
  };
  return (
    <div className="activitiesList">
      <h2>Add an Activity</h2>
      <form onSubmit={(ev) => handleSubmit(ev)}>
        <label htmlFor="activities">Activities:</label>
        <select onChange={handleSelect}>{listActivity}</select>
        <label htmlFor="count">Count:</label>
        <input
          type="number"
          name="count"
          placeholder="count"
          value={activityCount}
          onChange={(ev) => setActivityCount(ev.target.value)}
          min="0"
          max="100"
        />
        <label htmlFor="duration">Duration:</label>
        <input
          type="number"
          placeholder="duration"
          value={activityDuration}
          onChange={(ev) => setActivityDuration(ev.target.value)}
          min="0"
          max="60"
        />
        <button
          type="submit"
          onClick={() => {
            console.log("activity id:", listActivity.props);
          }}
        >
          Add Activity
        </button>
      </form>
    </div>
  );
}
export default AddActivitiesToRoutines;
