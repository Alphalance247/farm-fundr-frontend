import ProtectedRoute from "@/app/components/common/ProtectedRoute/protectedRoute";
import DashboardLayout from "../../components/common/dashboardLayout";
import SubscribeCard from "@/app/components/dashboard/subscription/subscribeCard";

interface subscriceCardData {
  planName: string;
  description: string;
  planAmount: string;
  planOverviewImg: string;
  planOfferDescrioption: string;
  planFeatures: string;
  featuringSubtitle: string;
  planBenefit: string[];
  descriptionAvailable: boolean;
  bgColor: string;
  textColor: string;
  bgColor2: string;
  border: string;
  borderColor2: string;
  textColor2: string;
  iconColor: string;
  link: string;
  id: string;
}

const Subscription = () => {
  const subscriceCardData: subscriceCardData[] = [
    {
      id: "1",
      planName: "Basic plan",
      descriptionAvailable: true,
      description: "Popular",
      planAmount: "Price: N3,999 / Month",
      planOverviewImg: "/assets/DashBoard/subscription/basic.svg",
      planOfferDescrioption: "Enjoy 10 days free trial",
      planFeatures: "Features",
      featuringSubtitle: "What You Get with the Basic Plan",
      link: "/farmer-dashboard/subscription/basic",
      bgColor: "bg-[#ECF2FF]",
      textColor: "text-[#239BB5]",
      bgColor2: "bg-[#C5D5FF]",
      border: "border-[#C5D5FF]",
      borderColor2: "border-[#4379FF]",
      textColor2: "text-[#3056B5]",
      iconColor: "text-[#3056B5]",
      planBenefit: [
        "Build up to 3 farms",
        "Showcase 10 published projects",
        "Share your farm with 3 unique links",
        "Highlight your work on 3 public farm pages",
        "Customize your farms to match your style",
        "Access to farmpady community",
        "Get support from our friendly FarmPady Team",
        "Connect and grow with the FarmPady Community",
      ],
    },
    {
      planName: "Standard plan",
      id: "2",
      description: "",
      descriptionAvailable: false,
      planAmount: "price: N6,599 / Month",
      planOverviewImg: "/assets/DashBoard/subscription/standard.svg",
      planOfferDescrioption: "Enjoy all Basic plan features for 10 days",
      planFeatures: "Features",
      featuringSubtitle:
        "What You Get with the Standard Plan Everything in the Basic Plan, plus:",
      bgColor: "bg-[#EEFEF6]",
      link: "/farmer-dashboard/subscription/standard",
      textColor: "text-[#226646]",
      bgColor2: "bg-[#C9FCE3]",
      border: "border-[#51F4A6]",
      borderColor2: "border-[#51F4A6]",
      textColor2: "text-[#3AAD76]",
      iconColor: "text-[#3AAD76]",
      planBenefit: [
        "Create unlimited farms",
        "Publish unlimited projects",
        "Share your farms with unlimited links",
        "Customize your farms with more flexibility",
        "Be among the first to use PadyAI (coming soon)",
        "Enjoy priority support from our FarmPady Team",
        "Stay connected through the FarmPady Community",
      ],
    },
  ];
  return (
    <ProtectedRoute requiredUserType="farmer">
      <DashboardLayout>
        <main className="px-10 md:px-4 lg:px-8 py-8 bg-gray-50 overflow-auto">
          <div className=" mb-10">
            <h2 className="text-xl font-poppinsSemiBold text-[#5F5F5F]">
              Subscription
            </h2>
            <p className="text-gray-600 mt-3">
              We’ve got a very good plan for you
            </p>
          </div>

          <div className="grid grid-cols-2 max-w-[80%] lg:max-w-full md:grid-cols-1 md:gap-y-6 gap-x-10  mx-auto">
            {subscriceCardData.map((items) => (
              <SubscribeCard
                key={items?.id}
                id={items?.id}
                planName={items?.planName}
                description={items?.description}
                planAmount={items?.planAmount}
                planOverviewImg={items?.planOverviewImg}
                planOfferDescrioption={items?.planOfferDescrioption}
                planFeatures={items?.planFeatures}
                featuringSubtitle={items?.featuringSubtitle}
                planBenefit={items?.planBenefit}
                descriptionAvailable={items?.descriptionAvailable}
                bgColor={items?.bgColor}
                textColor={items?.textColor}
                bgColor2={items?.bgColor2}
                border={items?.border}
                borderColor2={items?.borderColor2}
                textColor2={items?.textColor2}
                iconColor={items?.iconColor}
                link={items?.link}
              />
            ))}
          </div>
        </main>
      </DashboardLayout>
    </ProtectedRoute>
  );
};

export default Subscription;
