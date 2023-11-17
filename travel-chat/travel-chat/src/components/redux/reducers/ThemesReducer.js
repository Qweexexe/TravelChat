const themesState = {
  ukraine: false,
  abroad: false,
  extreme: false,
  hotels: false,
  other: false,
};

export const themesReducer = (state = themesState, action) => {
  switch (action.type) {
    case "SET_THEMES_INFO":
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
