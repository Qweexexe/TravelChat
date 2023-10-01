


const SingUpState = {
    username : '',
    password : '',
    photo : '',
    name : '',
    email : '',
    country : '',
    gender : '',
    birth : ''
}


export const signUpReducer = (state = SingUpState, action) => {
    switch (action.type) {
        case "SIGN_UP":
            return {
                ...state,
                ...action.payload
            }
        case "SET_PHOTO" :
            return {
                ...state,
                photo: action.payload
            }

        case "SET_AUTH" :
            return {
                ...state,
                name: action.payload['username'],
                password: action.payload['password']
            }
        default:
            return state
    }
}