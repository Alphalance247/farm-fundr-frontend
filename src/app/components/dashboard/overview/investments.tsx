"use client";

import { PiDotsThree } from "react-icons/pi";
import SubHead from "../common/sectionHeading";
import { IoIosArrowDown } from "react-icons/io";
import Button from "../../common/Buttons";

const projects = [
  {
    projectName: "Apple Garden Farm",
    progress: 30,
    status: "Ongoing",
    milestones: {
      current: 3,
      total: 12,
    },
  },
  {
    projectName: "Apple Garden Farm",
    progress: 60,
    status: "Ongoing",
    milestones: {
      current: 3,
      total: 12,
    },
  },
  {
    projectName: "Apple Garden Farm",
    progress: 100,
    status: "Completed",
    milestones: {
      current: 3,
      total: 12,
    },
  },
  {
    projectName: "Apple Garden Farm",
    progress: 100,
    status: "Completed",
    milestones: {
      current: 3,
      total: 12,
    },
  },
];

export default function ProjectList() {
  return (
    <section className="mt-6 px-8 w-[60%] lg:w-full py-8 border border-[#E4E7EC] bg-[white] rounded-xl">
      <div className="flex border-b pb-3 border-[#E4E7EC] justify-between items-center mb-5">
        <SubHead text="My Investments" />
        <div className="relative flex items-center gap-x-4 ">
          <div className="flex items-center gap-x-2 p-2 bg-white border border-[#d9d9d9] rounded-xl cursor-pointer w-fit">
            <p>
              <span className="text-sm font-poppinsRegular text-[#7C7C7C]">
                Today
              </span>
              <span className="font-medium text-[15px] leading-5 text-[#262626]"></span>
            </p>
            <IoIosArrowDown size={20} color="#7C7C7C" />
          </div>
          <div className="p-2 bg-white border border-[#d9d9d9] rounded-xl cursor-pointer w-fit">
            <PiDotsThree size={20} color="#7C7C7C" />
          </div>
        </div>
      </div>
      <div className="overflow-x-auto border border-[#E4E7EC] hide-scrollbar rounded-xl">
        <table className="min-w-full border-collapse rounded-lg overflow-hidden">
          <thead className="bg-[#EEFEF6]">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-poppinsSemiBold text-[#0B222A]">
                Project Name
              </th>
              <th className="px-4 py-3 text-left text-sm font-poppinsSemiBold text-[#0B222A]">
                Progress
              </th>
              <th className="px-4 py-3 text-left text-sm font-poppinsSemiBold text-[#0B222A]">
                Status
              </th>
              <th className="px-4 py-3 text-left text-sm font-poppinsSemiBold text-[#0B222A]">
                Milestones
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {projects.map((project, index) => {
              const isComplete = project.progress === 100;
              const barColor = isComplete ? "bg-[#00C853]" : "bg-[#DEA304]";
              const statusColor = isComplete ? "bg-[#00C853]" : "bg-[#DEA304]";

              return (
                <tr key={index}>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-[#1B2229]">
                    {project.projectName}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm flex items-center gap-2">
                    <div className="w-32 bg-[#FFFAE6] rounded-full h-3">
                      <div
                        className={`${barColor} h-3 rounded-full`}
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                    <span>{project.progress}%</span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span
                      className={`px-4 py-2 rounded-full text-sm  text-white ${statusColor}`}
                    >
                      {project.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-[#1B2229]">
                    <span className="font-poppins font-semibold">
                      Phase {project.milestones.current}
                    </span>
                    / Phase {project.milestones.total}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
          <div className="mt-4 flex justify-center">
            <Button variant="secondary" size="medium">
              View All Investments
            </Button>
          </div>
    </section>
  );
}
