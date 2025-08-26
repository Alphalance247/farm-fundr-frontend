import React from "react";
import SkeletonLoader from "@/components/ui/skeleton-loader";
import { FaCaretDown } from "react-icons/fa";

const RecentActivitySkeleton = () => {
  return (
    <div className="mt-6 px-[22px] py-8 border border-[#E4E7EC] bg-[white] rounded-xl">
      <div className="flex justify-between items-center mb-4">
        <div className="w-[120px]">
          <SkeletonLoader variant="text" className="h-6" />
        </div>
        <div className="relative flex items-center gap-x-4">
          <div className="flex items-center gap-x-2 p-2 bg-white border border-[#d9d9d9] rounded-xl w-fit">
            <div className="w-[60px]">
              <SkeletonLoader variant="text" className="h-5" />
            </div>
            <FaCaretDown size={20} color="#7C7C7C" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-y-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            className="flex items-start gap-x-2 bg-[#FCFCFC] p-4 rounded-xl"
            key={index}
          >
            <div className="w-[44px] h-[50px]">
              <SkeletonLoader className="h-full" />
            </div>

            <div className="text-[#5F5F5F] text-sm flex flex-col gap-y-1 w-full">
              <SkeletonLoader variant="text" className="h-5 w-3/4" />
              <SkeletonLoader variant="text" className="h-4 w-1/4" />
              <SkeletonLoader variant="text" className="h-4 w-1/3" />
            </div>
          </div>
        ))}
        <div className="w-[180px] h-[36px] mt-6 mx-auto">
          <SkeletonLoader className="h-full rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default RecentActivitySkeleton;