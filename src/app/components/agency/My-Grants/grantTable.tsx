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
import { useRouter } from "next/navigation";
import FarmCardMobile from "../../common/dashboard/farmCardMobile";
import TransactionFilterMobile from "../../dashboard/wallet/mobileTransactionSearch";

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

export default function GrantTable() {
  // Search and filter state
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("firstName");
  const [filterBy, setFilterBy] = useState<FilterOption>("all");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const router = useRouter();

  const data = [
    {
      id: "1",
      name: "Anchor Cooperative Support Grant",
      cac_reg_no: "123456789",
      logo: "/assets/my-farms/farmpic.svg",
      status: "active",
      color: "#00C853",
    },
    {
      id: "2",
      name: "Anchor Cooperative Support Grant",
      cac_reg_no: "123456789",
      logo: "/assets/my-farms/farmpic.svg",
      status: "active",
      color: "#00C853",
    },
    {
      id: "3",
      name: "Anchor Cooperative Support Grant",
      cac_reg_no: "123456789",
      logo: "/assets/my-farms/farmpic.svg",
      status: "active",
      color: "#00C853",
    },
  ];

  const handleDropdownToggle = (farmId: string) => {
    setOpenDropdown(openDropdown === farmId ? null : farmId);
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
        <TransactionFilterMobile tableHeading="My Farms" showViewAll={false} />
      </div>

      {data.length === 0 ? (
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
            {data?.map((emp) => (
              <FarmCardMobile
                key={emp.id}
                cac_no={emp?.cac_reg_no}
                farmName={emp?.name}
                status={emp.status}
                farmerLogo={emp?.logo || "/assets/my-farms/farmpic.svg"}
                viewDetailsLink={"/farmer-dashboard/my-farms/" + emp?.id}
                onClickDetails={() =>
                  localStorage.setItem("selectedEditFarmId", emp?.id)
                }
                onEdit={() => handleEditFarm(emp.id)}
              />
            ))}
          </div>
          <div className="overflow-x-auto  block md:hidden">
            <table className="w-full min-w-[1300px] md:w-[800px]">
              <thead className="bg-[#FAFEFF]">
                <tr>
                  <th className="py-3 px-4 w-[10px] text-left">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                    />
                  </th>
                  <th className="py-3 px-4 text-sm text-[#0B222A] font-poppinsSemiBold w-[300px] text-left">
                    Grant Title
                  </th>
                  <th className="py-3 px-4 text-sm  text-[#0B222A] font-poppinsSemiBold text-left w-[150px]">
                    Application
                  </th>
                  <th className="py-3 px-4 text-sm  text-[#0B222A] font-poppinsSemiBold text-left w-[150px]">
                    Deadline
                  </th>
                  <th className="py-3 px-4 text-sm  text-[#0B222A] font-poppinsSemiBold text-left w-[150px]">
                    Status
                  </th>
                  <th className="py-3 px-4 text-sm  text-[#0B222A] font-poppinsSemiBold text-left w-[100px]">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((emp) => (
                  <tr key={emp.id} className="odd:bg-[#EEFEF6]">
                    <td className="py-3 px-4">
                      <input type="checkbox" className="rounded" />
                    </td>
                    <td className="py-3 px-4">
                      <div className="cursor-pointer">
                        <span className="text-[#1B2229] text-sm font-poppinsRegular flex items-center gap-2 hover:underline underline-offset-2">
                          <img
                            src={emp?.logo || "/assets/my-farms/farmpic.svg"}
                            alt={emp.name}
                            width={40}
                            height={40}
                            className="rounded-full"
                          />
                          Anchor Cooperative Support Grant
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm text-[#2F2F33]">2</td>
                    <td className={`py-3 px-4 text-sm font-poppinsRegular`}>
                      Undisclosed
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
                            <button className="w-full px-2 py-2 text-sm text-red-600 hover:bg-gray-100 flex items-center gap-2">
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
