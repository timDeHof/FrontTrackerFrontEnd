/**
 * A custom hook that returns the current user and setter functions.
 * @returns {object} - an object containing the current user and setter functions.
 */
import { useContext } from "react";
import AuthContext from "../AuthContext";

const useAuth = () => {
  const { user, setUser, token, setToken, isLoggedIn, setIsLoggedIn } =
    useContext(AuthContext);
  console.log("user in USEAUTH:", user);
  console.log("token in USEAUTH:", token);
  console.log("isLoggedIn in USEAUTH:", isLoggedIn);
  return {
    user,
    setUser,
    token,
    setToken,
    isLoggedIn,
    setIsLoggedIn,
  };
};

export default useAuth;
