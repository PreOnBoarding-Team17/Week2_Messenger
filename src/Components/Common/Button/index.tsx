import React from 'react';
import 'Components/Common/Button/scss/Button.scss';

interface ButtonProps {
  style: string;
  text: string;
  disabled: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ style, text, onClick, disabled = false }: ButtonProps) => {
  return (
    <button
      className={`button ${style}`}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
