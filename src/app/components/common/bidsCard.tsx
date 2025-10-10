"use client";
import Image from "next/image";
import Button from "./Buttons";
import { FaLocationDot } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { getInvestorBidStatus } from "@/stores/investor-dashboard/overview/bids-by-status";
import { useState } from "react";
import ReleaseFunds from "./investor/releaseFunds";
import CancelBids from "./investor/cancelBids";

interface BidCardProps {
  name: string;
  location: string;
  amount: string;
  date: string;
  status: "Accepted" | "Pending" | "Declined";
  image: string;
}

export default function BidCard({
  name,
  location,
  amount,
  date,
  status,
  image,
}: BidCardProps) {
  const statusColors = {
    Accepted: "bg-[#E6FAEE] text-[#005423]",
    Pending: "bg-[#FFFAE6] text-[#695700]",
    Declined: "bg-[#FCECE6] text-[#DE4204]",
  };

  const { data: bidsStatusData } = getInvestorBidStatus();
  const [showReleaseFundsModal, setShowReleaseFundsModal] = useState(false);
  const [showCancelBidsModal, setShowCancelBidsModal] = useState(false);

  const acceptedId = bidsStatusData?.accepted?.find((bidId) => bidId?.id)?.id;
  const pendingId = bidsStatusData?.pending?.find((bidId) => bidId?.id)?.id;

  // const handleReleaseFunds = async () => {};

  return (
    <div>
      {showReleaseFundsModal && (
        <ReleaseFunds
          onCloseModal={() => setShowReleaseFundsModal(false)}
          acceptedId={acceptedId || ""}
        />
      )}
      {showCancelBidsModal && (
        <CancelBids
          onCloseModal={() => setShowCancelBidsModal(false)}
          pendingId={pendingId || ""}
        />
      )}
      <div className="bg-white md:hidden rounded-xl shadow-md p-4 flex flex-col gap-4">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <Image
              src={image}
              alt={name}
              width={50}
              height={50}
              className="rounded-lg"
            />
            <div className="">
              <h3 className="text-base  font-semibold">{name}</h3>
              <div className="flex items-center mt-1 gap-2">
                <div className=" bg-[#F2F2F2] text-[#2D865B] rounded-full p-2">
                  <FaLocationDot />
                </div>
                <p className="text-sm text-gray-500">{location}</p>
              </div>
            </div>
          </div>
          <span
            className={`px-3 py-1 text-sm rounded-full ${statusColors[status]}`}
          >
            {status}
          </span>
        </div>

        <div className="flex gap-2 mt-2 items-center">
          <p className="text-[#7C7C7C] lg:text-xs text-sm">
            Bid Amount:{" "}
            <span className="font-poppinsSemiBold text-[#5F5F5F] lg:text-xs text-sm">
              {amount}
            </span>
          </p>
          <GoDotFill className="text-[#5F5F5F]" />
          <p className="text-[#7C7C7C] text-sm">
            Date:{" "}
            <span className="font-poppinsSemiBold text-[#5F5F5F] text-sm">
              {date}
            </span>
          </p>
        </div>

        <div className="flex xl:flex-col flex-row gap-3">
          {status === "Accepted" && (
            <>
              <Button
                variant="primary"
                size="small"
                className="flex-1"
                onClick={() => setShowReleaseFundsModal(true)}
              >
                Release Funds
              </Button>
              <Button variant="secondary" size="small" className="flex-1">
                View Details
              </Button>
            </>
          )}

          {status === "Declined" && (
            <>
              <Button variant="secondary" size="small" className="flex-1">
                View Details
              </Button>
            </>
          )}

          {status === "Pending" && (
            <>
              <Button variant="primary" size="small" className="flex-1">
                View Details
              </Button>
              <Button
                className="flex-1"
                size="small"
                variant="secondary"
                onClick={() => setShowCancelBidsModal(true)}
              >
                Cancel Bid
              </Button>
            </>
          )}
        </div>
      </div>
      <div className="bg-white hidden rounded-xl shadow-md p-4 md:flex gap-2 flex-col">
        <div className="flex justify-between items-start">
          <div className="">
            <Image
              src={image}
              alt={name}
              width={50}
              height={50}
              className="rounded-lg"
            />
          </div>
          <div
            className={`px-3 py-1 text-sm rounded-full ${statusColors[status]}`}
          >
            {status}
          </div>
        </div>
        <div className="">
          <h3 className="text-base  font-semibold">{name}</h3>
          <div className="flex items-center mt-1 gap-2">
            <div className=" bg-[#F2F2F2] text-[#2D865B] rounded-full p-2">
              <FaLocationDot />
            </div>
            <p className="text-sm text-gray-500">{location}</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-2 items-start">
          <p className="text-[#7C7C7C] text-sm">
            Bid Amount:{" "}
            <span className="font-poppinsSemiBold text-[#5F5F5F] text-sm">
              {amount}
            </span>
          </p>
          <p className="text-[#7C7C7C] text-sm">
            Date:{" "}
            <span className="font-poppinsSemiBold text-[#5F5F5F] text-sm">
              {date}
            </span>
          </p>
        </div>

        <div className="flex xl:flex-col flex-row gap-3">
          {status === "Accepted" && (
            <>
              <Button
                variant="primary"
                size="small"
                className="flex-1"
                onClick={() => setShowReleaseFundsModal(true)}
              >
                Release Funds
              </Button>
              <Button variant="secondary" size="small" className="flex-1">
                View Details
              </Button>
            </>
          )}

          {status === "Declined" && (
            <>
              <Button variant="secondary" size="small" className="flex-1">
                View Details
              </Button>
            </>
          )}

          {status === "Pending" && (
            <>
              <Button variant="primary" size="small" className="flex-1">
                View Details
              </Button>
              <Button
                className="flex-1"
                size="small"
                variant="secondary"
                onClick={() => setShowCancelBidsModal(true)}
              >
                Cancel Bid
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
