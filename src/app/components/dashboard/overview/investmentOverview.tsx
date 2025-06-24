import React from "react";
import { FaCaretDown } from "react-icons/fa";
import { PiDotsThree } from "react-icons/pi";
import SubHead from "../common/sectionHeading";
import Image from "next/image";
import { FarmDistribution } from "../chart/UserOverviewChart/farmDistribution";

interface data {
  investor: string;
  icon: string;
  number: string;
  bgColor: string;
}

const InvestmentOverview = () => {
  const data: data[] = [
    {
      investor: "Total Investors engaged",
      icon: "/assets/DashBoard/overview/peopleicon.svg",
      number: "12",
      bgColor: "bg-[#ECF2FF]",
    },
    {
      investor: "Ongoing Investment Deals",
      icon: "/assets/DashBoard/overview/bag.svg",
      number: "3",
      bgColor: "bg-[#EEFEF6]",
    },
  ];
  return (
    <div className="mt-6 px-[22px] py-8 border border-[#E4E7EC] bg-[white] rounded-xl">
      <div className="flex justify-between  items-center mb-4">
        <SubHead text="Farm Investment Overview" />
        <div className="relative flex items-center gap-x-4">
          <div className="flex items-center gap-x-2 p-2 bg-white border border-[#d9d9d9] rounded-xl cursor-pointer w-fit">
            <p className="">
              <span className="text-sm font-poppinsRegular text-[#7C7C7C]">
                Today
              </span>{" "}
              <span className="font-medium text-[15px] leading-5 text-[#262626] ">
                {""}
              </span>
            </p>
            <FaCaretDown size={20} color="#7C7C7C" />
          </div>

          <div
            className=" p-2 bg-white border border-[#d9d9d9]  rounded-xl cursor-pointer w-fit"
            // onClick={handleOpen}
          >
            <PiDotsThree size={20} color="#7C7C7C" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-4 xl:grid-cols-1">
        {data.map((item, index) => (
          <div key={index} className={`p-4 ${item?.bgColor} rounded-xl`}>
            <p className="text-xs font-poppinsRegular text-[#7C7C7C] mb-2">
              {item?.investor}
            </p>
            <div className={`flex items-center gap-x-2`}>
              <Image width={24} height={24} src={item?.icon} alt="icons" />
              <p className="text-lg font-poppinsSemiBold text-[#5F5F5F]">
                {item?.number}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <p className="text-sm text-[#626262] font-poppinsRegular">
          Farm Distribution
        </p>

        <FarmDistribution />
      </div>
    </div>
  );
};

export default InvestmentOverview;
