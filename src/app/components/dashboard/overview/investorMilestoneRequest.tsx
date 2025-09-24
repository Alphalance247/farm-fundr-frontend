import SubHead from "../common/sectionHeading";
import Image from "next/image";
import Button from "../../common/Buttons";
import { IoIosArrowDown } from "react-icons/io";

interface data {
  heading: string;
  icon: string;
  location?: string;
  amount?: string;
    date: string;
    approveBtn?: string;
    rejectBtn?: string;
}

const InvestorMilestoneRequest = () => {
  const data: data[] = [
      { 
      heading: "Apple Garden From Farmer Michael",
      icon: "/assets/DashBoard/overview/1.svg",
      amount: "N100,000",
      date: "Yesterday, 09:20 AM.",
      approveBtn: "Approve",
      rejectBtn: "Reject",
    },
    {
      heading: "Apple Garden From Farmer Michael",
      icon: "/assets/DashBoard/overview/2.svg",
      amount: "N100,000",
      date: "Yesterday, 12:20 AM.",
      approveBtn: "Approve",
      rejectBtn: "Reject",
    },
  ];
  return (
    <div className="mt-6 px-[22px] w-full py-8 border border-[#E4E7EC] bg-[white] rounded-xl">
      <div className="flex justify-between  items-center mb-4">
        <SubHead text="Milestone Payment Request" />
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

      <div className="flex flex-col gap-y-4">
        {data.map((item, index) => {
          return (
            <div className="bg-[#FCFCFC] p-4 rounded-xl" key={index}>
              <div className="flex items-start gap-x-2  ">
                <Image
                  src={item?.icon || ""}
                  width={44}
                  height={50}
                  alt={item?.heading || ""}
                />

                <div className="text-[#5F5F5F] text-sm flex flex-col gap-y-1">
                  <p className="font-poppinsSemiBold">{item?.heading}</p>
                  {item?.location && (
                    <p className="font-poppinsRegular">{item?.location}</p>
                  )}
                  <p className="font-poppinsRegular">{item?.amount}</p>
                  <p className="text-[#7C7C7C] text-sm font-poppinsRegular">
                    {item?.date}
                  </p>
                </div>
              </div>
              <div className="flex ml-12 mt-3 gap-x-2">
                <Button
                  variant="primary"
                  size="large"
                  className="w-full py-2 !text-xs !text-[#FCFCFC]"
                >
                  {item?.approveBtn}
                </Button>
                <Button
                  variant="danger"
                  size="large"
                  className="w-full py-2 !text-xs !text-[#FE0503]"
                >
                  {item?.rejectBtn}
                </Button>
              </div>
            </div>
          );
        })}
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

export default InvestorMilestoneRequest;
