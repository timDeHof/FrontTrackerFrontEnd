import React from "react";
import CreatingRoutines from "./CreatingRoutines";
/**
 *   As a registered user on the My Routines tab, I want to:
 *     [x] - be shown a form to create a new routine
 *           -- the form should have text fields for name and goal
 *         - for each routine which is owned by me I should
 *              [] - be able to update the name and goal for the routine
 *              [] - be able to delete the entire routine
 *              [] - be able to add an activity to a routine via a small form which has
 *                  a dropdown for all activities, an inputs for count and duration
 *              [] - be able to update the duration or count of any activity
 *                   on the routine
 *              [] - be able to remove any activity from the routine
 */

// get Routines again and filter by comparing user.username to creator name
// to only show the user's routines
const getFilteredRoutines = () => {
  return;
};
const MyRoutines = ({ post, setPost }) => {
  return (
    <div>
      <h1> My Routines</h1>
      <CreatingRoutines />
      <getFilteredRoutines />
    </div>
  );
};

export default MyRoutines;

// look at the create post file in strangerthings for reference
