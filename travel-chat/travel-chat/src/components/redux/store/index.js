import {MobileNavReducer} from "../reducers/MobileNavReducer";
import {signUpReducer} from '../reducers/SignUpReducer'
import {combineReducers, createStore} from "redux";

const Root = combineReducers({
    mobileNav : MobileNavReducer,
    signUp : signUpReducer
})


export const store = createStore(Root)