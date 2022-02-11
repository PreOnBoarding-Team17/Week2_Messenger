import React from 'react';
import 'Components/Common/Button/scss/Button.scss';

interface ButtonProps {
  style: string;
  text: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ style, text, onClick }: ButtonProps) => {
  return (
    <button className={`button ${style}`} type="button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
