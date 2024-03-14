import { ChangeEvent, useState } from "react";
import FormCard from "../FormCard";
import _Input from "../UI/Input";
import _Button from "../UI/Button";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import type { RegisterModel } from "../../Domain/Models/RegisterModel";
import { AccountService } from "../../ApiServices/AccountService";
import type { Error } from "../../Domain/Responses/ErrorValidationRegister";
const RegisterForm = () => {
  const { Register } = AccountService;
  const navigate = useNavigate();
  const register: RegisterModel = {
    emailAddress: "",
    fullName: "",
    password: "",
    userName: "",
  };
  const [errors, setErrors] = useState<Error>();
  const [registerModel, setValueInput] = useState<RegisterModel>(register);
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);

  const changeHandle = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValueInput((prevState) => ({ ...prevState, [name]: value }));
    const allFildsFilled = Object.values({
      ...registerModel,
      [name]: value,
    }).every((val) => val.trim() !== "");
    const isPasswordValid =
      name === "password" ? value.trim().length >= 6 : true;
    setButtonDisabled(!allFildsFilled || !isPasswordValid);
  };

  const clickHandle = () => {
    Register(registerModel)
      .then((response) => {
        console.log(response);
      })

      .catch((e) => {
        console.log(e);
        // if ("type" in data && "title" in data) {

        // }
      });
  };
  console.log(errors);
  return (
    <FormCard>
      <SubHeading>
        Зарегистрируйтесь, чтобы смотреть фото и видео ваших друзей.
      </SubHeading>
      <_Input
        type="email"
        name="emailAddress"
        onChange={changeHandle}
        value={registerModel.emailAddress}
        label="Электронный адрес"
      />
      {errors?.EmailAddress.map((error) => (
        <div>{error}</div>
      ))}
      <_Input
        type="text"
        name="fullName"
        onChange={changeHandle}
        value={registerModel.fullName}
        label="Имя и фамилия"
      />
      {errors?.FullName.map((error) => (
        <div>{error}</div>
      ))}
      <_Input
        type="text"
        name="userName"
        onChange={changeHandle}
        value={registerModel.userName}
        label="Имя пользователя"
      />
      {errors?.UserName.map((error) => (
        <div>{error}</div>
      ))}
      <_Input
        type="text"
        name="password"
        onChange={changeHandle}
        value={registerModel.password}
        label="Пароль"
      />
      {errors?.Password.map((error) => (
        <div>{error}</div>
      ))}
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
