import React, { useState, useEffect } from "react";
import { createActivities } from "../api/MyActivities";
import useAuth from "../hooks/useAuth";

const CreatingActivities = () => {
  const { token } = useAuth();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [activities, setActivities] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const activityObj = { name, description };
    const response = await createActivities(activityObj, token);
    const newActivity = response.data;
  };

  return (
    <div className="newActivity">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="description"
        />
        <button type="submit">Create Activities</button>
      </form>
    </div>
  );
};

const MyActivity = ({ props, setProps }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [activities, setActivities] = useState("");

  return (
    <div>
      <h1> My Activities</h1>
      <CreatingActivities />
    </div>
  );
};
// make sure to connect the activities
//testing out the branch
export default MyActivity;
