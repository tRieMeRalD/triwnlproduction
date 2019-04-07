import axios from "axios";

import {
  GET_ERRORS,
  CLEAR_ERRORS,
  GET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT
} from "./types";

// Submit to backend
export const contactSubmit = (contactData, history) => dispatch => {
  dispatch(clearErrors());
  axios
    .post("/api/contact/send", contactData)
    .then(res => history.push("/contact_success"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Get all contacts
export const getContacts = () => dispatch => {
  axios
    .get("/api/contact/all")
    .then(res =>
      dispatch({
        type: GET_CONTACTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_CONTACTS,
        payload: null
      })
    );
};

// Delete contact
export const deleteContact = id => dispatch => {
  axios
    .delete(`/api/contact/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_CONTACT,
        payload: id
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
