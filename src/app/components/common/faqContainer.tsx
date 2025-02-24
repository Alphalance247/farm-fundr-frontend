import Image from "next/image";
import React from "react";

interface clickProp {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  answer?: string;
  question: string;
  i?: number;
  isOpen?: number;
}

const FaqContainer: React.FC<clickProp> = ({
  onClick,
  answer,
  question,
  i,
  isOpen,
}) => {
  return (
    <div>
      <div
        className={`px-6 py-4 flex justify-between items-center hover:transition-all hover:duration-700 hover:scale-[1.01] bg-[#C9FCE3] cursor-pointer  ${
          isOpen === i
            ? "rounded-tr-[10px] rounded-tl-[10px]"
            : "rounded-[10px] "
        }`}
        onClick={onClick}
      >
        <p className="text-lg font-poppinsRegular text-[#282A03]">{question}</p>

        <Image
          src={`${
            isOpen === i
              ? "/assets/LandingPage/icons/times.svg"
              : "/assets/LandingPage/icons/plus.svg"
          }`}
          width={40}
          height={40}
          alt="plus"
        />
      </div>

      {isOpen === i && (
        <div className="bg-[#EEFEF6] px-6 pb-4 pt-3 rounded-br-[10px] rounded-bl-[10px]">
          <p className="text-lg font-poppinsRegular text-[#282A03] md:text-sm">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

export default FaqContainer;
