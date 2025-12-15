"use client";
import Image from "next/image";
import Spinner from "@/app/components/common/modals/spinner";
import Button from "@/app/components/common/Buttons";
import { MdAssignment } from "react-icons/md";
import AgencyLayout from "@/app/components/common/agency/agencyLayout";
import GrantApplicationTable from "@/app/components/agency/GrantApplication/grantApplicationTable";
import { useGrantsApplicationList } from "@/context/queries/grant-application/getApplicationList";
interface data {
  id: number;
  name: string;
  image: string;
  totalFarms: number;
  color: string;
}
const GrantApplication = () => {
  const {
    data: dat,
    isError,
    refetch,
    isLoading,
    error,
  } = useGrantsApplicationList();

  const data: data[] = [
    {
      id: 1,
      name: "Total Applications",
      image: "/assets/Agency/Applications/1.svg",
      color: "#4379FF",
      totalFarms: 200,
    },
    {
      id: 2,
      name: "Approved Applications",
      image: "/assets/Agency/Applications/2.svg",
      color: "#00C853",
      totalFarms: 30,
    },
    {
      id: 3,
      name: "Pending Applications",
      color: "#31DBFF",
      image: "/assets/Agency/Applications/3.svg",
      totalFarms: 12,
    },
    {
      id: 4,
      name: "Rejected Applications",
      color: "#31DBFF",
      image: "/assets/Agency/Applications/4.svg",
      totalFarms: 100,
    },
  ];

  return (
    <AgencyLayout>
      <main className="px-10 py-10 bg-gray-50 overflow-y-scroll h-full xl:px-4 xl:py-6">
        <div className="flex justify-between items-center">
          <div className="">
            <h2 className="text-xl font-poppinsSemiBold text-[#5F5F5F]">
              Applications
            </h2>
            <p className="text-sm font-poppinsRegular text-[#7C7C7C] mt-3">
              Overview of your applications
            </p>
          </div>
        </div>
        {isLoading ? (
          <Spinner />
        ) : isError ? (
          <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col items-center">
              <p className="text-red-500">{error?.response?.status}</p>
              <Button type="button" onClick={() => refetch()} className="mt-4">
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
                <GrantApplicationTable />
              </div>
            </div>
          </>
        )}
      </main>
    </AgencyLayout>
  );
};

export default GrantApplication;
