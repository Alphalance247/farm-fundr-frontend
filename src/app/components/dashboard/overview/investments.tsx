"use client";
import { PiDotsThree } from "react-icons/pi";
import SubHead from "../common/sectionHeading";
import { IoIosArrowDown } from "react-icons/io";
import Button from "../../common/Buttons";
import ProjectCard from "../wallet/projectCard";
import { getInvestorInvestment } from "@/stores/investor-dashboard/overview/investment";
import Link from "next/link";

// const projects = [
//   {
//     projectName: "Apple Garden Farm",
//     progress: 30,
//     status: "Ongoing",
//     milestones: {
//       current: 3,
//       total: 12,
//     },
//   },
//   {
//     projectName: "Apple Garden Farm",
//     progress: 60,
//     status: "Ongoing",
//     milestones: {
//       current: 3,
//       total: 12,
//     },
//   },
//   {
//     projectName: "Apple Garden Farm",
//     progress: 100,
//     status: "Completed",
//     milestones: {
//       current: 3,
//       total: 12,
//     },
//   },
//   {
//     projectName: "Apple Garden Farm",
//     progress: 100,
//     status: "Completed",
//     milestones: {
//       current: 3,
//       total: 12,
//     },
//   },
// ];

export default function ProjectList() {
  const { data } = getInvestorInvestment();
  return (
    <section className="mt-6 px-8 md:px-4 w-full py-8 border h-fit border-[#E4E7EC] bg-[white] rounded-xl">
      <div className="flex border-b pb-3 border-[#E4E7EC] justify-between items-center mb-5">
        <SubHead text="My Investments" />
        <div className="relative flex items-center gap-x-4 ">
          <div className="flex md:hidden items-center gap-x-2 p-2 bg-white border border-[#d9d9d9] rounded-xl cursor-pointer w-fit">
            <p>
              <span className="text-sm font-poppinsRegular text-[#7C7C7C]">
                Today
              </span>
              <span className="font-medium  text-[15px] leading-5 text-[#262626]"></span>
            </p>
            <IoIosArrowDown size={20} color="#7C7C7C" />
          </div>
          <div className="p-2 bg-white border border-[#d9d9d9] rounded-xl cursor-pointer w-fit">
            <PiDotsThree size={20} color="#7C7C7C" />
          </div>
        </div>
      </div>

      {data?.data?.length === 0 ? (
        <div>
          <p className="text-center py-8">No Investment list found</p>
        </div>
      ) : (
        <div className="space-y-4 hidden md:block">
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
      <div className="overflow-x-auto block md:hidden border border-[#E4E7EC]">
        <table className="w-full border-collapse hide-scrollbar rounded-lg overflow-hidden">
          <thead className="bg-[#EEFEF6]">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-poppinsSemiBold text-[#0B222A]">
                Farm Name
              </th>
              <th className="px-4 py-3 text-left text-sm font-poppinsSemiBold text-[#0B222A]">
                Project Name
              </th>

              <th className="px-4 py-3 text-left text-sm font-poppinsSemiBold text-[#0B222A]">
                Status
              </th>
              <th className="px-4 py-3 text-left text-sm font-poppinsSemiBold text-[#0B222A]">
                Amount Invested
              </th>
            </tr>
          </thead>
          {data?.data?.length === 0 ? (
            <tbody>
              <tr>
                <td colSpan={6} className="text-center py-8">
                  No Investment list found
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody className="bg-white divide-y divide-gray-200">
              {data?.data.map((project, index) => {
                // const isComplete = project.progress === 100;
                // const barColor = isComplete ? "bg-[#00C853]" : "bg-[#DEA304]";
                const statusColor =
                  project?.project.status === "Ongoing"
                    ? "bg-[#00C853]"
                    : "bg-[#DEA304]";

                return (
                  <tr key={index}>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-[#1B2229]">
                      <Link
                        href={
                          "/investor-dashboard/investment/" +
                            project?.project?.id.toString() || "/"
                        }
                      >
                        <div>{project.farm_name}</div>
                      </Link>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-[#1B2229]">
                      {project.project_name}
                    </td>
                    {/* <td className="px-4 py-4 whitespace-nowrap text-sm flex items-center gap-2">
                    <div className="w-32 bg-[#FFFAE6] rounded-full h-3">
                      <div
                        className={`${barColor} h-3 rounded-full`}
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                    <span>{project.progress}%</span>
                  </td> */}

                    <td className="px-4 py-4 whitespace-nowrap">
                      <span
                        className={`px-4 py-2 rounded-full text-sm  text-white ${statusColor}`}
                      >
                        {project?.project?.status}
                      </span>
                    </td>

                    <td className="px-4 py-4 whitespace-nowrap text-sm text-[#1B2229]">
                      {project.project?.budget}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          )}
        </table>
      </div>
      <div className="mt-4 flex justify-center">
        <Link href={"/investor-dashboard/investment"}>
          <Button variant="secondary" size="medium">
            View All Investments
          </Button>
        </Link>
      </div>
    </section>
  );
}
