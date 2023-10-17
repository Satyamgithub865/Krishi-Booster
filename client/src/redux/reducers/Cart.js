import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/Constant";

const cartReducers = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const item = action.payload;
            const exist = state.cartItems.find(product => product._id === item._id);

            if (exist) {
                return { ...state, cartItems: state.cartItems.map(data => data._id === exist._id ? item : data) };
            } else {
                return { ...state, cartItems: [...state.cartItems, item] };
            }
        case REMOVE_FROM_CART:
            const id = action.payload;
            return { ...state, cartItems: state.cartItems.filter((item) => item._id !== id) };
        default:
            return state;
    }
}

export default cartReducers;