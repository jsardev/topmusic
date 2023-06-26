import { ChangeEvent } from "react";
import cn from "classnames";

type InputProps = {
  value: string;
  placeholder: string;
  className?: string;
  onChange: (value: string) => void;
};

const Input = ({ value, placeholder, className, onChange }: InputProps) => {
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input
      className={cn(
        "px-12 py-8 rounded-lg border border-gray-300 outline-0 transition hover:ring-2 hover:border-transparent focus:ring-2 focus:border-transparent ring-primary-700/50 placeholder:text-gray-300 color-gray-500",
        className
      )}
      value={value}
      placeholder={placeholder}
      onChange={handleOnChange}
    />
  );
};

export default Input;
