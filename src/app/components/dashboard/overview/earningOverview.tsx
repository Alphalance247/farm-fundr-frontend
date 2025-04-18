import SubHead from "../common/sectionHeading";
import { PiDotsThree } from "react-icons/pi";
import { FaCaretDown } from "react-icons/fa";
import { MdCardTravel } from "react-icons/md";
import React from "react";
import Image from "next/image";
import Button from "../../common/Buttons";

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
        <SubHead text="Earning Summary" />
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

      <div className="mt-4 flex flex-col gap-y-4">
        {/* ///Dont forget to remove the hardcoded background condition for rendering different project completion during integration// */}
        {data.map((item, index) => (
          <div
            className="bg-[#FCFCFC] border border-[#E4E7EC] rounded-xl  py-[19px] px-[30px]"
            key={index}
          >
            <div className=" mb-[13px] flex justify-between items-center">
              <div className="flex items-center gap-x-3">
                <Image
                  src="/assets/LandingPage/card/logo.svg"
                  width={42}
                  height={42}
                  alt="farm logo"
                />
                <p className="text-[#5F5F5F] font-poppinsSemiBold text-base">
                  Organic Apple Farm
                </p>
              </div>
              <p
                className={`px-[10px] py-[5px]  ${
                  index === 1 ? " bg-[#E6FAEE]" : "bg-[#FFFAE6]"
                }  rounded-xl font-poppinsRegular text-xs text-[#695700]`}
              >
                {index === 1 ? " Completed" : "Ongoing"}
              </p>
            </div>

            <div className="flex flex-col gap-y-2 bg-white py-3 border-t border-t-[#CECECE]">
              <p className="text-[#5F5F5F] text-xs font-poppinsRegular">
                Amount Received for this farm project
              </p>
              <p className="text-sm font-poppinsRegular text-[#5F5F5F]">
                {" "}
                <span className="font-poppinsSemiBold">N300,000</span>/N500,000
              </p>

              <div
                className={`w-full bg-[#FFFAE6] h-2 rounded-full ${
                  index === 1 ? "bg-transparent" : "bg-[#E6FAEE]"
                }`}
              >
                <div
                  className={`h-2 rounded-full  ${
                    index === 1
                      ? " bg-[#00C853] w-[100%]"
                      : "bg-[#FBCF01] w-[70%]"
                  }`}
                ></div>
              </div>

              <p className="text-[#7C7C7C] text-sm font-poppinsRegular">
                {" "}
                <span className=" font-poppinsSemiBold">
                  {" "}
                  70%{" "}
                </span> Complete{" "}
                <span className=" font-poppinsSemiBold">•</span> Remains 2 Phase
                Payment to complete
              </p>
            </div>
          </div>
        ))}

        <Button
          variant="secondary"
          size="small"
          className="w-[180px] mt-6 mx-auto"
        >
          View All
        </Button>
      </div>
    </div>
  );
};

export default EarningOverview;
