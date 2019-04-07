import { GET_ADMIN, CLEAR_CURRENT_PROFILE } from "../actions/types";

const initialState = {
  admin: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ADMIN:
      return {
        ...state,
        admin: action.payload
      };
    case CLEAR_CURRENT_PROFILE:
      return {
        ...state,
        admin: null
      };
    default:
      return state;
  }
}
