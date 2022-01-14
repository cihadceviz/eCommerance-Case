const CURRENT_USER = [];

const userReducer = (state = CURRENT_USER, action) => {
    switch (action.type) {
        case "SUCSESS_LOGIN":
            return state = [action.payload];
            break;
        case "LOGOUT":
            return state = [];
            break;
        default:
            return state
            break;
    }
}

export default userReducer;