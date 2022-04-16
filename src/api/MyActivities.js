export const BASE_URL = "https://fitnesstrac-kr.herokuapp.com";
export const COHORT = "2202-FTB-ET-WEB-FT";
const URL = BASE_URL + "/api";

export const createActivities = async (activityDetails, token) => {
  //console.log(activityDetails);

  try {
    const response = await fetch(`${URL}/activities/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(activityDetails),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error, "uh oh, trouble creating new activity");
  }
};
// getPubicRoutinesByActivity

// updateActivity
