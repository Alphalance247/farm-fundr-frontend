"use client";
import { getFarmerBidWithInvestorStore } from "@/stores/farmer-dashboard/bids/farmerBids";
import FarmerBidsCard from "./farmerBidsCard";

const DeclinedBids = () => {
  const { data: bidsData } = getFarmerBidWithInvestorStore();
  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-1">
      {bidsData?.bids_by_status?.declined?.map((item) => (
        <FarmerBidsCard
          name={item?.investor_name}
          projectName={item?.project?.name}
          img={item?.project?.project_images[0]?.image}
          isAwaitingPayment={false}
          isAcceptDecline={false}
          isDeclined={true}
          amount={item?.amount}
          date={item?.created_at}
          key={item?.id}
        />
      ))}
    </div>
  );
};

export default DeclinedBids;
