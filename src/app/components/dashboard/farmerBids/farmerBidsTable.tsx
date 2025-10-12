"use client";
import { useState } from "react";
import AllBids from "./allBids";
import AcceptedBids from "./acceptedBid";
import DeclinedBids from "./declinedBid";

const FarmerBidsTable = () => {
  const [activeBtn, setActiveBtn] = useState<string>("New Bids");
  const tabs: { id: number; name: string }[] = [
    { id: 1, name: "New Bids" },
    { id: 2, name: "Accepted Bids" },
    { id: 2, name: "Declined Bids" },
  ];
  return (
    <section className="mt-10">
      <div>
        <div className="flex gap-x-5 justify-between items-center border-b border-[#E4E7EC]">
          {tabs.map((el, i) => (
            <button
              className={`${
                activeBtn === el.name
                  ? "text-[#2D865B] border-b-[2px] border-[#2D865B] text-sm"
                  : "text-[#7C7C7C] border-transparent "
              }   font-medium text-sm p-4 border-b-2 md:p-2`}
              onClick={() => setActiveBtn(el.name)}
              key={i}
            >
              {el.name}
            </button>
          ))}
        </div>
        <div className="mt-8">
          {activeBtn === "New Bids" && <AllBids />}
          {activeBtn === "Accepted Bids" && <AcceptedBids />}
          {activeBtn === "Declined Bids" && <DeclinedBids />}
        </div>
      </div>
    </section>
  );
};

export default FarmerBidsTable;
