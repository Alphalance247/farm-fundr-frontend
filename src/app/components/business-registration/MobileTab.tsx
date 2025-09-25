"use client";
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import BusinessInfoStep from './BusinessInfoStep';
import ProprietorStep from './ProprietorStep';
import ReviewStep from './ReviewStep';
import PaymentStep from './PaymentStep';
import type {
  BusinessFormData,
  ProprietorFormData,
} from './types';

interface Tab {
  id: number;
  title: string;
  isCompleted: boolean;
  isActive: boolean;
  isOpen: boolean;
}

interface MobileTabProps {
  currentStep: number;
  completedSteps: number[];
  businessFormData: BusinessFormData;
  proprietorFormData: ProprietorFormData;
  onBusinessFormDataChange: (data: BusinessFormData) => void;
  onProprietorFormDataChange: (data: ProprietorFormData) => void;
  onStepChange: (stepId: number) => void;
  onNextStep: () => void;
  onPreviousStep: () => void;
  onEditStep: (stepId: number) => void;
  onCompleteRegistration: () => void;
}

const MobileTab: React.FC<MobileTabProps> = ({
  currentStep,
  completedSteps,
  businessFormData,
  proprietorFormData,
  onBusinessFormDataChange,
  onProprietorFormDataChange,
  onStepChange,
  onNextStep,
  onPreviousStep,
  onEditStep,
  onCompleteRegistration,
}) => {
  const [openSteps, setOpenSteps] = useState<number[]>([currentStep]);

  const tabs: Tab[] = [
    {
      id: 1,
      title: "Business Information",
      isCompleted: completedSteps.includes(1),
      isActive: currentStep === 1,
      isOpen: openSteps.includes(1),
    },
    {
      id: 2,
      title: "Proprietor/Partner",
      isCompleted: completedSteps.includes(2),
      isActive: currentStep === 2,
      isOpen: openSteps.includes(2),
    },
    {
      id: 3,
      title: "Review",
      isCompleted: completedSteps.includes(3),
      isActive: currentStep === 3,
      isOpen: openSteps.includes(3),
    },
    {
      id: 4,
      title: "Payment",
      isCompleted: completedSteps.includes(4),
      isActive: currentStep === 4,
      isOpen: openSteps.includes(4),
    },
  ];

  const handleStepClick = (stepId: number) => {
    setOpenSteps((prev) =>
      prev.includes(stepId)
        ? prev.filter((id) => id !== stepId)
        : [...prev, stepId]
    );
    onStepChange(stepId);
  };

  const handleStepNext = () => {
    setOpenSteps((prev) => prev.filter((id) => id !== currentStep));
    onNextStep();
    setTimeout(() => {
      const nextStep = currentStep + 1;
      if (nextStep <= 4) {
        setOpenSteps((prev) => [...prev, nextStep]);
      }
    }, 100);
  };

  const renderStepContent = (stepId: number) => {
    switch (stepId) {
      case 1:
        return (
          <BusinessInfoStep
            formData={businessFormData}
            onFormDataChange={onBusinessFormDataChange}
            onNext={handleStepNext}
            onBack={onPreviousStep}
            currentStep={1}
            totalSteps={4}
          />
        );
      case 2:
        return (
          <ProprietorStep
            formData={proprietorFormData}
            onFormDataChange={onProprietorFormDataChange}
            onNext={handleStepNext}
            onBack={onPreviousStep}
            currentStep={2}
            totalSteps={4}
          />
        );
      case 3:
        return (
          <ReviewStep
            onNext={handleStepNext}
            onBack={onPreviousStep}
            onEditStep={onEditStep}
            currentStep={3}
            totalSteps={4}
          />
        );
      case 4:
        return (
          <PaymentStep
            onBack={onPreviousStep}
            onComplete={onCompleteRegistration}
            currentStep={4}
            totalSteps={4}
          />
        );
      default:
        return null;
    }
  };
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      {tabs.map((tab, index) => (
        <div key={tab.id}>
            <div
              className="p-4 cursor-pointer flex items-center justify-between transition-colors"
              onClick={() => handleStepClick(tab.id)}
            >
              <div className="flex items-center">
                <h3 className="font-medium text-lg text-[#2D865B]">
                  {tab.title}
                </h3>
              </div>
              <div className="flex items-center space-x-2">
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${
                    tab.isCompleted
                      ? "bg-[#4CAF50] text-white"
                      : "border-2 border-gray-300"
                  }`}
                >
                  {tab.isCompleted ? "✓" : ""}
                </div>
                {tab.isOpen ? (
                  <FaChevronUp className="w-4 h-4 text-gray-600" />
                ) : (
                  <FaChevronDown className="w-4 h-4 text-gray-600" />
                )}
              </div>
            </div>

          {index < tabs.length - 1 && (
            <div className="border-b border-[#4CAF50] mx-4"></div>
          )}

          {tab.isOpen && (
            <div className=" bg-white">
              <div className="p-4">
                {renderStepContent(tab.id)}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MobileTab;