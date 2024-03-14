import React from "react";
import { Button } from "@mui/material";
interface ButtonProps {
  onClick: () => void;
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
  variant: "contained" | "text" | "outlined";
}

const _Button: React.FC<ButtonProps> = ({
  onClick,
  className,
  disabled,
  children,
  variant,
}) => {
  return (
    <Button
      onClick={onClick}
      className={className}
      disabled={disabled}
      variant={variant}
      style={{ cursor: "pointer" }}
    >
      {children}
    </Button>
  );
};

export default _Button;
