"use client";
import Image from "next/image";
import ProjectTable from "@/app/components/dashboard/my-investments/investmentsTable";
import Button from "@/app/components/common/Buttons";
import InvestorLayout from "@/app/components/common/investor/investorsLayout";
import { useEffect } from "react";
import { getInvestorInvestment } from "@/stores/investor-dashboard/overview/investment";
import SkeletonLoader from "@/components/ui/skeleton-loader";
import ErrorFetch from "@/app/components/common/errorFetch";

interface data {
  id: number;
  name: string;
  image: string;
  totalFarms: number | undefined;
}
const MyInvestments = () => {
  const {
    fetchInvestorsInvestment,
    data: investorData,
    loading,
    error,
  } = getInvestorInvestment();

  useEffect(() => {
    fetchInvestorsInvestment();
  }, [fetchInvestorsInvestment]);

  const data: data[] = [
    {
      id: 1,
      name: "Total Investments",
      image: "/assets/my-farms/1.svg",
      totalFarms: investorData?.overview?.total_investment,
    },
    {
      id: 2,
      name: "Ongoing",
      image: "/assets/my-farms/2.svg",
      totalFarms: investorData?.overview?.ongoing,
    },
    {
      id: 3,
      name: "Completed",
      image: "/assets/my-farms/3.svg",
      totalFarms: investorData?.overview?.completed,
    },
    {
      id: 4,
      name: "Draft",
      image: "/assets/my-farms/4.svg",
      totalFarms: investorData?.overview?.cancelled,
    },
  ];

  return (
    <InvestorLayout>
      <main className="px-10 py-10 bg-gray-50 overflow-y-scroll h-full xl:px-4 xl:py-6">
        <div className="flex flex-row  md:flex-col gap-3 justify-between md:items-start items-center">
          <div className="">
            <h2 className="text-xl font-poppinsSemiBold text-[#5F5F5F]">
              My Investments
            </h2>
            <p className="text-sm font-poppinsRegular text-[#7C7C7C] mt-3">
              Track and manage all your investment portfolios in one place.
            </p>
          </div>

          <div>
            <Button variant="primary" className="flex items-center gap-x-2">
              <Image
                src={"/assets/Dashboard/overview/add-box.svg"}
                alt="add-box"
                width={20}
                height={20}
              />
              Explore new Investment
            </Button>
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-1">
            <SkeletonLoader className="h-[200px] w-full my-6" />
            <SkeletonLoader className="h-[200px] w-full my-6" />
            <SkeletonLoader className="h-[200px] w-full my-6" />
          </div>
        ) : error ? (
          <ErrorFetch
            message="Error Fetching Ivestment Overview"
            onRefetch={fetchInvestorsInvestment}
          />
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

            <div className="mt-4">
              <ProjectTable />
            </div>
          </>
        )}
      </main>
    </InvestorLayout>
  );
};

export default MyInvestments;
