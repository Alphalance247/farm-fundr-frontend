const Heading = ({
  overview,
  className,
}: {
  overview: string;
  className?: string;
}) => {
  return (
    <h1 className={`text-2xl font-aristoBold text-[#5F5F5F] ${className}`}>
      {overview}
    </h1>
  );
};

export default Heading;
