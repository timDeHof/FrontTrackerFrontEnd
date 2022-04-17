export const BASE_URL = "https://fitnesstrac-kr.herokuapp.com";
const URL = BASE_URL + "/api";

export const updateRoutineActivity = async (
  { count, duration },
  routineActivityId,
  token
) => {
  try {
    const response = await fetch(
      `${URL}/routine_activities/${routineActivityId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ count, duration }),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("uh oh, trouble updating routine activity", error);
  }
};

export const deleteRoutineActivity = async (routineActivityId, token) => {
  console.log("routineActivityId:", routineActivityId);
  console.log("token:", token);
  try {
    const response = await fetch(
      `${URL}/routine_activities/${routineActivityId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("uh oh, trouble deleting activity!", error);
  }
};
