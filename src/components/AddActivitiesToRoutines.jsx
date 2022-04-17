import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import { attachActivityToRoutine } from "../api/routines";
/**
 *  A small form which has a dropdown for all activities,
 *  an inputs for count and duration
 */
function AddActivitiesToRoutines({ userRoutine }) {
  const { activities, routines, token } = useAuth();
  //console.log("activities:", activities);
  const [selectedActivity, setSelectedActivity] = useState("");
  const [activityCount, setActivityCount] = useState(0);
  const [activityDuration, setActivityDuration] = useState(0);
  const [id, setId] = useState(0);

  const listActivity = activities.map((activity, id) => (
    <option key={`activityList${id}`} value={activity.name} id={activity.id}>
      {activity.name}
      {activity.id}
    </option>
  ));
  //console.log("listActivity:", listActivity[0].props.id);
  // const handleActivityId = (listActivity) => {
  //   console.log("clicked", listActivity.props);
  // };
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    try {
      console.log("selectedActivity:", selectedActivity);
      //console.log("activity[0]", activities[0].name);
      console.log("routine id:", userRoutine.id);
      // let { choosenActivity } = activities.filter(
      //   () => activities.name === selectedActivity
      // );
      // console.log("choosenActivity:", choosenActivity);

      const activityObj = {
        activityId: selectedActivity.id,
        count: activityCount,
        duration: activityDuration,
      };
      console.log("selectedActivity:", activityObj);
      const data = await attachActivityToRoutine(
        {
          activityId: listActivity.props.id,
          count: activityCount,
          duration: activityDuration,
        },

        userRoutine.id,
        token
      );
      console.log("activity attach to routine:", data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="activitiesList">
      <h2>Add an Activity</h2>
      <form onSubmit={(ev) => handleSubmit(ev)}>
        <label htmlFor="activities">Activities:</label>
        <select
          name="activities"
          value={selectedActivity}
          onChange={(ev) => setSelectedActivity(ev.target.value)}
        >
          {activities.map((activity, id) => (
            <option
              key={`activityList${id}`}
              value={activity.name}
              id={activity.id}
            >
              {activity.name},id:{activity.id}
            </option>
          ))}
        </select>
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
