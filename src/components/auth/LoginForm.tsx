import styled from "styled-components";
import _Input from "../UI/Input";
import { ChangeEvent, useState } from "react";
import _Button from "../UI/Button";
import { useNavigate } from "react-router-dom";
import FormCard from "../FormCard";

interface initialState {
  userName: string;
  userPass: string;
}

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [valueInput, setValueInput] = useState<initialState>({
    userName: "",
    userPass: "",
  });
  const changeHandle = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValueInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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
      />
      <_Input
        type="password"
        label="Пароль"
        onChange={changeHandle}
        value={valueInput.userPass}
        name="userPass"
      />
      <_Button variant="contained" onClick={clickHandle}>
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

export default LoginForm;

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

