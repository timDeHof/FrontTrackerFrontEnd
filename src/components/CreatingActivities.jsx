import React, { useState } from "react";
import { createActivities } from "../api/MyActivities";
import useAuth from "../hooks/useAuth";

const CreatingActivities = () => {
  const { token, activities, setActivities } = useAuth();
  console.log("activities:", activities);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const activityObj = { name, description };
    const response = await createActivities(activityObj, token);
    console.log(response);
    const newActivity = response;
    setActivities([newActivity, ...activities]);
    setName("");
    setDescription("");
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

export default CreatingActivities;
