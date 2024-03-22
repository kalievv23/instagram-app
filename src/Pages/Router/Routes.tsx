import { Route, Routes } from "react-router-dom";
import React from "react";
import HomePage from "../HomePage";
import LoginPage from "../AuthPage/LoginPage";
import RegisterPage from "../AuthPage/RegisterPage";
import ErrorPage from "../ErrorPage";
import BirthdayPage from "../AuthPage/BirthdayPage";
import ConfirmationPage from "../AuthPage/ConfirmationPage";
import UserPage from "../UserPage";
import { MainPage } from "../Main/MainPage";
const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/sign-up" element={<RegisterPage />} />
      <Route path="/sign-up/birthday" element={<BirthdayPage />} />
      <Route path="/sign-up/confirmation" element={<ConfirmationPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/user-name" element={<UserPage />} />
      <Route path="/nav" element={<MainPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
export default Router;
