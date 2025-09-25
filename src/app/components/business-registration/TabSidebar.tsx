"use client";
import Image from "next/image";
import caution from "../../../../public/assets/caution.png";

interface Tab {
  id: number;
  title: string;
  isCompleted: boolean;
  isActive: boolean;
}

interface TabSidebarProps {
  currentStep: number;
  completedSteps: number[];
  onStepClick: (stepId: number) => void;
}

const TabSidebar: React.FC<TabSidebarProps> = ({
  currentStep,
  completedSteps,
  onStepClick,
}) => {
  const tabs: Tab[] = [
    {
      id: 1,
      title: "Business Information",
      isCompleted: completedSteps.includes(1),
      isActive: currentStep === 1,
    },
    {
      id: 2,
      title: "Proprietor/Partners",
      isCompleted: completedSteps.includes(2),
      isActive: currentStep === 2,
    },
    {
      id: 3,
      title: "Review",
      isCompleted: completedSteps.includes(3),
      isActive: currentStep === 3,
    },
    {
      id: 4,
      title: "Payment",
      isCompleted: completedSteps.includes(4),
      isActive: currentStep === 4,
    },
  ];

  const getTabStyles = (tab: Tab) => {
    if (tab.isActive) {
      return {
        container: "bg-[#EEFEF6] border-2 border-[#51F4A6] cursor-pointer",
        text: "text-[#2D865B] font-poppinsSemiBold",
      };
    } else if (tab.isCompleted) {
      return {
        container: "bg-[#E8F5E8] border border-[#4CAF50] cursor-pointer",
        text: "text-[#2E7D32] font-poppinsSemiBold",
      };
    } else {
      return {
        container: "bg-[#FCFCFC] border border-[#E2E2E2] cursor-pointer",
        text: "text-[#7C7C7C] font-poppinsRegular",
      };
    }
  };

  const handleTabClick = (tab: Tab) => {
    if (tab.isActive || tab.isCompleted) {
      onStepClick(tab.id);
    }
  };

  return (
    <div className="w-80 mt-52 flex-shrink-0">
      <div className="bg-white border-[#E2E2E2] border rounded-3xl p-6 shadow-sm">
        <div className="relative mb-8">
          {tabs.map((tab, index) => {
            const styles = getTabStyles(tab);
            const isLastTab = index === tabs.length - 1;

            return (
              <div key={tab.id} className="relative">
                <div
                  className={`${styles.container} rounded-xl p-4 mb-2`}
                  onClick={() => handleTabClick(tab)}
                >
                  <span className={`${styles.text} text-sm block`}>
                    {tab.title}
                  </span>
                </div>
                {!isLastTab && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-6 bg-gray-300 top-full"></div>
                )}
                {index < tabs.length - 1 && <div className="mt-6"></div>}
              </div>
            );
          })}
        </div>

        <div className="bg-[#ECF2FF] border border-[#C5D5FF] rounded-3xl p-6">
          <div className="bg-[#FCFCFC] border border-[#C5D5FF] rounded-3xl p-6">
            <div className="bg-[#E0EFFF] rounded-lg p-2 mb-3">
              <div className="text-[#3056B5] font-poppinsRegular text-center text-xs">
                Total Price
              </div>
            </div>
            <div className="text-[#5F5F5F] font-poppinsBold text-4xl text-center">
              ₦15,000.00
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FFFAE6] mt-6 border border-[#FEF0B0] rounded-3xl p-6">
        <div className="">
          <div className="">
            <Image src={caution} alt="Business Registration" width={40} />
          </div>
          <div className="flex mt-4 w-full flex-col gap-2">
            <p className="text-[#7C7C7C] font-poppinsSemiBold text-sm">
              Important
            </p>
            <p className="text-[#7C7C7C] font-poppinsRegular text-xs">
              Support Email:{" "}
              <span className="font-bold text-xs">support@norebase.com</span>
            </p>
            <p className="text-[#7C7C7C] font-poppinsRegular text-xs">
              Support Number:{" "}
              <span className="font-bold text-xs"> +2349012345678</span>
            </p>
            <p className="text-[#7C7C7C] font-poppinsRegular text-xs">
              Whatsapp:{" "}
              <span className="font-bold text-xs"> +2349012345678</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabSidebar;
