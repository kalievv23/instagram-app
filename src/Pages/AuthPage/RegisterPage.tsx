import React, { ChangeEvent, useState } from "react";
import FormCard from "../../Components/Wrappers/FormCard";
import _Input from "../../Components/UI/Input";
import _Button from "../../Components/UI/Button";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import type { RegisterModel } from "../../Domain/Models";
import { AccountService } from "../../ApiServices/AccountService";
import { initialRegisterModel, initialValidErrors, validatorForm, validErrorsType } from "../../Components/FormHelpers";

const RegisterPage: React.FC = () => {
  const { Register } = AccountService;
  const navigate = useNavigate();
  const [registerModel, setValueInput] =
    useState<RegisterModel>(initialRegisterModel);
  const [validErrors, setValidErrors] =
    useState<validErrorsType>(initialValidErrors);
  const [serverError, setServerError] = useState<string>("")

  const changeHandle = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setValueInput((prevState) => ({ ...prevState, [name]: value }));
    if (value !== "") {
      setValidErrors((prevValidErrors: validErrorsType) => ({
        ...prevValidErrors,
        [name]: "",
      }));
    }
  };

  const blurHandle = (event: React.FocusEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    validatorForm(name, value, setValidErrors);
  };

  const clickHandle = async () => {
    // проверка ошибки пустых полей
    const hasEmptyValues = Object.values(registerModel).some(
      (value) => value === ""
    );
    if (hasEmptyValues) {
      Object.entries(registerModel).forEach(([key, value]) => {
        if (value === "") {
          validatorForm(key, "", setValidErrors);
        }
      });
      return; // остановит отправки данных на сервер если будут ошибки
    }
    // проверка ошибки валидации
    const hasErrors = Object.values(validErrors).some((error) => error !== "");
    if (hasErrors) return; // остановит отправки данных на сервер если будут ошибки

    try {
      const response = await Register(registerModel);
      if (response.status === 200 && "token" in response.data) {
        console.log("Success! Your token:", response.data.token);
        setServerError("")
      }
    } catch (e: any) {
    console.log("Ошибка при регистрации:", e.response.data.message);
    setServerError("Ошибка при регистрации: " + e.response.data.message);
    }
  };
  return (
    <FormCard>
      <SubHeading>
        Зарегистрируйтесь, чтобы смотреть фото и видео ваших друзей.
      </SubHeading>
      <WrapperInputWithError>
        <_Input
          type="email"
          name="emailAddress"
          onChange={changeHandle}
          value={registerModel.emailAddress}
          label="Электронный адрес"
          validError={Boolean(validErrors.emailAddress)}
          onBlur={blurHandle}
        />
        {validErrors.emailAddress && (
          <ErrorText>{validErrors.emailAddress}</ErrorText>
        )}
      </WrapperInputWithError>

      <WrapperInputWithError>
        <_Input
          type="text"
          name="fullName"
          onChange={changeHandle}
          value={registerModel.fullName}
          label="Имя и фамилия"
          validError={Boolean(validErrors.fullName)}
          onBlur={blurHandle}
        />
        {validErrors.fullName && <ErrorText>{validErrors.fullName}</ErrorText>}
      </WrapperInputWithError>
      <WrapperInputWithError>
        <_Input
          type="text"
          name="userName"
          onChange={changeHandle}
          value={registerModel.userName}
          label="Имя пользователя"
          validError={Boolean(validErrors.userName)}
          onBlur={blurHandle}
        />
        {validErrors.userName && <ErrorText>{validErrors.userName}</ErrorText>}
      </WrapperInputWithError>
      <WrapperInputWithError>
        <_Input
          type="text"
          name="password"
          onChange={changeHandle}
          value={registerModel.password}
          label="Пароль"
          validError={Boolean(validErrors.password)}
          onBlur={blurHandle}
        />
        {validErrors.password && <ErrorText>{validErrors.password}</ErrorText>}
      </WrapperInputWithError>
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
      <_Button onClick={clickHandle} variant="contained">
        Регистрация
      </_Button>
      {serverError && <ErrorText>{serverError}</ErrorText>}
      <TextWithLine>
        <div />
        <span>ИЛИ</span>
        <div />
      </TextWithLine>
      <LoginText>
        Есть аккаунт?
        <span onClick={() => navigate("/")}> Вход</span>
      </LoginText>
    </FormCard>
  );
};

export default RegisterPage;

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

const WrapperInputWithError = styled.div`
  display: flex;
  flex-direction: column;
`;
const ErrorText = styled.span`
  color: var(--error-text-color);
  font-size: var(--fontsize-span);
  margin-left: 0.5em;
`;
