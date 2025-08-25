"use client";
import { Search } from "lucide-react";

type SortOption = "firstName" | "lastName" | "team";
type FilterOption = "all" | "active" | "inactive";

interface TransactionSearchProps {
  searchQuery: string;
  sortBy: SortOption;
  filterBy: FilterOption;
  onSearchChange: (value: string) => void;
  onSortChange: (value: SortOption) => void;
  onFilterChange: (value: FilterOption) => void;
  withHeading?: boolean; // optional
  headingText?: string; // optional custom title
}

export default function TransactionSearch({
  searchQuery,
  sortBy,
  filterBy,
  onSearchChange,
  onSortChange,
  onFilterChange,
  withHeading = true, 
}: TransactionSearchProps) {
  return (
    <div className="mb-6 px-4 py-6 overflow-x-auto">
      <div className="flex items-center justify-between xl:flex-col xl:items-start xl:gap-y-6">
        {withHeading && (
          <h4 className="text-sm font-poppinsSemiBold text-[#5F5F5F]">
            All Farms
          </h4>
        )}

        <div
          className="grid gap-4 items-center 
             lg:grid-cols-1 grid-cols-3 lg:items-start"
        >
          {/* Search Section */}
          <div
            className="grid gap-2 items-center 
                  lg:grid-cols-1 grid-cols-2"
          >
            <p className="text-sm font-poppinsRegular text-[#71717A]">
              Filter By
            </p>
            <div className="relative w-full lg:w-[600px]  md:w-[250px] flex items-center gap-2">
              <input
                type="text"
                placeholder="Search by farm name"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-[#E3E3E5] rounded-lg text-sm 
                   focus:outline-none focus:ring-1 focus:ring-[#E37915] focus:border-[#E37915]"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#71717A] w-4 h-4" />
            </div>
          </div>

          {/* Filter Dropdown */}
          <div className="grid grid-cols-[auto,1fr] gap-2 items-center">
            <span className="text-sm font-medium text-[#71717A]">All</span>
            <select
              value={filterBy}
              onChange={(e) => onFilterChange(e.target.value as FilterOption)}
              className="border border-[#E3E3E5] rounded-lg px-4 py-2 text-base font-medium 
                 text-[#2F2F33] focus:outline-none focus:ring-1 focus:ring-[#E37915] focus:border-[#E37915] min-w-[140px]"
            >
              <option value="all">All</option>
              <option value="active">Pending</option>
              <option value="inactive">Completed</option>
            </select>
          </div>

          {/* Sort Dropdown */}
          <div className="grid grid-cols-[auto,1fr] gap-2 items-center">
            <span className="text-sm font-medium text-[#71717A]">Modified</span>
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value as SortOption)}
              className="border border-[#E3E3E5] rounded-lg px-4 py-2 text-base font-medium 
                 text-[#2F2F33] focus:outline-none focus:ring-1 focus:ring-[#E37915] focus:border-[#E37915] min-w-[140px]"
            >
              <option value="firstName">Date</option>
              <option value="lastName">Amount</option>
              <option value="team">Status</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export type { SortOption, FilterOption };
