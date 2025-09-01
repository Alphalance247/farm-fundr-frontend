"use client";
import { useState } from "react";
import TransactionSearch, {
  type SortOption,
  type FilterOption,
} from "../../dashboard/wallet/transactionSearch";
import { PiDotsThreeVertical } from "react-icons/pi";
import { getFarmListStore } from "@/stores/farms/getFarmList";
import Link from "next/link";
import Button from "../../common/Buttons";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import DeleteFarm from "./deleteFarm";
import { useRouter } from "next/navigation";
import TransactionFilterMobile from "../wallet/mobileTransactionSearch";
import FarmCardMobile from "../../common/dashboard/farmCardMobile";

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
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [selectedFarmId, setSelectedFarmId] = useState("");
  const [selectedFarmName, setSelectedFarmName] = useState("");
  const { data: farmList } = getFarmListStore();
  const router = useRouter();

  const totalFarms = farmList?.results?.farms.map((farm, idx) => ({
    ...farm,
    bg: DUMMY_EMPLOYEES[idx % DUMMY_EMPLOYEES.length]?.bg || "bg-[white]",
    statusColor:
      DUMMY_EMPLOYEES[idx % DUMMY_EMPLOYEES.length]?.statusColor ||
      "bg-[#DEA304]",
  }));

  const totalFarmsTable = totalFarms || [];

  const handleDropdownToggle = (farmId: string) => {
    setOpenDropdown(openDropdown === farmId ? null : farmId);
  };

  const handleDeleteFarm = (farmId: string, farmName: string) => {
    setOpenDeleteModal(true);
    setSelectedFarmId(farmId);
    setSelectedFarmName(farmName);
  };

  const handleEditFarm = (farmId: string) => {
    // Store the farm ID in localStorage
    localStorage.setItem("selectedEditFarmId", farmId);
    router.push("/farmer-dashboard/my-farms/update-farm");
  };

  // Close dropdown when clicking outside
  const handleClickOutside = () => {
    setOpenDropdown(null);
  };

  return (
    <section className="relative">
      {openDropdown !== null && (
        <div className="fixed inset-0 z-40" onClick={handleClickOutside} />
      )}
      {openDeleteModal && selectedFarmId && selectedFarmName && (
        <DeleteFarm
          onCloseModal={() => setOpenDeleteModal(false)}
          selectedFarmId={selectedFarmId}
          selectedFarmName={selectedFarmName}
        />
      )}
      <div>
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
      <div>
        <TransactionFilterMobile tableHeading="All Farms" />
      </div>

      {totalFarmsTable.length === 0 ? (
        <div className="flex pt-20 items-center h-fit justify-center">
          <div className="flex flex-col items-center">
            <p className="text-center pb-8 text-gray-500">
              No Farm created yet please create a farm to get started
            </p>
            <Link href={"/farmer-dashboard/my-farms/add-farm"}>
              <Button type="button" className="mt-4">
                Create Farm
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        <>
          <div className="space-y-4 hidden md:block">
            {totalFarmsTable?.map((emp) => (
              <FarmCardMobile
                key={emp.id}
                cac_no={emp?.cac_reg_no}
                farmName={emp?.name}
                status={emp.status}
                viewDetailsLink={"/farmer-dashboard/my-farms/" + emp?.id}
              />
            ))}
          </div>
          <div className="overflow-x-auto  block md:hidden">
            <table className="w-full min-w-[1000px] md:w-[800px]">
              <thead className="bg-[#FAFEFF]">
                <tr>
                  <th className="py-3 px-4 w-[10px] text-left">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                    />
                  </th>
                  <th className="py-3 px-4 text-sm text-[#0B222A] font-poppinsSemiBold w-[200px] text-left">
                    Farm Name
                  </th>
                  <th className="py-3 px-4 text-sm  text-[#0B222A] font-poppinsSemiBold text-left w-[50px] hidden md:block">
                    Status
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
                  <th className="py-3 px-4 text-sm  text-[#0B222A] font-poppinsSemiBold text-left w-[50px] md:hidden">
                    Status
                  </th>
                  <th className="py-3 px-4 text-sm  text-[#0B222A] font-poppinsSemiBold text-left w-[50px]">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {totalFarmsTable.map((emp) => (
                  <tr key={emp.id} className={`${emp?.bg}`}>
                    <td className="py-3 px-4">
                      <input type="checkbox" className="rounded" />
                    </td>
                    <td className="py-3 px-4">
                      <Link href={"/farmer-dashboard/my-farms/" + emp?.id}>
                        <div>
                          <span className="text-[#1B2229] text-sm font-poppinsRegular flex items-center gap-2 hover:underline underline-offset-2">
                            <img
                              src={emp?.logo || "/assets/my-farms/farmpic.svg"}
                              alt={emp.name}
                              width={40}
                              height={40}
                            />
                            <span> {emp?.name}</span>
                          </span>
                        </div>
                      </Link>
                    </td>
                    <td className="py-3 px-4 text-sm text-[#2F2F33] hidden md:block">
                      <span
                        className={`py-2 px-5  text-white rounded-xl font-poppinsRegular tracking-[-2%] ${
                          emp?.status !== "published"
                            ? "bg-[#DEA304]"
                            : "bg-[#00C853]"
                        }`}
                      >
                        {emp?.status}
                      </span>
                    </td>
                    <td
                      className={`py-3 px-4 text-sm font-poppinsRegular`}
                      style={{ color: emp?.color }}
                    >
                      <span className="flex items-center gap-2">
                        {emp?.city}, {emp?.country}
                      </span>
                    </td>
                    <td
                      className={`py-3 px-4 text-sm font-poppinsRegular `}
                      style={{ color: emp?.color }}
                    >
                      {emp?.cac_reg_no || "N/A"}
                    </td>
                    <td
                      className={`py-3 px-4 font-poppinsSemiBold text-sm`}
                      style={{ color: emp?.color }}
                    >
                      {emp?.farm_branches_count || 0}
                    </td>

                    <td className="py-3 px-4 text-sm text-[#2F2F33] md:hidden">
                      <span
                        className={`py-2 px-5 text-white rounded-xl font-poppinsRegular tracking-[-2%] ${
                          emp?.status !== "published"
                            ? "bg-[#DEA304]"
                            : "bg-[#00C853]"
                        }`}
                      >
                        {emp?.status}
                      </span>
                    </td>

                    <td
                      className="py-3 px-4 relative"
                      onClick={() => handleDropdownToggle(emp?.id)}
                    >
                      <p className="w-8 h-8 bg-white p-2 rounded-lg border-[#E4E7EC] border cursor-pointer">
                        <PiDotsThreeVertical color="#001F3F" size={16} />
                      </p>

                      {/* Dropdown Menu */}
                      {openDropdown === emp?.id && (
                        <div className="absolute right-24 bottom-0 mt-2 w-28 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                          <div className="py-1">
                            <button
                              onClick={() => handleEditFarm(emp.id)}
                              className="w-full px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                            >
                              <FiEdit size={14} />
                              Edit
                            </button>
                            <button
                              onClick={() =>
                                handleDeleteFarm(emp?.id, emp?.name)
                              }
                              className="w-full px-2 py-2 text-sm text-red-600 hover:bg-gray-100 flex items-center gap-2"
                            >
                              <FiTrash2 size={14} />
                              Delete
                            </button>
                          </div>
                        </div>
                      )}
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
