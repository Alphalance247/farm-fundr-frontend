import SubHead from "../common/sectionHeading";
import Image from "next/image";
// import { FaCaretDown } from "react-icons/fa";
// import Button from "../../common/Buttons";
import { getDashboardStore } from "@/stores/farmer-dashboard/dashboard";

const RecentActivity = () => {
  const { data } = getDashboardStore();
  // const data: data[] = [
  //   {
  //     heading: "New Project Created",
  //     icon: "/assets/DashBoard/overview/1.svg",
  //     amount: "N100,000",
  //     date: "Today, 09:20 AM.",
  //   },
  //   {
  //     heading: "Milestone Payment Received",
  //     icon: "/assets/DashBoard/overview/2.svg",
  //     amount: "N100,000",
  //     date: "Yesterday, 12:20 AM.",
  //   },
  //   {
  //     heading: "Farm Investment Approved",
  //     icon: "/assets/DashBoard/overview/3.svg",
  //     amount: "N100,000",
  //     date: "Yesterday, 12:20 AM.",
  //   },
  //   {
  //     heading: "You Rejected a Bid From Investor Michael",
  //     icon: "/assets/DashBoard/overview/4.svg",
  //     amount: "N100,000",
  //     date: "Yesterday, 12:20 AM.",
  //   },
  //   {
  //     heading: "You Approved a Bid From Investor Azeez",
  //     icon: "/assets/DashBoard/overview/5.svg",
  //     amount: "N100,000",
  //     date: "Yesterday, 12:20 AM.",
  //   },
  // ];
  return (
    <div className="mt-6 px-[22px] py-8 border border-[#E4E7EC] bg-[white] rounded-xl">
      <div className="flex justify-between  items-center mb-4">
        <SubHead text="Recent Activity" />
        {/* <div className="relative flex items-center gap-x-4">
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
        </div> */}
      </div>

      <div className="flex flex-col gap-y-4">
        {data?.data?.audit_logs.map((item, index) => {
          return (
            <div
              className="flex items-start gap-x-2 bg-[#FCFCFC] p-4 rounded-xl "
              key={index}
            >
              <Image
                src={"/assets/DashBoard/overview/1.svg"}
                width={44}
                height={50}
                alt={item?.content || ""}
              />

              <div className="text-[#5F5F5F] text-sm flex flex-col gap-y-1">
                <p className="font-poppinsSemiBold">{item?.title}</p>
                <p className="font-poppinsRegular"> {item?.content}</p>
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
    </div>
  );
};

export default RecentActivity;
