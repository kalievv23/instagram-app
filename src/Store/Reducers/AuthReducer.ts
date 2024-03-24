import { AuthState } from "../Types/State";
import { AuthAction } from "../Actions/AuthActions";
import { AuthActionTypes } from "../Actions/ActionTypes";

const initialState: AuthState = {
  token: "",
  user: null,
  isAuthenticated: false,
};

const AuthReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AuthActionTypes.REGISTER_SUCCESS:
    case AuthActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        isAuthenticated: true,
      };
    case AuthActionTypes.SETISAUTH:
      return { ...state, isAuthenticated: action.payload };
    default:
      return state;
  }
};

export default AuthReducer;
