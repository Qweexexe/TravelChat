import { MobileNavReducer } from "../reducers/MobileNavReducer";
import { signUpReducer } from "../reducers/SignUpReducer";
import { combineReducers, createStore } from "redux";
import { themesReducer } from "../reducers/ThemesReducer";

const Root = combineReducers({
  mobileNav: MobileNavReducer,
  signUp: signUpReducer,
  themes: themesReducer,
});

export const store = createStore(Root);
