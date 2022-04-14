export const BASE_URL = "https://fitnesstrac-kr.herokuapp.com";
export const COHORT = "2202-FTB-ET-WEB-FT";
const URL = BASE_URL + "/api";

export const createRoutines = async (routineDetails, token) => {
  console.log(routineDetails);
  const response = await fetch(`${URL}/routines`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(routineDetails),
  });
  const data = await response.json();
  return data;
};
