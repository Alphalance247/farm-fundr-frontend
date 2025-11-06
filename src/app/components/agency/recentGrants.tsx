import { IoIosArrowDown } from "react-icons/io";
import { PiDotsThree } from "react-icons/pi";
import SubHead from "../dashboard/common/sectionHeading";
import ProjectCard from "../dashboard/wallet/projectCard";
import Link from "next/link";
import Button from "../common/Buttons";

const RecentGrants = () => {
  const data = [
    {
      projectName: "Apple Garden Farm",
      progress: 30,
      status: "Ongoing",
      application: "0",
      budget: "$10,000",
      id: "1",
      img: "/assets/agency/landing/2.svg",
      milestones: {
        current: 3,
        total: 12,
      },
    },
  ];
  return (
    <section className="mt-6 px-8 md:px-4 w-full py-8 border h-fit border-[#E4E7EC] bg-[white] rounded-xl">
      <div className="flex border-b pb-3 border-[#E4E7EC] justify-between items-center mb-5">
        <SubHead text="Recent Grants" />
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

      {data?.length === 0 ? (
        <div>
          <p className="text-center py-8">No Recent Grants found</p>
        </div>
      ) : (
        <div className="space-y-4 hidden md:block">
          {data?.map((p, i) => (
            <ProjectCard
              topContent="Applications"
              key={i}
              projectName={p?.projectName}
              investedAmount={p?.application}
              status={p?.status}
              withNaira={false}
              image={p?.img}
              detailsLink={"/investor-dashboard/investment/" + p?.id.toString()}
            />
          ))}
        </div>
      )}
      <div className="overflow-x-auto block md:hidden border border-[#E4E7EC]">
        <table className="w-full border-collapse hide-scrollbar rounded-lg overflow-hidden">
          <thead className="bg-[#EEFEF6]">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-poppinsSemiBold text-[#0B222A]">
                Grant Name
              </th>
              <th className="px-4 py-3 text-left text-sm font-poppinsSemiBold text-[#0B222A]">
                Application
              </th>
              <th className="px-4 py-3 text-left text-sm font-poppinsSemiBold text-[#0B222A]">
                Deadline
              </th>

              <th className="px-4 py-3 text-left text-sm font-poppinsSemiBold text-[#0B222A]">
                Status
              </th>

              <th className="px-4 py-3 text-left text-sm font-poppinsSemiBold text-[#0B222A]">
                Actions
              </th>
            </tr>
          </thead>
          {data?.length === 0 ? (
            <tbody>
              <tr>
                <td colSpan={6} className="text-center py-8">
                  No Recent Grants found
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody className="bg-white divide-y divide-gray-200">
              {data?.map((project, index) => {
                // const isComplete = project.progress === 100;
                // const barColor = isComplete ? "bg-[#00C853]" : "bg-[#DEA304]";
                const statusColor =
                  project?.status === "Ongoing"
                    ? "bg-[#00C853]"
                    : "bg-[#DEA304]";

                return (
                  <tr key={index}>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-[#1B2229]">
                      <Link
                        href={
                          "/investor-dashboard/investment/" +
                            project?.id.toString() || "/"
                        }
                      >
                        <div>{project?.projectName}</div>
                      </Link>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-[#1B2229]">
                      {project?.application}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-[#1B2229]">
                      Aug 20, 2024
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span
                        className={`px-4 py-2 rounded-full text-sm  text-white ${statusColor}`}
                      >
                        {project?.status}
                      </span>
                    </td>

                    <td className="px-4 py-4 whitespace-nowrap text-sm text-[#1B2229]">
                      <div className="p-2 bg-white border border-[#d9d9d9] rounded-xl cursor-pointer w-fit">
                        <PiDotsThree size={20} color="#7C7C7C" />
                      </div>
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
            View All Grants
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default RecentGrants;
