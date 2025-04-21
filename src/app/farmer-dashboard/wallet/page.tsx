import DashboardLayout from "../../components/common/dashboardLayout";
import { Topbar } from "../../components/common/dashboard/topBar";

const Wallet = () => {
  return (
    <DashboardLayout>
      <Topbar overview="Wallet" />

      <main className="px-10 py-8 bg-gray-50 overflow-auto">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-800">
            Wallet section
          </h2>
          <p className="text-gray-600 mt-2">You have no farm created yet</p>
        </div>
      </main>
    </DashboardLayout>
  );
};

export default Wallet;
