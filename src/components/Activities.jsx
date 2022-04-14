import React, { useState, useEffect } from "react";
import { getActivities } from "../api/Activities";

function Activities(userObj, token) {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const getAllActivities = async () => {
      const response = await getActivities();
      setActivities(response);
    };
    getAllActivities();
  }, []);

  return (
    <div className="activity">
      <h1>This is Activities page</h1>
      {activities && activities.length
        ? activities.map((activity, id) => {
            return (
              <div className="activityList" key={`activity${id}`}>
                <ul>
                  <li>
                    <h2>Creator Name: {activity.creatorName}</h2>
                  </li>
                  <li>
                    <p>Name: {activity.name}</p>
                  </li>
                  <li>
                    <p>Goal: {activity.goal}</p>
                  </li>
                  <li>
                    <p>Activities: </p>
                    <ul>
                      {activity.activities.length
                        ? activity.activities.map((routine, i) => {
                            return (
                              <div key={`routine${i}}`}>
                                <li>Activity Name: {routine.name}</li>
                                <li>Count:{routine.count}</li>
                                <li>Duration:{routine.duration}</li>
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

export default Activities;
