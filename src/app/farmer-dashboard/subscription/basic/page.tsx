import DashboardLayout from "@/app/components/common/dashboardLayout";
import { Topbar } from "@/app/components/common/dashboard/topBar";
import BillingFrequency from "@/app/components/dashboard/subscription/billingFrequency";

const BasicPlan = () => {
  return (
    <DashboardLayout>
      <Topbar overview="Wallet" />

      {/* <BillingFrequency /> */}
    </DashboardLayout>
  );
};

export default BasicPlan;
