import Heading from "../components/common/dashboard/heading";
import { Topbar } from "../components/common/dashboard/topBar";
import DashboardLayout from "../components/common/dashboardLayout";
import ProtectedRoute from "../components/common/ProtectedRoute/protectedRoute";

const InvestorDashboardPage = () => {
  return (
    <ProtectedRoute requiredUserType="investor">
      <DashboardLayout>
        <Topbar overview="overview" />

        <main className="px-10 py-8 bg-gray-50 overflow-auto xl:px-4 xl:py-6 lg:mb-4">
          <Heading overview="Overview" />
          <div>
            <h1>Investor Dashboard</h1>
          </div>
        </main>
      </DashboardLayout>
    </ProtectedRoute>
  );
};

export default InvestorDashboardPage;
