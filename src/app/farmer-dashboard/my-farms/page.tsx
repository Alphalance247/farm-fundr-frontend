"use client";
import DashboardLayout from "../../components/common/dashboardLayout";
import Image from "next/image";
import FarmListTable from "@/app/components/dashboard/my-farms/farmsTable";
import CreateNewFarmBtn from "@/app/components/dashboard/my-farms/createNewFarmBtn";
import ProtectedRoute from "@/app/components/common/ProtectedRoute/protectedRoute";
import { getFarmListStore } from "@/stores/farms/getFarmList";
import Spinner from "@/app/components/common/modals/spinner";
import Button from "@/app/components/common/Buttons";
import { MdAssignment } from "react-icons/md";

interface data {
  id: number;
  name: string;
  image: string;
  totalFarms: number;
  color: string;
}
const MyFarms = () => {
  const { data: farmList, loading, error, fetchFarmList } = getFarmListStore();

  const data: data[] = [
    {
      id: 1,
      name: "Total Farms",
      image: "/assets/my-farms/1.svg",
      color: "#4379FF",
      totalFarms: farmList?.results.extra_data?.total_farms || 0,
    },
    {
      id: 2,
      name: "Active Farms",
      image: "/assets/my-farms/2.svg",
      color: "#00C853",
      totalFarms: farmList?.results?.extra_data?.published_farms || 0,
    },
    {
      id: 3,
      name: "Branches",
      color: "#31DBFF",
      image: "/assets/my-farms/3.svg",

      totalFarms: farmList?.results.extra_data?.farm_branches || 0,
    },
    {
      id: 4,
      name: "Draft",
      color: "#DEA304",
      image: "/assets/my-farms/4.svg",
      totalFarms: farmList?.results.extra_data?.draft_farms || 0,
    },
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
              <CreateNewFarmBtn isBranch={false} isProject={false} />
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
              <div className="grid grid-cols-4 gap-x-4 mt-10 mb-4 xl:grid-cols-3 xl:gap-4 lg:grid-cols-2 md:grid-cols-2 md:gap-2">
                {data.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-lg px-6 py-4 md:px-3"
                  >
                    <div className="flex items-center gap-x-2">
                      <Image
                        src={item.image}
                        width={50}
                        height={50}
                        alt="farm"
                        className=" md:hidden"
                      />
                      <MdAssignment
                        fill={item?.color}
                        size={24}
                        className="hidden md:block"
                      />
                      <h3 className="text-sm font-poppinsRegular text-[#34474E] ">
                        {item.name}
                      </h3>
                    </div>

                    <div className="flex items-center justify-between gap-y-2 pb-3 border-b border-[#F2F2F3] mt-2 md:flex-col md:items-start">
                      <h3 className="text-sm font-poppinsRegular text-[#34474E] md:hidden">
                        {item.name}
                      </h3>
                      <p className="text-3xl font-poppinsSemiBold text-[#5F5F5F]">
                        {item.totalFarms}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <div className="mt-4">
                  <FarmListTable />
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
