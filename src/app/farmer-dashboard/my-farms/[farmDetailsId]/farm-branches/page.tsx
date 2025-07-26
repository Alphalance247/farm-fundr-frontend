"use client";
import { Topbar } from "@/app/components/common/dashboard/topBar";
import DashboardLayout from "@/app/components/common/dashboardLayout";
import BranchFarmCard from "@/app/components/dashboard/my-farms/branchCard";
import FarmHeadingOverview from "@/app/components/dashboard/my-farms/farmHeadingOverview";
import { getFarmDetails } from "@/stores/farms/getFarmDetails";
import { useEffect } from "react";
import Link from "next/link";
import Button from "@/app/components/common/Buttons";

const FarmBranches = () => {
  const { data, fetchFarmDetails } = getFarmDetails();

  useEffect(() => {
    const selected = localStorage.getItem("selectedfarmIDDetails");
    if (selected) {
      fetchFarmDetails(selected);
    }
  }, [fetchFarmDetails]);

  const farmData = data?.data?.farm;
  const farmBranchData = data?.data?.branches;

  return (
    <DashboardLayout>
      <Topbar overview="My farm" />

      <main className="px-10 py-10 bg-gray-50 overflow-auto">
        <FarmHeadingOverview
          farmName={farmData?.name}
          overview={farmData?.description}
          goBackLink={`/farmer-dashboard/my-farms/${farmData?.id}`}
        />

        {farmBranchData?.length === 0 ? (
          <div className="flex flex-col items-center h-screen pt-14">
            <p className="text-center pb-4 text-gray-500">
              No branch created yet please create branch
            </p>
            <Link href={"/farmer-dashboard/my-farms/add-farm-branch"}>
              <Button type="button" className="mt-4 w-[300px]">
                Create Your Farm Branch
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-x-10 gap-y-10 mt-10">
            {farmBranchData?.map((data) => (
              <BranchFarmCard
                branchName={data?.name || "N/A"}
                farmName={data?.farm_name || "N/A"}
                address={data?.street || "N/A"}
                projectsCount={`projects - ${data?.projects?.length || "0"}`}
                openingHours={`Open ${data?.open_time || "N/A"} Close ${
                  data?.close_time || "N/A"
                }`}
                status={data?.status}
                imageUrl={
                  `https://padycvgcoops.name.ng/${data?.branch_images[0]?.image}` ||
                  "/assets/my-farms/2.png"
                }
                onViewProjects={() => {
                  /* handle click */
                }}
                href={`/farmer-dashboard/my-farms/${farmData?.id}/farm-branches/${data?.id}`}
                key={data?.id}
                id={data?.id}
              />
            ))}
          </div>
        )}
      </main>
    </DashboardLayout>
  );
};

export default FarmBranches;
