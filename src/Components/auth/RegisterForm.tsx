import { ChangeEvent, useState } from "react";
import FormCard from "../FormCard";
import _Input from "../UI/Input";
import _Button from "../UI/Button";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {RegisterModel} from "../../Domain/Models/RegisterModel.ts";


const RegisterForm = () => {
  const navigate = useNavigate();
  const [valueInput, setValueInput] = useState<RegisterModel>({
    userEmail: "",
    userFullName: "",
    userName: "",
    userPass: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const [validInput, setValidInput] = useState<string>("");
  const changeHandle = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValueInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    const allFieldsFilled = Object.values({
      ...valueInput,
      [name]: value,
    }).every((val) => val.trim() !== "");

    const isPasswordValid =
      name === "userPass" ? value.trim().length >= 6 : true;

    setButtonDisabled(!allFieldsFilled || !isPasswordValid);
  };
  const clickHandle = () => {
    // if (condition) {
      
    // }
  };
  return (
    <FormCard>
      <SubHeading>
        Зарегистрируйтесь, чтобы смотреть фото и видео ваших друзей.
      </SubHeading>
      <_Input
        type="email"
        name="userEmail"
        onChange={changeHandle}
        value={valueInput.userEmail}
        label="Электронный адрес"
     z     type="text"
        name="userFullName"
        onChange={changeHandle}
        value={valueInput.userFullName}
        label="Имя и фамилия"
      />
      <_Input
        type="text"
        name="userName"
        onChange={changeHandle}
        value={valueInput.userName}
        label="Имя пользователя"
      />
      <_Input
        type="text"
        name="userPass"
        onChange={changeHandle}
        value={valueInput.userPass}
        label="Пароль"
      />
      <Description>
        Регистрируясь, вы принимаете наши{" "}
        <a
          target="blank"
          href="https://help.instagram.com/581066165581870/?locale=ru_RU"
        >
          Условия
        </a>
        ,{" "}
        <a target="blank" href="https://www.facebook.com/privacy/policy">
          Политику конфиденциальности
        </a>{" "}
        и{" "}
        <a
          target="blank"
          href="https://privacycenter.instagram.com/policies/cookies/"
        >
          Политику в отношении файлов cookie.
        </a>
      </Description>
      <_Button
        disabled={buttonDisabled}
        onClick={clickHandle}
        variant="contained"
      >
        Регистрация
      </_Button>
      {validInput && <ValidErrorText>{validInput}</ValidErrorText>}
      <TextWithLine>
        <div />
        <span>ИЛИ</span>
        <div />
      </TextWithLine>
      <LoginText>
        Есть аккаунт?
        <span onClick={() => navigate("/login")}> Вход</span>
      </LoginText>
    </FormCard>
  );
};

export default RegisterForm;

const SubHeading = styled.h3`
  text-align: center;
  color: rgb(130 130 130);
  font-weight: 600;
`;

const Description = styled.p`
  font-size: var(--fontsize-span);
  text-align: center;
  color: rgb(90 90 90);
`;

const ValidErrorText = styled.p`
  text-align: center;
  max-width: 100%;
  border: 1px solid;
  margin: 2em 0;
  color: var(--error-text-color);
`;

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

const LoginText = styled.p`
  font-size: var(--fontsize-p);
  margin-top: 1em;
  text-align: center;
  & span {
    font-weight: 600;
    color: var(--btn-color-primary);
    cursor: pointer;
  }
`;