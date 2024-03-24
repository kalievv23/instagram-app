import { AuthActionTypes } from "./ActionTypes";
import { UserAccount } from "../../Domain/Models/UserAccount";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
interface UserPayload {
  token: string;
  user: UserAccount;
}
interface RegisterSuccess {
  type: AuthActionTypes.REGISTER_SUCCESS;
  payload: UserPayload;
}
interface LoginSuccess extends Pick<RegisterSuccess, "payload"> {
  type: AuthActionTypes.LOGIN_SUCCESS;
}
interface IsAuthenticated {
  type: AuthActionTypes.SETISAUTH;
  payload: boolean;
}

export type AuthAction = RegisterSuccess | LoginSuccess | IsAuthenticated;

export const RegisterSuccessAct = (payload: UserPayload): RegisterSuccess => ({
  type: AuthActionTypes.REGISTER_SUCCESS,
  payload,
});
export const LoginSuccessAct = (payload: UserPayload): LoginSuccess => ({
  type: AuthActionTypes.LOGIN_SUCCESS,
  payload,
});
export const SetAuthenticated = (payload: boolean): IsAuthenticated => ({
  type: AuthActionTypes.SETISAUTH,
  payload,
});

export const useAuthDispatch = () => {
  return useDispatch<Dispatch<AuthAction>>();
};
