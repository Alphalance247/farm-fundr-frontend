import { useState } from "react";
import TransactionSearch, {
  type SortOption,
  type FilterOption,
} from "../../dashboard/wallet/transactionSearch";
import BranchFarmCard from "./branchCard";
import Link from "next/link";
import { getFarmDetails } from "@/stores/farms/getFarmDetails";
import Button from "../../common/Buttons";

const FarmBranches = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("firstName");
  const [filterBy, setFilterBy] = useState<FilterOption>("all");

  const { data: farmDetails } = getFarmDetails();
  const farmBranchData = farmDetails?.data?.branches;

  return (
    <div>
      <div className="flex justify-between items-center my-6">
        <TransactionSearch
          searchQuery={searchQuery}
          sortBy={sortBy}
          filterBy={filterBy}
          onSearchChange={setSearchQuery}
          onSortChange={setSortBy}
          onFilterChange={setFilterBy}
          withHeading={false}
        />

        <div>
          <Link
            href={`/farmer-dashboard/my-farms/${farmDetails?.data?.farm?.id}/farm-branches`}
          >
            <button className="px-3 py-2 w-fit border border-[#F2F2F3] bg-[#FFFFFF] text-[#2D865B] text-xs font-poppinsSemiBold rounded-lg">
              View all
            </button>
          </Link>
        </div>
      </div>

      {farmBranchData?.length === 0 ? (
        <div className="flex flex-col pt-20 items-center h-screen">
          <p className="text-center pb-4 text-gray-500">
            No branch created yet please create branch
          </p>
          <Link href={"/farmer-dashboard/my-farms/add-farm-branch"}>
            <Button type="button" className="mt-4">
              Create Your Farm Branch
            </Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-x-10 gap-y-10">
          {farmBranchData?.map((data) => (
            <BranchFarmCard
              branchName={data?.name || "N/A"}
              farmName={data?.farm_name || "N/A"}
              address={data?.street || "N/A"}
              projectsCount={`projects - ${data?.projects.length || "0"}`}
              openingHours={`Open ${data?.open_time || "N/A"} Close ${
                data?.close_time || "N/A"
              }`}
              id={data?.id}
              status={data?.status}
              imageUrl={
                `https://padycvgcoops.name.ng/${data?.branch_images[0]?.image}` ||
                "/assets/my-farms/2.png"
              }
              href={`/farmer-dashboard/my-farms/${farmDetails?.data?.farm?.id}/farm-branches/${data?.id}`}
              key={data?.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FarmBranches;
