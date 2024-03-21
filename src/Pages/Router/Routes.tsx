import { Route, Routes } from "react-router-dom";
import React from "react";
import HomePage from "../HomePage";
import LoginPage from "../AuthPage/LoginPage";
import RegisterPage from "../AuthPage/RegisterPage";
import ErrorPage from "../ErrorPage";
import BirthdayPage from "../AuthPage/BirthdayPage";
import ConfirmationPage from "../AuthPage/ConfirmationPage";
import UserPage from "../UserPage";
import {useSelector} from "react-redux";
import {RootState} from "../../Store/Types/State";

const Router: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user)
  const userName = user ? user.userName : null

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/sign-up" element={<RegisterPage />} />
      <Route path="/sign-up/birthday" element={<BirthdayPage/>} />
      <Route path="/sign-up/confirmation" element={<ConfirmationPage/>} />
      <Route path="/home" element={<HomePage />}  />
      <Route path={`/${userName}`} element={<UserPage/>} />
      <Route path="*" element={<ErrorPage/>}/>
    </Routes>
  );
};
export default Router;
