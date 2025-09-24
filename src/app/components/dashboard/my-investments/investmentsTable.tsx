"use client";
import Image from "next/image";
import { useState } from "react";
import TransactionSearch, {
  FilterOption,
  SortOption,
} from "../wallet/transactionSearch";
import Button from "../../common/Buttons";
import Pagination from "@/components/ui/pagination";
import ProjectCard from "../wallet/projectCard";
import TransactionFilterMobile from "../wallet/mobileTransactionSearch";
import { getInvestorInvestment } from "@/stores/investor-dashboard/overview/investment";
import Link from "next/link";

export default function ProjectTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("firstName");
  const [filterBy, setFilterBy] = useState<FilterOption>("all");

  const { data } = getInvestorInvestment();

  return (
    <section className="p-4 md:p-0">
      <div className="block md:hidden">
        <TransactionSearch
          searchQuery={searchQuery}
          sortBy={sortBy}
          filterBy={filterBy}
          headingText="My Investments"
          onSearchChange={setSearchQuery}
          onSortChange={setSortBy}
          onFilterChange={setFilterBy}
          withHeading={true}
        />
        <div className="overflow-x-auto  block md:hidden">
          <table className="w-full min-w-[1000px] md:w-[800px]">
            <thead className="bg-[#FAFEFF]">
              <tr>
                <th className="py-3 px-4 text-sm text-[#0B222A] text-left">
                  Project Name
                </th>
                <th className="py-3 px-4 text-sm text-[#0B222A] text-left">
                  Invested Amount
                </th>
                <th className="py-3 px-4 text-sm text-[#0B222A] text-left">
                  Status
                </th>
                <th className="py-3 px-4 text-sm text-[#0B222A] text-left">
                  Returns (ROI)
                </th>
                <th className="py-3 px-4 text-sm text-[#0B222A] text-left">
                  Duration
                </th>
                <th className="py-3 px-4 text-sm text-[#0B222A] text-left">
                  Date Invested
                </th>
                <th className="py-3 px-4 text-[#0B222A] text-sm text-left">
                  Action
                </th>
              </tr>
            </thead>
            {data?.data?.length === 0 ? (
              <tbody className="">
                <tr>
                  <td colSpan={6} className="text-center py-8">
                    No Investment found yet
                  </td>
                </tr>
              </tbody>
            ) : (
              <tbody>
                {data?.data.map((project, i) => (
                  <tr
                    key={i}
                    className="even:bg-[#EEFEF6] odd:bg-[#FFFFFF] text-sm"
                  >
                    <td className="py-3 px-4 flex items-center gap-2">
                      <Image
                        src={project?.project_image || "/assets/my-farms/2.png"}
                        alt={project?.project_name}
                        width={40}
                        height={40}
                        className="rounded-md"
                      />
                      <span className="text-sm text-[#5F5F5F]">
                        {project?.project_name}
                      </span>
                    </td>
                    <td className="py-3 text-sm text-[#5F5F5F] px-4">
                      N {project?.project?.budget}
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`py-2 px-5  ${
                          project?.project?.status === "Ongoing"
                            ? "bg-[#DEA304]"
                            : "bg-[#00C853]"
                        } text-white rounded-xl font-poppinsRegular tracking-[-2%]`}
                      >
                        {project?.project?.status}
                      </span>
                    </td>
                    <td className="py-3 text-sm text-[#5F5F5F] px-4">
                      {project?.roi_earned}
                    </td>
                    <td className="py-3 text-sm text-[#5F5F5F] px-4">
                      {project?.duration}
                    </td>
                    <td className="py-3 text-sm text-[#5F5F5F] px-4">
                      {project?.date_invested}
                    </td>
                    <td className="py-3 px-4">
                      <Link
                        href={
                          "/investor-dashboard/investment/" +
                          project?.project?.id.toString()
                        }
                      >
                        <Button
                          variant="primary"
                          className="text-xs  !px-4 !py-2"
                        >
                          View Details
                        </Button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
          <Pagination
            currentPage={1}
            totalPages={10}
            onPageChange={(page) => console.log("Go to page:", page)}
          />
        </div>
      </div>
      <div className="hidden md:block">
        <TransactionFilterMobile
          tableHeading="All Investments"
          showViewAll={false}
        />
        {data?.data?.length === 0 ? (
          <div>
            <p className="text-center py-8">No Investment list found</p>
          </div>
        ) : (
          <div className="space-y-4">
            {data?.data.map((p, i) => (
              <ProjectCard
                key={i}
                projectName={p?.farm_name}
                investedAmount={p?.project?.budget}
                status={p.project?.status}
                image={p?.project_image}
                detailsLink={
                  "/investor-dashboard/investment/" + p?.project?.id.toString()
                }
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
