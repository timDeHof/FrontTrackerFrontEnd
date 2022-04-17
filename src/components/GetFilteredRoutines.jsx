import React, { useEffect } from "react";
import { getPublicRoutinesByUser } from "../api/routines";
import useAuth from "../hooks/useAuth";
import SingleRoutine from "./SingleRoutine";

const GetFilteredRoutines = ({ userRoutines, setUserRoutines }) => {
  const { user, token } = useAuth();

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
  }, [setUserRoutines, token, user.username]);

  return (
    <div className="routines">
      {userRoutines && userRoutines.length
        ? userRoutines.map((userRoutine, id) => {
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
