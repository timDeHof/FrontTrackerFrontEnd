import React from "react";
/**
 *  A small form which has a dropdown for all activities,
 *  an inputs for count and duration
 */
function AddActivitiesToRoutines(activities) {
  console.log("activities:", activities);
  const listActivity = activities.map((activity, id) => (
    <option key={`activityList${id}`} value={activity.name}>
      {activity.name}
    </option>
  ));
  return (
    <div className="activitiesList">
      <h1>Hello</h1>
      <select name="activities">{listActivity}</select>
    </div>
  );
}

export default AddActivitiesToRoutines;
