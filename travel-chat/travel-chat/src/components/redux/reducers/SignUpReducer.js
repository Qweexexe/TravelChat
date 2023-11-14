const SingUpState = {
  email: "",
  password: "",
  nickname: "",
  //   photo: "",
  first_name: "",
  last_name: "",
  //   country: "",
  //   gender: "",
  //   birth: "",
};

export const signUpReducer = (state = SingUpState, action) => {
  switch (action.type) {
    case "SIGN_UP":
      return {
        ...state,
        // ...action.payload,
        first_name: action.payload["first_name"],
        last_name: action.payload["last_name"],
        email: action.payload["email"],
      };
    case "SET_PHOTO":
      return {
        ...state,
        photo: action.payload,
      };

    case "SET_AUTH":
      return {
        ...state,
        nickname: action.payload["nickname"],
        password: action.payload["password"],
      };
    default:
      return state;
  }
};
