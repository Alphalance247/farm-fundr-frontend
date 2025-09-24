"use client";
import { useState } from "react";
import DashboardLayout from "../../components/common/dashboardLayout";
import GoBackBtn from "../../components/common/goBack";
import Label from "../../components/common/label";
import Input from "../../components/common/input";
import Button from "../../components/common/Buttons";
import { FaArrowRightLong } from "react-icons/fa6";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import TabSidebar from "../../components/business-registration/TabSidebar";
import BusinessInfoStep from "../../components/business-registration/BusinessInfoStep";
import ProprietorStep from "../../components/business-registration/ProprietorStep";
import ReviewStep from "../../components/business-registration/ReviewStep";
import PaymentStep from "../../components/business-registration/PaymentStep";

const BusinessRegistration = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [initialFormData, setInitialFormData] = useState({
    country: "Nigeria",
    businessName: "FarmPady",
  });

  // Business Info Step Data
  const [businessFormData, setBusinessFormData] = useState({
    proposedName1: "",
    proposedName2: "",
    businessCategory: "Agriculture",
    typeOfBusiness: "",
    specificBusinessCategory: "",
    businessEmail: "",
    countryCode: "NG +234",
    businessPhone: "",
    businessDescription: "",
  });

  // Proprietor Step Data
  const [proprietorFormData, setProprietorFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dateOfBirth: "",
    occupation: "",
    gender: "",
    email: "",
    countryCode: "NG +234",
    phoneNumber: "",
    meansOfId: "",
    idNumber: "",
    idDocument: null as File | null,
    passportPhoto: null as File | null,
    signature: null as File | null,
    // Residential Address
    residentialCountry: "",
    residentialState: "",
    residentialLGA: "",
    residentialTown: "",
    residentialPostalCode: "",
    residentialStreetAddress: "",
    // Postal Address
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
  };

  const handleSaveAndContinue = () => {
    const errors = [];

    if (!initialFormData.country) {
      errors.push("Country selection is required");
    }
    if (!initialFormData.businessName.trim()) {
      errors.push("Business name is required");
    }

    if (errors.length > 0) {
      toast.error(errors.join("\n"));
    } else {
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
      // Go back to initial form
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
            onNext={handleNextStep}
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

  // Show initial form if currentStep is 0
  if (currentStep === 0) {
    return (
      <DashboardLayout>
        <main className="px-10 py-8 bg-gray-50 overflow-auto pb-12">
          <div className="mb-6">
            <GoBackBtn href="/farmer-dashboard" />
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-aristoBold text-[#303030] mb-2">
                Hello Farmer Michael, Tell Us About Your Business
              </h1>
              <p className="text-sm text-[#7C7C7C] font-poppinsRegular">
                Please tell us a little about the type of business you run
              </p>
            </div>

            <div className="bg-white shadow rounded-lg p-6">
              <div className="bg-[#EEFEF6] rounded-lg p-6 mb-8 border border-[#226646]">
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
                <div className="space-y-6">
                  <div>
                    <Label>
                      Where Do You Want To Incorporate This Farm Business?
                    </Label>
                    <select
                      name="country"
                      value={initialFormData.country}
                      onChange={handleInitialInputChange}
                      className="w-full border bg-[#F6F6F6] focus:ring-[#51F4A6] focus:border-[#51F4A6] border-[#E0E0E0] rounded-md text-sm p-4 focus:outline-none focus:ring-1 text-[#7C7C7C] font-poppinsRegular"
                    >
                      <option value="Nigeria">Nigeria</option>
                      <option value="Ghana">Ghana</option>
                      <option value="Kenya">Kenya</option>
                      <option value="South Africa">South Africa</option>
                    </select>
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
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full justify-center mt-8">
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

  // Show tab-based interface for steps 1-4
  return (
    <DashboardLayout>
      <main className="px-10 py-8 bg-gray-50 min-h-screen">
        <div className="mb-6">
          <GoBackBtn href="/farmer-dashboard" />
        </div>
        <div className="flex gap-8 max-w-7xl mx-auto">
          <TabSidebar
            currentStep={currentStep}
            totalSteps={4}
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
