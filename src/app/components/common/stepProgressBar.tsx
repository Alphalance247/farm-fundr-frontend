"use client";

interface StepProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const StepProgressBar: React.FC<StepProgressBarProps> = ({ currentStep, totalSteps }) => {
  return (
    <div className="mb-6">
      <p className="text-xs text-[#303030] font-poppinsSemiBold text-center mb-2">
        Step {currentStep}/{totalSteps}
      </p>
      <div className="flex items-center justify-center">
        <div className="flex items-center space-x-2">
          {Array.from({ length: totalSteps }, (_, index) => {
            const stepNumber = index + 1;
            const isCompleted = stepNumber < currentStep;
            const isCurrent = stepNumber === currentStep;
            // Show all segments filled when on the last step (step 4)
            const isLastStep = currentStep === totalSteps;
            
            return (
              <div
                key={stepNumber}
                className={`w-40 h-1 rounded-full ${
                  isCompleted || isCurrent || isLastStep ? "bg-[#51F4A6]" : "bg-[#E2E2E2]"
                }`}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StepProgressBar;
