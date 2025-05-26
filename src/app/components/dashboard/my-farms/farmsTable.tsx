"use client";
import { useState, useMemo } from "react";
import TransactionSearch, {
  type SortOption,
  type FilterOption,
} from "../../dashboard/wallet/transactionSearch";
import { PiDotsThreeVertical } from "react-icons/pi";
import Image from "next/image";

interface Employee {
  id: number;
  name: string;
  transactionId: string;
  description: string;
  amount: string;
  date: string;
  status: string;
  deductions: number;
  miscAmount: number;
  bg: string;
  nameColor: string;
  descriptionIconColor: string;
  amountColor: string;
  statusColor: string;
  typeIcons: string;
}

const DUMMY_EMPLOYEES: Employee[] = Array.from({ length: 6 }).map((_, idx) => ({
  id: idx + 1,
  transactionId: [
    "Green Valley Farm",
    "Apple Green House",
    "Green Valley Farm",
    "Apple Green House",
    "Green Valley Farm",
    "Apple Green House",
  ][idx],
  name: [
    "Ibadan, Nigeria",
    "Lagos, Nigeria",
    "Abuja, Nigeria",
    "Kano, Nigeria",
    "Abuja, Nigeria",
    "Kano, Nigeria",
  ][idx],
  description: [
    "CAC-12345",
    "CAC-12345",
    "CAC-12345",
    "CAC-12345",
    "CAC-12345",
    "CAC-12345",
  ][idx],
  amount: ["34", "10", "6", "2", "8", "18"][idx],
  date: "Jan 21, 2025",

  status: ["Active", "Pending", "Active", "Pending", "Inactive", "Pending"][
    idx
  ],
  action: ["View", "View", "View", "View", "View"][idx],
  // Add the missing properties required by the Employee interface
  deductions: 0,
  miscAmount: 0,
  typeIcons: [
    "/assets/my-farms/farmpic.svg",
    "/assets/my-farms/farmpic.svg",
    "/assets/my-farms/farmpic.svg",
    "/assets/my-farms/farmpic.svg",
    "/assets/my-farms/farmpic.svg",
    "/assets/my-farms/farmpic.svg",
  ][idx],
  bg: [
    "bg-[#EEFEF6]",
    "bg-[white]",
    "bg-[#EEFEF6]",
    "bg-[white]",
    "bg-[#EEFEF6]",
  ][idx],
  nameColor: [
    "text-[#1B2229]",
    "text-[#34474E]",
    "text-[#1B2229]",
    "text-[#34474E]",
    "text-[#1B2229]",
  ][idx],
  statusColor: [
    "bg-[#DEA304]",
    "bg-[#00C853]",
    "bg-[#4379FF]",
    "bg-[#00C853]",
    "bg-[#FE0503]",
    "bg-[#00C853]",
  ][idx],

  descriptionIconColor: [
    "text-[#34474E]",
    "text-[#1B2229]",
    "text-[#34474E]",
    "text-[#1B2229]",
    "text-[#34474E]",
  ][idx],
  amountColor: [
    "text-[#DEA304]",
    "text-[#00C853]",
    "text-[#4379FF]",
    "text-[#00C853]",
    "text-[#4379FF]",
  ][idx],
}));

export default function FarmListTable() {
  // Search and filter state
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("firstName");
  const [filterBy, setFilterBy] = useState<FilterOption>("all");

  // Filtered and sorted employees
  const filteredEmployees = useMemo(() => {
    return DUMMY_EMPLOYEES.filter((emp) => {
      const searchLower = searchQuery.toLowerCase();
      //   const matchesSearch =
      // emp.name.toLowerCase().includes(searchLower) ||
      // emp.transactionId.toLowerCase().includes(searchLower);

      //   if (filterBy === "all") return matchesSearch;
      // Add more filter conditions as needed

      return searchLower;
    }).sort((a, b) => {
      switch (sortBy) {
        case "firstName":
          return a.name.split(" ")[0].localeCompare(b.name.split(" ")[0]);
        case "lastName":
          return a.name
            .split(" ")
            .slice(-1)[0]
            .localeCompare(b.name.split(" ").slice(-1)[0]);
        case "team":
          return a.transactionId.localeCompare(b.transactionId);
        default:
          return 0;
      }
    });
  }, [DUMMY_EMPLOYEES, searchQuery, sortBy, filterBy]);

  return (
    <section className="">
      <TransactionSearch
        searchQuery={searchQuery}
        sortBy={sortBy}
        filterBy={filterBy}
        onSearchChange={setSearchQuery}
        onSortChange={setSortBy}
        onFilterChange={setFilterBy}
        withHeading={true}
      />

      <div className="overflow-x-auto">
        <table className="w-full min-w-full">
          <thead className="bg-[#FAFEFF]">
            <tr>
              <th className="py-3 px-4 w-[10px] text-left">
                <input type="checkbox" className="rounded border-gray-300" />
              </th>
              <th className="py-3 px-4 text-sm text-[#0B222A] font-poppinsSemiBold w-[200px] text-left">
                Farm Name
              </th>
              <th className="py-3 px-4 text-sm  text-[#0B222A] font-poppinsSemiBold text-left w-[150px]">
                Location
              </th>
              <th className="py-3 px-4 text-sm  text-[#0B222A] font-poppinsSemiBold text-left w-[150px]">
                CAC Reg No
              </th>
              <th className="py-3 px-4 text-sm  text-[#0B222A] font-poppinsSemiBold text-left w-[100px]">
                Branches
              </th>
              <th className="py-3 px-4 text-sm  text-[#0B222A] font-poppinsSemiBold text-left w-[50px]">
                Status
              </th>
              <th className="py-3 px-4 text-sm  text-[#0B222A] font-poppinsSemiBold text-left w-[50px]">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {DUMMY_EMPLOYEES.map((emp) => (
              <tr key={emp.id} className={`${emp?.bg}`}>
                <td className="py-3 px-4">
                  <input type="checkbox" className="rounded" />
                </td>
                <td className="py-3 px-4">
                  <span className="text-[#1B2229] text-sm font-poppinsRegular flex items-center gap-2">
                    <Image
                      src={emp.typeIcons || "/assets/my-farms/farmpic.svg"}
                      alt={emp.name}
                      width={40}
                      height={40}
                    />
                    {emp.transactionId}
                  </span>
                </td>
                <td
                  className={`py-3 px-4 text-sm font-poppinsRegular ${emp?.nameColor}`}
                >
                  <span className="flex items-center gap-2">{emp?.name}</span>
                </td>
                <td
                  className={`py-3 px-4 text-sm font-poppinsRegular ${emp?.nameColor}`}
                >
                  {emp.description}
                </td>
                <td
                  className={`py-3 px-4 font-poppinsSemiBold text-sm ${emp?.amountColor}`}
                >
                  {emp.amount}
                </td>

                <td className="py-3 px-4 text-sm text-[#2F2F33]">
                  <span
                    className={`py-2 px-5 ${emp?.statusColor} text-white rounded-xl font-poppinsRegular tracking-[-2%]`}
                  >
                    {emp?.status}
                  </span>
                </td>

                <td className="py-3 px-4">
                  <div className="w-8 h-8 bg-white p-2 rounded-lg border-[#E4E7EC] border cursor-pointer">
                    <PiDotsThreeVertical color="#001F3F" size={16} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
