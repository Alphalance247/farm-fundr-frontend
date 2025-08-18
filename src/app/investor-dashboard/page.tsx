import Heading from "../components/common/dashboard/heading";
import InvestorLayout from "../components/common/investor/investorsLayout";

const InvestorDashboardPage = () => {
  return (
    // <ProtectedRoute requiredUserType="investor">
    <InvestorLayout>
      <main className="px-10 py-8 bg-gray-50 overflow-auto xl:px-4 xl:py-6 lg:mb-4">
        <Heading overview="Overview" />
        <div>
          <h1>Investor Dashboard</h1>
        </div>
      </main>
    </InvestorLayout>
    // </ProtectedRoute>
  );
};

export default InvestorDashboardPage;
