"use client";
import { useState, useEffect } from "react";
import DashboardLayout from "../../../components/common/dashboardLayout";
import GoBackBtn from "../../../components/common/goBack";
import Button from "../../../components/common/Buttons";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Image from "next/image";
import businessInfo from "../../../../../public/assets/image 96.png";
import StepSidebar from "../../../components/common/stepSidebar";
import StepProgressBar from "../../../components/common/stepProgressBar";
import { MdModeEditOutline } from "react-icons/md";

const BusinessRegistrationStep3 = () => {
  const router = useRouter();
  const [businessData, setBusinessData] = useState({
    proposedName1: "",
    proposedName2: "",
    businessCategory: "",
    typeOfBusiness: "",
    specificBusinessCategory: "",
    businessEmail: "",
    countryCode: "",
    businessPhone: "",
    businessDescription: ""
  });

  const [proprietorData, setProprietorData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dateOfBirth: "",
    occupation: "",
    gender: "",
    email: "",
    countryCode: "",
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
    postalStreetAddress: ""
  });

  useEffect(() => {
    // Get data from localStorage (where we'll store it from previous steps)
    const storedBusinessData = localStorage.getItem('businessRegistrationData');
    const storedProprietorData = localStorage.getItem('proprietorRegistrationData');
    
    if (storedBusinessData) {
      setBusinessData(JSON.parse(storedBusinessData));
    }

    if (storedProprietorData) {
      setProprietorData(JSON.parse(storedProprietorData));
    }
  }, []);

  const handleSaveAndContinue = () => {
    toast.success("Information reviewed successfully!");
    router.push("/farmer-dashboard/business-registration/step-4");
  };

  const handleGoBack = () => {
    router.push("/farmer-dashboard/business-registration/step-2");
  };

  const handleEditBusiness = () => {
    router.push("/farmer-dashboard/business-registration/step-1");
  };

  const handleEditProprietor = () => {
    router.push("/farmer-dashboard/business-registration/step-2");
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  return (
    <DashboardLayout>
      <main className="px-10 py-8 bg-gray-50 min-h-screen">
        <div className="mb-6">
          <GoBackBtn href="/farmer-dashboard/business-registration/step-2" />
        </div>
        <div className="flex gap-8 max-w-7xl mx-auto">
          <StepSidebar currentStep={3} totalSteps={4} />
          <div className="flex-1 max-w-lg mx-auto">
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
              <h1 className="text-3xl font-aristoBold text-[#303030] mb-2">
                Review
              </h1>
              <p className="text-sm text-[#7C7C7C] font-poppinsRegular mb-4">
                Review your information carefully
              </p>
              <StepProgressBar currentStep={3} totalSteps={4} />
            </div>

            <div className="bg-white shadow rounded-lg p-6">
              {/* Business Information Section */}
              <div className="mb-8">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <h3 className="font-semibold text-[#121212]">
                    Business Information
                  </h3>
                  <Button
                    onClick={handleEditBusiness}
                    variant="subsecondary"
                    size="small"
                    className="flex text-[#5F5F5F] font-poppinsSemiBold text-sm !rounded-full items-center gap-2"
                  >
                    <span>Edit</span>
                    <MdModeEditOutline size={12} color="#2D865B" />
                  </Button>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-[#F0F0F0]">
                    <p className="text-sm text-[#5F5F5F] font-poppinsRegular">
                      Propose Name 1
                    </p>
                    <p className="text-sm text-[#5F5F5F] font-poppinsSemiBold">
                      {businessData.proposedName1}
                    </p>
                  </div>

                  <div className="flex justify-between items-center py-3 border-b border-[#F0F0F0]">
                    <p className="text-sm text-[#5F5F5F] font-poppinsRegular">
                Propose Name 2
                    </p>
                    <p className="text-sm text-[#5F5F5F] font-poppinsSemiBold">
                      {businessData.proposedName2}
                    </p>
                  </div>

                  <div className="flex justify-between items-center py-3 border-b border-[#F0F0F0]">
                    <p className="text-sm text-[#5F5F5F] font-poppinsRegular">
                      Business Category
                    </p>
                    <p className="text-sm text-[#5F5F5F] font-poppinsSemiBold">
                      {businessData.businessCategory}
                    </p>
                  </div>

                  <div className="flex justify-between items-center py-3 border-b border-[#F0F0F0]">
                    <p className="text-sm text-[#5F5F5F] font-poppinsRegular">
                      Type of Business
                    </p>
                    <p className="text-sm text-[#5F5F5F] font-poppinsSemiBold">
                      {businessData.typeOfBusiness}
                    </p>
                  </div>

                  <div className="flex justify-between items-center py-3 border-b border-[#F0F0F0]">
                    <p className="text-sm text-[#5F5F5F] font-poppinsRegular">
                      Specific Business Category
                    </p>
                    <p className="text-sm text-[#5F5F5F] font-poppinsSemiBold">
                      {businessData.specificBusinessCategory}
                    </p>
                  </div>

                  <div className="flex justify-between items-center py-3 border-b border-[#F0F0F0]">
                    <p className="text-sm text-[#5F5F5F] font-poppinsRegular">
                      Email Address
                    </p>
                    <p className="text-sm text-[#5F5F5F] font-poppinsSemiBold">
                      {businessData.businessEmail}
                    </p>
                  </div>

                  <div className="flex justify-between items-center py-3 border-b border-[#F0F0F0]">
                    <p className="text-sm text-[#5F5F5F] font-poppinsRegular">
                      Phone Number
                    </p>
                    <p className="text-sm text-[#5F5F5F] font-poppinsSemiBold">
                      {businessData.businessPhone}
                    </p>
                  </div>

                  <div className="">
                    <p className="text-sm text-[#5F5F5F] font-poppinsRegular mb-2">
                      Business Description
                    </p>
                    <p className="text-sm py-3 border bg-[#FCFCFC] border-[#F0F0F0] rounded-xl p-4 text-[#5F5F5F] font-poppinsSemiBold">
                      {businessData.businessDescription}
                    </p>
                  </div>
                </div>
              </div>

              {/* Proprietor Information Section */}
              <div>
                <div className="flex items-center justify-center gap-4 mb-6">
                  <h3 className="font-semibold text-[#121212]">
                    Proprietor Information
                  </h3>
                  <Button
                    onClick={handleEditProprietor}
                    variant="subsecondary"
                    size="small"
                    className="flex text-[#5F5F5F] font-poppinsSemiBold text-sm !rounded-full items-center gap-2"
                  >
                    <span>Edit</span>
                    <MdModeEditOutline size={12} color="#2D865B" />
                  </Button>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-[#F0F0F0]">
                    <p className="text-sm text-[#5F5F5F] font-poppinsRegular">
                      Name
                    </p>
                    <p className="text-sm text-[#5F5F5F] font-poppinsSemiBold">
                      {proprietorData.firstName} {proprietorData.middleName}{" "}
                      {proprietorData.lastName}
                    </p>
                  </div>

                  <div className="flex justify-between items-center py-3 border-b border-[#F0F0F0]">
                    <p className="text-sm text-[#5F5F5F] font-poppinsRegular">
                      Date Of Birth
                    </p>
                    <p className="text-sm text-[#5F5F5F] font-poppinsSemiBold">
                      {formatDate(proprietorData.dateOfBirth)}
                    </p>
                  </div>

                  <div className="flex justify-between items-center py-3 border-b border-[#F0F0F0]">
                    <p className="text-sm text-[#5F5F5F] font-poppinsRegular">
                      Occupation
                    </p>
                    <p className="text-sm text-[#5F5F5F] font-poppinsSemiBold">
                      {proprietorData.occupation}
                    </p>
                  </div>

                  <div className="flex justify-between items-center py-3 border-b border-[#F0F0F0]">
                    <p className="text-sm text-[#5F5F5F] font-poppinsRegular">
                      Gender
                    </p>
                    <p className="text-sm text-[#5F5F5F] font-poppinsSemiBold">
                      {proprietorData.gender}
                    </p>
                  </div>

                  <div className="flex justify-between items-center py-3 border-b border-[#F0F0F0]">
                    <p className="text-sm text-[#5F5F5F] font-poppinsRegular">
                      Email Address
                    </p>
                    <p className="text-sm text-[#5F5F5F] font-poppinsSemiBold">
                      {proprietorData.email}
                    </p>
                  </div>

                  <div className="flex justify-between items-center py-3 border-b border-[#F0F0F0]">
                    <p className="text-sm text-[#5F5F5F] font-poppinsRegular">
                      Phone Number
                    </p>
                    <p className="text-sm text-[#5F5F5F] font-poppinsSemiBold">
                      {proprietorData.phoneNumber}
                    </p>
                  </div>

                  <div className="flex justify-between items-center py-3 border-b border-[#F0F0F0]">
                    <p className="text-sm text-[#5F5F5F] font-poppinsRegular">
                      Means Of Identification Number
                    </p>
                    <p className="text-sm text-[#5F5F5F] font-poppinsSemiBold">
                      {proprietorData.meansOfId}
                    </p>
                  </div>

                  <div className="flex justify-between items-center py-3 border-b border-[#F0F0F0]">
                    <p className="text-sm text-[#5F5F5F] font-poppinsRegular">
                      Identification Number
                    </p>
                    <p className="text-sm text-[#5F5F5F] font-poppinsSemiBold">
                      {proprietorData.idNumber}
                    </p>
                  </div>
                  <div className="py-3">
                    <div className="flex border border-[#F6F6F6] bg-[#FCFCFC] rounded-xl p-4  items-center gap-4">
                      <div className="flex items-center gap-3">
                        <Image
                          width={40}
                          height={40}
                          src="/assets/my-farms/pdf.svg"
                          alt="NIN Doc"
                        />
                        <div>
                          <p className="text-sm text-[#5F5F5F] font-poppinsSemiBold">
                            NIN Doc
                          </p>
                          <p className="text-xs text-[#7C7C7C] font-poppinsRegular">
                            Mar 29, 2025 | 12:24pm{" "}
                            <span className="text-[#5F5F5F] font-poppinsSemiBold text-xs">
                              {" "}
                              • 1MB
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-10">
                    <div className="py-3">
                      <p className="text-sm text-[#5F5F5F] font-poppinsSemiBold mb-2">
                        Passport Photograph
                      </p>
                      <div className="w-32 h-32 border border-[#E2E2E2] rounded-lg overflow-hidden">
                        <Image
                          width={128}
                          height={128}
                          src="/assets/my-farms/f1.png"
                          alt="Passport Photograph"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="py-3">
                      <p className="text-sm text-[#5F5F5F] font-poppinsSemiBold mb-2">
                        Signature
                      </p>
                      <div className="w-32 h-32 border border-[#E2E2E2] rounded-lg overflow-hidden">
                        <Image
                          width={128}
                          height={128}
                          src="/assets/my-farms/f1.png"
                          alt="Signature"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <Button
                variant="secondary"
                size="medium"
                onClick={handleGoBack}
                className="flex items-center gap-2"
              >
                <FaArrowLeftLong size={16} />
                Go Back To Previous
              </Button>
              <Button
                variant="primary"
                size="medium"
                onClick={handleSaveAndContinue}
                className="flex items-center gap-2"
              >
                Save And Continue
                <FaArrowRightLong size={16} />
              </Button>
            </div>
          </div>
        </div>
      </main>
    </DashboardLayout>
  );
};

export default BusinessRegistrationStep3;
