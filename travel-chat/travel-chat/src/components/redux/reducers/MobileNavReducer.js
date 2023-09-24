const MobileState = {
    isOpened: false
}


export const MobileNavReducer = (state = MobileState, action) => {
    switch (action.type) {
        case "OPEN_CLOSE":
            return {
                ...state, isOpened: !state.isOpened
            }

        case "CLOSE":
            return {
                ...state,
                isOpened: false
            }
        default :
            return state
    }
}