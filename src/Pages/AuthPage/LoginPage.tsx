import styled from "styled-components";
import _Input from "../../Components/UI/Input";
import React, { ChangeEvent, useState } from "react";
import _Button from "../../Components/UI/Button";
import { useNavigate } from "react-router-dom";
import FormCard from "../../Components/Wrappers/FormCard";
import {LoginModel} from "../../Domain/Models/LoginModel";


const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [valueInput, setValueInput] = useState<LoginModel>({
    userName: "",
    userPass: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const changeHandle = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValueInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    if (
      name === "userName" &&
      value.trim() !== "" &&
      valueInput.userPass.trim().length >= 6
    ) {
      setButtonDisabled(false);
    } else if (
      name === "userPass" &&
      value.trim().length >= 6 &&
      valueInput.userName.trim() !== ""
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  };
  const clickHandle = () => {};

  return (
    <FormCard>
      <_Input
        type="text"
        label="Имя пользователья или эл. адрес"
        onChange={changeHandle}
        value={valueInput.userName}
        name="userName"
        className="firstInputLogin"
        id={"userName"}
      />
      <_Input
          id={"userPassword"}
        type="password"
        label="Пароль"
        onChange={changeHandle}
        value={valueInput.userPass}
        name="userPass"
      />
      <_Button
        disabled={buttonDisabled}
        variant="contained"
        onClick={clickHandle}
      >
        Войти
      </_Button>
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
