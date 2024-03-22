import React from "react";
import styled from "styled-components";

interface CardProps {
  children: React.ReactNode;
  heading?: boolean;
}

const FormCard: React.FC<CardProps> = ({ children, heading }) => {
  return (
    <WrapperContainer>
      <Form>
        {heading && <Heading>Instagram</Heading>}
        {children}
      </Form>
    </WrapperContainer>
  );
};

export default FormCard;

const WrapperContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const Form = styled.form`
  border: 1px solid var(--form-color-opacity);
  margin: 2em 0;
  width: 25em;
  display: grid;
  grid-gap: 1em;
  padding: 3em;
`;
const Heading = styled.h1`
  text-align: center;
`;





export const TextWithLine = () => {
    return (
        <TextWithLineStyled>
            <div />
            <span>ИЛИ</span>
            <div />
        </TextWithLineStyled>
    )
}

const TextWithLineStyled = styled.div`
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