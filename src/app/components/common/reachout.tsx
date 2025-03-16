import Image from "next/image";
import Button from "./Buttons";
import { GoArrowRight } from "react-icons/go";

const ReachOut = () => {
  return (
    <div className="mt-20 text-center border-t-[#7C7C7C] border-t pt-14">
      <div>
        <Button
          size="medium"
          className="flex items-center gap-x-4 justify-center mb-20 text-center w-[535px] mx-auto relative z-10"
        >
          <span>Bid for Project</span>
          <span>
            <GoArrowRight size={24} className="text-white" />
          </span>
        </Button>
      </div>

      <p className="text-2xl text-[#5F5F5F] font-aristoBold mb-3">Contact Us</p>
      <p className="text-lg font-poppinsRegular text-[#7C7C7C] mb-8">
        Got a Question? We’d Love to Hear From You!
      </p>

      <div className="flex justify-center gap-x-20 lg:grid lg:grid-cols-2 lg:justify-items-center lg:gap-y-8 md:grid-cols-1 md:justify-items-start">
        <div className="flex items-center gap-x-[10px]">
          <Image
            src="/assets/marketplaceID/location.svg"
            width={40}
            height={40}
            alt="location"
          />
          <p className="text-lg text-[#7C7C7C] font-poppinsRegular">
            Lagos, Nigeria
          </p>
        </div>
        <div className="flex items-center gap-x-[10px]">
          <Image
            src="/assets/marketplaceID/mail.svg"
            width={40}
            height={40}
            alt="phone"
          />
          <p className="text-lg text-[#7C7C7C] font-poppinsRegular">
            080123456789
          </p>
        </div>
        <div className="flex items-center gap-x-[10px] lg:col-span-2 md:col-span-1">
          <Image
            src="/assets/marketplaceID/phone.svg"
            width={40}
            height={40}
            alt="mail"
          />
          <p className="text-lg text-[#7C7C7C] font-poppinsRegular">
            applearchard@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReachOut;
