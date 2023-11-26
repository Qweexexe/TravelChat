export const closeWindow = () => {
  return {
    type: "CLOSE",
  };
};

export const Signup = (data) => {
  return {
    type: "SIGN_UP",
    payload: data,
  };
};

export const setPhoto = (data) => {
  return {
    type: "SET_PHOTO",
    payload: data,
  };
};

export const setAuthInfo = (data) => {
  console.log("!!!!!!!");
  console.log(data);
  console.log("!!!!!!!");
  return {
    type: "SET_AUTH",
    payload: data,
  };
};
export const setThemesInfo = (payload) => ({
  type: "SET_THEMES_INFO",
  payload,
});

export const setCurrentChat = (payload) => ({
  type: "SET_CURRENT_CHAT",
  payload,
});
export const setUserProfile = (payload) => ({
  type: "SET_USER_PROFILE",
  payload,
});
