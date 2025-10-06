const Heading = ({ text, className }: { text: string; className?: string }) => {
  return (
    <div>
      <h1
        className={`text-5xl font-aristoBold text-[#5F5F5F] mb-3 ${className} underline decoration-[#22E27F] lg:text-4xl`}
      >
        {text}
      </h1>
    </div>
  );
};

export default Heading;
