import { ChangeEvent } from "react";

type InputProps = {
  value: string;
  onChange: (value: string) => void;
};

const Input = ({ value, onChange }: InputProps) => {
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return <input value={value} onChange={handleOnChange} />;
};

export default Input;
