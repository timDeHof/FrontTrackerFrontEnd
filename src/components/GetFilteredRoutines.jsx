import React, { useEffect, useState } from "react";
import { getPublicRoutinesByUser } from "../api/routines";
import useAuth from "../hooks/useAuth";
import SingleRoutine from "./SingleRoutine";
//import AddActivitiesToRoutines from "./AddActivitiesToRoutines";

const GetFilteredRoutines = ({
  activities,
  setActivities,
  userRoutines,
  setUserRoutines,
}) => {
  //console.log("userRoutines in GetFilteredRoutines:", userRoutines);
  // console.log("activities:", activities);
  const { user, token } = useAuth();
  //const { buttonClicked, setButtonClicked } = useState(false);
  const [routineName, setRoutineName] = useState("");

  // const handleClick = () => {
  //   let buttonStatus = setButtonClicked(true);
  //   return buttonStatus;
  // };

  // should be a function that enable a form to add an activity to a routine

  useEffect(() => {}, [userRoutines]);

  useEffect(() => {
    const getAllPublicRoutinesByUser = async () => {
      //console.log("user's username:", user.username);
      if (user.username) {
        const response = await getPublicRoutinesByUser(user.username, token);
        //console.log("response ", response);
        setUserRoutines(response);
      }
    };
    getAllPublicRoutinesByUser();
  }, [setUserRoutines, user.username]);

  return (
    <div className="routines">
      {userRoutines && userRoutines.length
        ? userRoutines.map((userRoutine, id) => {
            //console.log("single routine:", userRoutine);
            return (
              <SingleRoutine
                key={`routine${id}`}
                userRoutine={userRoutine}
                userRoutines={userRoutines}
                setUserRoutines={setUserRoutines}
                id={id}
              />
            );
          })
        : null}
    </div>
  );
};

export default GetFilteredRoutines;
