import { ChangeEvent } from "react";

type InputProps = {
  value: string;
  className?: string;
  onChange: (value: string) => void;
};

const Input = ({ value, className, onChange }: InputProps) => {
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input className={className} value={value} onChange={handleOnChange} />
  );
};

export default Input;
