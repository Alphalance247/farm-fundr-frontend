"use client";
import DashboardLayout from "../../components/common/dashboardLayout";
import Image from "next/image";
import { useState, useEffect } from "react";
import FarmListTable from "@/app/components/dashboard/my-farms/farmsTable";
import CreateNewFarmBtn from "@/app/components/dashboard/my-farms/createNewFarmBtn";
import ProtectedRoute from "@/app/components/common/ProtectedRoute/protectedRoute";
import { getFarmListStore } from "@/stores/farms/getFarmList";
import Spinner from "@/app/components/common/modals/spinner";
import Button from "@/app/components/common/Buttons";

interface data {
  id: number;
  name: string;
  image: string;
  totalFarms: number;
}
const MyFarms = () => {
  const [activeTab, setActiveTab] = useState<string>("My Farms");
  const { data: farmList, loading, error, fetchFarmList } = getFarmListStore();

  useEffect(() => {
    fetchFarmList();
  }, [fetchFarmList]);

  const data: data[] = [
    {
      id: 1,
      name: "Total Farms",
      image: "/assets/my-farms/1.svg",
      totalFarms: farmList?.results.extra_data?.total_farms || 0,
    },
    {
      id: 2,
      name: "Active Farms",
      image: "/assets/my-farms/2.svg",
      totalFarms: farmList?.results?.extra_data?.published_farms || 0,
    },
    {
      id: 3,
      name: "Total Branches",
      image: "/assets/my-farms/3.svg",
      totalFarms: farmList?.results.extra_data?.farm_branches || 0,
    },
    {
      id: 4,
      name: "Draft",
      image: "/assets/my-farms/4.svg",
      totalFarms: farmList?.results.extra_data?.draft_farms || 0,
    },
  ];

  const tabs: { id: number; name: string }[] = [
    { id: 1, name: "My Farms" },
    { id: 2, name: "Draft (1)" },
  ];

  return (
    <ProtectedRoute requiredUserType="farmer">
      <DashboardLayout>
        <main className="px-10 py-10 bg-gray-50 overflow-y-scroll h-full xl:px-4 xl:py-6">
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
              <CreateNewFarmBtn />
            </div>
          </div>
          {loading ? (
            <Spinner />
          ) : error ? (
            <div className="flex justify-center items-center h-screen">
              <div className="flex flex-col items-center">
                <p className="text-red-500">Error fetching farm details</p>
                <Button type="button" onClick={fetchFarmList} className="mt-4">
                  Retry
                </Button>
              </div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-4 gap-x-4 mt-10 mb-4  xl:grid-cols-3 xl:gap-4 lg:grid-cols-2 md:grid-cols-2 md:gap-2">
                {data.map((item) => (
                  <div key={item.id} className="bg-white rounded-lg px-6 py-4">
                    <Image src={item.image} width={50} height={50} alt="farm" />

                    <div className="flex items-center justify-between gap-y-2 pb-3 border-b border-[#F2F2F3] mt-2 md:flex-col md:items-start">
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
            </>
          )}
        </main>
      </DashboardLayout>
    </ProtectedRoute>
  );
};

export default MyFarms;
