import React from "react";
import { TextField } from "@mui/material";
import styled from "styled-components";

interface InputProps {
  id?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type: string;
  label: string;
  name: string;
  validError?: boolean;
  className?: string;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const _Input: React.FC<InputProps> = ({
  value = "",
  onChange,
  placeholder = "",
  type = "",
  label = "",
  name = "",
  validError = false,
  id = "",
  className = "",
  onBlur,
}) => {
  return (
    <StyledTextField
      id={id}
      error={validError}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      label={label}
      name={name}
      className={className}
      onBlur={onBlur}
    />
  );
};

export default _Input;

const StyledTextField = styled(TextField)`
  && {
    .MuiInputBase-root {
      height: 50px;
    }
  }
`;
