import userReducer from "./userReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  user: userReducer
});

export default allReducers;
