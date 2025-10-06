"use client";
import SkeletonLoader from "@/components/ui/skeleton-loader";
import { getInvestmentDetails } from "@/stores/investor-dashboard/investment/investment-details";
import { getInvestorMessages } from "@/stores/investor-dashboard/investment/investorMessage";
import { useEffect, useState } from "react";
import ErrorFetch from "../../common/errorFetch";
import { Label } from "recharts";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import axiosInstance from "@/lib/axios";
import Button from "../../common/Buttons";
import { useAuth } from "@/context/authContext";
import { getFarmerMessages } from "@/stores/farmer-dashboard/getFarmerMessages";

const Messaging = ({
  investmentDetailsId,
}: {
  investmentDetailsId: string;
}) => {
  const { data, fetchInvestmentDetails } = getInvestmentDetails();
  const {
    data: message,
    fetchInvestorMessages,
    error: errorMessage,
    loading: loadingMessage,
  } = getInvestorMessages();
  const {
    data: farmerMessage,
    fetchFarmerMessages,
    error: errorFarmerMessage,
    loading: loadingFarmerMessage,
  } = getFarmerMessages();
  const { user } = useAuth();
  const bidId = data?.data?.bid_data?.id || "";
  const projectId = data?.data?.project?.id || "";

  useEffect(() => {
    if (user?.user_type === "investor") {
      fetchInvestmentDetails(investmentDetailsId);
      if (projectId && bidId) {
        fetchInvestorMessages(projectId, bidId);
      }
    } else {
      fetchFarmerMessages(investmentDetailsId);
    }
  }, [
    fetchInvestmentDetails,
    investmentDetailsId,
    user?.user_type,
    fetchFarmerMessages,
    projectId,
    bidId,
    fetchInvestorMessages,
  ]);

  const [messages, setMesssage] = useState("");
  const [loadingM, setIsLoading] = useState(false);
  const messageType =
    user?.user_type === "investor" ? message?.data : farmerMessage?.data;

  const errorType =
    user?.user_type === "investor" ? errorMessage : errorFarmerMessage;
  const loadingType =
    user?.user_type === "investor" ? loadingMessage : loadingFarmerMessage;

  const handleSendMessage = async () => {
    try {
      const endpoint =
        user?.user_type === "farmer"
          ? `farms/projects/${investmentDetailsId}/updates`
          : `investment/bids/${projectId}/${bidId}/project-updates`;
      setIsLoading(true);

      const res = await axiosInstance.post(endpoint, {
        message: messages,
      });

      if (res.status === 200 || res.status === 201) {
        toast.success(res?.data?.statusmessage);

        if (user?.user_type === "farmer") {
          fetchFarmerMessages(investmentDetailsId);
        } else {
          fetchInvestorMessages(projectId, bidId);
        }
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
    <div className="space-y-4 border h-fit border-[#F6F6F6] rounded-2xl bg-white p-5">
      <h3 className="font-poppinsSemiBold border-b pb-3 text-[#5F5F5F]">
        Farm Updates
      </h3>

      {loadingType ? (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-1">
          <SkeletonLoader className="h-[200px] w-full my-6" />
        </div>
      ) : errorType ? (
        <ErrorFetch message="Error Fetching Messages" onRefetch={() => {}} />
      ) : (
        <>
          {messageType?.length === 0 ? (
            <p className="flex flex-col justify-center">
              No messages found yet
            </p>
          ) : (
            <div className="border-b pb-4 border-[#F6F6F6] h-[400px] overflow-y-auto flex flex-col gap-y-4">
              {messageType?.map((message, i) => (
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
                            message?.created_by?.image ? "w-[110px] h-fit" : ""
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
        </>
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
            className={messages === "" ? "cursor-not-allowed opacity-70" : ""}
          >
            {loadingM ? "Sending.." : "Send"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Messaging;
