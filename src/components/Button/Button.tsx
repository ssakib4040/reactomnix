import React from "react";
import classNames from "classnames";
import "./Button.scss";

interface ButtonProps {
  preText?: string;
  postText?: string;
  className?: string;
  children?: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  preText,
  postText,
  className,
  onClick,
  children,
}) => {
  const buttonClassName = classNames("button", className);

  return (
    <button className={buttonClassName} onClick={onClick}>
      {preText && <span className="pre-text">{preText}</span>}
      {children}
      {postText && <span className="post-text">{postText}</span>}
    </button>
  );
};

export default Button;
