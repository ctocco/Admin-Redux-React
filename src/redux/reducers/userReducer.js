const INITIAL_STATE = {
  user: []
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_USER": {
      return { user: [...state.user, action.payload] };
    }
    case "SHOW_USERS": {
      return { state };
    }
    default:
      return state;
  }
};

export default userReducer;
