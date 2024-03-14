import axios from "axios"
import type { LoginModel, RegisterModel } from "../Domain/Models/index";
import { MainURL, AccountEndpoints } from "../Domain/Constants/Urls/Urls";

export const AccountService = {
  Login: async function (loginModel: LoginModel) {
    return axios.post(MainURL + AccountEndpoints.Login, loginModel);
  },
  Register: async function (registerModel: RegisterModel) {
    return axios.post(MainURL + AccountEndpoints.Register, registerModel);
  },
};
