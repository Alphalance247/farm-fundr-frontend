"use client";
import { Topbar } from "@/app/components/common/dashboard/topBar";
import DashboardLayout from "@/app/components/common/dashboardLayout";
import FarmHeadingOverview from "@/app/components/dashboard/my-farms/farmHeadingOverview";
import FarmHeading from "../common/farmHeading";
import EditBtn from "@/app/components/common/editBtn";
import Button from "@/app/components/common/Buttons";
import { HiPencil } from "react-icons/hi";
import { useEffect } from "react";
import { getProjectDetails } from "@/stores/farms/getProjectDetails";
import Spinner from "@/app/components/common/modals/spinner";
import { IoMdArrowBack } from "react-icons/io";
import Link from "next/link";

const ProjectDetails = ({
  projectDetailsId,
  branchDetailsId,
  farmDetailsId,
}: {
  projectDetailsId: string;
  branchDetailsId: string;
  farmDetailsId: string;
}) => {
  const { fetchProjectsDetails, data, loading, error } = getProjectDetails();

  useEffect(() => {
    fetchProjectsDetails(projectDetailsId);
  }, [fetchProjectsDetails, projectDetailsId]);

  const projectData = data?.data;

  const farmDetailsConfirmation = [
    {
      name: "farm Name",
      details: projectData?.farm_name || "N/A",
    },
    {
      name: "Branch Name",
      details: projectData?.farm_branch_name || "N/A",
    },
    {
      name: "Project Name",
      details: projectData?.name || "N/A",
    },
    {
      name: "Project Type",
      details: projectData?.project_type || "N/A",
    },
  ];

  const branchSetup = [
    {
      name: "Branch Size",
      details: projectData?.plots || "N/A",
    },
    {
      name: "Opening Hour",
      details: "Lagos branch",
    },
    {
      name: "Closing Hour",
      details: "1, bodija, Ibadan, Nigeria.",
    },
    {
      name: "Working Days",
      details: "1, bodija, Ibadan, Nigeria.",
    },
  ];

  return (
    <DashboardLayout>
      <Topbar overview="My farm" />
      <main className="px-10 py-10 bg-gray-50 overflow-auto">
        <FarmHeadingOverview
          farmName={projectData?.name || "N/A"}
          goBackLink={`/farmer-dashboard/my-farms/${farmDetailsId}/farm-branches/${branchDetailsId}`}
          isProjectDetails={true}
        />
        {loading ? (
          <Spinner />
        ) : error ? (
          <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col items-center">
              <p className="text-red-500">Error fetching farm details</p>
              <Button
                type="button"
                onClick={() => fetchProjectsDetails(projectDetailsId)}
                className="mt-4"
              >
                Retry
              </Button>
            </div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-x-6 gap-y-6 mt-10">
              <div className="flex flex-col gap-y-10">
                <div className="bg-white shadow-md rounded-[12px] p-6">
                  <div className="flex gap-x-2 items-center justify-center pb-4 border-b border-[#F6F6F6]">
                    {" "}
                    <FarmHeading text="Project Image" />
                    <EditBtn onButtonEdit={() => {}} />
                  </div>

                  <div className="pt-6">
                    <div className="grid grid-cols-3 gap-3">
                      {projectData?.project_images?.map((images, i) => (
                        <img
                          width={i === 0 ? 556 : 177}
                          height={i === 0 ? 158 : 95}
                          src={images?.image || "/assets/my-farms/no-img.avif"}
                          alt={`Uploaded images`}
                          className={`object-cover w-full  rounded-[12px] border-dashed border border-[#51F4A6] ${
                            i === 0 ? "col-span-3 h-[158px]" : "h-[95px]"
                          }`}
                          key={i}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-white shadow-md rounded-[12px] p-6">
                  <div className="flex gap-x-2 items-center justify-center pt-6 border-t border-[#F6F6F6] mb-4">
                    {" "}
                    <FarmHeading text="Branch Information" />
                    <EditBtn onButtonEdit={() => {}} />
                  </div>

                  <div>
                    {farmDetailsConfirmation.slice(0, 5).map((el, i) => (
                      <div
                        key={i}
                        className="flex justify-between items-center py-3 border-t border-[#F6F6F6] font-poppinsRegular text-sm text-[#5F5F5F]"
                      >
                        <p>{el?.name}</p>
                        <p className=" font-poppinsSemiBold">{el?.details}</p>
                      </div>
                    ))}
                    <div className="border-t border-[#F6F6F6] pt-3 ">
                      <p className="font-poppinsRegular text-sm text-[#5F5F5F] pb-2">
                        Description
                      </p>

                      <p className="bg-[#FCFCFC] border p-5 border-[#F6F6F6] rounded-xl text-[#5F5F5F] font-poppinsSemiBold">
                        {projectData?.description || "N/A"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Branch setup and optional info */}
              <div className="flex flex-col gap-y-6">
                <div className="bg-white shadow-md rounded-[12px] p-6 h-fit">
                  <div className="flex gap-x-2 items-center justify-center pt-6 border-t border-[#F6F6F6] mb-4">
                    {" "}
                    <FarmHeading text="Branch Set Up" />
                    <EditBtn onButtonEdit={() => {}} />
                  </div>

                  <div>
                    {branchSetup.slice(0, 5).map((el, i) => (
                      <div
                        key={i}
                        className="flex justify-between items-center py-3 border-t border-[#F6F6F6] font-poppinsRegular text-sm text-[#5F5F5F]"
                      >
                        <p>{el?.name}</p>
                        <p className=" font-poppinsSemiBold">{el?.details}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white shadow-md rounded-[12px] p-6 h-fit">
                  <div className="border-t border-[#F6F6F6] pt-3 pb-3">
                    <p className="font-poppinsRegular text-sm text-[#5F5F5F] pb-2">
                      How It Works
                    </p>

                    <p className="bg-[#FCFCFC] border p-5 border-[#F6F6F6] rounded-xl text-[#5F5F5F] font-poppinsSemiBold">
                      {projectData?.how_it_works || "N/A"}
                    </p>
                  </div>

                  <div className="border-y border-[#F6F6F6] py-3">
                    <p className="font-poppinsRegular text-sm text-[#5F5F5F] pb-2">
                      Progress Over Time
                    </p>

                    <p className="bg-[#FCFCFC] border p-5 border-[#F6F6F6] rounded-xl text-[#5F5F5F] font-poppinsSemiBold">
                      {projectData?.progress_over_time || "N/A"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center mt-10 gap-x-4">
              <Link
                href={`/farmer-dashboard/my-farms/${farmDetailsId}/farm-branches/${branchDetailsId}`}
                className="w-full"
              >
                <Button
                  variant="secondary"
                  className="w-full flex items-center justify-center gap-x-3"
                >
                  <IoMdArrowBack size={16} color="#2D865B" /> Go back
                </Button>
              </Link>
              <Link
                href={`/farmer-dashboard/my-farms/${farmDetailsId}/farm-branches/${branchDetailsId}`}
                className="w-full"
              >
                <Button
                  variant="secondary"
                  className="w-full flex items-center justify-center gap-x-3"
                >
                  <HiPencil size={16} color="#2D865B" /> Edit Project Details
                </Button>
              </Link>
            </div>
          </>
        )}
      </main>
    </DashboardLayout>
  );
};

export default ProjectDetails;
