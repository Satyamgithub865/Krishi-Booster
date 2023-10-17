import * as api from '../../services/api'
import { GET_ALL_PRODUCTS, ERROR, GET_BY_ID, ADD_TO_CART, REMOVE_FROM_CART } from '../constants/Constant';

export const fetchAllProducts = () => async (dispatch) => {
    try {
        const response = await api.fetchAllProducts();
        //console.log(response)
        dispatch({ type: GET_ALL_PRODUCTS, payload: response.data });
    } catch (error) {
        dispatch({ type: ERROR, payload: error.message });
    }
}

export const fetchProductById = (id) => async (dispatch) => {
    try {
        const response = await api.fetchProductById(id);

        dispatch({ type: GET_BY_ID, payload: response.data });
    } catch (error) {
        dispatch({ type: ERROR, payload: error.message });
    }
}

export const addProductToCart = (id) => async (dispatch) => {
    try {
        const response = await api.addProductToCart(id);

        dispatch({ type: ADD_TO_CART, payload: response.data });
    } catch (error) {
        dispatch({ type: ERROR, payload: error.message });
    }
}

export const removeFromCart = (id) => (dispatch) => {
    try {
        dispatch({ type: REMOVE_FROM_CART, payload: id });
    } catch (error) {
        dispatch({ type: ERROR, payload: error.message });
    }
}

