import React from "react";

interface InputProps {
  type: string;
  name: string;
  value: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  name,
  value,
  placeholder,
  onChange,
  className,
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={`text-lg font-poppinsRegular w-full text-[#7C7C7C] p-4 bg-[#EEFEF6] rounded-2xl ${className}`}
    />
  );
};

export default Input;
