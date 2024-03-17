import { RegisterModel } from "../Domain/Models";
import React from "react";
export const initialValidErrors = {
  emailAddress: "",
  fullName: "",
  userName: "",
  password: "",
};

export interface validErrorsType {
  emailAddress: string;
  fullName: string;
  userName: string;
  password: string;
}

export const initialRegisterModel: RegisterModel = {
  emailAddress: "",
  fullName: "",
  password: "",
  userName: "",
};

const isValidEmail = (email: string) => {
  const regex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return regex.test(email.trim().toLowerCase()) ? "" : "Некорректный email";
};

const emptyErrorText: string = "Объязательное поле !";

export const validatorForm = (
  name: string,
  value: string,
  setValidErrors: React.Dispatch<React.SetStateAction<validErrorsType>>
): void => {
  switch (name) {
    case "emailAddress":
      setValidErrors((prevValidErrors) => ({
        ...prevValidErrors,
        [name]: value.trim() === "" ? emptyErrorText : isValidEmail(value),
      }));
      break;
    case "password":
      setValidErrors((prevValidErrors) => ({
        ...prevValidErrors,
        [name]:
          value.length >= 10
            ? ""
            : value === ""
            ? emptyErrorText
            : "Не менее 10 символов",
      }));
      break;
    case "userName":
    case "fullName":
      setValidErrors((prevValidErrors) => ({
        ...prevValidErrors,
        [name]:
          value.length >= 6
            ? ""
            : value === ""
            ? emptyErrorText
            : `Не менее 6 символов`,
      }));
      break;
    default:
      break;
  }
};
