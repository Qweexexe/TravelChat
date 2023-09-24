import {combineReducers, createStore} from "redux";
import {headReducer} from "./reducers/headReducer";

const RootReducer = combineReducers({
    head : headReducer
})

export const store = createStore(RootReducer)