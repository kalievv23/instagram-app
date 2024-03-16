import { Route, Routes } from "react-router-dom";
import React from "react";
import HomePage from "../HomePage";
import LoginPage from "../AuthPage/LoginPage";
import RegisterPage from "../AuthPage/RegisterPage";
import ErrorPage from "../ErrorPage";
import BirthdayPage from "../AuthPage/BirthdayPage";
import ConfirmationPage from "../AuthPage/ConfirmationPage";
import UserPage from "../UserPage";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/sign-up" element={<RegisterPage />} />
      <Route path="/birthday" element={<BirthdayPage/>} />
      <Route path="confirmation" element={<ConfirmationPage/>} />
      <Route path="/home" element={<HomePage />}  />
      <Route path="/user-name" element={<UserPage/>} />
      <Route path="*" element={<ErrorPage/>}/>
    </Routes>
  );
};
export default Router;
