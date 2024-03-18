import {LOGIN_SUCCESS, REGISTER_SUCCESS} from "../Actions/ActionTypes";

export interface RegisterSuccessAction {
    type: typeof REGISTER_SUCCESS;
    payload: {
        token: string;
    }
}

export interface LoginSuccessAction {
    type: typeof LOGIN_SUCCESS;
    payload: {
        token: string;
    }
}

export type AuthAction = RegisterSuccessAction | LoginSuccessAction