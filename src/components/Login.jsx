import React, { useState } from "react";
import { loginUser } from "../api/user";
function Login({ setToken }, { setIsLoggedIn }) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <h1>This is the login page</h1>
      <form
        className="form"
        onSubmit={async (ev) => {
          ev.preventDefault();

          const result = await loginUser(username, password);

          localStorage.setItem("token", result.token);
          setToken(result.token);
          // {
          //   result.success ? setIsLoggedIn(true) : setIsLoggedIn(false);
          // }

          setUserName("");
          setPassword("");
        }}
      >
        <input
          value={username}
          type="text"
          placeholder="username"
          onChange={(ev) => {
            setUserName(ev.target.value);
          }}
          min="10"
          required
        />
        <input
          value={password}
          type="password"
          placeholder="password"
          onChange={(ev) => {
            setPassword(ev.target.value);
          }}
          min="10"
          required
        />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export default Login;
