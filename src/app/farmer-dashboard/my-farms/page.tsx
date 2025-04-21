import DashboardLayout from "../../components/common/dashboardLayout";
import { Topbar } from "../../components/common/dashboard/topBar";

const MyFarms = () => {
  return (
    <DashboardLayout>
      <Topbar overview="My farm" />

      <main className="px-10 py-8 bg-gray-50 overflow-auto">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-800">My farm</h2>
          <p className="text-gray-600 mt-2">You have no farm created yet</p>
        </div>
      </main>
    </DashboardLayout>
  );
};

export default MyFarms;
