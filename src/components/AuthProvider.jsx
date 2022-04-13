import AuthContext from "../AuthContext";
import { useState, useEffect } from "react";
import { fetchUser } from "../api/user";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [token, setToken] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [routines, setRoutines] = useState("");

  useEffect(() => {
    async function getUser() {
      if (localStorage.getItem("token")) {
        const newUser = await fetchUser(token);
        //console.log("newUser:", newUser);
        setToken(token);
        setUser(newUser);
        setIsLoggedIn(true);
      }
    }
    getUser();
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        isLoggedIn,
        setIsLoggedIn,
        title,
        setTitle,
        description,
        setDescription,
        routines,
        setRoutines,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
