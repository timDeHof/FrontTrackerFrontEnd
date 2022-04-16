import React, { useState } from "react";
import CreatingRoutines from "./CreatingRoutines";
import GetFilteredRoutines from "./GetFilteredRoutines";

/**
 *   As a registered user on the My Routines tab, I want to:
 *     [x] - be shown a form to create a new routine
 *           -- the form should have text fields for name and goal
 *         - for each routine which is owned by me I should
 *              [x] - be able to update the name and goal for the routine
 *              [x] - be able to delete the entire routine
 *              [] - be able to add an activity to a routine via a small form which has
 *                  a dropdown for all activities, an inputs for count and duration
 *              [] - be able to update the duration or count of any activity
 *                   on the routine
 *              [] - be able to remove any activity from the routine
 */

const MyRoutines = (activities, setActivities) => {
  const [userRoutines, setUserRoutines] = useState([]);
  //console.log("userRoutines in MyRoutines:", userRoutines);
  return (
    <div>
      <h1> My Routines</h1>
      <CreatingRoutines
        userRoutines={userRoutines}
        setUserRoutines={setUserRoutines}
      />
      <GetFilteredRoutines
        userRoutines={userRoutines}
        setUserRoutines={setUserRoutines}
        activities={activities}
        setActivities={setActivities}
      />
    </div>
  );
};

export default MyRoutines;
