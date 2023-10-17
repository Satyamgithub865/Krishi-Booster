import * as api from '../../services/api'
import { ERROR, SIGN_UP } from '../constants/Constant'

export const signupUser = (user) => async (dispatch) => {
    try {
        const response = await api.userSignup(user);
        dispatch({ type: SIGN_UP, payload: response.data });
    } catch (error) {
        dispatch({ type: ERROR, payload: error.message })
    }
}