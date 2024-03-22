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

const isValidEmail = (email: string): string => {
  const regex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return regex.test(email.trim().toLowerCase()) ? "" : "Некорректный email";
};

const isValidPassword = (password: string): string => {
  const regex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}$/;
  return regex.test(password.trim())
    ? ""
    : "Пароль должен содержать хотя бы одну заглавную и строчную букву, цифру и специальный символ";
};

const emptyErrorText: string = "Объязательное поле !";

export const networkErrorText: string =
  "Что-то пошло не так! Пожалуйста, убедитесь, что вы подключены к сети, и повторите попытку.";

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
          value === ""
            ? emptyErrorText
            : value.trim().length >= 10
            ? isValidPassword(value)
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

export interface BirthdayType {
  day: string;
  month: string;
  year: string;
}

export const currentDate: Date = new Date();
export const initialBirthdayValue: BirthdayType = {
  day: currentDate.getDate().toString(),
  month: (currentDate.getMonth() + 1).toString(),
  year: currentDate.getFullYear().toString(),
};

export const months: string[] = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

export const generateDaysInMonth = (
  month: string,
  year: string,
  setState: React.Dispatch<React.SetStateAction<number>>
): void => {
  const daysInMonth: number = new Date(
    Number(year),
    Number(month),
    0
  ).getDate();
  setState(daysInMonth);
};
