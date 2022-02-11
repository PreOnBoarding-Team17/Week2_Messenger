import React from 'react';
import 'Components/Common/Button/scss/Button.scss';

interface ButtonProps {
  style: string;
  text: string;
  disabled?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ style, text, disabled, onClick }: ButtonProps) => {
  return (
    <button
      className={`button ${style} ${disabled}`}
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
