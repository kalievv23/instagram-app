import { ChangeEvent, useState } from "react";
import FormCard from "../Wrappers/FormCard";
import _Input from "../UI/Input";
import _Button from "../UI/Button";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import type { RegisterModel } from "../../Domain/Models";
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
  const [errors, setErrors] = useState<Error | null>();
  const [registerModel, setValueInput] = useState<RegisterModel>(register);
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const [message, setMessage] = useState<string | null>(null);
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
        setMessage(null);
        setErrors(null);
        setValueInput(register);
        if (response.status === 200 && "token" in response.data) {
          console.log(response.data.token);
        }
      })
      .catch((e) => {
        const data = e.response.data;
        if ("title" in data && "type" in data) {
          setErrors(data.errors);
        } else if ("message" in e) {
          setMessage(e.response);
        }
      });
  };
  const objs: inputPropType[] = [
    {
      type: "email",
      name: "emailAddress",
      onChange: changeHandle,
      value: register.emailAddress,
      label: "Электронный адрес",
      validError: Boolean(errors?.FullName),
    },
    {
      type: "text",
      name: "fullName",
      onChange: changeHandle,
      value: registerModel.fullName,
      label: "Имя и фамилия",
      validError: Boolean(errors?.FullName),
    },
    {
      type: "text",
      name: "userName",
      onChange: changeHandle,
      value: registerModel.userName,
      label: "Имя пользователя",
      validError: Boolean(errors?.UserName),
    },
    {
      type: "text",
      name: "password",
      onChange: changeHandle,
      value: registerModel.password,
      label: "Пароль",
      validError: Boolean(errors?.Password),
    },
  ];

  const inputs = RegisterInputs(objs);

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
          validError={Boolean(errors?.EmailAddress)}
        />
        {errors?.EmailAddress && (
          <ErrorText>{errors?.EmailAddress[0]}</ErrorText>
        )}
      </WrapperInputWithError>

      <WrapperInputWithError>
        <_Input
          type="text"
          name="fullName"
          onChange={changeHandle}
          value={registerModel.fullName}
          label="Имя и фамилия"
          validError={Boolean(errors?.FullName)}
        />
        {errors?.FullName &&
          errors?.FullName.map((error) => <ErrorText>{error}</ErrorText>)}
      </WrapperInputWithError>
      <WrapperInputWithError>
        <_Input
          type="text"
          name="userName"
          onChange={changeHandle}
          value={registerModel.userName}
          label="Имя пользователя"
          validError={Boolean(errors?.UserName)}
        />
        {errors?.UserName &&
          errors?.UserName.map((error) => <ErrorText>{error}</ErrorText>)}
      </WrapperInputWithError>
      <WrapperInputWithError>
        <_Input
          type="text"
          name="password"
          onChange={changeHandle}
          value={registerModel.password}
          label="Пароль"
          validError={Boolean(errors?.Password)}
        />
        {errors?.Password && <ErrorText>{errors?.Password[0]}</ErrorText>}
      </WrapperInputWithError>
      {message?.trim() ? <ErrorText>{message}</ErrorText> : null}
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

const creatorInput = (object: inputPropType | undefined) => {
  return () => {
    if (object) {
      return <_Input {...object} />;
    }
  };
};

type inputPropType = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  type: string;
  label: string;
  name: string;
  validError: boolean;
  id?: string;
  className?: string;
};

const RegisterInputs = (inputProps: inputPropType[]) => {
  const inputs: JSX.Element[] = [];
  inputProps.forEach((inputP) => {
    const Input = creatorInput(inputP);
    if (Input != undefined) {
      inputs.push(<Input />);
    }
  });
  return inputs;
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

const WrapperInputWithError = styled.div`
  display: flex;
  flex-direction: column;
`;
const ErrorText = styled.span`
  color: var(--error-text-color);
  font-size: var(--fontsize-span);
  margin-left: 0.5em;
`;
