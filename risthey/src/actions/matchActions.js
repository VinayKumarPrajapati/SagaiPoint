import axios from "axios";
import { GET_MATCH, MATCH_LOADING, CLEAR_MATCH } from "./types";

//Get Current Profile
export const getAllMatch = () => (dispatch) => {
  dispatch(setMatchLoading());
  axios
    .get("/api/match-found")
    .then((res) => dispatch({ type: GET_MATCH, payload: res.data }))
    .catch((err) => dispatch({ type: GET_MATCH, payload: {} }));
};

// Match Loading
export const setMatchLoading = () => {
  return {
    type: MATCH_LOADING,
  };
};
// Clear Match
export const clearCurrentMatch = () => {
  return {
    type: CLEAR_MATCH,
  };
};
