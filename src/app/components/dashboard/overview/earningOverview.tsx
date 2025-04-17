import SubHead from "../common/sectionHeading";
import { PiDotsThree } from "react-icons/pi";
import { FaCaretDown } from "react-icons/fa";
import { MdCardTravel } from "react-icons/md";
import React from "react";

interface data {
  investor: string;
  icon: React.ReactNode;
  number: string;
  bgColor: string;
}

const EarningOverview = () => {
  const data: data[] = [
    {
      investor: "Total Earnings",
      icon: <MdCardTravel size={20} color="#2D865B" />,
      number: "N100,000.00 Naira",
      bgColor: "bg-[#EEFEF6]",
    },
    {
      investor: "Total Withdrawal",
      icon: <MdCardTravel size={20} color="#FE0503" />,
      number: "N500,000.00 Naira",
      bgColor: "bg-[#FFE6E6]",
    },
  ];
  return (
    <div className="mt-6 px-[22px] py-8 border border-[#E4E7EC] bg-[white] rounded-xl">
      <div className="flex justify-between  items-center mb-4">
        <SubHead text="Farm Investment Overview" />
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

      <div className="grid grid-cols-2 gap-x-4 gap-y-4">
        {data.map((item, index) => (
          <div key={index} className={`p-4 ${item?.bgColor} rounded-xl`}>
            <p className="text-xs font-poppinsRegular text-[#7C7C7C] mb-2">
              {item?.investor}
            </p>
            <div className={`flex items-center gap-x-2`}>
              <span>{item?.icon}</span>
              <p className="text-lg font-poppinsSemiBold text-[#5F5F5F]">
                {item?.number}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EarningOverview;
