import React from "react";
import SkeletonLoader from "@/components/ui/skeleton-loader";
import { FaCaretDown } from "react-icons/fa";
import { PiDotsThree } from "react-icons/pi";

const InvestmentOverviewSkeleton = () => {
  return (
    <div className="mt-6 px-[22px] py-8 border border-[#E4E7EC] bg-[white] rounded-xl">
      <div className="flex justify-between items-center mb-4">
        <div className="w-[180px]">
          <SkeletonLoader variant="text" className="h-6" />
        </div>
        <div className="relative flex items-center gap-x-4">
          <div className="flex items-center gap-x-2 p-2 bg-white border border-[#d9d9d9] rounded-xl w-fit">
            <div className="w-[60px]">
              <SkeletonLoader variant="text" className="h-5" />
            </div>
            <FaCaretDown size={20} color="#7C7C7C" />
          </div>

          <div className="p-2 bg-white border border-[#d9d9d9] rounded-xl w-fit">
            <PiDotsThree size={20} color="#7C7C7C" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-4 xl:grid-cols-1">
        {Array.from({ length: 2 }).map((_, index) => (
          <div key={index} className={`p-4 bg-gray-50 rounded-xl`}>
            <SkeletonLoader variant="text" className="h-4 w-3/4 mb-2" />
            <div className="flex items-center gap-x-2">
              <div className="w-[24px] h-[24px]">
                <SkeletonLoader className="h-full rounded-full" />
              </div>
              <SkeletonLoader variant="text" className="h-5 w-[40px]" />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <SkeletonLoader variant="text" className="h-5 w-[120px] mb-2" />
        <div className="h-[200px] w-full">
          <SkeletonLoader className="h-full rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default InvestmentOverviewSkeleton;