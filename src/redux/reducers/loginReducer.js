const FIRST_LOGIN = false;

const loginReducer = (state = FIRST_LOGIN, action) => {
    switch (action.type) {
        case "LOGIN":
            return state = true;
            break;
        default:
            return state
            break;
    }
}

export default loginReducer;