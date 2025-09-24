"use client";
import Image from "next/image";
import caution from "../../../../public/assets/caution.png";
import { useRouter } from "next/navigation";

interface Step {
  id: number;
  title: string;
  path: string;
}

interface StepSidebarProps {
  currentStep: number;
  totalSteps: number;
}

const StepSidebar: React.FC<StepSidebarProps> = ({ currentStep }) => {
  const router = useRouter();
  const steps: Step[] = [
    {
      id: 1,
      title: "Business Information",
      path: "/farmer-dashboard/business-registration/step-1"
    },
    {
      id: 2,
      title: "Proprietor/Partners",
      path: "/farmer-dashboard/business-registration/step-2"
    },
    {
      id: 3,
      title: "Review",
      path: "/farmer-dashboard/business-registration/step-3"
    },
    {
      id: 4,
      title: "Payment",
      path: "/farmer-dashboard/business-registration/step-4"
    }
  ];

  const getStepStatus = (stepId: number) => {
    if (stepId === currentStep) {
      return "current";
    } else {
      return "inactive";
    }
  };

  const getStepStyles = (status: string) => {
    switch (status) {
      case "current":
        return {
          container: "bg-[#EEFEF6] border-2 border-[#51F4A6] cursor-pointer",
          text: "text-[#2D865B] font-poppinsSemiBold"
        };
      case "inactive":
        return {
          container: "bg-[#FCFCFC] border border-[#E2E2E2] cursor-pointer",
          text: "text-[#7C7C7C] font-poppinsRegular"
        };
      default:
        return {
          container: "bg-[#FCFCFC] border border-[#E2E2E2] cursor-pointer",
          text: "text-[#7C7C7C] font-poppinsRegular"
        };
    }
  };

  const handleStepClick = (step: Step, status: string) => {
    if (status === "inactive") {
      return;
    }
    router.push(step.path);
  };

  return (
    <div className="w-80 mt-52 flex-shrink-0">
      <div className="bg-white border-[#E2E2E2] border rounded-3xl p-6 shadow-sm">
        <div className="relative mb-8">
          {steps.map((step, index) => {
            const status = getStepStatus(step.id);
            const styles = getStepStyles(status);
            const isLastStep = index === steps.length - 1;

            return (
              <div key={step.id} className="relative">
                <div 
                  className={`${styles.container} rounded-xl p-4 mb-2`}
                  onClick={() => handleStepClick(step, status)}
                >
                  <span className={`${styles.text} text-sm block`}>
                    {step.title}
                  </span>
                </div>
                {!isLastStep && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-6 bg-gray-300 top-full"></div>
                )}
                {index < steps.length - 1 && <div className="mt-6"></div>}
              </div>
            );
          })}
        </div>

        <div className="bg-[#ECF2FF] border border-[#C5D5FF] rounded-3xl p-6 ">
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
      <div className="bg-[#FFFAE6] mt-6 border border-[#FEF0B0] rounded-3xl p-6 ">
        <div className="">
          <div className="">
            <Image src={caution} alt="Business Registration" width={40} />
          </div>
          <div className="flex mt-4 w-full flex-col gap-2">
            <p className="text-[#7C7C7C] font-poppinsSemiBold  text-sm">
              Important
            </p>
            <p className="text-[#7C7C7C] font-poppinsRegular  text-xs">
              Support Email:{" "}
              <span className="font-bold text-xs">
                support@norebase.com
              </span>
            </p>
            <p className="text-[#7C7C7C] font-poppinsRegular  text-xs">
              Support Number:{" "}
              <span className="font-bold text-xs"> +2349012345678</span>
            </p>
            <p className="text-[#7C7C7C] font-poppinsRegular  text-xs">
              Whatsapp:{" "}
              <span className="font-bold text-xs">  +2349012345678</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepSidebar;
