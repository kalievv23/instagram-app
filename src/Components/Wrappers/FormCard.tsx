import React from "react";
import styled from "styled-components";

interface CardProps {
  children: React.ReactNode;
}

const FormCard: React.FC<CardProps> = ({ children }) => {
  return (
    <WrapperContainer>
      <Form>
        <Heading>Instagram</Heading>
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
