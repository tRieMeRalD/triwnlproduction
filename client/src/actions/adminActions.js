import axios from "axios";

import {
  GET_ERRORS,
  SET_CURRENT_USER,
  GET_CONTACT,
  CLEAR_CURRENT_PROFILE,
  GET_CONTACTS
} from "./types";

// Get a single contact
export const getCurrentProfile = () => dispatch => {
  axios
    .get("/api/admin")
    .then(res =>
      dispatch({
        type: GET_CONTACT,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_CONTACT,
        payload: {}
      })
    );
};

// Clear admin
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};
