export const BASE_URL = "https://fitnesstrac-kr.herokuapp.com";

const URL = BASE_URL + "/api";

export const getRoutines = async () => {
  try {
    const response = await fetch(`${URL}/routines`);
    const result = await response.json();
    if (result.error) throw result.error;
    return result.routines;
  } catch (err) {
    console.error("uh oh, trouble fetching routines!", err);
  }
};
