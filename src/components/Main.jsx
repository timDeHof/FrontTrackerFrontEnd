import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";

function Main() {
  return (
    <div className="web-page">
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default Main;
