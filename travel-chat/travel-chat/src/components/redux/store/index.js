import { MobileNavReducer } from "../reducers/MobileNavReducer";
import { signUpReducer } from "../reducers/SignUpReducer";
import { combineReducers, createStore } from "redux";
import { themesReducer } from "../reducers/ThemesReducer";
import { currentChatReducer } from "../reducers/CurrentChatReducer";

const Root = combineReducers({
  mobileNav: MobileNavReducer,
  signUp: signUpReducer,
  themes: themesReducer,
  current: currentChatReducer,
});

export const store = createStore(Root);
