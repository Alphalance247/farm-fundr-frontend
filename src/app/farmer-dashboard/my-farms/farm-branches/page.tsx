import { Topbar } from "@/app/components/common/dashboard/topBar";
import DashboardLayout from "@/app/components/common/dashboardLayout";
import BranchFarmCard from "@/app/components/dashboard/my-farms/branchCard";
import FarmHeadingOverview from "@/app/components/dashboard/my-farms/farmHeadingOverview";

const FarmBranches = () => {
  return (
    <DashboardLayout>
      <Topbar overview="My farm" />

      <main className="px-10 py-10 bg-gray-50 overflow-auto">
        <FarmHeadingOverview />

        <div className="grid grid-cols-3 gap-x-10 gap-y-10 mt-10">
          <BranchFarmCard
            branchName="Ibadan Branch"
            farmName="Farmfundr Farm"
            address="87, Ringroad, Ibadan, Nigeria."
            projectsCount="Projects- 7"
            openingHours="Open 9am- Close 6pm"
            status="Active"
            imageUrl="/assets/my-farms/2.png"
            href="/farmer-dashboard/my-farms/farm-branches/branch-details"
          />
          <BranchFarmCard
            branchName="Ibadan Branch"
            farmName="Farmfundr Farm"
            address="87, Ringroad, Ibadan, Nigeria."
            projectsCount="Projects- 7"
            openingHours="Open 9am- Close 6pm"
            status="Active"
            imageUrl="/assets/my-farms/2.png"
            href="/farmer-dashboard/my-farms/farm-branches/branch-details"
          />
          <BranchFarmCard
            branchName="Ibadan Branch"
            farmName="Farmfundr Farm"
            address="87, Ringroad, Ibadan, Nigeria."
            projectsCount="Projects- 7"
            openingHours="Open 9am- Close 6pm"
            status="Active"
            imageUrl="/assets/my-farms/2.png"
            href="/farmer-dashboard/my-farms/farm-branches/branch-details"
          />
          <BranchFarmCard
            branchName="Ibadan Branch"
            farmName="Farmfundr Farm"
            address="87, Ringroad, Ibadan, Nigeria."
            projectsCount="Projects- 7"
            openingHours="Open 9am- Close 6pm"
            status="Active"
            imageUrl="/assets/my-farms/2.png"
            href="/farmer-dashboard/my-farms/farm-branches/branch-details"
          />
          <BranchFarmCard
            branchName="Ibadan Branch"
            farmName="Farmfundr Farm"
            address="87, Ringroad, Ibadan, Nigeria."
            projectsCount="Projects- 7"
            openingHours="Open 9am- Close 6pm"
            status="Active"
            imageUrl="/assets/my-farms/2.png"
            href="/farmer-dashboard/my-farms/farm-branches/branch-details"
          />
          <BranchFarmCard
            branchName="Ibadan Branch"
            farmName="Farmfundr Farm"
            address="87, Ringroad, Ibadan, Nigeria."
            projectsCount="Projects- 7"
            openingHours="Open 9am- Close 6pm"
            status="Active"
            imageUrl="/assets/my-farms/2.png"
            href="/farmer-dashboard/my-farms/farm-branches/branch-details"
          />
          <BranchFarmCard
            branchName="Ibadan Branch"
            farmName="Farmfundr Farm"
            address="87, Ringroad, Ibadan, Nigeria."
            projectsCount="Projects- 7"
            openingHours="Open 9am- Close 6pm"
            status="Active"
            imageUrl="/assets/my-farms/2.png"
            href="/farmer-dashboard/my-farms/farm-branches/branch-details"
          />
        </div>
      </main>
    </DashboardLayout>
  );
};

export default FarmBranches;
