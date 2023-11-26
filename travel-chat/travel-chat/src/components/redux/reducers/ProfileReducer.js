const profileState = {
  profile: {
    avatar: null,
    email: null,
    first_name: null,
    id: null,
    last_name: null,
    nickname: null,
  },
};

export const profileReducer = (state = profileState, action) => {
  switch (action.type) {
    case "SET_USER_PROFILE":
      return {
        ...state,
        profile: action.payload,
      };

    default:
      return state;
  }
};
