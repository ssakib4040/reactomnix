import React from "react";
import "./Button.scss";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  console.log(`Yee`);
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
