import axios from "axios";
import { AxiosResponse } from "axios";
import type { LoginModel, RegisterModel } from "../Domain/Models/index";
import { AccountEndpoints } from "../Domain/Constants/Urls/Urls";
import type { AuthResponse } from "../Domain/Responses/AuthResponse";
import $api, { MAIN_URL } from "../http";
export const AccountService = {
  Login: async function (
    loginModel: LoginModel
  ): Promise<AxiosResponse<AuthResponse>> {
    return await axios.post<AuthResponse>(
      MAIN_URL + AccountEndpoints.Login,
      loginModel
    );
  },
  Register: async function (
    registerModel: RegisterModel
  ): Promise<AxiosResponse<AuthResponse>> {
    console.log(registerModel);
    return await axios.post<AuthResponse>(
      MAIN_URL + AccountEndpoints.Register,
      registerModel
    );
  },
  LoginWithAccessToken: async function (): Promise<
    AxiosResponse<AuthResponse>
  > {
    return await $api.get(AccountEndpoints.LoginWithAccessToken);
  },
};
