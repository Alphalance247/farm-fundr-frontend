"use client";
import Image from "next/image";
import { getFarmListStore } from "@/stores/farms/getFarmList";
import Spinner from "@/app/components/common/modals/spinner";
import Button from "@/app/components/common/Buttons";
import { MdAssignment } from "react-icons/md";
import GrantTable from "@/app/components/agency/My-Grants/grantTable";
import AgencyLayout from "@/app/components/common/agency/agencyLayout";
import Link from "next/link";
import { useEffect } from "react";
import { getGrantList } from "@/stores/agency-dashbaord/grant-list";

interface data {
  id: number;
  name: string;
  image: string;
  totalFarms: number;
  color: string;
}
const MyGrants = () => {
  const { data: farmList, loading, error, fetchFarmList } = getFarmListStore();
  const { fetchGrantList } = getGrantList();

  useEffect(() => {
    fetchGrantList();
  }, [fetchGrantList]);

  const data: data[] = [
    {
      id: 1,
      name: "Total Grants",
      image: "/assets/my-farms/1.svg",
      color: "#4379FF",
      totalFarms: 2,
    },
    {
      id: 2,
      name: "Active Grants",
      image: "/assets/my-farms/2.svg",
      color: "#00C853",
      totalFarms: 0,
    },
    {
      id: 3,
      name: "Drafts",
      color: "#31DBFF",
      image: "/assets/my-farms/3.svg",
      totalFarms: 12,
    },
  ];

  return (
    <AgencyLayout>
      <main className="px-10 py-10 bg-gray-50 overflow-y-scroll h-full xl:px-4 xl:py-6">
        <div className="flex justify-between items-center">
          <div className="">
            <h2 className="text-xl font-poppinsSemiBold text-[#5F5F5F]">
              My Grant
            </h2>
            <p className="text-sm font-poppinsRegular text-[#7C7C7C] mt-3">
              Overview of your Grants
            </p>
          </div>

          <Link href="/agency-dashboard/my-grants/create-grant">
            <button className="bg-[#282A03] rounded-[40px] text-[#FCFCFC] py-4 px-6 flex items-center gap-x-2 font-poppinsSemiBold xl:text-sm xl:py-3 md:text-xs md:px-2 md:py-2">
              <span>
                <Image
                  src="/assets/my-farms/plus.svg"
                  width={18}
                  height={18}
                  alt="plus"
                  className="xl:w-[14px] xl:h-[14px]"
                />
              </span>
              Create New
            </button>
          </Link>
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
            <div className="grid grid-cols-3 gap-x-4 mt-10 mb-4 xl:grid-cols-2 xl:gap-4 lg:grid-cols-2 md:grid-cols-2 md:gap-2">
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
                <GrantTable />
              </div>
            </div>
          </>
        )}
      </main>
    </AgencyLayout>
  );
};

export default MyGrants;
