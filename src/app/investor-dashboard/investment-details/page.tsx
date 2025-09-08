import Button from "@/app/components/common/Buttons";
import InvestorLayout from "@/app/components/common/investor/investorsLayout";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { MdMessage } from "react-icons/md";

export default function FarmProjectCard() {

  const projectDetails = [
    { label: "Invested Amount:", value: "₦1,000,000" },
    { label: "Duration:", value: "12 Months" },
    { label: "Investment Start Date:", value: "November 21, 2024" },
    { label: "Estimated Payout Date:", value: "November 21, 2025" },
  ];
  const farmPhases = [
    { phase: "Phase 1", text: "Setting Up Farm And Clearing Of Field" },
    { phase: "Phase 2", text: "Planting Of Apple Seeds" },
    { phase: "Phase 3", text: "Wetting Of Plant" },
  ];

  return (
    <InvestorLayout>
      <main className="px-10 py-10 bg-gray-50 overflow-y-auto h-full md:px-4">
        <div className="mt-3 flex flex-col gap-y-2">
          <Link href={"/signup"}>
            <button className="text-[#7C7C7C] px-2 py-1 rounded-xl bg-gray-100 flex items-center gap-x-3 text-lg font-poppinsRegular hover:text-[#51F4A6]">
              <span className=" bg-white rounded-full p-2 hover:bg-[#51F4A6]">
                <IoIosArrowBack size={14} color="#7C7C7C" />
              </span>
              Go Back
            </button>
          </Link>
          <p className="text-[#5F5F5F] text-xl font-aristoBold">
            Project Details
          </p>
        </div>
        <div className="grid mt-4 grid-cols-2 md:grid-cols-1 gap-6">
          <div className="border border-[#F6F6F6] rounded-2xl bg-white p-5">
            <div className="flex border-b border-[#F6F6F6] pb-3 items-center justify-between">
              <h2 className="text-xl text-[#5F5F5F] font-poppinsSemiBold">
                Apple Orchard
              </h2>
              <span className="bg-[#FFFAE6] text-[#695700] text-xs font-poppinsRegular px-3 py-1 rounded-full">
                Ongoing
              </span>
            </div>

            <div className="flex items-center py-3 border-b border-[#F6F6F6]  gap-6">
              <Image
                src="/apple-orchard.png"
                alt="farm"
                width={120}
                height={120}
                className="rounded-full border-4 border-[#51F4A6]"
              />
              <div className="space-y-3 ">
                <p className="font-poppinsRegular text-[#7C7C7C]">
                  Project Name
                </p>
                <p className="text-[#5F5F5F] font-poppinsSemiBold">
                  Apple Orchard
                </p>
                <div className="text-sm text-[#7C7C7C] font-poppinsRegular flex items-center gap-2">
                  <div className="p-2 bg-[#F2F2F2] rounded-full">
                    <IoLocationSharp className="text-[#2D865B] text-sm" />
                  </div>
                  Lagos, Nigeria
                </div>
              </div>
            </div>
            <div className="mt-4 space-y-4">
              {projectDetails.map((item, idx) => (
                <div key={idx} className="flex justify-between gap-6">
                  <p className="text-[#7C7C7C] font-poppinsRegular">
                    {item.label}
                  </p>
                  <p className="text-[#5F5F5F] font-poppinsSemiBold">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
            <div className="space-y-3 mt-8">
              <Button
                variant="primary"
                size="small"
                className="w-full !text-xs"
              >
                Click To View Full Project Details Page
              </Button>
              <Button
                variant="secondary"
                size="small"
                className="w-full !text-xs flex gap-2 justify-center items-center"
              >
                <MdMessage size={20} />
                Contact Farmer
              </Button>
            </div>
          </div>
          <div className="space-y-4 border h-fit border-[#F6F6F6] rounded-2xl bg-white p-5">
            <h3 className="font-poppinsSemiBold border-b pb-3 text-[#5F5F5F]">
              Farm Updates
            </h3>
            <div className="space-y-2 border-b pb-3">
              {farmPhases.map((phase, idx) => (
                <div key={idx} className="space-y-2">
                  <p className="text-xs font-poppinsRegular text-[#7C7C7C]">
                    {phase.phase}
                  </p>
                  <p className="text-[#5F5F5F] text-sm font-poppinsSemiBold">
                    {phase.text}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-4 border border-[#E4E7EC] bg-[#FCFCFC] rounded-2xl p-4">
              <div className="bg-white">
                <hr className="text-[#CECECE]" />
                <p className="text-sm mt-2 text-[#7C7C7C] font-poppinsSemiBold">
                  70%{" "}
                  <span className="text-[#5F5F5F] text-sm font-poppinsRegular">
                    Complete
                  </span>
                </p>
                <div className="h-3 w-full mt-2 bg-[#FFFAE6] rounded-full">
                  <div className="h-3 w-[70%] bg-[#FBCF01] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </InvestorLayout>
  );
}
