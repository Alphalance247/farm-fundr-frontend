import React from "react";

type SkeletonProps = {
  count?: number; // number of skeletons
  direction?: "row" | "col"; // layout
  gap?: string; // spacing
  className?: string; // parent classes
  variant?: "rect" | "circle" | "text"; // shape
};

const SkeletonLoader: React.FC<SkeletonProps> = ({
  count = 1,
  direction = "row",
  gap = "gap-4",
  className = "",
  variant = "rect",
}) => {
  const shapeClasses =
    variant === "circle"
      ? "rounded-full aspect-square" // keeps it perfectly round
      : variant === "text"
      ? "rounded h-4 w-3/4" // text-like line
      : "rounded-md w-full h-full"; // rectangle by default

  return (
    <div
      className={`flex ${
        direction === "row" ? "flex-row" : "flex-col"
      } ${gap} ${className}`}
    >
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className={`bg-gray-200 animate-pulse ${shapeClasses}`} />
      ))}
    </div>
  );
};

export default SkeletonLoader;
