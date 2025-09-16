"use client";
import Image from "next/image";
import { useState } from "react";
import TransactionSearch, {
  FilterOption,
  SortOption,
} from "../wallet/transactionSearch";
import Button from "../../common/Buttons";
import Pagination from "@/components/ui/pagination";
import ProjectCard, { ProjectCardProps } from "../wallet/projectCard";
import TransactionFilterMobile from "../wallet/mobileTransactionSearch";
import { getInvestorInvestment } from "@/stores/investor-dashboard/overview/investment";

interface Project {
  id: number;
  name: string;
  investedAmount: string;
  status: "Ongoing" | "Completed" | "Canceled";
  roi: string;
  duration: string;
  date: string;
  image: string;
}

const DUMMY_PROJECTS: Project[] = [
  {
    id: 1,
    name: "Green Valley Farm",
    investedAmount: "₦1,000,000",
    status: "Ongoing",
    roi: "15% (₦150,000)",
    duration: "12 Months",
    date: "Jan 2, 2025",
    image: "/assets/my-farms/farmpic.svg",
  },
  {
    id: 2,
    name: "Apple Green House",
    investedAmount: "₦1,000,000",
    status: "Ongoing",
    roi: "20%",
    duration: "6 Months",
    date: "Jan 2, 2025",
    image: "/assets/my-farms/farmpic.svg",
  },
  {
    id: 3,
    name: "Green Valley Farm",
    investedAmount: "₦1,000,000",
    status: "Completed",
    roi: "30%",
    duration: "12 Months",
    date: "Jan 2, 2025",
    image: "/assets/my-farms/farmpic.svg",
  },
  {
    id: 4,
    name: "Apple Green House",
    investedAmount: "₦1,000,000",
    status: "Completed",
    roi: "10%",
    duration: "6 Months",
    date: "Jan 2, 2025",
    image: "/assets/my-farms/farmpic.svg",
  },
  {
    id: 5,
    name: "Green Valley Farm",
    investedAmount: "₦1,000,000",
    status: "Completed",
    roi: "15%",
    duration: "12 Months",
    date: "Aug 17, 2024",
    image: "/assets/my-farms/farmpic.svg",
  },
  {
    id: 6,
    name: "Apple Green House",
    investedAmount: "₦1,000,000",
    status: "Canceled",
    roi: "20%",
    duration: "6 Months",
    date: "Aug 17, 2024",
    image: "/assets/my-farms/farmpic.svg",
  },
];
const projectsList: ProjectCardProps[] = [
  {
    projectName: "Green Valley Farm",
    investedAmount: 120000,
    status: "Ongoing",
    image: "/assets/my-farms/2.png",
  },
  {
    projectName: "Apple Green House",
    investedAmount: 120000,
    status: "Active",
    image: "/assets/my-farms/2.png",
  },
];
const statusColors: Record<Project["status"], string> = {
  Ongoing: "bg-[#DEA304]",
  Completed: "bg-[#34C759]",
  Canceled: "bg-[#DE4204]",
};

export default function ProjectTable() {
  const [projects] = useState<Project[]>(DUMMY_PROJECTS);
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
            {data?.results?.length === 0 ? (
              <tbody className="">
                <tr>
                  <td colSpan={6} className="text-center py-8">
                    No Investment found yet
                  </td>
                </tr>
              </tbody>
            ) : (
              <tbody>
                {data?.results.map((project, i) => (
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
                      {project?.budget}
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`py-2 px-5  ${
                          project?.status === "pending"
                            ? "bg-[#DEA304]"
                            : "bg-[#00C853]"
                        } text-white rounded-xl font-poppinsRegular tracking-[-2%]`}
                      >
                        {project.status}
                      </span>
                    </td>
                    <td className="py-3 text-sm text-[#5F5F5F] px-4">
                      {project?.ROI}
                    </td>
                    <td className="py-3 text-sm text-[#5F5F5F] px-4">
                      {project.duration}
                    </td>
                    <td className="py-3 text-sm text-[#5F5F5F] px-4">
                      {project?.start_date}
                    </td>
                    <td className="py-3 px-4">
                      <Button
                        variant="primary"
                        className="text-xs  !px-4 !py-2"
                      >
                        View Details
                      </Button>
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
        <div className="space-y-4">
          {projectsList.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
