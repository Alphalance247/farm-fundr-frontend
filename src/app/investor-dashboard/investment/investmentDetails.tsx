"use client";
import Button from "@/app/components/common/Buttons";
import ErrorFetch from "@/app/components/common/errorFetch";
import InvestorLayout from "@/app/components/common/investor/investorsLayout";
import Messaging from "@/app/components/dashboard/common/messaging";
import SkeletonLoader from "@/components/ui/skeleton-loader";
import { getInvestmentDetails } from "@/stores/investor-dashboard/investment/investment-details";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

export default function InvestmentDetailsComponent({
  investmentDetailsId,
}: {
  investmentDetailsId: string;
}) {
  const { data, fetchInvestmentDetails, error, loading } =
    getInvestmentDetails();

  const bidId = data?.data?.bid_data?.id || "";
  const projectId = data?.data?.project?.id || "";

  useEffect(() => {
    fetchInvestmentDetails(investmentDetailsId);
  }, [fetchInvestmentDetails, investmentDetailsId, projectId, bidId]);

  const projectDetails = [
    {
      label: "Invested Amount:",
      value: "₦ " + data?.data?.project?.budget.toLocaleString(),
    },
    { label: "Duration:", value: data?.data?.project?.duration_month },
    {
      label: "Investment Start Date:",
      value: data?.data?.project?.investment_start_date,
    },
    {
      label: "Estimated Payout Date:",
      value: data?.data?.project?.estimated_payout_day,
    },
  ];

  return (
    <InvestorLayout>
      <main className="px-10  py-10 bg-gray-50 overflow-y-auto h-full md:px-2">
        <div className="mt-3 flex flex-col gap-y-2">
          <Link href={"/investor-dashboard/investment"}>
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
        <div className="grid mt-4 grid-cols-2 xl:grid-cols-1 gap-6">
          <>
            {loading ? (
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-1">
                <SkeletonLoader className="h-[300px] w-full my-6" />
              </div>
            ) : error ? (
              <ErrorFetch
                message="Error Fetching Details"
                onRefetch={() => {}}
              />
            ) : (
              <div className="border border-[#F6F6F6] h-fit rounded-2xl bg-white md:p-2 p-5">
                <div className="flex border-b border-[#F6F6F6] pb-3 items-center justify-between">
                  <h2 className="text-xl text-[#5F5F5F] font-poppinsSemiBold">
                    {data?.data?.farm_status?.name}
                  </h2>
                  <span className="bg-[#FFFAE6] text-[#695700] text-xs font-poppinsRegular px-3 py-1 rounded-full">
                    {data?.data?.project?.status}
                  </span>
                </div>

                <div className="flex items-center py-3 border-b border-[#F6F6F6]  gap-6">
                  <Image
                    src={data?.data?.project?.images[0] || "/apple-orchard.png"}
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
                      {data?.data?.project?.name}
                    </p>
                    <div className="text-sm text-[#7C7C7C] font-poppinsRegular flex items-center gap-2">
                      <div className="p-2 bg-[#F2F2F2] rounded-full">
                        <IoLocationSharp className="text-[#2D865B] text-sm" />
                      </div>
                      {data?.data?.project?.project_location}
                    </div>
                  </div>
                </div>
                <div className="mt-4 space-y-4">
                  {projectDetails.map((item, idx) => (
                    <div key={idx} className="flex justify-between gap-6">
                      <p className="text-[#7C7C7C] text-base md:text-sm font-poppinsRegular">
                        {item.label}
                      </p>
                      <p className="text-[#5F5F5F] text-base md:text-sm  font-poppinsSemiBold">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="space-y-3 mt-8">
                  <a
                    href={data?.data?.project?.farm_page_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="primary"
                      size="small"
                      className="w-full !text-xs"
                    >
                      Click To View Full Project Details Page
                    </Button>
                  </a>
                  {/* <Button
              variant="secondary"
              size="small"
              className="w-full !text-xs flex gap-2 justify-center items-center"
            >
              <MdMessage size={20} />
              Contact Farmer
            </Button> */}
                </div>
              </div>
            )}
          </>

          <Messaging investmentDetailsId={investmentDetailsId} />
        </div>
      </main>
    </InvestorLayout>
  );
}
