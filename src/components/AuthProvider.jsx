import AuthContext from "../AuthContext";
import { useState, useEffect } from "react";
import { fetchUser } from "../api/user";
import { getActivities } from "../api/Activities";
import { getRoutines } from "../api/routines";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activities, setActivities] = useState([]);
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    async function getUser() {
      if (localStorage.getItem("token")) {
        const newUser = await fetchUser(token);
        //console.log("newUser:", newUser);
        //setToken(token);
        setUser(newUser);
        setIsLoggedIn(true);
      }
    }
    getUser();
  }, [token]);

  useEffect(() => {
    const getAllActivities = async () => {
      const response = await getActivities();
      //console.log("activities response:", response);

      setActivities(response);
    };
    getAllActivities();
  }, []);
  //const [userId, setUserId] = useState([]);

  useEffect(() => {
    const getAllRoutines = async () => {
      const response = await getRoutines();
      setRoutines(response);
    };
    getAllRoutines();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        isLoggedIn,
        setIsLoggedIn,
        activities,
        setActivities,
        routines,
        setRoutines,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
