import React from "react";
import SkeletonLoader from "@/components/ui/skeleton-loader";
import { PiDotsThree } from "react-icons/pi";

const FarmingSummarySkeleton = () => {
  return (
    <div className="mt-6 px-[22px] py-8 border border-[#E4E7EC] bg-[white] rounded-xl">
      <div className="flex justify-between items-center mb-4">
        <div className="w-[120px]">
          <SkeletonLoader variant="text" className="h-6" />
        </div>
        <div className="relative flex items-center gap-x-4">
          <div className="p-2 bg-white border border-[#d9d9d9] rounded-xl w-fit">
            <PiDotsThree size={20} color="#7C7C7C" />
          </div>
        </div>
      </div>

      <div className="bg-[#F6F6F6] px-6 py-4 flex gap-x-4 items-center rounded-xl lg:items-start">
        <div className="w-[103px] h-[117px]">
          <SkeletonLoader className="h-full" />
        </div>

        <div className="w-full">
          <SkeletonLoader variant="text" className="h-5 w-[100px] mb-2" />
          <SkeletonLoader variant="text" className="h-8 w-[60px] mb-4" />

          <div className="flex gap-x-3 items-center mt-4 lg:flex-col lg:gap-y-6">
            <SkeletonLoader variant="text" className="h-6 w-[80px]" />
            <SkeletonLoader variant="text" className="h-6 w-[80px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmingSummarySkeleton;