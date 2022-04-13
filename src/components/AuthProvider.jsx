import AuthContext from "../AuthContext";
import { useState, useEffect } from "react";
import { fetchUser } from "../api/user";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
