import Image from "next/image";
const ReviewCard = () => {
  const images = [
    "/assets/LandingPage/card/star.svg",
    "/assets/LandingPage/card/star.svg",
    "/assets/LandingPage/card/star.svg",
    "/assets/LandingPage/card/star.svg",
    "/assets/LandingPage/card/star.svg",
  ];
  return (
    <div className="bg-[#C9FCE3] border-[#51F4A6] border-l-[15px] rounded-[20px] px-5 py-10 mr-4 lg:px-3 lg:py-3 md:mr-[4px]">
      <p className="text-lg font-poppinsRegular text-[#7C7C7C] mb-10 lg:mb-6 lg:text-base">
        Farmfundr is a very good platform that connect you with the farmers with
        ease by investing with a good return.
      </p>

      <div className="flex items-center gap-x-4 lg:flex-col lg:items-start md:flex-row md:items-center">
        <Image
          width={82.5}
          height={82.5}
          src="/assets/LandingPage/icons/sarah.svg"
          alt="sarah"
        />

        <div>
          <p className=" text-2xl font-aristoBold font-bold text-[#5F5F5F] mb-2 lg:text-lg">
            Sarah Alex
          </p>
          <div className="flex gap-x-2">
            {images?.map((el, i) => (
              <Image src={el} width={24} height={24} alt="open" key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
