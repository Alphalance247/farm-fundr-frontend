import React from "react";

type InputVariant = "primary" | "secondary" | "tertiary";

interface InputProps {
  type: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  variant?: InputVariant;
  withWidth?: boolean;
  readonly?: boolean;
  error?: string;
  // Remove name from the interface since it will come from register
}

const InputField: React.FC<InputProps> = ({
  type,
  placeholder,
  onChange,
  className,
  variant = "primary",
  withWidth = true,
  readonly = false,
  error,
  ...props // This will capture the register function and name
}) => {
  const variantColor = {
    primary: "border-[#CECECE] p-4 border text-sm text-[#858585] rounded-xl",
    secondary: "bg-[#EEFEF6] p-4 text-lg text-[#7C7C7C] rounded-2xl",
    tertiary:
      "bg-[#F6F6F6] border border-[#E2E2E2] py-3 px-4 text-[#7C7C7C] rounded-lg",
  };

  // If there's an error, add red border
  const errorClass = error ? "border-red-500 focus:border-red-500" : "";

  return (
    <div className="w-full">
      <input
        type={type}
        readOnly={readonly}
        placeholder={placeholder}
        required
        onChange={onChange}
        // Spread all props (including register function and name)
        {...props}
        className={`font-poppinsRegular ${
          withWidth && "w-full"
        } outline-[#51F4A6] ${
          variantColor[variant]
        } ${errorClass} ${className}`}
      />
      {/* Show error message if there is one */}
      {error && (
        <p className="text-red-500 text-xs mt-1 font-poppinsRegular">{error}</p>
      )}
    </div>
  );
};

export default InputField;
