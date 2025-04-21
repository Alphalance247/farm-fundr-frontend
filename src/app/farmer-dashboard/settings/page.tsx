import DashboardLayout from "../../components/common/dashboardLayout";
import { Topbar } from "../../components/common/dashboard/topBar";

const Setting = () => {
  return (
    <DashboardLayout>
      <Topbar overview="Settings" />

      <main className="px-10 py-8 bg-gray-50 overflow-auto">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-800">
            settings section
          </h2>
          <p className="text-gray-600 mt-2">NILLLLLLL</p>
        </div>
      </main>
    </DashboardLayout>
  );
};

export default Setting;
