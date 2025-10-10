const HeroHeading = ({
  text,
  withSubhead,
  subheadText,
}: {
  text: string;
  withSubhead?: boolean;
  subheadText?: string;
}) => {
  return (
    <div>
      <h1 className="text-[4rem] leading-[4.5rem] text-[#5F5F5F] font-aristoBold capitalize underline decoration-[#22E27F] xl:text-6xl lg:text-5xl">
        {text}
      </h1>
      {withSubhead && (
        <p className="text-lg font-poppinsRegular text-[#7C7C7C] mt-4 xl:text-base">
          {subheadText}
        </p>
      )}
    </div>
  );
};

export default HeroHeading;
