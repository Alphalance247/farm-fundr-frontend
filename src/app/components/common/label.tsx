const Label = ({
  children,
  className,
  id,
  isImportant = false,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  isImportant?: boolean;
}) => {
  return (
    <label
      id={id}
      className={`text-sm font-poppinsSemiBold text-[#5F5F5F] mb-2 block ${className}`}
    >
      {children} {isImportant && <span className="text-[#DE4204]">*</span>}
    </label>
  );
};

export default Label;
