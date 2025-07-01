import React from "react";
type InputVariant = "primary" | "secondary" | "tertiary";

interface InputProps {
  type: string;
  name: string;
  value?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  variant?: InputVariant;
  withWidth?: boolean;
  readonly?: boolean;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  name,
  value,
  placeholder,
  onChange,
  className,
  variant = "primary",
  withWidth = true,
  readonly = false,
  error,
}) => {
  const variantColor = {
    primary: "border-[#CECECE] p-4 border text-sm text-[#858585] rounded-xl",
    secondary: "bg-[#EEFEF6] p-4 text-lg text-[#7C7C7C] rounded-2xl",
    tertiary:
      "bg-[#F6F6F6] border border-[#E2E2E2] py-3 px-4 text-[#7C7C7C] rounded-lg",
  };
  return (
    <div>
      <input
        type={type}
        name={name}
        value={value}
        readOnly={readonly}
        placeholder={placeholder}
        required
        onChange={onChange}
        className={` font-poppinsRegular ${
          withWidth && "w-full"
        } outline-[#51F4A6]  ${variantColor[variant]} ${className} ${
          error ? "border-red-500 focus:border-red-500" : ""
        }`}
      />

      {/* Show error message if there is one */}
      {error && (
        <p className="text-red-500 text-xs mt-1 font-poppinsRegular">{error}</p>
      )}
    </div>
  );
};

export default Input;
