import {
  GET_SEARCH_RESULT,
  SUCCESS_SEARCH_RESULT,
} from "../constants/ActionTypes";

const INITIAL_STATE = {
  result: [],
  totalResult: 0,
  isLoading: false,
};

export default function LandingReducers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_SEARCH_RESULT:
      return {
        ...state,
        isLoading: true,
      };
    case SUCCESS_SEARCH_RESULT:
      return {
        ...state,
        result: action.payload.results,
        totalResult: action.payload.resultCount,
        isLoading: false,
      };
    default:
      return state;
  }
}
