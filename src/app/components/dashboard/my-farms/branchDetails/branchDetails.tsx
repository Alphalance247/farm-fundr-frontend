"use client";
import Card from "@/app/components/common/card";
import { Topbar } from "@/app/components/common/dashboard/topBar";
import DashboardLayout from "@/app/components/common/dashboardLayout";
import FarmHeadingOverview from "@/app/components/dashboard/my-farms/farmHeadingOverview";
import { getProjectsListStore } from "@/stores/farms/getProjects";
import { useEffect } from "react";
import Spinner from "@/app/components/common/modals/spinner";
import Button from "@/app/components/common/Buttons";
import Link from "next/link";
import { useRouter } from "next/navigation";

const BranchDetails = ({
  farmId,
  branchId,
}: {
  farmId: string;
  branchId: string;
}) => {
  const { data, fetchProjectsList, error, loading } = getProjectsListStore();
  const router = useRouter();

  useEffect(() => {
    fetchProjectsList(branchId, farmId);
  }, [fetchProjectsList, branchId, farmId]);

  const handleUpdate = (projectId: string) => {
    localStorage.setItem("selectedEditFarmId", projectId);
    router.push("/farmer-dashboard/my-farms/update-project");
  };

  const projectsCard = data?.results?.data || [];

  return (
    <DashboardLayout>
      <Topbar overview="My farm" />

      <main className="px-10 py-10 bg-gray-50 overflow-auto h-screen">
        <FarmHeadingOverview
          farmName="Lagos Branch Project"
          overview={`Overview of Lagos Branch Projects(${
            data?.results?.data?.length || "0"
          })`}
          goBackLink={`/farmer-dashboard/my-farms/${farmId}/farm-branches/`}
        />

        {loading ? (
          <Spinner />
        ) : error ? (
          <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col items-center">
              <p className="text-red-500">Error fetching farm details</p>
              <Button
                type="button"
                onClick={() => fetchProjectsList(branchId, farmId)}
                className="mt-4"
              >
                Retry
              </Button>
            </div>
          </div>
        ) : projectsCard?.length === 0 ? (
          <div className="flex flex-col items-center h-fit pt-20">
            <p className="text-center text-gray-500">
              No Project created under this branch yet
            </p>
            <Link href={"/farmer-dashboard/my-farms/add-project"}>
              <Button type="button" className="mt-10">
                Create Your Branch Project
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-x-10 gap-y-10 mt-10">
            {projectsCard?.map((card) => {
              return (
                <Card
                  key={card?.id}
                  projectImage={`https://padycvgcoops.name.ng/${card?.images[0]}`}
                  projectStatus={card?.status}
                  projectDescrip={`${card?.description?.slice(0, 40)}....`}
                  projectName={`${card?.name?.slice(0, 20)}...`}
                  projectFarm={card?.farm_name}
                  onUpdateClick={() => handleUpdate(card?.id)}
                  withRating={false}
                  projectLocation={`${card?.project_location}`}
                  btnText1="Update"
                  btnText2="View Details"
                  projectROI={card?.ROI?.toString()}
                  // btnTextLink1={`/farmer-dashboard/my-farms/update-project`}
                  btnTextLink2={`/farmer-dashboard/my-farms/${farmId}/farm-branches/${branchId}/${card?.id}`}
                />
              );
            })}
          </div>
        )}
      </main>
    </DashboardLayout>
  );
};

export default BranchDetails;
