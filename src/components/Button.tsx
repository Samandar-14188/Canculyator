import React from 'react';

interface ButtonProps {
  className: string;
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ className, text, onClick }) => {
  return <div className={className} onClick={onClick}>{text}</div>;
};

export default Button;
