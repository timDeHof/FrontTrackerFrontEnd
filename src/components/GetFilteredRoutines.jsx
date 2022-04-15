import React, { useEffect } from "react";
import { deleteRoutine, getPublicRoutinesByUser } from "../api/routines";
import useAuth from "../hooks/useAuth";

const GetFilteredRoutines = ({ userRoutines, setUserRoutines }) => {
  //console.log("userRoutines in GetFilteredRoutines:", userRoutines);
  const { user, token } = useAuth();

  const handleDelete = async (id) => {
    console.log("userRoutine id:", id);
    const data = await deleteRoutine(token, id);
    const filteredRoutines = userRoutines.filter(
      (routine) => routine.id !== id
    );
    const newArray = [...filteredRoutines, data];
    setUserRoutines(newArray);
  };

  useEffect(
    (username) => {
      const getAllPublicRoutinesByUser = async () => {
        if (user.username) {
          const response = await getPublicRoutinesByUser(user.username);
          setUserRoutines(response);
        }
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
                <h2>Routine {id + 1}:</h2>
                <ul>
                  <li>
                    <p>Name: {userRoutine.name}</p>
                  </li>
                  <li>
                    <p>Goal: {userRoutine.goal}</p>
                  </li>
                  <li>
                    <p>Activities: </p>
                    <ul>
                      {userRoutine.activities && userRoutine.activities.length
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
                <button onClick={() => handleDelete(userRoutine.id)}>
                  Delete Routine
                </button>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default GetFilteredRoutines;
