"use client";
import Image from "next/image";
import { getInvestorBids } from "@/stores/investor-dashboard/overview/bids";
import { getInvestorBidStatus } from "@/stores/investor-dashboard/overview/bids-by-status";
import { useEffect } from "react";
import ErrorFetch from "@/app/components/common/errorFetch";
import SkeletonLoader from "@/components/ui/skeleton-loader";
import ProtectedRoute from "@/app/components/common/ProtectedRoute/protectedRoute";
import DashboardLayout from "@/app/components/common/dashboardLayout";
import FarmerBidsTable from "@/app/components/dashboard/farmerBids/farmerBidsTable";

interface data {
  id: number;
  name: string;
  image: string;
  totalFarms: string | number;
}
const InvestmentBids = () => {
  const {
    data: bidsData,
    loading: loadingOverview,
    error: errorBidsOverview,
    fetchInvestorBids,
  } = getInvestorBids();
  const { fetchInvestorsBidStatus } = getInvestorBidStatus();
  const data: data[] = [
    {
      id: 1,
      name: "Total Bids By Investors",
      image: "/assets/DashBoard/bids/3.svg",
      totalFarms: bidsData?.total_bids || 0,
    },
    {
      id: 2,
      name: "Accepted Bid",
      image: "/assets/DashBoard/bids/2.svg",
      totalFarms: bidsData?.accepted_bids_count || 0,
    },
    {
      id: 3,
      name: "Rejected Bid",
      image: "/assets/DashBoard/bids/1.svg",
      totalFarms: bidsData?.pending_bids_count || 0,
    },
  ];

  useEffect(() => {
    fetchInvestorsBidStatus();
    fetchInvestorBids();
  }, [fetchInvestorsBidStatus, fetchInvestorBids]);

  return (
    <ProtectedRoute requiredUserType="farmer">
      <DashboardLayout>
        <main className="px-10 py-10 bg-gray-50 overflow-y-scroll h-full xl:px-4 xl:py-6">
          <div className="flex flex-row  md:flex-col gap-3 justify-between md:items-start items-center">
            <div className="">
              <h2 className="text-xl font-poppinsSemiBold text-[#5F5F5F]">
                My Bids
              </h2>
              <p className="text-sm font-poppinsRegular text-[#7C7C7C] mt-3">
                Manage investors bids on your projects
              </p>
            </div>
          </div>

          {loadingOverview ? (
            <SkeletonLoader className="h-[200px] w-full my-6" />
          ) : errorBidsOverview ? (
            <ErrorFetch
              message="Error Fetching Bids Overview"
              onRefetch={fetchInvestorBids}
            />
          ) : (
            <div className="grid grid-cols-3 gap-x-4 mt-10 mb-4  xl:grid-cols-3 xl:gap-4 lg:grid-cols-2 md:grid-cols-2 md:gap-2">
              {data.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-[#F2F2F3] rounded-lg px-6 py-4"
                >
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
          )}

          <FarmerBidsTable />
        </main>
      </DashboardLayout>
    </ProtectedRoute>
  );
};

export default InvestmentBids;
