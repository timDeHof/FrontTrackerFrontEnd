import React, { useEffect, useState } from "react";
import { getRoutines } from "../api/routines";
import CreatingRoutines from "./CreatingRoutines";
/** GOALS
 *  As any user on the Routines tab, I want to:
 *     [x] - see a list of all public routines showing:
 *         The routine name, goal, and creator's username
 *         A list of activities for the routine, including their name, description, and *         duration and/or count
 *
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
      {/* <CreatingRoutines routines={routines} setRoutines={setRoutines} /> */}
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
