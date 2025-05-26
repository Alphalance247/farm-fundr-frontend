"use client";
import { useState, useMemo } from "react";
import EmployeeSearch, {
  type SortOption,
  type FilterOption,
} from "../../dashboard/wallet/transactionSearch";
import TransactionSearch from "./transactionSearch";
import { PiDotsThreeVertical } from "react-icons/pi";
import { IoMdTime } from "react-icons/io";
import { IoArrowDown } from "react-icons/io5";
import { IoArrowUp } from "react-icons/io5";

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
  typeIcons: React.ReactNode;
}

const TEAM_COLORS: Record<
  string,
  { backgroundColor: string; textColor: string }
> = {
  "Design & Development": { backgroundColor: "#E7E9EA", textColor: "#0C1720" },
  Advocate: { backgroundColor: "#DFF4F2", textColor: "#0C1720" },
  Cloud: { backgroundColor: "#F6D5B6", textColor: "#5F3309" },
  Legal: { backgroundColor: "#E9FAFF", textColor: "#0ECDFF" },
  Domestic: { backgroundColor: "#E7E9EA", textColor: "#0C1720" },
  ITSM: { backgroundColor: "#E7E9EA", textColor: "#0C1720" },
  "Product Office": { backgroundColor: "#E7E9EA", textColor: "#0C1720" },
  "Artificial Intelligence": {
    backgroundColor: "#E7E9EA",
    textColor: "#0C1720",
  },
  "Quality Assurance": { backgroundColor: "#E7E9EA", textColor: "#0C1720" },
  DEVOPS: { backgroundColor: "#E7E9EA", textColor: "#0C1720" },
};

const DUMMY_EMPLOYEES: Employee[] = Array.from({ length: 5 }).map((_, idx) => ({
  id: idx + 1,
  transactionId: [
    "TRD-20240226",
    "TRD-20240226",
    "TRD-20240226",
    "TRD-20240226",
    "TRD-20240226",
  ][idx],
  name: [
    "Payout Request",
    "Project Funded",
    "Payout Processed",
    "Project Funded",
    "Payout Processed",
  ][idx],
  description: [
    "Request submitted for Milestone 2 payment",
    "Milestone 2 funding received from Investor",
    "Payment sent to your bank account",
    "Milestone 2 funding received from Investor",
    "Payment sent to your bank account",
  ][idx],
  amount: [
    "+ N120,000",
    "+ N120,000",
    "+ N120,000",
    "+ N120,000",
    "+ N120,000",
  ][idx],
  date: "Jan 21, 2025",

  status: ["Pending", "Pending", "Pending", "Pending", "Pending"][idx],
  action: ["View", "View", "View", "View", "View"][idx],
  // Add the missing properties required by the Employee interface
  deductions: 0,
  miscAmount: 0,
  typeIcons: [
    <IoMdTime size={20} color="#DEA304" key={idx} />,
    <IoArrowUp size={20} color="#00C853" key={idx} />,
    <IoArrowDown size={20} color="#4379FF" key={idx} />,
    <IoArrowUp size={20} color="#00C853" key={idx} />,
    <IoArrowDown size={20} color="#DEA304" key={idx} />,
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
    "bg-[#4379FF]",
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

export default function TransactionSearchTable() {
  const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(1);

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
    <section className="bg-white rounded-lg border border-[#E3E3E5]">
      <TransactionSearch
        withHeading={true}
        searchQuery={searchQuery}
        sortBy={sortBy}
        filterBy={filterBy}
        onSearchChange={setSearchQuery}
        onSortChange={setSortBy}
        onFilterChange={setFilterBy}
      />

      <div className="overflow-x-auto">
        <table className="w-full min-w-full">
          <thead className="bg-[#FAFEFF]">
            <tr>
              <th className="py-3 px-4 w-[10px] text-left">
                <input type="checkbox" className="rounded border-gray-300" />
              </th>
              <th className="py-3 px-4 text-sm text-[#0B222A] font-poppinsSemiBold w-[150px] text-left">
                Transaction Id
              </th>
              <th className="py-3 px-4 text-sm  text-[#0B222A] font-poppinsSemiBold text-left w-[150px]">
                Type
              </th>
              <th className="py-3 px-4 text-sm  text-[#0B222A] font-poppinsSemiBold text-left w-[200px]">
                Description
              </th>
              <th className="py-3 px-4 text-sm  text-[#0B222A] font-poppinsSemiBold text-left w-[100px]">
                Amount
              </th>
              <th className="py-3 px-4 text-sm  text-[#0B222A] font-poppinsSemiBold text-left w-[100px]">
                Date
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
                  <span className="text-[#1B2229] text-sm font-poppinsRegular">
                    {emp.transactionId}
                  </span>
                </td>
                <td
                  className={`py-3 px-4 text-sm font-poppinsRegular ${emp?.nameColor}`}
                >
                  <span className="flex items-center gap-2">
                    {emp?.name}
                    {emp?.typeIcons}
                  </span>
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
                <td className="py-3 px-4 text-[#34474E] text-sm font-poppinsRegular">
                  {emp?.date}
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

      {/* <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2 text-sm text-[#2F2F33]">
          <span>Show</span>
          <select
            value={perPage}
            onChange={(e) => setPerPage(Number(e.target.value))}
            className="border border-[#E3E3E5] rounded px-2 py-1"
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
          <span>per page</span>
        </div>

        <div className="flex items-center gap-4 text-sm">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="text-[#2F2F33]"
            disabled={page === 1}
          >
            Previous
          </button>
          <span className="text-[#2F2F33]">Page {page} of 2</span>
          <button
            onClick={() => setPage((p) => p + 1)}
            className="text-[#2F2F33]"
            disabled={page === 2}
          >
            Next
          </button>
        </div>
      </div> */}
    </section>
  );
}
