import React, { useState } from "react";
import FormCard, { TextWithLine } from "../../Components/Wrappers/FormCard";
import BirthdayIcon from "../../Assets/Icons/birthdayIcon.png";
import styled from "styled-components";
import { initialBirthdayValue, BirthdayType, months, currentDate, generateDaysInMonth } from "../../Components/FormHelpers";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import _Button from "../../Components/UI/Button";
import { useNavigate } from "react-router-dom";
import {useTypedSelector} from "../../CustomHooks/useTypedSelector";

const BirthdayPage: React.FC = () => {
  const navigate = useNavigate();
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const [birthDate, setBirthDate] =
    useState<BirthdayType>(initialBirthdayValue);
  const { day, month, year } = birthDate;
  const daysInMonth = new Date(Number(year), Number(month), 0).getDate();
  const [daysInMonthState, setDaysInMonthState] = useState<number>(daysInMonth);

  const user = useTypedSelector((state) => state.auth.user);
  const pathName = user ? user.userName : "sign-up";
  const handleDateChange = (event: SelectChangeEvent): void => {
    const { name, value } = event.target;
    setBirthDate(() => ({
      ...birthDate,
      [name]: value,
    }));
    if (name === "month") {
      generateDaysInMonth(value, year, setDaysInMonthState);
    }
    if (name === "year") {
      generateDaysInMonth(month, value, setDaysInMonthState);
      const isAdult = Number(value) <= currentDate.getFullYear() - 12;
      isAdult ? setButtonDisabled(false) : setButtonDisabled(true);
    }
  };
  const handleClick = (): void => {
    navigate(`/${pathName}`);
  };

  return (
    <FormCard>
      <ImageStyled src={BirthdayIcon} alt="Birthday icon" />
      <SubHeading>Укажите дату вашего рождения</SubHeading>
      <Description>
        <span>
          Эта информация не будет показываться в вашем общедоступном профиле.
        </span>
        <br />
        <a href="https://help.instagram.com/155833707900388" target="_blank">
          Почему нужно указывать дату рождения?
        </a>
      </Description>
      <SelectWrapper>
        <Select
          style={{ width: "119px" }}
          name="month"
          value={month}
          onChange={handleDateChange}
        >
          {[...Array(12)].map((_, index) => (
            <MenuItem key={index} value={(index + 1).toString()}>
              {months[index]}
            </MenuItem>
          ))}
        </Select>
        <Select name="day" value={day} onChange={handleDateChange}>
          {[...Array(daysInMonthState)].map((_, index) => (
            <MenuItem key={index} value={(index + 1).toString()}>
              {index + 1}
            </MenuItem>
          ))}
        </Select>
        <Select name="year" value={year} onChange={handleDateChange}>
          {[...Array(101)].map((_, index) => (
            <MenuItem key={index} value={(2024 - index).toString()}>
              {2024 - index}
            </MenuItem>
          ))}
        </Select>
      </SelectWrapper>
      <Description>Требуется ввести дату вашего рождения</Description>
      <br />
      <_Button
        disabled={buttonDisabled}
        onClick={handleClick}
        variant="contained"
        children="Далее"
      />
      <_Button
        onClick={() => navigate("/sign-up")}
        variant="outlined"
        children="Назад"
      />
      <TextWithLine />
      <LoginText>
        Есть аккаунт?
        <span onClick={() => navigate("/")}> Вход</span>
      </LoginText>
    </FormCard>
  );
};

export default BirthdayPage;

const ImageStyled = styled.img`
  width: 100px;
  margin: auto;
`;
const SubHeading = styled.p`
  font-size: var(--fontsize-p);
  font-weight: 600;
  text-align: center;
`;
const Description = styled.div`
  text-align: center;
  font-size: var(--fontsize-span);
`;
const SelectWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
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
