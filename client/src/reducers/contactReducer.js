import {
  GET_CONTACT,
  GET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT
} from "../actions/types";

const initialState = { contact: null, contacts: null };

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CONTACT:
      return {
        ...state,
        contact: action.payload
      };
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact._id !== action.payload
        )
      };
    default:
      return state;
  }
}
