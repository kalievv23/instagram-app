import {LOGIN_SUCCESS, REGISTER_SUCCESS} from "./ActionTypes";

interface payloadType {
    token: string;
    user: object;
}
export const registerSuccess = (data: payloadType) => ({
    type: REGISTER_SUCCESS,
    payload: {
        user: data.user,
        token: data.token,
    },
})

export const loginSuccess = (data: payloadType) => ({
    type: LOGIN_SUCCESS,
    payload: {
        user: data.user,
        token: data.token,
    },
})