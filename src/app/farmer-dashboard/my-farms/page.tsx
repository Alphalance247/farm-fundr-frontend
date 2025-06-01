"use client";
import DashboardLayout from "../../components/common/dashboardLayout";
import { Topbar } from "../../components/common/dashboard/topBar";
import Image from "next/image";
import { useState } from "react";
import FarmListTable from "@/app/components/dashboard/my-farms/farmsTable";
import CreateNewFarmBtn from "@/app/components/dashboard/my-farms/createNewFarmBtn";
import Link from "next/link";

interface data {
  id: number;
  name: string;
  image: string;
  totalFarms: number;
}
const MyFarms = () => {
  const [activeTab, setActiveTab] = useState<string>("My Farms");
  const data: data[] = [
    {
      id: 1,
      name: "Total Farms",
      image: "/assets/my-farms/1.svg",
      totalFarms: 5,
    },
    {
      id: 2,
      name: "Active Farms",
      image: "/assets/my-farms/2.svg",
      totalFarms: 15,
    },
    {
      id: 3,
      name: "Total Branches",
      image: "/assets/my-farms/3.svg",
      totalFarms: 10,
    },
    {
      id: 4,
      name: "Draft",
      image: "/assets/my-farms/4.svg",
      totalFarms: 5,
    },
  ];

  const tabs: { id: number; name: string }[] = [
    { id: 1, name: "My Farms" },
    { id: 2, name: "Draft (1)" },
  ];

  return (
    <DashboardLayout>
      <Topbar overview="My farm" />

      <main className="px-10 py-10 bg-gray-50 overflow-auto">
        <div className="flex justify-between items-center">
          <div className="">
            <h2 className="text-xl font-poppinsSemiBold text-[#5F5F5F]">
              My Farm
            </h2>
            <p className="text-sm font-poppinsRegular text-[#7C7C7C] mt-3">
              Overview of your Farms
            </p>
          </div>

          <div>
            <Link href={"/farmer-dashboard/my-farms/add-farm"}>
              <CreateNewFarmBtn />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-x-4 mt-10 mb-4">
          {data.map((item) => (
            <div key={item.id} className="bg-white rounded-lg px-6 py-4">
              <Image src={item.image} width={50} height={50} alt="farm" />

              <div className="flex  justify-between gap-y-2 pb-3 border-b border-[#F2F2F3] mt-2">
                <h3 className="text-sm font-poppinsRegular text-[#34474E]">
                  {item.name}
                </h3>
                <p className="text-2xl font-poppinsSemiBold text-[#0B222A]">
                  {item.totalFarms}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
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
            {activeTab === "My Farms" && <FarmListTable />}

            {activeTab === "Draft (1)" && <p>Draft (1)</p>}
          </div>
        </div>
      </main>
    </DashboardLayout>
  );
};

export default MyFarms;
