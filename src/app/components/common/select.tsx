import React from "react";

type SelectVariant = "primary" | "secondary" | "tertiary";

interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface SelectProps {
  name: string;
  value?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
  variant?: SelectVariant;
  withWidth?: boolean;
  disabled?: boolean;
  error?: string;
  options: SelectOption[];
  loading?: boolean;
  loadingText?: string;
  emptyText?: string;
}

const Select: React.FC<SelectProps> = ({
  name,
  value,
  placeholder,
  onChange,
  className,
  variant = "tertiary",
  withWidth = true,
  disabled = false,
  error,
  options,
  loading = false,
  loadingText = "Loading...",
  emptyText = "Select an option",
}) => {
  const variantColor = {
    primary: "border-[#CECECE] p-4 border text-sm text-[#858585] rounded-xl",
    secondary: "bg-[#EEFEF6] p-4 text-lg text-[#7C7C7C] rounded-2xl",
    tertiary:
      "bg-[#F6F6F6] border border-[#E0E0E0] py-3 px-4 text-[#7C7C7C] rounded-lg focus:ring-[#51F4A6] focus:border-[#51F4A6] focus:outline-none focus:ring-1",
  };

  return (
    <div>
      <select
        name={name}
        value={value}
        disabled={disabled || loading}
        onChange={onChange}
        className={`font-poppinsRegular ${
          withWidth && "w-full"
        } ${variantColor[variant]} ${
          error ? "border-red-500 focus:border-red-500" : ""
        } ${disabled || loading ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
      >
        <option value="">
          {loading ? loadingText : placeholder || emptyText}
        </option>
        {Array.isArray(options) && options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </option>
        ))}
      </select>

      {/* Show error message if there is one */}
      {error && (
        <p className="text-red-500 text-xs mt-1 font-poppinsRegular">{error}</p>
      )}
    </div>
  );
};

export default Select;
