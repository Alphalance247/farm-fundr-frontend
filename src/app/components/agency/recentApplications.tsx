import { IoIosArrowDown } from "react-icons/io";
import SubHead from "../dashboard/common/sectionHeading";
import Button from "../common/Buttons";
import Image from "next/image";

const RecentApplication = () => {
  return (
    <div className="mt-6 px-[22px] w-full py-8 border border-[#E4E7EC] bg-[white] rounded-xl">
      <div className="flex justify-between  gap-x-14 items-center mb-4">
        <SubHead text="Recent Applications" />
        <div className="relative flex items-center gap-x-4">
          <div
            className="flex items-center gap-x-2 p-2 bg-white border border-[#d9d9d9] rounded-xl cursor-pointer w-fit"
            // onClick={handleOpen}
          >
            <p className="">
              <span className="text-sm font-poppinsRegular text-[#7C7C7C]">
                Today
              </span>{" "}
              <span className="font-medium text-[15px] leading-5 text-[#262626] ">
                {""}
              </span>
            </p>
            <IoIosArrowDown size={20} color="#7C7C7C" />
          </div>
        </div>
      </div>

      <div>
        <div className="p-4 bg-[#FCFCFC] rounded-lg flex  gap-6">
          <Image
            src="/assets/Agency/landing/user.png"
            width={127}
            height={127}
            alt="user__profile"
            className=" object-contain"
          />

          <div className="flex-1">
            <div className="text-[#5F5F5F] text-sm flex items-center justify-between gap-y-1">
              <h3 className="text-[#5F5F5F] font-poppinsSemiBold text-sm">
                Adamu Michael
              </h3>
              <p className="px-[10px] py-[5px] bg-[#FFFAE6] text-[10px] font-poppinsSemiBold text-[#695700] rounded-md">
                Pending
              </p>
            </div>

            <p className="text-[#5F5F5F] text-sm mt-1 mb-2">Youth in Agric</p>
            <p className="text-xs text-[#7C7C7C] font-poppinsRegular mb-3">
              Jul 19, 2025
            </p>

            <Button className="w-full block">View Details</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentApplication;
