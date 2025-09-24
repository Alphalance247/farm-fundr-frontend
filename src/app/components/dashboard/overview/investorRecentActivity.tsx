import SubHead from "../common/sectionHeading";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { getInvestorDashboardStore } from "@/stores/investor-dashboard/overview/dashboard";

const InvestorRecentActivity = () => {
  const { data } = getInvestorDashboardStore();

  return (
    <div className="mt-6 px-[22px] w-full py-8 border border-[#E4E7EC] bg-[white] rounded-xl">
      <div className="flex justify-between  gap-x-14 items-center mb-4">
        <SubHead text="Recent Activity" />
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

      {data?.audit_logs.length === 0 ? (
        <p className="text-center">No Recent Activity</p>
      ) : (
        <div className="flex flex-col gap-y-4">
          {data?.audit_logs.map((item, index) => {
            return (
              <div
                className="flex items-start gap-x-2 bg-[#FCFCFC] p-4 rounded-xl "
                key={index}
              >
                <Image
                  src={"/assets/DashBoard/overview/1.svg"}
                  width={44}
                  height={50}
                  alt={item?.title || ""}
                />

                <div className="text-[#5F5F5F] text-sm flex flex-col gap-y-1">
                  <p className="font-poppinsSemiBold">{item?.title}</p>
                  <p className="font-poppinsRegular">{item?.content}</p>
                  <p className="text-[#7C7C7C] text-sm font-poppinsRegular">
                    {item?.created}
                  </p>
                </div>
              </div>
            );
          })}
          {/* <Button
          variant="secondary"
          size="small"
          className="w-[180px] mt-6 mx-auto"
        >
          View All
        </Button> */}
        </div>
      )}
    </div>
  );
};

export default InvestorRecentActivity;
