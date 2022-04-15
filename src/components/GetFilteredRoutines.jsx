import React, { useEffect } from "react";
import { deleteRoutine, getPublicRoutinesByUser } from "../api/routines";
import useAuth from "../hooks/useAuth";

const GetFilteredRoutines = ({ userRoutines, setUserRoutines }) => {
  //console.log("userRoutines in GetFilteredRoutines:", userRoutines);
  const { user, token } = useAuth();

  const handleDelete = async (id) => {
    console.log("userRoutine id:", id);
    const data = await deleteRoutine(token, id);
    console.log("deleted data:", data);
    const filteredRoutines = userRoutines.filter(
      (routine) => routine.id !== id
    );
    //const newArray = [...filteredRoutines];
    setUserRoutines(filteredRoutines);
  };

  useEffect(() => {}, [userRoutines]);

  useEffect(() => {
    const getAllPublicRoutinesByUser = async () => {
      console.log("user's username:", user.username);
      if (user.username) {
        const response = await getPublicRoutinesByUser(user.username, token);
        console.log("response ", response);
        setUserRoutines(response);
      }
    };
    getAllPublicRoutinesByUser();
  }, [setUserRoutines, user.username]);
  const handleUpdateRoutine = async (user) => {};
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
                    <p>Is Public: {JSON.stringify(userRoutine.isPublic)}</p>
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
                <button onClick={() => handleUpdateRoutine(userRoutine)}>
                  Update Routine
                </button>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default GetFilteredRoutines;
