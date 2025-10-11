"use client";
import { useState } from "react";
import TransactionSearch, {
  FilterOption,
  SortOption,
} from "../wallet/transactionSearch";
import BidCard from "../../common/bidsCard";
import TransactionFilterMobile from "../wallet/mobileTransactionSearch";
import {
  getInvestorBidStatus,
  investorBidsStatusDataStore,
} from "@/stores/investor-dashboard/overview/bids-by-status";

// Define the bid item type from the store
type BidItem = investorBidsStatusDataStore["accepted"][0];

// Define the transformed bid type for BidCard
interface TransformedBid {
  id: string;
  name: string;
  location: string;
  amount: string;
  date: string;
  status: "Accepted" | "Pending" | "Declined";
  image: string;
  farm_page_link: string;
}

// Transform store data to BidCard format
const transformBidData = (
  bid: BidItem,
  status: "Accepted" | "Pending" | "Declined"
) => ({
  id: bid.project.id,
  name: bid.project.name,
  location: "Nigeria", // You might want to add location to your API response
  amount: `₦${bid.amount.toLocaleString()}`,
  date: bid.created_at,
  status: status,
  image: bid.project.project_images[0]?.image || "/assets/my-farms/farmpic.svg",
  farm_page_link: bid?.project?.farm_page_link,
});

export default function BidsPage() {
  const { data: bidsStatusData, error, loading } = getInvestorBidStatus();
  const [activeTab, setActiveTab] = useState<
    "All" | "Accepted" | "Pending" | "Declined"
  >("Accepted");

  // Transform and filter bids based on active tab
  const getFilteredBids = () => {
    if (!bidsStatusData) return [];

    let allBids: TransformedBid[] = [];

    if (activeTab === "All") {
      allBids = [
        ...bidsStatusData.accepted.map((bid) =>
          transformBidData(bid, "Accepted")
        ),
        ...bidsStatusData.pending.map((bid) =>
          transformBidData(bid, "Pending")
        ),
        ...bidsStatusData.declined.map((bid) =>
          transformBidData(bid, "Declined")
        ),
      ];
    } else if (activeTab === "Accepted") {
      allBids = bidsStatusData.accepted.map((bid) =>
        transformBidData(bid, "Accepted")
      );
    } else if (activeTab === "Pending") {
      allBids = bidsStatusData.pending.map((bid) =>
        transformBidData(bid, "Pending")
      );
    } else if (activeTab === "Declined") {
      allBids = bidsStatusData.declined.map((bid) =>
        transformBidData(bid, "Declined")
      );
    }

    return allBids;
  };

  const filteredBids = getFilteredBids();

  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("firstName");
  const [filterBy, setFilterBy] = useState<FilterOption>("all");

  // Handle loading state
  if (loading) {
    return (
      <section className="p-4 md:p-0">
        <div className="flex justify-center items-center h-64">
          <div className="text-gray-500">Loading bids...</div>
        </div>
      </section>
    );
  }

  // Handle error state
  if (error) {
    return (
      <section className="p-4 md:p-0">
        <div className="flex justify-center items-center h-64">
          <div className="text-red-500">Error loading bids: {error}</div>
        </div>
      </section>
    );
  }
  return (
    <section className="p-4 md:p-0">
      {/* search and filter */}
      <TransactionSearch
        searchQuery={searchQuery}
        sortBy={sortBy}
        filterBy={filterBy}
        onSearchChange={setSearchQuery}
        onSortChange={setSortBy}
        onFilterChange={setFilterBy}
        withHeading={false}
      />

      {/* mobile dropdown */}
      <div className="md:block hidden mb-4">
        <div className="flex items-center justify-between">
          <h4 className="text-sm text-[#5F5F5F] font-poppinsSemiBold">Bids</h4>
          <select
            value={activeTab}
            onChange={(e) =>
              setActiveTab(
                e.target.value as "All" | "Accepted" | "Pending" | "Declined"
              )
            }
            className="w-fit border rounded-lg px-3 py-2 text-gray-700"
          >
            <option value="All">All Bids</option>
            <option value="Accepted">Accepted Bids</option>
            <option value="Pending">Pending Bids</option>
            <option value="Declined">Declined Bids</option>
          </select>
        </div>
      </div>

      {/* desktop tabs */}
      <div className="md:hidden flex justify-between items-center border-b mb-6">
        {(["All", "Accepted", "Pending", "Declined"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 ${
              activeTab === tab
                ? "border-b-2 border-green-600 text-green-600 font-semibold"
                : "text-gray-600"
            }`}
          >
            {tab} Bids
          </button>
        ))}
      </div>
      <div className="hidden md:block">
        <TransactionFilterMobile showViewAll={false} />
      </div>
      {/* bids list */}
      {/* bids list */}
      <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
        {filteredBids.length > 0 ? (
          filteredBids.map((bid) => <BidCard key={bid.id} {...bid} />)
        ) : (
          <div className="col-span-2 text-center py-8 text-gray-500">
            No {activeTab.toLowerCase()} bids found
          </div>
        )}
      </div>

      {/* <div className="text-center flex justify-center mt-8">
        <Button variant="secondary" size="small">
          View More
        </Button>
      </div> */}
    </section>
  );
}
