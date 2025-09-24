"use client";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import Button from "../../common/Buttons";

interface FilterState {
  status: string;
  modified: string;
  amount: string;
}

interface DropdownProps {
  value: string;
  onChange: (val: string) => void;
  options: { label: string; value: string }[];
}

const CustomDropdown = ({ value, onChange, options }: DropdownProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between border rounded-md px-3 py-2 text-sm text-gray-700 bg-white"
      >
        {options.find((opt) => opt.value === value)?.label || "Select"}
        <FaChevronDown
          className={`ml-2 transition-transform ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {open && (
        <div className="absolute mt-1 w-full bg-white border rounded-md shadow-md z-10">
          {options.map((opt) => (
            <div
              key={opt.value}
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
              className={`px-3 py-2 text-sm cursor-pointer hover:bg-gray-100 ${
                opt.value === value ? "bg-gray-50 font-medium" : ""
              }`}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const TransactionFilterMobile = ({
  tableHeading,
  showViewAll = true,
}: {
  tableHeading?: string;
  showViewAll?: boolean;
}) => {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    status: "all",
    modified: "date",
    amount: "all",
  });

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="lg:block hidden p-4 w-full mb-6">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-gray-700 font-semibold">{tableHeading}</h3>

        {showViewAll && (
          <Button
            variant="switch"
            className="rounded-md border border-[#2D865B] text-base text-[#2D865B] px-3 py-2 bg-[#EEFEF6] hover:bg-[#C9FCE3] hover:transition-all hover:duration-500"
          >
            View All
          </Button>
        )}
      </div>
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <FiSearch className="absolute left-3 top-3 text-gray-400" size={16} />
          <input
            type="text"
            placeholder="Search by transaction id"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-2 border rounded-xl text-sm placeholder:text-gray-400 text-gray-700 focus:ring-2 focus:ring-green-500 outline-none"
          />
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center justify-between px-4 py-2 border rounded-xl text-gray-700"
        >
          Filter
          <FaChevronDown
            className={`ml-2 text-green-500 transition-transform ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>
      {open && (
        <div className="mt-3 border rounded-lg shadow-md bg-white p-4 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Status
            </label>
            <CustomDropdown
              value={filters.status}
              onChange={(val) => handleFilterChange("status", val)}
              options={[
                { label: "All", value: "all" },
                { label: "Pending", value: "pending" },
                { label: "Completed", value: "completed" },
              ]}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Modified
            </label>
            <CustomDropdown
              value={filters.modified}
              onChange={(val) => handleFilterChange("modified", val)}
              options={[
                { label: "Date", value: "date" },
                { label: "Amount", value: "amount" },
                { label: "Status", value: "status" },
              ]}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Amount
            </label>
            <CustomDropdown
              value={filters.amount}
              onChange={(val) => handleFilterChange("amount", val)}
              options={[
                { label: "All", value: "all" },
                { label: "Pending", value: "pending" },
                { label: "Completed", value: "completed" },
              ]}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TransactionFilterMobile;
