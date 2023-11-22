const currentChatState = {
  chat: {
    name: null,
    photo: null,
  },
};

export const currentChatReducer = (state = currentChatState, action) => {
  switch (action.type) {
    case "SET_CURRENT_CHAT":
      return {
        ...state,
        chat: action.payload,
      };

    default:
      return state;
  }
};
