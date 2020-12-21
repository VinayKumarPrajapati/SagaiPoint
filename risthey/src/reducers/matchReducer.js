import { initialize } from "passport";
import { CLEAR_MATCH, GET_MATCH, MATCH_LOADING } from "../actions/types";

const intialiState = {
  users: null,
  profiles: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case MATCH_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_MATCH:
      return { ...state, match: action.payload, loading: false };

    case CLEAR_MATCH:
      return {
        ...state,
        match: null,
      };

    default:
      return state;
  }
}
