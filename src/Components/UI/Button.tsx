import React from "react";
import { Button } from "@mui/material";
interface ButtonProps {
  onClick: () => void;
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
  variant: "contained" | "text" | "outlined";
  fullWidth?: boolean;
  background?: string;
  color?: string;
}

const _Button: React.FC<ButtonProps> = ({
  onClick,
  className = "",
  disabled = false,
  children,
  variant,
  fullWidth = false,
  background = "",
  color = "",
}) => {
  return (
    <Button
      fullWidth={fullWidth}
      onClick={onClick}
      className={className}
      disabled={disabled}
      variant={variant}
      style={{ cursor: "pointer", backgroundColor: background, color: color }}
    >
      {children}
    </Button>
  );
};

export default _Button;
