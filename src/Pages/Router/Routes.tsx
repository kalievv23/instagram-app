import { Route, Routes } from "react-router-dom";
import React from "react";
import HomePage from "../HomePage";
import LoginPage from "../AuthPage/LoginPage";
import RegisterPage from "../AuthPage/RegisterPage";
import ErrorPage from "../ErrorPage";
import BirthdayPage from "../AuthPage/BirthdayPage";
import ConfirmationPage from "../AuthPage/ConfirmationPage";
import UserPage from "../UserPage";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/Types/State";
import MyPublications from "../../Components/Pulications/MyPublications";
import SavedPublications from "../../Components/Pulications/SavedPublications";
import TaggedMePublications from "../../Components/Pulications/TaggedMePublications";

const Router: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const userName = user ? user.userName : "user"

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/sign-up" element={<RegisterPage />} />
      <Route path="/sign-up/birthday" element={<BirthdayPage />} />
      <Route path="/sign-up/confirmation" element={<ConfirmationPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path={`/${userName}`} element={<UserPage />}>
        <Route path="" element={<MyPublications />} />
        <Route path={`/${userName}/saved`} element={<SavedPublications />} />
        <Route path={`/${userName}/tagged`} element={<TaggedMePublications />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
export default Router;
