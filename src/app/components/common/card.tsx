import Button from "./Buttons";
import Image from "next/image";

const Card = () => {
  return (
    <div className="border border-[#E2E2E2] shadow-sm bg-white py-5 px-6 rounded-[20px]">
      <div className="mb-6 relative">
        <Image
          src="/assets/LandingPage/card/1.png"
          width={336}
          height={185}
          alt="land"
        />
        <p className="border-[#B0EECA] border px-4 py-1 absolute bottom-[-1rem] right-[1rem] flex items-center bg-white text-[#00C853] rounded-lg">
          <span className="mr-1">
            <Image
              src="/assets/LandingPage/card/open.svg"
              width={16}
              height={16}
              alt="open"
            />
          </span>{" "}
          Open
        </p>
      </div>
      <div className="flex items-start gap-x-5 mb-2">
        <Image
          src="/assets/LandingPage/card/logo.svg"
          width={32}
          height={32}
          alt="logo"
        />
        <div className="">
          <p className="text-2xl font-aristoBold font-semibold text-[#5F5F5F] mb-1">
            Organic Apple Harvest
          </p>
          <p className="text-xs font-poppinsRegular text-[#7C7C7C]">
            Farm name: Farmfundr farm
          </p>
        </div>
      </div>
      <p className="text-sm font-poppinsRegular text-[#7C7C7C] mb-4">
        Invest in sustainable apple farming.
      </p>
      <div className="py-4 border-t border-b border-[#F2F2F2] flex justify-between">
        <div className="flex items-center gap-x-2">
          <Image
            src="/assets/LandingPage/card/analytics.svg"
            width={24}
            height={24}
            alt="open"
          />
          <p className="text-sm text-[#7C7C7C]">
            <span className="font-poppinsRegular">ROI:</span>{" "}
            <span className=" font-poppinsSemiBold font-semibold">
              15% Annually
            </span>
          </p>
        </div>

        <div className="flex items-center gap-x-2">
          <Image
            src="/assets/LandingPage/card/location.svg"
            width={24}
            height={24}
            alt="open"
          />
          <p className="text-sm text-[#7C7C7C] font-poppinsRegular">
            Lagos, Nigeria.
          </p>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between mb-6">
        <div>
          <p className="text-sm text-[#7C7C7C]">
            <span className="font-poppinsRegular">ROI:</span>{" "}
            <span className=" font-poppinsSemiBold font-semibold text-[#5F5F5F]">
              15% Annually
            </span>
          </p>
        </div>

        <div className="">
          <p className="text-sm text-[#7C7C7C] flex items-center">
            <span className="font-poppinsRegular">Farm Rating:</span>{" "}
            <span className=" font-poppinsSemiBold font-semibold text-[#5F5F5F] ml-1 mr-1">
              4.5{" "}
            </span>
            <Image
              src="/assets/LandingPage/card/star.svg"
              width={15}
              height={15}
              alt="star"
            />
          </p>
        </div>
      </div>

      <div className="flex items-center gap-x-3">
        <Button variant="tertiary" size="small" className="w-fit">
          Bid Now
        </Button>
        <Button className="w-fit" variant="secondary" size="small">
          View Details
        </Button>
      </div>
    </div>
  );
};

export default Card;
