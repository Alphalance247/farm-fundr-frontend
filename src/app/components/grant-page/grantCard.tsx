import Image from "next/image";
import Button from "../common/Buttons";

const GrantCard = () => {
  return (
    <div className="p-3 border border-[#F6F6F6] bg-white rounded-lg shadow-xl">
      <div className="flex gap-x-[10px] border-[#F2F2F2] pb-[10px] border-b items-center">
        <Image
          width={50}
          height={50}
          src="/assets/Grant-page/image.png"
          alt="grant logo"
        />
        <p className=" font-poppinsSemiBold text-[#5F5F5F] ">
          Youth in agri 2025
        </p>
      </div>
      <div className="pt-[10px] flex justify-between items-start">
        <div>
          <p className="text-[#2D865B] font-poppinsSemiBold text-2xl mb-3">
            ₦250,000
          </p>
          <p className=" font-poppinsRegular text-[#DE4204] text-sm">
            {" "}
            Deadline: Aug 15, 2025
          </p>
        </div>
        <p className="text-sm font-poppinsRegular text-[#A0A0A0]">
          3 applicants{" "}
        </p>
      </div>

      <div className="pb-3 border-[#F2F2F2] border-b">
        <div className="p-2 mt-4 bg-[#F6F6F6] rounded-lg">
          <p className="mb-2 font-poppinsSemiBold text-sm">Description</p>
          <p className="text-sm font-poppinsRegular text-[#7C7C7C]">
            This grant aims to empower young farmers with the resources to boost
            productivity and adopt sustainable practices...
          </p>
        </div>
      </div>

      <div className="flex gap-x-3 pt-4">
        <Button className="w-full">Apply Now</Button>
        <Button className="w-full" variant="secondary">
          View Details
        </Button>
      </div>
    </div>
  );
};

export default GrantCard;
