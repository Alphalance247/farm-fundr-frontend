import { ReactNode } from "react";

const Container = ({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) => {
  return (
    <div className={`max-w-[1270px] mx-auto px-8 py-20 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
