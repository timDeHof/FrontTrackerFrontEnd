export const BASE_URL = "https://fitnesstrac-kr.herokuapp.com";
const URL = BASE_URL + "/api";

export const getRoutines = async () => {
  try {
    const response = await fetch(`${URL}/routines`);
    const result = await response.json();
    //console.log("result:", result);
    if (result.error) throw result.error;
    return result;
  } catch (error) {
    console.error("uh oh, trouble fetching routines!", error);
  }
};

export const getRoutinesByUser = async (username, token) => {
  try {
    const response = await fetch(`${URL}/users/${username}/routines`, {
      headers: {
        "content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {}
};
export const getPublicRoutinesByUser = async (username, token) => {
  try {
    const response = await fetch(`${URL}/users/${username}/routines`, {
      headers: {
        "content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    //console.log("result:", result);
    if (result.error) throw result.error;
    return result;
  } catch (error) {
    console.error("uh oh, trouble fetching user's routines!", error);
  }
};
export const createRoutines = async ({ name, goal }, token) => {
  //console.log(routineDetails);
  try {
    const response = await fetch(`${URL}/routines/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name: name, goal: goal, isPublic: true }),
    });
    const data = await response.json();
    //console.log("data in createRoutines:", data);
    return data;
  } catch (error) {
    console.error("uh oh, trouble creating new routine!", error);
  }
};

export const updateRoutine = async (
  { name, goal, isPublic },
  routineId,
  token
) => {
  //console.log("datatype of isPublic:", typeof isPublic);
  try {
    const response = await fetch(`${URL}/routines/${routineId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name: name, goal: goal, isPublic: isPublic }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("uh oh, trouble updating routine", error);
  }
};

export const deleteRoutine = async (token, routineId) => {
  try {
    const response = await fetch(`${URL}/routines/${routineId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("uh oh, trouble creating new routine!", error);
  }
};
//attachActivityToRoutine
export const attachActivityToRoutine = async (
  { activityId, count, duration },
  routineId,
  token
) => {
  try {
    const response = await fetch(`${URL}/routines/${routineId}/activities`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        activityId: activityId,
        count: count,
        duration: duration,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("uh oh, trouble adding activity to routine", error);
  }
};
