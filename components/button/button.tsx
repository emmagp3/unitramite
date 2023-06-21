import React, { MouseEventHandler } from 'react';
import { Button } from 'react-bootstrap';

type ButtonType = 'primary' | 'secondary';

interface CustomButtonProps {
  type: ButtonType;
  children: React.ReactNode;
  input?: boolean;
  className?: string;
  id?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function CustomButton({
  type,
  input,
  children,
  className,
  id,
  onClick,
}: CustomButtonProps) {
  const getBackgroundColor = () => {
    return `${type == 'primary' ? '#FFFFFF' : '#A7727D'}`;
  };

  const getColor = () => {
    return `${type == 'primary' ? '#A7727D' : '#FFFFFF'}`;
  };

  return (
    <Button
      onClick={onClick}
      variant={type}
      type={input ? 'submit' : undefined}
      className={className}
      id={id}
      style={{
        color: getBackgroundColor(),
        backgroundColor: getColor(),
        borderColor: getColor(),
      }}
    >
      {children}
    </Button>
  );
}
