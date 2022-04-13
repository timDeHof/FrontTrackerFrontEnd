import React, { useState } from "react";

function Activities(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [activity, setActivity] = useState("");

  const authenticated = localStorage.getItem("token") ? true : false;

  return (
    <div>
      <h1>This is Activities page</h1>
    </div>
  );
}

export default Activities;

//look at the create post file in strangerthings for reference
