"use client";
import { useState } from "react";
import { PiDotsThreeVertical } from "react-icons/pi";
import { IoMdTime } from "react-icons/io";
import { IoArrowDown, IoArrowUp } from "react-icons/io5";
import TransactionSearch, {
  FilterOption,
  SortOption,
} from "../dashboard/wallet/transactionSearch";
import TransactionFilterMobile from "../dashboard/wallet/mobileTransactionSearch";
import TransactionCard from "../dashboard/wallet/TransactionCard";

interface Employee {
  id: string;
  name: string;
  transactionId: string;
  description: string;
  amount: number;
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
  id: (idx + 1) .toString(), // number
  transactionId: "TRD-20240226",
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
  amount: 120000, // number now ✅
  date: "Jan 21, 2025",
  status: ["Pending", "Success", "Failed", "Success", "Pending"][idx],
  deductions: 0,
  miscAmount: 0,
  typeIcons: [
    <IoMdTime size={20} color="#DEA304" key={idx} />,
    <IoArrowUp size={20} color="#00C853" key={idx} />,
    <IoArrowDown size={20} color="#4379FF" key={idx} />,
    <IoArrowUp size={20} color="#00C853" key={idx} />,
    <IoArrowDown size={20} color="#DEA304" key={idx} />,
  ][idx],
  bg: ["bg-[#EEFEF6]", "bg-white", "bg-[#EEFEF6]", "bg-white", "bg-[#EEFEF6]"][
    idx
  ],
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
  // use dummy data only
  const transactionData = { transactions: DUMMY_EMPLOYEES };

  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("firstName");
  const [filterBy, setFilterBy] = useState<FilterOption>("all");

  return (
    <section className="bg-white rounded-lg border border-[#E3E3E5]">
      <div>
        <TransactionSearch
          headingText="All Transactions"
          searchQuery={searchQuery}
          sortBy={sortBy}
          filterBy={filterBy}
          onSearchChange={setSearchQuery}
          onSortChange={setSortBy}
          onFilterChange={setFilterBy}
          withHeading={true}
        />
      </div>
      <div>
        <TransactionFilterMobile tableHeading="Recent Transactions" />
      </div>

      {transactionData.transactions.length === 0 ? (
        <div className="flex pt-10 items-center justify-center h-fit">
          <p className="text-center pb-8 text-gray-500">
            No Transactions found yet
          </p>
        </div>
      ) : (
        <>
          {/* Desktop view */}
          <div className="space-y-4 hidden md:block">
            {transactionData.transactions.map((emp) => (
              <TransactionCard
                key={emp.id}
                id={emp.id}
                type={emp.name}
                amount={emp.amount}
                status={emp.status}
                viewDetailsLink={`/transaction/${emp.id}`}
              />
            ))}
          </div>

          {/* Mobile view */}
          <div className="overflow-x-auto block md:hidden">
            <table className="w-full min-w-[1000px] md:w-[800px]">
              <thead className="bg-[#FAFEFF]">
                <tr>
                  <th className="py-3 px-4 w-[10px] text-left">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                    />
                  </th>
                  <th className="py-3 px-4 text-sm text-[#0B222A] font-poppinsSemiBold w-[250px] text-left">
                    Transaction Id
                  </th>
                  <th className="py-3 px-4 text-sm text-[#0B222A] font-poppinsSemiBold text-left w-[150px]">
                    Type
                  </th>
                  <th className="py-3 px-4 text-sm text-[#0B222A] font-poppinsSemiBold text-left w-[100px]">
                    Amount
                  </th>
                  <th className="py-3 px-4 text-sm text-[#0B222A] font-poppinsSemiBold text-left w-[100px]">
                    Date
                  </th>
                  <th className="py-3 px-4 text-sm text-[#0B222A] font-poppinsSemiBold text-left w-[50px]">
                    Status
                  </th>
                  <th className="py-3 px-4 text-sm text-[#0B222A] font-poppinsSemiBold text-left w-[50px]">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {transactionData.transactions.map((emp) => (
                  <tr key={emp.id} className={`${emp.bg}`}>
                    <td className="py-3 px-4">
                      <input type="checkbox" className="rounded" />
                    </td>
                    <td className="py-3 px-4 text-sm text-[#1B2229]">
                      {emp.transactionId}
                    </td>
                    <td className="py-3 px-4 text-sm text-[#1B2229] flex items-center gap-2">
                      {emp.typeIcons}
                      {emp.name}
                    </td>
                    <td className="py-3 px-4 text-sm font-semibold text-[#DEA304]">
                      {emp.amount}
                    </td>
                    <td className="py-3 px-4 text-sm text-[#34474E]">
                      {emp.date}
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`py-2 px-5 ${emp.statusColor} text-white rounded-xl text-sm`}
                      >
                        {emp.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="w-8 h-8 bg-white p-2 rounded-lg border border-[#E4E7EC] cursor-pointer">
                        <PiDotsThreeVertical color="#001F3F" size={16} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </section>
  );
}
