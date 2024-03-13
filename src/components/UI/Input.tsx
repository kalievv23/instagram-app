import React from "react";
import { TextField } from "@mui/material";
import styled from "styled-components";

interface InputProps {
  id?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  type: string;
  label: string;
  name: string;
  validError?: boolean;
  className?: string;
}

const _Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  disabled,
  type,
  label,
  name,
  validError,
  id,
  className
}) => {
  return (
    <StyledTextField
      id={id}
      error={validError}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
      value={value}
      label={label}
      name={name}
      className={className}
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
