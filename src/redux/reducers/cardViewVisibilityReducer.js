const FIRST_VISIBILITY = false;

const cardViewControlReducer = (state = FIRST_VISIBILITY, action)=>{
    switch (action.type) {
        case "IS_OPEN_CART_VIEW":
            return !state;
            break;
        default:
            return state;
            break;
    }
}

export default cardViewControlReducer;