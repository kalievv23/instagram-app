// import { AuthActionTypes } from "../Actions/ActionTypes";

// import type { UserAccount } from "../../Domain/Models/UserAccount";
// export interface RegisterSuccessAction {
//   type: AuthActionTypes;
//   payload: {
//     user: UserAccount;
//     token: string;
//   };
// }

// export interface LoginSuccessAction {
//   type: AuthActionTypes;
//   payload: {
//     user: UserAccount;
//     token: string;
//   };
// }

export type AuthAction = RegisterSuccessAction | LoginSuccessAction