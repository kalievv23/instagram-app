import styled from "styled-components";
import _Input from "../../Components/UI/Input";
import React, { ChangeEvent, useState } from "react";
import _Button from "../../Components/UI/Button";
import { useNavigate } from "react-router-dom";
import FormCard, { TextWithLine } from "../../Components/Wrappers/FormCard";
import { LoginModel } from "../../Domain/Models/LoginModel";
import { AccountService } from "../../ApiServices/AccountService";
import { networkErrorText } from "../../Components/FormHelpers";
import { LoginSuccessAct } from "../../Store/Actions/AuthActions";
import { useAuthDispatch } from "../../Store/Actions/AuthActions";
import {AxiosError} from "axios";
const LoginPage: React.FC = () => {
  const dispatch = useAuthDispatch();
  const navigate = useNavigate();
  const [loginModel, setValueInput] = useState<LoginModel>({
    emailAddressOrUserName: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const [serverError, setServerError] = useState<string>("");

  const { Login } = AccountService;

  const changeHandle = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValueInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    if (
      name === "emailAddressOrUserName" &&
      value.trim() !== "" &&
      loginModel.password.trim().length >= 6
    ) {
      setButtonDisabled(false);
    } else if (
      name === "password" &&
      value.trim().length >= 10 &&
      loginModel.emailAddressOrUserName.trim() !== ""
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  };
  const clickHandle = async () => {
    setServerError("");
    try {
      const response = await Login(loginModel);
      if (response.status === 200) {
        console.log(response.data.token);

        localStorage.setItem("accessToken", response.data.token);
        dispatch(
          LoginSuccessAct({
            token: response.data.token,
            user: response.data.userAccount,
          })
        );
        navigate(`/`);
      }
    } catch (error) {
      if(error instanceof  AxiosError){
          if (error.response) {
              setServerError(error.response.data.message);
          }
      } else {
        setServerError(networkErrorText);
      }
    }
  };

  return (
    <FormCard heading>
      <br />
      <_Input
        type="text"
        label="Имя пользователья или эл. адрес"
        onChange={changeHandle}
        value={loginModel.emailAddressOrUserName}
        name="emailAddressOrUserName"
        className="firstInputLogin"
        id={"userName"}
      />
      <_Input
        id={"userPassword"}
        type="password"
        label="Пароль"
        onChange={changeHandle}
        value={loginModel.password}
        name="password"
      />
      <_Button
        disabled={buttonDisabled}
        variant="contained"
        onClick={clickHandle}
      >
        Войти
      </_Button>
      {serverError && <ServerErrorText>{serverError}</ServerErrorText>}
      <TextWithLine />
      <SignupText>
        У вас ещё нет аккаунта?
        <span onClick={() => navigate("/sign-up")}> Зарегистрироваться</span>
      </SignupText>
    </FormCard>
  );
};

export default LoginPage;

const SignupText = styled.p`
  font-size: var(--fontsize-p);
  margin-top: 1em;
  text-align: center;
  & span {
    font-weight: 600;
    color: var(--btn-color-primary);
    cursor: pointer;
  }
`;
const ServerErrorText = styled.p`
  color: var(--error-text-color);
  font-size: var(--fontsize-p);
  text-align: center;
`;
