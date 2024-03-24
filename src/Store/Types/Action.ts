import {LOGIN_SUCCESS, REGISTER_SUCCESS} from "../Actions/ActionTypes";
import { User } from "./State";

export interface RegisterSuccessAction {
    type: typeof REGISTER_SUCCESS;
    payload: {
        user: User;
        token: string;
    }
}

export interface LoginSuccessAction {
    type: typeof LOGIN_SUCCESS;
    payload: {
        user: User;
        token: string;
    }
}

export type AuthAction = RegisterSuccessAction | LoginSuccessAction