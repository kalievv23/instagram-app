import styled from "styled-components";
import _Input from "../../Components/UI/Input";
import React, { ChangeEvent, useState } from "react";
import _Button from "../../Components/UI/Button";
import { useNavigate } from "react-router-dom";
import FormCard from "../../Components/Wrappers/FormCard";
import { LoginModel } from "../../Domain/Models/LoginModel";
import { AccountService } from "../../ApiServices/AccountService";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../Store/Actions/AuthActions";

const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
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
    try {
      const response = await Login(loginModel);
      if (response.status === 200) {
        dispatch(loginSuccess(response.data));
        navigate(`${response.data.user.userName}`);
      }
    } catch (e: any) {
      setServerError(e.response.data.message);
    }
  };

  return (
    <FormCard>
      <_Input
        type="text"
        label="Имя пользователья или эл. адрес"
        onChange={changeHandle}
        value={loginModel.emailAddressOrUserName}
        name="emailAddressOrUserName"
        className="firstInputLogin"
      />
      <_Input
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
      {serverError && <ErrorText>{serverError}</ErrorText>}
      <TextWithLine>
        <div />
        <span>ИЛИ</span>
        <div />
      </TextWithLine>
      <SignupText>
        У вас ещё нет аккаунта?
        <span onClick={() => navigate("/sign-up")}> Зарегистрироваться</span>
      </SignupText>
    </FormCard>
  );
};

export default LoginPage;

const TextWithLine = styled.div`
  display: flex;
  align-self: center;
  justify-content: space-between;
  margin-top: 0.5em;
  & div {
    border: 1px solid var(--form-color-opacity);
    width: 35%;
    height: 0;
    align-self: center;
  }
`;
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
const ErrorText = styled.span`
  color: var(--error-text-color);
  font-size: var(--fontsize-span);
  margin-left: 0.5em;
`;
