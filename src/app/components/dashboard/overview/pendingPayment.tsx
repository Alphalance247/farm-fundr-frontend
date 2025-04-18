import SubHead from "../common/sectionHeading";
import { PiDotsThree } from "react-icons/pi";
import { FaCaretDown } from "react-icons/fa";
import Image from "next/image";
import Button from "../../common/Buttons";

const PendingPayment = () => {
  return (
    <div className="mt-6 px-[22px] py-8 border border-[#E4E7EC] bg-[white] rounded-xl">
      <div className="flex justify-between  items-center mb-4">
        <SubHead text="Pending Payment" />
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

      <div className="border-b border-b-[#E2E2E2] mb-4">
        <p className="mb-1 text-sm font-poppinsRegular text-[#5F5F5F]">Total</p>
        <h4 className=" font-poppinsSemiBold text-[#5F5F5F]">N500,000.00</h4>
      </div>

      <div className="flex flex-col gap-y-4">
        <div className="bg-[#FCFCFC] p-4 rounded-xl flex justify-between ">
          <div className="flex items-center gap-x-2">
            <Image
              src="/assets/DashBoard/overview/arrdown.svg"
              width={44}
              height={50}
              alt="arrow down"
            />

            <div className="text-[#5F5F5F] text-sm flex flex-col gap-y-1">
              <p className="font-poppinsSemiBold">Organic Apple Farm</p>
              <p className="font-poppinsRegular">Phase 4 Payment</p>
              <p className="text-[#7C7C7C] text-xs font-poppinsRegular">
                To be paid- Feb 25, 2025
              </p>
            </div>
          </div>

          <p className="text-[#5F5F5F] text-sm font-poppinsSemiBold">
            N100,000
          </p>
        </div>

        <div className="bg-[#FCFCFC] p-4 rounded-xl flex justify-between">
          <div className="flex items-center gap-x-2">
            <Image
              src="/assets/DashBoard/overview/arrdown.svg"
              width={44}
              height={50}
              alt="arrow down"
            />

            <div className="text-[#5F5F5F] text-sm flex flex-col gap-y-1">
              <p className="font-poppinsSemiBold">Organic Apple Farm</p>
              <p className="font-poppinsRegular">Phase 4 Payment</p>
              <p className="text-[#7C7C7C] text-xs font-poppinsRegular">
                To be paid- Feb 25, 2025
              </p>
            </div>
          </div>

          <p className="text-[#5F5F5F] text-sm font-poppinsSemiBold">
            N100,000
          </p>
        </div>

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

export default PendingPayment;
