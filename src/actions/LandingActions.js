import { GET_SEARCH_RESULT } from "../constants/ActionTypes";

export const LandingActions = (name, resolve, reject) => ({
  type: GET_SEARCH_RESULT,
  payload: name,
  resolve,
  reject,
});
