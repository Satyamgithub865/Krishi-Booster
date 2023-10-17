import { combineReducers } from "redux";
import productReducers from './product';
import cartReducers from "./Cart";
import userReducers from './user'

export default combineReducers({
    products: productReducers,
    cart: cartReducers,
    user: userReducers
})