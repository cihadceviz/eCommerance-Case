import { createStore, combineReducers } from "redux";
import loginReducer from "./reducers/loginReducer";
import shopReducer from './reducers/shopReducer';
import cardViewControlReducer from './reducers/cardViewVisibilityReducer'
import userReducer from './reducers/userReducer'

const reducers = combineReducers({
    login: loginReducer,
    shop: shopReducer,
    isCartViewVisible: cardViewControlReducer,
    user: userReducer,
})
const store = createStore(reducers)

export default store;