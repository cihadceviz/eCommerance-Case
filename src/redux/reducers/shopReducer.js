const FIRST_CART ={
     list: []
};

const shopReducer = (state = FIRST_CART, action)=>{
    switch (action.type) {
        case "ADD_SHOP_CARD":
            return {list: [...state.list, action.payload]}

        case "POP_SHOP_CARD":
            return {list: [
                ...state.list.slice(0, action.payload),
                ...state.list.slice(action.payload + 1)
            ],}

        case "CLEAR_SHOP_CARD":
            return {list: [],}

        case "EDIT_SHOP_CARD":
            state.list[action.payload[0]].selectedSize = action.payload[1]
            return state

        default:
            return state
            break;
    }
}


export default shopReducer;