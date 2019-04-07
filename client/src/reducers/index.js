import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import contactReducer from "./contactReducer";
import authReducer from "./authReducer";
import adminReducer from "./adminReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  contact: contactReducer,
  admin: adminReducer
});
