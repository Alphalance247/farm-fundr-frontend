import { ReactNode } from "react";

type buttonVariant = "primary" | "secondary" | "tertiary" | "switch";
type buttonSize = "small" | "medium" | "large" | "switch";

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
    primary:
      "bg-[#282a03] text-white hover:opacity-[0.8] hover:transition-all hover:duration-500",
    secondary:
      "border border-[#2D865B] text-base text-[#2D865B] bg-[#EEFEF6] hover:bg-[#C9FCE3] hover:transition-all hover:duration-500",
    tertiary:
      "bg-[linear-gradient(1.54deg,#4379FF_-179.29%,#51F4A6_88.65%)] text-[#282a03] w-fit hover:opacity-[0.8] hover:transition-all hover:duration-500",
    switch: "text-base text-[#2D865B] bg-transparent",
    //   bg-[linear-gradient(180deg,rgba(28,62,49,0.04)_28.06%,#1C3E31_40.79%)]
  };

  const buttonSize = {
    small: "text-base py-3 px-8",
    medium: "px-8 py-4",
    large: "bg-[#282a03] text-white",
    switch: "",
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
