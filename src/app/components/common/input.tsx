import React from "react";

interface InputProps {
  type: string;
  name: string;
  value: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  variant?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  name,
  value,
  placeholder,
  onChange,
  className,
  variant,
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={` font-poppinsRegular w-full outline-[#51F4A6] ${
        variant === "primary"
          ? "border-[#CECECE] border bg-[#F6F6F6] p-4 text-sm text-[#858585] rounded-xl"
          : "bg-[#EEFEF6]  p-4 text-lg text-[#7C7C7C] rounded-2xl"
      }     ${className}`}
    />
  );
};

export default Input;
