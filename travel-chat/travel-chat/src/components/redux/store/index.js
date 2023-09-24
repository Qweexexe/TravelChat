import {MobileNavReducer} from "../reducers/MobileNavReducer";
import {combineReducers, createStore} from "redux";

const Root = combineReducers({
    mobileNav : MobileNavReducer,
})


export const store = createStore(Root)