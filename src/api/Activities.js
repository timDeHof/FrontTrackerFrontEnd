export const BASE_URL = "https://fitnesstrac-kr.herokuapp.com";
export const COHORT = "2202-FTB-ET-WEB-FT";
const URL = BASE_URL + "/api";
// making a comment for branch push
export const getActivities = async () => {
  try {
    const response = await fetch(`${URL}/activities`);
    const result = await response.json();
    if (result.error) throw result.error;
    return result;
  } catch (error) {
    console.log("Problem fetching activities!");
  }
};
