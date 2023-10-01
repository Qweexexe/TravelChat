import axios from "axios";
import {BASE_URL} from "../../env";


export const guestSignUp = (data) => {
    axios
        .post(`${BASE_URL}`, {
           data :  data
        })
}