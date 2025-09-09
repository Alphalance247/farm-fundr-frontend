"use client";
import { useState } from "react";
import TransactionSearch, {
  FilterOption,
  SortOption,
} from "../wallet/transactionSearch";
import BidCard from "../../common/bidsCard";
import Button from "../../common/Buttons";

const DUMMY_BIDS = [
  {
    id: 1,
    name: "Green Acres Farm",
    location: "Lagos, Nigeria",
    amount: "₦1,000,000",
    date: "May 12 2025",
    status: "Accepted" as const,
    image: "/assets/my-farms/farmpic.svg",
  },
  {
    id: 2,
    name: "Apple Greenhouse",
    location: "Abuja, Nigeria",
    amount: "₦800,000",
    date: "Apr 30 2025",
    status: "Pending" as const,
    image: "/assets/my-farms/farmpic.svg",
  },
  {
    id: 3,
    name: "Sunset Farm",
    location: "Ibadan, Nigeria",
    amount: "₦600,000",
    date: "Mar 20 2025",
    status: "Declined" as const,
    image: "/assets/my-farms/farmpic.svg",
  },
];

export default function BidsPage() {
  const [activeTab, setActiveTab] = useState<
    "All" | "Accepted" | "Pending" | "Declined"
  >("Accepted");

  const filteredBids =
    activeTab === "All"
      ? DUMMY_BIDS
      : DUMMY_BIDS.filter((bid) => bid.status === activeTab);

  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("firstName");
  const [filterBy, setFilterBy] = useState<FilterOption>("all");

  return (
    <section className="p-4">
      <TransactionSearch
        searchQuery={searchQuery}
        sortBy={sortBy}
        filterBy={filterBy}
        onSearchChange={setSearchQuery}
        onSortChange={setSortBy}
        onFilterChange={setFilterBy}
        withHeading={false}
      />
      <div className="flex justify-between items-center border-b mb-6">
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
      <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
        {filteredBids.map((bid) => (
          <BidCard key={bid.id} {...bid} />
        ))}
      </div>
      <div className="text-center flex justify-center mt-8">
        <Button variant="secondary" size="small" className="">
          View More
        </Button>
      </div>
    </section>
  );
}
