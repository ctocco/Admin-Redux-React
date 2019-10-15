import { ADD_USER, SHOW_USERS } from "../constants/action_types";

let user = 0;

export function add_user(user_details) {
  console.log(user_details);
  return {
    type: ADD_USER,
    payload: user_details
  };
}

export function show_users() {
  return {
    type: SHOW_USERS
  };
}
