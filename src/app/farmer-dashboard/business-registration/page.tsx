"use client";
import { useState } from "react";
import DashboardLayout from "../../components/common/dashboardLayout";
import GoBackBtn from "../../components/common/goBack";
import Label from "../../components/common/label";
import Input from "../../components/common/input";
import Button from "../../components/common/Buttons";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import TabSidebar from "../../components/business-registration/TabSidebar";
import MobileTab from "../../components/business-registration/MobileTab";
import PaymentStep from "../../components/business-registration/PaymentStep";
import type {
  BusinessFormData,
  ProprietorFormData,
  InitialFormData,
} from "../../components/business-registration/types";
import Image from "next/image";
import businessInfo from "../../../../public/assets/image 96.png";
import caution from "../../../../public/assets/caution.png";
import BusinessInfoStep from "@/app/components/business-registration/BusinessInfoStep";
import ProprietorStep from "@/app/components/business-registration/ProprietorStep";
import ReviewStep from "@/app/components/business-registration/ReviewStep";

const BusinessRegistration = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [initialErrors, setInitialErrors] = useState<Record<string, string>>(
    {}
  );
  const [isImportantExpanded, setIsImportantExpanded] = useState(false);
  const [initialFormData, setInitialFormData] = useState<InitialFormData>({
    country: "Nigeria",
    businessName: "FarmPady",
  });

  const [businessFormData, setBusinessFormData] = useState<BusinessFormData>({
    proposedName1: "",
    proposedName2: "",
    businessCategory: "Agriculture",
    typeOfBusiness: "",
    specificBusinessCategory: "",
    businessEmail: "",
    businessPhone: "",
    businessDescription: "",
  });

  const [proprietorFormData, setProprietorFormData] =
    useState<ProprietorFormData>({
      firstName: "",
      middleName: "",
      lastName: "",
      dateOfBirth: "",
      occupation: "",
      gender: "",
      email: "",
      phoneNumber: "",
      meansOfId: "",
      idNumber: "",
      idDocument: null,
      passportPhoto: null,
      signature: null,

      residentialCountry: "",
      residentialState: "",
      residentialLGA: "",
      residentialTown: "",
      residentialPostalCode: "",
      residentialStreetAddress: "",

      sameAsResidential: false,
      postalCountry: "",
      postalState: "",
      postalLGA: "",
      postalTown: "",
      postalPostalCode: "",
      postalStreetAddress: "",
    });

  const handleInitialInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setInitialFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (initialErrors[name]) {
      setInitialErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSaveAndContinue = () => {
    const newErrors: Record<string, string> = {};

    if (!initialFormData.country) {
      newErrors.country = "Country selection is required";
    }
    if (!initialFormData.businessName.trim()) {
      newErrors.businessName = "Business name is required";
    }

    setInitialErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      toast.success("Business registration details saved successfully!");
      setCurrentStep(1);
    }
  };

  const handleStepChange = (stepId: number) => {
    setCurrentStep(stepId);
  };

  const handleNextStep = () => {
    const nextStep = currentStep + 1;
    setCompletedSteps((prev) => [...prev, currentStep]);
    setCurrentStep(nextStep);
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      setCurrentStep(0);
    }
  };

  const handleEditStep = (stepId: number) => {
    setCurrentStep(stepId);
  };

  const handleCompleteRegistration = () => {
    toast.success("Business registration completed successfully!");
    router.push("/farmer-dashboard");
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <BusinessInfoStep
            formData={businessFormData}
            onFormDataChange={setBusinessFormData}
            onNext={handleNextStep}
            onBack={handlePreviousStep}
            currentStep={1}
            totalSteps={4}
          />
        );
      case 2:
        return (
          <ProprietorStep
            formData={proprietorFormData}
            onFormDataChange={setProprietorFormData}
            onNext={handleNextStep}
            onBack={handlePreviousStep}
            currentStep={2}
            totalSteps={4}
          />
        );
      case 3:
        return (
          <ReviewStep
            onNext={handleNextStep}
            onBack={handlePreviousStep}
            onEditStep={handleEditStep}
            currentStep={3}
            totalSteps={4}
          />
        );
      case 4:
        return (
          <PaymentStep
            onBack={handlePreviousStep}
            onComplete={handleCompleteRegistration}
            currentStep={4}
            totalSteps={4}
          />
        );
      default:
        return null;
    }
  };
  if (currentStep === 0) {
    return (
      <DashboardLayout>
        <main className="md:px-4 px-10 py-8 md:py-4 bg-gray-50 overflow-auto pb-12">
          <div className="mb-6">
            <GoBackBtn href="/farmer-dashboard" />
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <div className="mb-4">
                <Image
                  src={businessInfo}
                  alt="Farm illustration"
                  width={120}
                  height={80}
                  className="mx-auto"
                />
              </div>
              <h1 className="text-3xl block md:hidden font-aristoBold text-[#303030] mb-2">
                Hello Farmer Michael, Tell Us About Your Business
              </h1>
              <p className="text-sm text-[#7C7C7C] block md:hidden font-poppinsRegular">
                Please tell us a little about the type of business you run
              </p>
              <h1 className="text-3xl hidden md:block font-aristoBold text-[#303030] mb-2">
                Hello Farmer Michael
              </h1>
              <p className="text-sm text-[#7C7C7C] hidden md:block font-poppinsRegular">
                Tell Us About the type of business you run
              </p>
            </div>

            <div className="bg-white shadow rounded-lg md:p-4 p-6">
              <div className="bg-[#EEFEF6] rounded-lg md:p-4 p-6 mb-8 border border-[#226646]">
                <h3 className="text-xl font-aristoBold text-[#5F5F5F] mb-3">
                  Business Registration
                </h3>
                <p className="text-sm text-[#7C7C7C] leading-normal font-poppinsRegular mb-4">
                  A business name is the name under which a business operates
                  and is registered. It serves as the legal identity of the
                  business entity and is used for official purposes such as
                  contracts, banking, and regulatory compliance. The Companies
                  and Allied Matters Act (CAMA) 2020 governs business
                  registration in Nigeria.
                </p>
                <Button variant="subprimary" size="small" className="text-sm">
                  Read More
                </Button>
              </div>

              <div>
                <div className="space-y-6 md:space-y-4">
                  <div>
                    <Label>
                      Where Do You Want To Incorporate This Farm Business?
                    </Label>
                    <select
                      name="country"
                      value={initialFormData.country}
                      onChange={handleInitialInputChange}
                      className={`w-full border bg-[#F6F6F6] focus:ring-[#51F4A6] focus:border-[#51F4A6] border-[#E0E0E0] rounded-md text-sm p-4 focus:outline-none focus:ring-1 text-[#7C7C7C] font-poppinsRegular ${
                        initialErrors.country
                          ? "border-red-500 focus:border-red-500"
                          : ""
                      }`}
                    >
                      <option value="Nigeria">Nigeria</option>
                      <option value="Ghana">Ghana</option>
                      <option value="Kenya">Kenya</option>
                      <option value="South Africa">South Africa</option>
                    </select>
                    {initialErrors.country && (
                      <p className="text-red-500 text-xs mt-1 font-poppinsRegular">
                        {initialErrors.country}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label>Proposed Farm Business Name</Label>
                    <Input
                      name="businessName"
                      type="text"
                      value={initialFormData.businessName}
                      placeholder="Enter your farm business name"
                      variant="tertiary"
                      onChange={handleInitialInputChange}
                      error={initialErrors.businessName}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full justify-center mt-8 md:mt-4">
              <Button
                variant="primary"
                size="medium"
                onClick={handleSaveAndContinue}
                className="flex items-center justify-center gap-2 w-full"
              >
                Save And Continue
                <FaArrowRightLong size={16} />
              </Button>
            </div>
          </div>
        </main>
      </DashboardLayout>
    );
  }
  return (
    <DashboardLayout>
      <main className="md:px-2 px-10 py-8 bg-gray-50 min-h-screen">
        <div className="mb-6">
          <GoBackBtn href="/farmer-dashboard" />
        </div>
        <div className="hidden pb-8 lg:block max-w-4xl mx-auto">
          <div className="mb-4">
            <div className="bg-[#FFFAE6] mt-6 border border-[#FEF0B0] rounded-xl p-2">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setIsImportantExpanded(!isImportantExpanded)}
              >
                <div className="flex items-center gap-3">
                  <Image src={caution} alt="Business Registration" width={40} />
                  <p className="text-[#7C7C7C] font-poppinsSemiBold text-sm">
                    Important
                  </p>
                </div>
                {isImportantExpanded ? (
                  <FaChevronUp className="text-[#7C7C7C]" size={16} />
                ) : (
                  <FaChevronDown className="text-[#7C7C7C]" size={16} />
                )}
              </div>
              {isImportantExpanded && (
                <div className="flex mt-4 w-full flex-col gap-2">
                  <p className="text-[#7C7C7C] font-poppinsRegular text-xs">
                    Support Email:{" "}
                    <span className="font-bold text-xs">
                      support@norebase.com
                    </span>
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
              )}
            </div>
          </div>
          <MobileTab
            currentStep={currentStep}
            completedSteps={completedSteps}
            businessFormData={businessFormData}
            proprietorFormData={proprietorFormData}
            onBusinessFormDataChange={setBusinessFormData}
            onProprietorFormDataChange={setProprietorFormData}
            onStepChange={handleStepChange}
            onNextStep={handleNextStep}
            onPreviousStep={handlePreviousStep}
            onEditStep={handleEditStep}
            onCompleteRegistration={handleCompleteRegistration}
          />
          <div className="my-6">
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
        </div>
        <div className="lg:hidden flex gap-8 max-w-7xl mx-auto">
          <TabSidebar
            currentStep={currentStep}
            completedSteps={completedSteps}
            onStepClick={handleStepChange}
          />
          {renderCurrentStep()}
        </div>
      </main>
    </DashboardLayout>
  );
};

export default BusinessRegistration;
