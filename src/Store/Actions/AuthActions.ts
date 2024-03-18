import {REGISTER_SUCCESS} from "./ActionTypes";

export const registerSuccess = (token: string) => ({
    type: REGISTER_SUCCESS,
    payload: token,
})