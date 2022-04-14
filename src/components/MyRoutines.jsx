import React, { useEffect, useState } from "react";
import CreatingRoutines from "./CreatingRoutines";
import useAuth from "../hooks/useAuth";
import { getPublicRoutinesByUser } from "../api/routines";
/**
 *   As a registered user on the My Routines tab, I want to:
 *     [x] - be shown a form to create a new routine
 *           -- the form should have text fields for name and goal
 *         - for each routine which is owned by me I should
 *              [] - be able to update the name and goal for the routine
 *              [] - be able to delete the entire routine
 *              [] - be able to add an activity to a routine via a small form which has
 *                  a dropdown for all activities, an inputs for count and duration
 *              [] - be able to update the duration or count of any activity
 *                   on the routine
 *              [] - be able to remove any activity from the routine
 */

// get Routines again and filter by comparing user.username to creator name
// to only show the user's routines
const GetFilteredRoutines = () => {
  const [userRoutines, setUserRoutines] = useState([]);
  const { user } = useAuth();
  //console.log("user:", user.username);
  useEffect(
    (username) => {
      const getAllPublicRoutinesByUser = async () => {
        const response = await getPublicRoutinesByUser(user.username);
        setUserRoutines(response);
      };
      getAllPublicRoutinesByUser();
    },
    [user.username]
  );
  return (
    <div className="routines">
      {userRoutines && userRoutines.length
        ? userRoutines.map((userRoutine, id) => {
            return (
              <div className="routineList" key={`routine${id}`}>
                <ul>
                  <li>
                    <h2>creator name: {userRoutine.creatorName}</h2>
                  </li>
                  <li>
                    <p>Name: {userRoutine.name}</p>
                  </li>
                  <li>
                    <p>Goal: {userRoutine.goal}</p>
                  </li>
                  <li>
                    <p>Activities: </p>
                    <ul>
                      {userRoutine.activities.length
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
              </div>
            );
          })
        : null}
      )
    </div>
  );
};

const MyRoutines = ({ post, setPost }) => {
  return (
    <div>
      <h1> My Routines</h1>
      <CreatingRoutines />
      <GetFilteredRoutines />
    </div>
  );
};

export default MyRoutines;

// look at the create post file in strangerthings for reference
