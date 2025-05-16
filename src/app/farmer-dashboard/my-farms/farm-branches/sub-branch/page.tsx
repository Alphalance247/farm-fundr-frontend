import Card from "@/app/components/common/card";
import { Topbar } from "@/app/components/common/dashboard/topBar";
import DashboardLayout from "@/app/components/common/dashboardLayout";
import FarmHeadingOverview from "@/app/components/dashboard/my-farms/farmHeadingOverview";

const SubBranch = () => {
  return (
    <DashboardLayout>
      <Topbar overview="My farm" />

      <main className="px-10 py-10 bg-gray-50 overflow-auto">
        <FarmHeadingOverview
          farmName="Lagos Branch Project"
          overview="Overview of Lagos Branch Projects(6)"
        />

        <div className="grid grid-cols-3 gap-x-10 gap-y-10 mt-10">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </main>
    </DashboardLayout>
  );
};

export default SubBranch;
