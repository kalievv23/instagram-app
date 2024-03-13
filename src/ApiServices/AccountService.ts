import axios from "axios";
import {LoginModel,RegisterModel} from "../Domain/Models/index.ts";
import {MainURL,AccountEndpoints} from "../Domain/Constants/Urls/Urls.ts";

export const AccountService = {
    Login: async function (loginModel:LoginModel){
        return axios.post(MainURL+AccountEndpoints.Login,loginModel)

    },
    Register: async function (registerModel:RegisterModel){
        return axios.post(MainURL+AccountEndpoints.Register,registerModel)
    }
};