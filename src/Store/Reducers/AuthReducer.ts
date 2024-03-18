import {AuthState} from "../Types/State";
import {AuthAction} from "../Types/Action";
import {LOGIN_SUCCESS, REGISTER_SUCCESS} from "../Actions/ActionTypes";

const initialState: AuthState = {
    token: null,
    isAuthenticated: false,
}

const AuthReducer = (state = initialState, action: AuthAction): AuthState => {
    console.log(action)
    switch (action.type) {
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                isAuthenticated: true,
            }
        default:
            return state;
    }
}

export default AuthReducer;