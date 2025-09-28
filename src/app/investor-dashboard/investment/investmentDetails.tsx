"use client";
import Button from "@/app/components/common/Buttons";
import ErrorFetch from "@/app/components/common/errorFetch";
import InvestorLayout from "@/app/components/common/investor/investorsLayout";
import Label from "@/app/components/common/label";
import SkeletonLoader from "@/components/ui/skeleton-loader";
import axiosInstance from "@/lib/axios";
import { getInvestmentDetails } from "@/stores/investor-dashboard/investment/investment-details";
import { getInvestorMessages } from "@/stores/investor-dashboard/investment/investorMessage";
import { AxiosError } from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { IoIosArrowBack } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

export default function InvestmentDetailsComponent({
  investmentDetailsId,
}: {
  investmentDetailsId: string;
}) {
  const { data, fetchInvestmentDetails, error, loading } =
    getInvestmentDetails();
  const {
    data: message,
    fetchInvestorMessages,
    error: errorMessage,
    loading: loadingMessage,
  } = getInvestorMessages();

  const bidId = data?.data?.bid_data?.id || "";
  const projectId = data?.data?.project?.id || "";

  useEffect(() => {
    fetchInvestmentDetails(investmentDetailsId);

    if (projectId && bidId) {
      fetchInvestorMessages(projectId, bidId);
    }
  }, [
    fetchInvestmentDetails,
    investmentDetailsId,
    projectId,
    bidId,
    fetchInvestorMessages,
  ]);

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

  const [messages, setMesssage] = useState("");
  const [loadingM, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    try {
      setIsLoading(true);

      const res = await axiosInstance.post(
        `investment/bids/${projectId}/${bidId}/project-updates`,
        {
          message: messages,
        }
      );

      if (res.status === 200 || res.status === 201) {
        toast.success(res?.data?.statusmessage);

        fetchInvestorMessages(projectId, bidId);
      }
      setMesssage("");
      setIsLoading(false);
    } catch (err) {
      let errorMessage = "An error occurred please try again or contact Admin";
      if (err instanceof AxiosError) {
        errorMessage = err.response?.data?.message || errorMessage;
      }

      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

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

          <div className="space-y-4 border h-fit border-[#F6F6F6] rounded-2xl bg-white p-5">
            <h3 className="font-poppinsSemiBold border-b pb-3 text-[#5F5F5F]">
              Farm Updates
            </h3>

            {loadingMessage ? (
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-1">
                <SkeletonLoader className="h-[200px] w-full my-6" />
              </div>
            ) : errorMessage ? (
              <ErrorFetch
                message="Error Fetching Messages"
                onRefetch={() => {}}
              />
            ) : (
              <div className="border-b pb-4 border-[#F6F6F6] h-[400px] overflow-y-auto flex flex-col gap-y-4">
                {message?.data?.map((message, i) => (
                  <div key={i}>
                    {message?.created_by?.user_type === "farmer" ? (
                      <div className="flex items-start gap-x-3 max-w-[80%] lg:max-w-full">
                        <div
                          className={`${
                            message?.created_by?.image ? "w-[110px] h-fit" : ""
                          }`}
                        >
                          {message?.created_by?.image ? (
                            <img
                              src={`${message?.created_by?.image}` || ""}
                              height={24}
                              width={24}
                              alt="profileImage"
                              className="h-[24px] w-[24px] rounded-full"
                            />
                          ) : (
                            <div className="h-[24px] w-[24px] rounded-full bg-[#EEFEF6] text-[#2D865B] flex items-center justify-center text-[14px] tracking-[0.34px] font-medium">
                              {message?.created_by?.fullname
                                .split(" ")
                                .slice(0, 2)
                                .map((n) => n[0])
                                .join("")
                                .toUpperCase()}
                            </div>
                          )}
                        </div>
                        <div className="mb-3">
                          <p className=" font-poppinsRegular bg-white border border-[#E2E2E2] text-sm text-[#7C7C7C] p-4 rounded-tr-[30px] rounded-bl-[30px] rounded-br-[30px]">
                            {message?.message}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col items-end justify-end">
                        <div className="flex items-start gap-x-3 w-[80%] lg:w-full">
                          <p className=" font-poppinsRegular bg-[#226646] border  text-sm text-[#F6F6F6] p-4 rounded-tl-[30px] rounded-bl-[30px] rounded-br-[30px]">
                            {message?.message}
                          </p>

                          <div
                            className={`${
                              message?.created_by?.image
                                ? "w-[110px] h-fit"
                                : ""
                            }`}
                          >
                            {message?.created_by?.image ? (
                              <img
                                src={`${message?.created_by?.image}` || ""}
                                height={24}
                                width={24}
                                alt="profileImage"
                                className="h-[30px] w-[30px]  rounded-full"
                              />
                            ) : (
                              <div className="h-[24px] w-[24px] rounded-full bg-[#EEFEF6] text-[#2D865B] flex items-center justify-center text-[14px] tracking-[0.34px] font-medium">
                                {message?.created_by?.fullname
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")
                                  .toUpperCase()}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            <div>
              <div>
                <Label>Message</Label>
                <textarea
                  cols={20}
                  rows={5}
                  name="message"
                  value={messages}
                  onChange={(e) => setMesssage(e.target.value)}
                  className={`bg-[#F6F6F6] border-[#51F4A6] border w-full text-[#7C7C7C] rounded-lg text-sm p-4 focus:border-[#51F4A6]`}
                  placeholder="Enter message here (minimum 10 characters)"
                ></textarea>
              </div>
              <div className="flex flex-col items-end">
                <Button
                  variant="tertiary"
                  onClick={handleSendMessage}
                  disabled={messages === ""}
                  className={
                    messages === "" ? "cursor-not-allowed opacity-70" : ""
                  }
                >
                  {loadingM ? "Sending.." : "Send"}
                </Button>
              </div>
            </div>

            {/* <div className="mt-4 border border-[#E4E7EC] bg-[#FCFCFC] rounded-2xl p-4">
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
            </div> */}
          </div>
        </div>
      </main>
    </InvestorLayout>
  );
}
