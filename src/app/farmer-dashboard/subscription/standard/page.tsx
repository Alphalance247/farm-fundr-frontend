import DashboardLayout from "@/app/components/common/dashboardLayout";
import { Topbar } from "@/app/components/common/dashboard/topBar";
import BillingFrequency from "@/app/components/dashboard/subscription/billingFrequency";
interface SubTier {
  planType: string;
  prices: string;
  offer: string;
}

interface data {
  heading: string;
  subhead: string;
  subTier: SubTier[];
}

const StandardPlan = () => {
  const data: data[] = [
    {
      heading: "",
      subhead: "",
      subTier: [
        {
          planType: "Pay monthly",
          prices: "4,500",
          offer: "",
        },
        {
          planType: "Pay quarterly",
          prices: "10,530",
          offer: "Save 22%",
        },
        {
          planType: "Pay Bi-yearly",
          prices: "21,750",
          offer: "Save 33%",
        },
        {
          planType: "Pay yearly",
          prices: "36,180",
          offer: "Save 50%",
        },
      ],
    },
  ];
  return (
    <DashboardLayout>
      <Topbar overview="Wallet" />

      {data.map((item, i) => (
        <BillingFrequency
          heading="Billings"
          subhead="Standard Plan"
          subscriptionTier={item?.subTier}
          key={i}
        />
      ))}
    </DashboardLayout>
  );
};

export default StandardPlan;
