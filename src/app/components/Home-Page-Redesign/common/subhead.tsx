const Subhead = ({
  subheadText,
  className,
}: {
  subheadText: string;
  className?: string;
}) => {
  return (
    <p
      className={`text-lg font-poppinsRegular text-[#7C7C7C] mt-4 xl:text-base ${className}`}
    >
      {subheadText}
    </p>
  );
};

export default Subhead;
