import { ERROR, SIGN_UP } from "../constants/Constant";

const userReducers = (state={}, action) => {
    switch (action.type) {
        case SIGN_UP:
            return { ...state, signup: action.payload };
        case ERROR:
            return state;
        default:
            return state
    }
}

export default userReducers