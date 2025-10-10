import Image from "next/image";

const HowItWorksCards = ({
  imageSrc,
  heading,
  subhead,
}: {
  imageSrc: string;
  heading: string;
  subhead: string;
}) => {
  return (
    <div className="text-center flex-1">
      <Image
        src={imageSrc || "/assets/Homepage-Redesign/how.svg"}
        width={126}
        height={125}
        alt="farmpady how it works"
        className="mx-auto"
      />
      <p className="text-xl font-poppinsSemiBold text-[#5F5F5F] mb-[14px] mt-6">
        {heading}
      </p>
      <p className="text-lg font-poppinsRegular text-[#7C7C7C] w-[80%] mx-auto lg:w-full lg:text-base">
        {subhead}
      </p>
    </div>
  );
};

export default HowItWorksCards;
