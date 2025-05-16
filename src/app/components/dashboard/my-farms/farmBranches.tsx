import { useState } from "react";
import TransactionSearch, {
  type SortOption,
  type FilterOption,
} from "../../dashboard/wallet/transactionSearch";
import BranchFarmCard from "./branchCard";
import Link from "next/link";

const FarmBranches = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("firstName");
  const [filterBy, setFilterBy] = useState<FilterOption>("all");

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
          <Link href="/farmer-dashboard/my-farms/farm-branches">
            <button className="px-3 py-2 w-fit border border-[#F2F2F3] bg-[#FFFFFF] text-[#2D865B] text-xs font-poppinsSemiBold rounded-lg">
              View all
            </button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-x-10 gap-y-10">
        <BranchFarmCard
          branchName="Ibadan Branch"
          farmName="Farmfundr Farm"
          address="87, Ringroad, Ibadan, Nigeria."
          projectsCount={"Projects- 7"}
          openingHours="Open 9am- Close 6pm"
          status="Active"
          imageUrl="/assets/my-farms/2.png"
          onViewProjects={() => {
            /* handle click */
          }}
          href="/farmer-dashboard/my-farms/projects/Ibadan Branch"
        />
        <BranchFarmCard
          branchName="Ibadan Branch"
          farmName="Farmfundr Farm"
          address="87, Ringroad, Ibadan, Nigeria."
          projectsCount={"Projects- 7"}
          openingHours="Open 9am- Close 6pm"
          status="Active"
          imageUrl="/assets/my-farms/2.png"
          onViewProjects={() => {
            /* handle click */
          }}
          href="/"
        />
        <BranchFarmCard
          href="/farmer-dashboard/my-farms/projects/Ibadan Branch"
          branchName="Ibadan Branch"
          farmName="Farmfundr Farm"
          address="87, Ringroad, Ibadan, Nigeria."
          projectsCount={"Projects- 7"}
          openingHours="Open 9am- Close 6pm"
          status="Active"
          imageUrl="/assets/my-farms/2.png"
          onViewProjects={() => {
            /* handle click */
          }}
        />
      </div>
    </div>
  );
};

export default FarmBranches;
