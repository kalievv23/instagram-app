import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import HomePage from "../HomePage";
import LoginPage from "../AuthPage/LoginPage";
import RegisterPage from "../AuthPage/RegisterPage";
import ErrorPage from "../ErrorPage";
import BirthdayPage from "../AuthPage/BirthdayPage";
import ConfirmationPage from "../AuthPage/ConfirmationPage";
import UserPage from "../UserPage";
import { MainPage } from "../Main/MainPage";
import MyPublications from "../../Components/Pulications/MyPublications";
import SavedPublications from "../../Components/Pulications/SavedPublications";
import TaggedMePublications from "../../Components/Pulications/TaggedMePublications";
import { useTypedSelector } from "../../CustomHooks/useTypedSelector";
import { useAuthDispatch } from "../../Store/Actions/AuthActions";
import {
  LoginSuccessAct,
  SetAuthenticated,
} from "../../Store/Actions/AuthActions";
import { AccountService } from "../../ApiServices/AccountService";
const Router: React.FC = () => {
  const location = useLocation().pathname;
  const nav = useNavigate();
  const [isSendingRequest, setSendingRequest] = useState(true);
  const dispatch = useAuthDispatch();
  const { LoginWithAccessToken } = AccountService;
  const { user, isAuthenticated, token } = useTypedSelector((s) => s.auth);
  useEffect(() => {
    nav(location);
    console.log(token, user, isAuthenticated);
    if (localStorage.getItem("accessToken")) {
      LoginWithAccessToken()
        .then((response) => {
          dispatch(
            LoginSuccessAct({
              ...response.data,
              user: response.data.userAccount,
            })
          );
          dispatch(SetAuthenticated(true));
          if (location) {
            nav(location);
          }
          // nav("/" + response.data.userAccount.userName);
        })
        .catch((e) => {
          setSendingRequest(false);
          nav("/");
          alert("error in ROUTES");
          dispatch(SetAuthenticated(false));
        });
      return;
    }
    nav("/");
    setSendingRequest(false);
  }, []);

  if (!isAuthenticated && !token) {
    return (
      <>
        {isSendingRequest ? (
          <h1 style={{ color: "red" }}>SENDING REQUEST...</h1>
        ) : (
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/sign-up" element={<RegisterPage />} />
            <Route path="/sign-up/birthday" element={<BirthdayPage />} />
            <Route
              path="/sign-up/confirmation"
              element={<ConfirmationPage />}
            />
            <Route path="/home" element={<HomePage />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/home" element={<HomePage />} />
          </Routes>
        )}
      </>
    );
  } else {
    return (
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path={`search`} element={<h1>SERCH</h1>} />
          <Route path={`interesting`} element={<h1>interesting</h1>} />
          <Route path={`reels`} element={<h1>reels</h1>} />
          <Route path={`message`} element={<h1>message</h1>} />
          <Route path={`notification`} element={<h1>notification</h1>} />
          <Route path={`content`} element={<h1>content</h1>} />
          <Route path={`${user?.userName}`} element={<UserPage />}>
            <Route path="" element={<MyPublications />} />
            <Route path={`saved`} element={<SavedPublications />} />
            <Route path={`tagged`} element={<TaggedMePublications />} />
            <Route path={`edit`} element={<h1>edit</h1>} />
          </Route>
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    );
  }
};
export default Router;
