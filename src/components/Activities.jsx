import React, { useState } from "react";
/**
 * GOALS:
 *  As an unregistered visitor on the Activities tab, I want to:
 *     [ ] - see a list of all activities which have been created
 *
 *  As a registered user on the Activities tab, I want to:
 *     [ ] - be shown a form to create a new activity (by name and description)
 *     [ ] - be shown an error if the activity already exists
 *
 */
function Activities(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [activity, setActivity] = useState("");

  /**
   * Returns whether or not the user is authenticated.
   * @returns {boolean} - Whether or not the user is authenticated.
   */
  const authenticated = localStorage.getItem("token") ? true : false;

  return (
    <div>
      <h1>This is Activities page</h1>
    </div>
  );
}

export default Activities;

//look at the create post file in strangerthings for reference
