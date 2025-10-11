"use client";
import { getFarmerBidWithInvestorStore } from "@/stores/farmer-dashboard/bids/farmerBids";
import FarmerBidsCard from "./farmerBidsCard";

const AcceptedBids = () => {
  const { data: bidsData } = getFarmerBidWithInvestorStore();
  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-1">
      {bidsData?.bids_by_status?.accepted?.map((item) => (
        <FarmerBidsCard
          isFundReleased={item?.fund_released}
          chatUrl={item?.project?.["farm-detail-page"]}
          name={item?.investor_name}
          awaitText={item?.fund_released ? "Drop Update" : "Awaiting payment"}
          projectName={item?.project?.name}
          img={item?.project?.project_images[0]?.image}
          isAwaitingPayment={true}
          isAcceptDecline={false}
          amount={item?.amount}
          date={item?.created_at}
          key={item?.id}
        />
      ))}
    </div>
  );
};

export default AcceptedBids;
