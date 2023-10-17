import { GET_ALL_PRODUCTS, GET_BY_ID } from "../constants/Constant";

const productReducers = (state = {}, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return { ...state, products: action.payload };
        case GET_BY_ID:
            return { ...state, product: action.payload };
        default:
            return state;
    }
}

export default productReducers;