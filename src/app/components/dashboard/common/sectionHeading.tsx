import React from "react";

interface SubHeadProps {
  text: string;
  className?: string;
}

const SubHead: React.FC<SubHeadProps> = ({ text, className = "" }) => {
  return (
    <h2
      className={`text-xl font-aristoBold text-[#5F5F5F] md:text-lg  ${className}`}
    >
      {text}
    </h2>
  );
};

export default SubHead;
