"use client";
import { useState } from "react";
import {
  type SortOption,
  type FilterOption,
} from "../../dashboard/wallet/transactionSearch";
import TransactionSearch from "./transactionSearch";
import { PiDotsThreeVertical } from "react-icons/pi";
import { IoMdTime } from "react-icons/io";
import { IoArrowDown } from "react-icons/io5";
import { IoArrowUp } from "react-icons/io5";
import { getWalletTransactionStore } from "@/stores/wallet/getWalletTransactions";
import TransactionFilterMobile from "./mobileTransactionSearch";

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

console.log(DUMMY_EMPLOYEES);

export default function TransactionSearchTable() {
  const { data: transactionData } = getWalletTransactionStore();

  // Search and filter state
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("firstName");
  const [filterBy, setFilterBy] = useState<FilterOption>("all");

  return (
    <section className="bg-white rounded-lg border border-[#E3E3E5]">
      <div className="block lg:hidden">
        <TransactionSearch
          searchQuery={searchQuery}
          sortBy={sortBy}
          filterBy={filterBy}
          onSearchChange={setSearchQuery}
          onSortChange={setSortBy}
          onFilterChange={setFilterBy}
          withHeading={true}
        />
      </div>
      <div className="hidden lg:block">
        <TransactionFilterMobile />
      </div>

      {transactionData?.transactions?.length === 0 ? (
        <div className="flex pt-10 items-center justify-center h-fit">
          <p className="text-center pb-8 text-gray-500">
            No Transactions found yet
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1000px] md:w-[800px]">
            <thead className="bg-[#FAFEFF]">
              <tr>
                <th className="py-3 px-4 w-[10px] text-left">
                  <input type="checkbox" className="rounded border-gray-300" />
                </th>
                <th className="py-3 px-4 text-sm text-[#0B222A] font-poppinsSemiBold w-[250px] text-left">
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
              {transactionData?.transactions?.map((emp) => (
                <tr key={emp.id} className={`bg-[#EEFEF6]`}>
                  <td className="py-3 px-4">
                    <input type="checkbox" className="rounded" />
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-[#1B2229] text-sm font-poppinsRegular">
                      {emp?.id}
                    </span>
                  </td>
                  <td
                    className={`py-3 px-4 text-sm font-poppinsRegular text-[#1B2229]`} //${emp?.nameColor}
                  >
                    <span className="flex items-center gap-2">
                      {emp?.type}
                      {/* {emp?.typeIcons} */}
                    </span>
                  </td>
                  <td
                    className={`py-3 px-4 text-sm font-poppinsRegular text-[#1B2229]`} //${emp?.nameColor}
                  >
                    {emp.description}
                  </td>
                  <td
                    className={`py-3 px-4 font-poppinsSemiBold text-sm  text-[#DEA304]`} //${emp?.amountColor}
                  >
                    N {emp.amount}
                  </td>
                  <td className="py-3 px-4 text-[#34474E] text-sm font-poppinsRegular">
                    {/* {emp?.date} */} 2012-12-09
                  </td>
                  <td className="py-3 px-4 text-sm text-[#2F2F33]">
                    <span
                      className={`py-2 px-5  ${
                        emp?.status === "pending"
                          ? "bg-[#DEA304]"
                          : "bg-[#00C853]"
                      } text-white rounded-xl font-poppinsRegular tracking-[-2%]`} //${emp?.statusColor}
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
      )}

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
