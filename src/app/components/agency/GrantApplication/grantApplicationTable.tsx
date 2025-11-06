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
import ProjectCard from "../../dashboard/wallet/projectCard";

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

export default function GrantApplicationTable() {
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
          headingText="All Grants"
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
            {data?.map((p, i) => (
              <ProjectCard
                topContent="Farmer name"
                key={i}
                projectName={p?.name}
                investedAmount={p?.status}
                status={p?.status}
                withNaira={false}
                image={p?.logo}
                detailsLink={
                  "/investor-dashboard/investment/" + p?.id.toString()
                }
              />
            ))}
          </div>
          <div className="overflow-x-auto  block md:hidden">
            <table className="w-full min-w-[1100px] md:w-[800px]">
              <thead className="bg-[#FAFEFF]">
                <tr>
                  <th className="py-3 px-4 w-[10px] text-left">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                    />
                  </th>
                  <th className="py-3 px-4 text-sm text-[#0B222A] font-poppinsSemiBold w-[200px] text-left">
                    Farmer Name
                  </th>
                  <th className="py-3 px-4 text-sm  text-[#0B222A] font-poppinsSemiBold text-left w-[150px]">
                    Grant Name
                  </th>
                  <th className="py-3 px-4 text-sm  text-[#0B222A] font-poppinsSemiBold text-left w-[150px]">
                    Status
                  </th>
                  <th className="py-3 px-4 text-sm  text-[#0B222A] font-poppinsSemiBold text-left w-[150px]">
                    Date Applied
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
                          Adamu Michael
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm text-[#2F2F33]">
                      Youth in Agri 2025
                    </td>
                    <td className="py-3 px-4 text-sm text-[#2F2F33] md:hidden">
                      <span
                        className={`py-2 px-5 text-white rounded-xl font-poppinsRegular tracking-[-2%] ${
                          emp?.status !== "published"
                            ? "bg-[#DEA304]"
                            : "bg-[#00C853]"
                        }`}
                      >
                        Pending
                      </span>
                    </td>
                    <td className={`py-3 px-4 text-sm font-poppinsRegular`}>
                      August 21, 2025
                    </td>

                    <td
                      className="py-3 px-4 relative"
                      onClick={() => handleDropdownToggle(emp?.id)}
                    >
                      <Button className="!py-2">View Details</Button>
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
