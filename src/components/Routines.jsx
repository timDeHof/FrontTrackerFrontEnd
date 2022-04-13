import React, { useEffect, useState } from "react";
import { getRoutines } from "../api/routines";
/** GOALS
 *  As any user on the Routines tab, I want to:
 *     [x] - see a list of all public routines showing:
 *         The routine name, goal, and creator's username
 *         A list of activities for the routine, including their name, description, and *         duration and/or count
 *
 *   As a registered user on the My Routines tab, I want to:
 *     [] - be shown a form to create a new routine
 *           -- the form should have text fields for name and goal
 *              for each routine which is owned by me I should
 *              [] - be able to update the name and goal for the routine
 *              [] - be able to delete the entire routine
 *              [] - be able to add an activity to a routine via a small form which has
 *                  a dropdown for all activities, an inputs for count and duration
 *              [] - be able to update the duration or count of any activity
 *                   on the routine
 *              [] - be able to remove any activity from the routine
 */
function Routines({ userObj, token }) {
  const [routines, setRoutines] = useState([]);
  //const [userId, setUserId] = useState([]);

  useEffect(() => {
    const getAllRoutines = async () => {
      const response = await getRoutines();
      setRoutines(response);
    };
    getAllRoutines();
  }, []);

  return (
    <div className="routines">
      <h1>This is Routines page</h1>
      {routines && routines.length
        ? routines.map((routine, id) => {
            //console.log("routine:", routine);
            return (
              <div className="routineList" key={`routine${id}`}>
                <ul>
                  <li>
                    <h2>creator name: {routine.creatorName}</h2>
                  </li>
                  <li>
                    <p>Name: {routine.name}</p>
                  </li>
                  <li>
                    <p>Goal: {routine.goal}</p>
                  </li>
                  <li>
                    <p>Activities: </p>
                    <ul>
                      {routine.activities.length
                        ? routine.activities.map((activity, i) => {
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
              </div>
            );
          })
        : null}
    </div>
  );
}

export default Routines;
