import React from "react";
import Image from "next/image";
import { MdCardTravel } from "react-icons/md";
import Button from "../common/Buttons";
import Link from "next/link";

interface StoreFontCardProps {
  status: "Active" | "Inactive";
  imageUrl: string;
  onViewProjects?: () => void;
  href: string;
  onViewBid?: () => void;
}

const StoreFontCard: React.FC<StoreFontCardProps> = ({
  status,
  imageUrl,
  onViewProjects,
  onViewBid,
}) => {
  return (
    <div className="bg-white rounded-xl w-full shadow-lg">
      <div className="relative">
        <Image
          src={imageUrl}
          alt="image"
          className="w-full h-36 object-cover rounded-tr-lg rounded-tl-lg"
          width={335}
          height={142}
        />
        <div
          className={`absolute bottom-4 right-4 px-3 py-1 flex items-center gap-x-1 border border-[#B0EECA] rounded-[8px] text-xs font-semibold bg-white text-[#00C853]`}
        >
          <Image
            src="/assets/my-farms/7.svg"
            alt="status"
            width={16}
            height={16}
          />
          <span>{status || "Active"}</span>
        </div>
        <button className="absolute top-3 right-3 bg-[#F6F6F6] rounded-xl w-11 h-9 p-1 shadow">
          <span className="text-xl text-[#7C7C7C]">⋯</span>
        </button>
      </div>
      <div className="px-3 py-4">
        <div className="flex items-start gap-x-5 mb-2">
          <Image
            src="/assets/LandingPage/card/logo.svg"
            width={32}
            height={32}
            alt="logo"
          />
          <div className="">
            <p className="text-2xl font-aristoBold font-semibold text-[#5F5F5F] mb-1">
              Organic Apple Harvest
            </p>
            <p className="text-xs font-poppinsRegular text-[#7C7C7C]">
              Farm name: Farmpady farm
            </p>
          </div>
        </div>
        <p className="text-sm font-poppinsRegular text-[#7C7C7C] mb-4">
          Invest in sustainable apple farming.
        </p>
        <div className="py-4 border-t border-b border-[#F2F2F2] flex justify-between">
          <div className="flex items-center gap-x-2">
            <Image
              src="/assets/LandingPage/card/analytics.svg"
              width={24}
              height={24}
              alt="open"
            />
            <p className="text-sm text-[#7C7C7C]">
              <span className="font-poppinsRegular">ROI:</span>{" "}
              <span className=" font-poppinsSemiBold font-semibold">
                15% Annually
              </span>
            </p>
          </div>

          <div className="flex items-center gap-x-2">
            <Image
              src="/assets/LandingPage/card/location.svg"
              width={24}
              height={24}
              alt="open"
            />
            <p className="text-sm text-[#7C7C7C] font-poppinsRegular">
              Lagos, Nigeria.
            </p>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between mb-6">
          <div>
            <p className="text-sm text-[#7C7C7C]">
              <span className="font-poppinsRegular">ROI:</span>{" "}
              <span className=" font-poppinsSemiBold font-semibold text-[#5F5F5F]">
                15% Annually
              </span>
            </p>
          </div>

          <div className="">
            <p className="text-sm text-[#7C7C7C] flex items-center">
              <span className="font-poppinsRegular">Farm Rating:</span>{" "}
              <span className=" font-poppinsSemiBold font-semibold text-[#5F5F5F] ml-1 mr-1">
                4.5{" "}
              </span>
              <Image
                src="/assets/LandingPage/card/star.svg"
                width={15}
                height={15}
                alt="star"
              />
            </p>
          </div>
        </div>

        <div className="flex items-center gap-x-3">
          <div className="block w-full">
            <Button
              variant="primary"
              size="small"
              className="w-full flex items-center justify-center gap-x-2"
              onClick={onViewBid}
            >
              <MdCardTravel color="white" size={24} />
              Bid Now
            </Button>
          </div>
          <Link href={"/store-front/1"} className="block w-full">
            <Button
              className="w-full"
              variant="secondary"
              size="small"
              onClick={onViewProjects}
            >
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StoreFontCard;
