import SubHead from "../common/sectionHeading";
import { PiDotsThree } from "react-icons/pi";
import Image from "next/image";

const FarmingSummary = () => {
  return (
    <div className="mt-6 px-[22px] py-8 border border-[#E4E7EC] bg-[white] rounded-xl">
      <div className="flex justify-between  items-center mb-4">
        <SubHead text="Farm Summary" />
        <div className="relative flex items-center gap-x-4">
          <div
            className=" p-2 bg-white border border-[#d9d9d9]  rounded-xl cursor-pointer w-fit"
            // onClick={handleOpen}
          >
            <PiDotsThree size={20} color="#7C7C7C" />
          </div>
        </div>
      </div>

      <div className="bg-[#F6F6F6] px-6 py-4 flex gap-x-4 items-center rounded-xl">
        <Image
          src="/assets/DashBoard/overview/summary.svg"
          width={103}
          height={117}
          alt="note"
        />

        <div>
          <p className="text-[#7C7C7C] font-poppinsSemiBold text-base">
            Total farms
          </p>
          <p className="text-[#2D865B] text-[32px] font-poppinsSemiBold">13</p>

          <div className="flex gap-x-3 items-center mt-4">
            <p className="text-[#226646] rounded-[0.5rem] bg-white px-[10px] py-[5px] text-xs font-poppinsRegular">
              10 Active
            </p>
            <p className="rounded-[0.5rem] text-[#B40402] bg-white px-[10px] py-[5px] text-xs font-poppinsRegular">
              2 InActive
            </p>
            <p className="bg-white px-[10px] py-[5px] text-[#5F5F5F] rounded-[0.5rem] text-xs font-poppinsRegular">
              1 Draft
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmingSummary;
