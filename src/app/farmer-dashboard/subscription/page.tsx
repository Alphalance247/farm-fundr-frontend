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
      planAmount: "N4,000/Per Month",
      planOverviewImg: "/assets/DashBoard/subscription/basic.svg",
      planOfferDescrioption: "Enjoy 10 days free trial",
      planFeatures: "Features",
      featuringSubtitle: "Basic plan features",
      link: "/farmer-dashboard/subscription/basic",
      bgColor: "bg-[#ECF2FF]",
      textColor: "text-[#239BB5]",
      bgColor2: "bg-[#C5D5FF]",
      border: "border-[#C5D5FF]",
      borderColor2: "border-[#4379FF]",
      textColor2: "text-[#3056B5]",
      iconColor: "text-[#3056B5]",
      planBenefit: [
        "3 farm Creation",
        "10 Published Projects",
        "2 Sharable farm Link",
        "Farm Customization",
        "FarmPady Team Support",
        "Access to farmpady community",
      ],
    },
    {
      planName: "Standard plan",
      id: "2",
      description: "",
      descriptionAvailable: false,
      planAmount: "N9,000/Per Month",
      planOverviewImg: "/assets/DashBoard/subscription/standard.svg",
      planOfferDescrioption: "Enjoy all standard plan features for 30 days",
      planFeatures: "Features",
      featuringSubtitle: "Everything in Basic plan features plus...",
      bgColor: "bg-[#EEFEF6]",
      link: "/farmer-dashboard/subscription/standard",
      textColor: "text-[#226646]",
      bgColor2: "bg-[#C9FCE3]",
      border: "border-[#51F4A6]",
      borderColor2: "border-[#51F4A6]",
      textColor2: "text-[#3AAD76]",
      iconColor: "text-[#3AAD76]",
      planBenefit: [
        "Unlimited farm Creation",
        "Unlimited Published Project",
        "Unlimited Sharable Farm Linkk",
        "Farm Customization",
        "FarmPady Team Support",
        "Access to farmpady community",
      ],
    },
  ];
  return (
    <DashboardLayout>
      <main className="px-10 py-8 bg-gray-50 overflow-auto">
        <div className=" mb-10">
          <h2 className="text-xl font-poppinsSemiBold text-[#5F5F5F]">
            Subscription
          </h2>
          <p className="text-gray-600 mt-3">
            We’ve got a very good plan for you
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-10 max-w-[80%] mx-auto">
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
  );
};

export default Subscription;
