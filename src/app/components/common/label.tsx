const Label = ({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) => {
  return (
    <label
      id={id}
      className={`text-sm font-poppinsSemiBold text-[#5F5F5F] mb-2 block ${className}`}
    >
      {children}
    </label>
  );
};

export default Label;
