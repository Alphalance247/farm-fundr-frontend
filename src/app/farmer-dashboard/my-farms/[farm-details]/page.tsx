"use client";
import DashboardLayout from "@/app/components/common/dashboardLayout";
import { Topbar } from "@/app/components/common/dashboard/topBar";
import { MdVerifiedUser } from "react-icons/md";
import FarmerInfo from "@/app/components/dashboard/my-farms/farmerInfo";
import Image from "next/image";
import Copy from "@/app/components/common/copy";
import { useState } from "react";
import FarmBranches from "@/app/components/dashboard/my-farms/farmBranches";
import FarmHeadingOverview from "@/app/components/dashboard/my-farms/farmHeadingOverview";
import CustomizeStore from "@/app/components/dashboard/my-farms/customizeStore";
import { TabProvider } from "@/context/TabContext";

const MyFarms = () => {
  const [activeTab, setActiveTab] = useState<string>("Branches (6)");

  const tabs: { id: number; name: string }[] = [
    { id: 1, name: "Branches (6)" },
    { id: 2, name: "Draft (1)" },
    { id: 3, name: "StoreFront Settings" },
  ];
  return (
    <TabProvider>
      <DashboardLayout>
        <Topbar overview="My farm" />

        <main className="px-10 py-10 bg-gray-50 overflow-auto">
          <FarmHeadingOverview />

          <div className="px-6 py-4 bg-white rounded-lg border border-[#F6F6F6] mt-4">
            <div className="pb-3 border-b border-[#F6F6F6] flex justify-between items-center">
              <h5 className="text-sm font-poppinsSemiBold text-[#5F5F5F]">
                Green Valley Farm
              </h5>

              <p className="text-sm  w-fit font-poppinsRegular text-[#006E2E] px-3 py-1 border border-[#B0EECA] rounded-xl bg-[#E7F6EC]">
                Active
              </p>
            </div>

            <div className="mt-3 flex justify-between items-center gap-x-10 flex-wrap">
              <div className="border-r border-[#E4E7EC] pl-8 pr-12 flex flex-col gap-3 justify-center items-center">
                <Image
                  src="/assets/my-farms/farmlogo.svg"
                  alt="farmer"
                  width={64}
                  height={64}
                />
                <p className="text-xs font-poppinsRegular text-[#475367]">
                  RC: CDT/15118/A
                </p>

                <p className="text-sm font-poppinsRegular text-[#7C7C7C] bg-[#EEFEF6] px-3 py-1 rounded-lg flex items-center justify-center gap-2 border border-[#8AE6B0]">
                  Verified
                  <MdVerifiedUser size={16} color="#006E2E" />
                </p>
              </div>

              <div className="flex justify-between flex-1 flex-grow">
                <div className="flex flex-col gap-y-5">
                  <FarmerInfo title="Farmer’s Name" name="Michael John" />
                  <FarmerInfo title="Date Created" name="Mar 21, 2025." />
                </div>
                <div className="flex flex-col gap-y-5">
                  <FarmerInfo title="Location" name="Lagos, Nigeria" />
                  <FarmerInfo title="Branches" name="6" />
                </div>
                <div className="flex flex-col gap-y-5">
                  <FarmerInfo title="Project (Active)" name="4" />
                  <FarmerInfo title="Project (Inactive)" name="2" />
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-x-3 bg-[#EEFEF6] w-fit px-3 py-2 rounded-lg border border-[#C9FCE3]">
              <p className="text-sm font-poppinsRegular text-[#5F5F5F]">
                Storefront Link:
              </p>

              <p className="text-sm font-poppinsRegular text-[#7C7C7C]">
                https;//nelsonfarms.farmpady.com.ng
              </p>

              <Copy />
            </div>
          </div>

          <div className="px-6 py-4 bg-white rounded-lg border border-[#F6F6F6] mt-8">
            <div className="flex gap-x-5 items-center border-b border-[#E4E7EC]">
              {tabs.map((el, i) => (
                <button
                  className={`${
                    activeTab === el.name
                      ? "text-[#2D865B] border-b-[3px] border-[#2D865B] bg-white text-sm"
                      : "text-[#7C7C7C] border-transparent "
                  }   font-medium text-sm p-4 border-b-2`}
                  onClick={() => setActiveTab(el.name)}
                  key={i}
                >
                  {el.name}
                </button>
              ))}
            </div>

            <div className="mt-4">
              {activeTab === "Branches (6)" && <FarmBranches />}

              {activeTab === "Draft (1)" && <p>Draft (1)</p>}
              {activeTab === "StoreFront Settings" && <CustomizeStore />}
            </div>
          </div>
        </main>
      </DashboardLayout>
    </TabProvider>
  );
};

export default MyFarms;
