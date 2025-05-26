import { ReactNode } from "react";

type buttonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "switch"
  | "search"
  | "googleBtn"
  | "subprimary"
  | "subsecondary"
  | "subtertiary";

type buttonSize = "small" | "medium" | "large" | "switch";

interface buttonProps {
  children?: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  variant?: buttonVariant;
  size?: buttonSize;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<buttonProps> = ({
  children,
  onClick,
  variant = "primary",
  size = "small",
  className,
  disabled,
}) => {
  const buttonColor = {
    primary:
      "bg-[#282a03] text-white hover:opacity-[0.8] rounded-[2.5rem] hover:transition-all hover:duration-500 md:w-full",
    secondary:
      "border border-[#2D865B] text-base text-[#2D865B] rounded-[2.5rem] bg-[#EEFEF6] hover:bg-[#C9FCE3] hover:transition-all hover:duration-500 md:w-full",
    tertiary:
      "bg-[linear-gradient(1.54deg,#4379FF_-179.29%,#51F4A6_88.65%)] rounded-[2.5rem] text-[#282a03] hover:opacity-[0.8] hover:transition-all hover:duration-500 md:w-full",
    switch: "text-base text-[#2D865B] bg-transparent",
    search:
      "bg-[#CECECE] text-[#7C7C7C] hover:opacity-[0.8] rounded-[2.5rem] hover:transition-all hover:duration-500 md:w-full",

    googleBtn:
      "bg-[#F6F6F6] text-[#7C7C7C] hover:opacity-[0.8] rounded-[2.5rem] hover:transition-all hover:duration-500 md:w-full",
    subprimary:
      "bg-[#EEFEF6] border-[0.75px] text-[#2D865B] rounded-[2.5rem] border-[#2D865B] hover:opacity-[0.8] hover:transition-all hover:duration-500",
    subsecondary:
      "bg-[#FCFCFC] border-[1px] text-[#2D865B] border-[#E8E8E8] rounded-[0.5rem] hover:opacity-[0.8] hover:transition-all hover:duration-500",

    subtertiary:
      "bg-[transparent] border border-[#2D865B] text-white hover:opacity-[0.8] rounded-[2.5rem] hover:transition-all hover:duration-500 md:w-full",
  };

  const buttonSize = {
    small: "text-base py-3 px-8 md:px-4",
    medium: "px-8 py-4 md:px-4",
    large: "bg-[#282a03] text-white",
    switch: "",
  };

  return (
    <button
      onClick={onClick}
      className={` font-semibold  font-poppinsSemiBold md:text-xs ${buttonColor[variant]} ${buttonSize[size]} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
