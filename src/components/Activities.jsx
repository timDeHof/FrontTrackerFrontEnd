import React, { useState, useEffect } from "react";
import { getActivities } from "../api/Activities";
import CreatingActivities from "./CreatingActivities";
import useAuth from "../hooks/useAuth";

function Activities() {
  const { isLoggedIn } = useAuth();
  const [activities, setActivities] = useState("");

  useEffect(() => {
    const getAllActivities = async () => {
      const response = await getActivities();
      //console.log(response, "Awaiting the response or not");
      setActivities(response);
    };
    getAllActivities();
  }, []);

  return (
    <div className="activity">
      <h1>This is Activities page</h1>
      {isLoggedIn ? (
        <CreatingActivities
          activities={activities}
          setActivities={setActivities}
        />
      ) : null}

      {activities && activities.length
        ? activities.map((activity, id) => {
            return (
              <div className="activityList" key={`activity${id}`}>
                <h1>Activity {id + 1}</h1>
                <ul>
                  <li>
                    <p>Name: {activity.name}</p>
                    {/* button saying "show Public routines", when clicked a list of all public routines which feature that activity  */}
                  </li>
                  <li>
                    <p> Description: {activity.description}</p>
                    {/* ternary operator that check isLoggedIn is true, then give user the ability to edit description */}
                  </li>
                </ul>
              </div>
            );
          })
        : null}
    </div>
  );
}

export default Activities;
