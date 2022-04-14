import React, { useState, useEffect } from "react";
import { getActivities } from "../api/Activities";
import CreatingActivities from "./CreatingActivities";
import useAuth from "../hooks/useAuth";

function Activities(userObj, token) {
  const [activities, setActivities] = useState([]);
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    const getAllActivities = async () => {
      const response = await getActivities();
      console.log(response, "Awaiting the response or not");
      setActivities(response);
    };
    getAllActivities();
  }, []);

  return (
    <div className="activity">
      <h1>This is Activities page</h1>
      {isLoggedIn ? <CreatingActivities /> : null}

      {activities && activities.length
        ? activities.map((activity, id) => {
            return (
              <div className="activityList" key={`activity${id}`}>
                <h1>Activity {id + 1}</h1>
                <ul>
                  <li>
                    <p>Name: {activity.name}</p>
                  </li>
                  <li>
                    <p> Description: {activity.description}</p>
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
