import axios from 'axios'
import {BASE_URL} from "../../env";

export const LoginRequest = (username, password) => {
    axios
        .post(`${BASE_URL}/api/v1/auth/authenticate`, {
            username: username,
            password: password
        })

}
