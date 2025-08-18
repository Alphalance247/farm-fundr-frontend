import DashboardLayout from "../../components/common/dashboardLayout";

const FarmerDashboard = () => {
  return (
    <DashboardLayout>
      <main className="px-10 py-8 bg-gray-50 overflow-auto">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-800">Messages</h2>
          <p className="text-gray-600 mt-2">
            You have no new messages at the moment.
          </p>
        </div>
      </main>
    </DashboardLayout>
  );
};

export default FarmerDashboard;
