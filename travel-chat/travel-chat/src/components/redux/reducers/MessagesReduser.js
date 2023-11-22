const messagesState = {
  messages: [
    {
      user: "",
      text: "",
      photo: "",
      date: "",
    },
  ],
};

export const currentChatReducer = (state = messagesState, action) => {
  switch (action.type) {
    case "SET_NEW_MESSAGE":
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
