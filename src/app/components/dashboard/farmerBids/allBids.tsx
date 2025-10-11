"use client";
import { getFarmerBidWithInvestorStore } from "@/stores/farmer-dashboard/bids/farmerBids";
import FarmerBidsCard from "./farmerBidsCard";
import { useState } from "react";
import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import AcceptBidModal from "./acceptBidModal";
import DeclineBidModal from "./declineBidModal";

const AllBids = () => {
  const [showPlaceBid, setShowPlaceBid] = useState(false);
  const [showDeclineBid, setShowDeclinedBid] = useState(false);
  const [loading, setIsLoading] = useState(false);
  const { data: bidsData } = getFarmerBidWithInvestorStore();

  const acceptedId = bidsData?.bids_by_status?.accepted?.find(
    (bidId) => bidId?.id
  )?.id;

  const declinedId = bidsData?.bids_by_status?.declined?.find(
    (bidId) => bidId?.id
  )?.id;

  const handleAcceptDeclineBid = async ({ status }: { status: string }) => {
    setIsLoading(true);
    const statusToUse = status == "accept" ? "accepted" : "declined";
    const idToUse = status === "accept" ? acceptedId : declinedId;
    try {
      const res = await axiosInstance.patch(
        `farms/bids/${idToUse}/accept-decline`,
        { status: statusToUse }
      );

      if (res.status === 200 || res.status === 201) {
        toast.success(res?.data?.statusmessage);
        setShowPlaceBid(false);
      }

      setIsLoading(false);
    } catch (err) {
      let errorMessage = "An error occurred please try again or contact Admin";
      if (err instanceof AxiosError) {
        errorMessage = err.response?.data?.statusmessage || errorMessage;
      }

      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-1">
      <>
        {bidsData?.bids_by_status?.pending?.length === 0 ? (
          <p className="text-center py-14 text-[#7C7C7C] lg:text-xs text-sm">
            No New Bids Found{" "}
          </p>
        ) : (
          bidsData?.bids_by_status?.pending?.map((item) => (
            <FarmerBidsCard
              onAccept={() => setShowPlaceBid(true)}
              onDecline={() => setShowDeclinedBid(true)}
              name={item?.investor_name}
              projectName={item?.project?.name}
              img={item?.project?.project_images[0]?.image}
              isAwaitingPayment={false}
              isAcceptDecline={true}
              amount={item?.amount}
              date={item?.created_at}
              key={item?.id}
            />
          ))
        )}
      </>

      {showPlaceBid && (
        <AcceptBidModal
          onCloseBid={() => setShowPlaceBid(false)}
          onAcceptBid={() => handleAcceptDeclineBid({ status: "accept" })}
          loading={loading}
        />
      )}

      {showDeclineBid && (
        <DeclineBidModal
          onCloseBid={() => setShowDeclinedBid(false)}
          onDeclineBid={() => handleAcceptDeclineBid({ status: "decline" })}
          loading={loading}
        />
      )}
    </div>
  );
};

export default AllBids;
