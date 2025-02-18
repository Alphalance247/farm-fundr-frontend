import { ReactNode } from "react";

type buttonVariant = "primary" | "secondary" | "tertiary" | "null";
type buttonSize = "small" | "medium" | "large" | "null";

interface buttonProps {
  children?: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  variant?: buttonVariant;
  size?: buttonSize;
  className?: string;
}

const Button: React.FC<buttonProps> = ({
  children,
  onClick,
  variant = "primary",
  size = "small",
  className,
}) => {
  const buttonColor = {
    primary: "bg-[#282a03] text-white",
    secondary: "border border-[#2D865B] text-base text-[#2D865B] bg-[#EEFEF6]",
    tertiary:
      "bg-[linear-gradient(1.54deg,#4379FF_-179.29%,#51F4A6_88.65%)] text-[#282a03] w-fit",
    null: "border border-[#2D865B] text-base text-[#2D865B] bg-transparent",
    //   bg-[linear-gradient(180deg,rgba(28,62,49,0.04)_28.06%,#1C3E31_40.79%)]
  };

  const buttonSize = {
    small: "text-base py-3 px-8",
    medium: "px-8 py-4",
    large: "bg-[#282a03] text-white",
    null: "",
  };

  return (
    <button
      onClick={onClick}
      className={` font-semibold rounded-[2.5rem] font-poppinsSemiBold ${buttonColor[variant]} ${buttonSize[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
