"use client";
import { Search } from "lucide-react";
import Button from "../../common/Buttons";
import Link from "next/link";

type SortOption = "firstName" | "lastName" | "team";
type FilterOption = "all" | "active" | "inactive";

interface TransactionSearchProps {
  searchQuery: string;
  sortBy: SortOption;
  filterBy: FilterOption;
  onSearchChange: (value: string) => void;
  onSortChange: (value: SortOption) => void;
  onFilterChange: (value: FilterOption) => void;
  withHeading?: boolean;
  headingText?: string;
  buttonText?: string; // new
  buttonLink?: string; // new
}

export default function TransactionSearch({
  searchQuery,
  sortBy,
  filterBy,
  onSearchChange,
  onSortChange,
  onFilterChange,
  withHeading = true,
  headingText = "All Farms",
  buttonText,
  buttonLink,
}: TransactionSearchProps) {
  return (
    <div className="w-full block lg:hidden p-4 mb-6 overflow-x-auto">
      <div className="flex items-center justify-between gap-4">
        {withHeading && (
          <h4 className="text-base font-semibold text-[#2F2F33] whitespace-nowrap">
            {headingText}
          </h4>
        )}
        <div className="flex items-center gap-3 ">
          <p className="text-sm font-semibold text-[#5F5F5F] whitespace-nowrap">
            Filter By
          </p>
          <div className="relative flex items-center">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#71717A] w-4 h-4" />
            <input
              type="text"
              placeholder="Search by transaction id,"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-[260px] pl-9 pr-4 py-2 border border-[#E3E3E5] rounded-lg text-sm 
                focus:outline-none focus:ring-1 focus:ring-[#2D865B] focus:border-[#2D865B]"
            />
          </div>
          <select
            value={filterBy}
            onChange={(e) => onFilterChange(e.target.value as FilterOption)}
            className="border border-[#E3E3E5] rounded-lg px-4 py-2 text-sm font-medium 
              text-[#2F2F33] focus:outline-none focus:ring-1 focus:ring-[#2D865B] focus:border-[#2D865B] min-w-[100px]"
          >
            <option value="all">All</option>
            <option value="active">Pending</option>
            <option value="inactive">Completed</option>
          </select>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value as SortOption)}
            className="border border-[#E3E3E5] rounded-lg px-4 py-2 text-sm font-medium 
              text-[#2F2F33] focus:outline-none focus:ring-1 focus:ring-[#2D865B] focus:border-[#2D865B] min-w-[120px]"
          >
            <option value="firstName">Modified</option>
            <option value="lastName">Amount</option>
            <option value="team">Status</option>
          </select>
          {buttonText &&
            (buttonLink ? (
              <Link href={buttonLink}>
                <Button variant="switch">{buttonText}</Button>
              </Link>
            ) : (
              <Button variant="switch">{buttonText}</Button>
            ))}
        </div>
      </div>
    </div>
  );
}

export type { SortOption, FilterOption };
