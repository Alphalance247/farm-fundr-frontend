"use client";
import { useState } from "react";
import DashboardLayout from "../../../components/common/dashboardLayout";
import GoBackBtn from "../../../components/common/goBack";
import Label from "../../../components/common/label";
import Input from "../../../components/common/input";
import Button from "../../../components/common/Buttons";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Image from "next/image";
import businessInfo from "../../../../../public/assets/image 96.png";
import { IoMdInformationCircleOutline } from "react-icons/io";
import StepSidebar from "../../../components/common/stepSidebar";
import StepProgressBar from "../../../components/common/stepProgressBar";

const BusinessRegistrationStep1 = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    proposedName1: "",
    proposedName2: "",
    businessCategory: "Agriculture",
    typeOfBusiness: "",
    specificBusinessCategory: "",
    businessEmail: "",
    countryCode: "NG +234",
    businessPhone: "",
    businessDescription: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSaveAndContinue = () => {
    const errors = [];

    if (!formData.proposedName1.trim()) {
      errors.push("Proposed Name 1 is required");
    }
    if (!formData.proposedName2.trim()) {
      errors.push("Proposed Name 2 is required");
    }
    if (!formData.typeOfBusiness) {
      errors.push("Type of Business is required");
    }
    if (!formData.specificBusinessCategory) {
      errors.push("Specific Business Category is required");
    }
    if (!formData.businessEmail.trim()) {
      errors.push("Business Email is required");
    }
    if (!formData.businessPhone.trim()) {
      errors.push("Business Phone Number is required");
    }
    if (!formData.businessDescription.trim()) {
      errors.push("Business Description is required");
    }

    if (errors.length > 0) {
      toast.error(errors.join("\n"));
    } else {
      // Save business data to localStorage
      localStorage.setItem('businessRegistrationData', JSON.stringify(formData));
      toast.success("Business information saved successfully!");
      router.push("/farmer-dashboard/business-registration/step-2");
    }
  };

  const handleGoBack = () => {
    router.push("/farmer-dashboard/business-registration");
  };

  return (
    <DashboardLayout>
      <main className="px-10 py-8 bg-gray-50 min-h-screen">
        <div className="mb-6">
          <GoBackBtn href="/farmer-dashboard/business-registration" />
        </div>
        <div className="flex gap-8 max-w-7xl mx-auto">
          <StepSidebar currentStep={1} totalSteps={4} />
          <div className="flex-1">
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
                Business Information
              </h1>
              <p className="text-sm text-[#7C7C7C] font-poppinsRegular mb-4">
                Fill all field to complete registration
              </p>
              <StepProgressBar currentStep={1} totalSteps={4} />
            </div>

            <div className="bg-white shadow rounded-lg p-6">
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Proposed Name 1</Label>
                    <Input
                      name="proposedName1"
                      type="text"
                      value={formData.proposedName1}
                      placeholder="Enter name 1"
                      variant="tertiary"
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <Label>Proposed Name 2</Label>
                    <Input
                      name="proposedName2"
                      type="text"
                      value={formData.proposedName2}
                      placeholder="Enter Name 2"
                      variant="tertiary"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div>
                  <Label>Business Category</Label>
                  <Input
                    name="businessCategory"
                    type="text"
                    value={formData.businessCategory}
                    variant="tertiary"
                    readonly={true}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <Label>Type Of Business</Label>
                      <IoMdInformationCircleOutline
                        className="text-[#7C7C7C]"
                        size={14}
                      />
                    </div>
                    <select
                      name="typeOfBusiness"
                      value={formData.typeOfBusiness}
                      onChange={handleInputChange}
                      className="w-full border bg-[#F6F6F6] focus:ring-[#51F4A6] focus:border-[#51F4A6] border-[#E0E0E0] rounded-md text-sm p-4 focus:outline-none focus:ring-1 text-[#7C7C7C] font-poppinsRegular"
                    >
                      <option value="">Select type</option>
                      <option value="sole-proprietorship">
                        Sole Proprietorship
                      </option>
                      <option value="partnership">Partnership</option>
                      <option value="limited-liability">
                        Limited Liability Company
                      </option>
                      <option value="corporation">Corporation</option>
                    </select>
                  </div>

                  <div className="mt-2">
                    <Label>Specific Business Category</Label>
                    <select
                      name="specificBusinessCategory"
                      value={formData.specificBusinessCategory}
                      onChange={handleInputChange}
                      className="w-full border bg-[#F6F6F6] focus:ring-[#51F4A6] focus:border-[#51F4A6] border-[#E0E0E0] rounded-md text-sm p-4 focus:outline-none focus:ring-1 text-[#7C7C7C] font-poppinsRegular"
                    >
                      <option value="">Select type</option>
                      <option value="crop-farming">Crop Farming</option>
                      <option value="livestock">Livestock Farming</option>
                      <option value="poultry">Poultry Farming</option>
                      <option value="aquaculture">Aquaculture</option>
                      <option value="mixed-farming">Mixed Farming</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Business Email</Label>
                    <Input
                      name="businessEmail"
                      type="email"
                      value={formData.businessEmail}
                      placeholder="Enter business email"
                      variant="tertiary"
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <Label>Business Phone Number</Label>
                    <div className="flex gap-2">
                      <select
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleInputChange}
                        className="w-24 border bg-[#F6F6F6] focus:ring-[#51F4A6] focus:border-[#51F4A6] border-[#E0E0E0] rounded-md text-sm p-2 focus:outline-none focus:ring-1 text-[#7C7C7C] font-poppinsRegular"
                      >
                        <option value="NG +234">NG +234</option>
                        <option value="GH +233">GH +233</option>
                        <option value="KE +254">KE +254</option>
                        <option value="ZA +27">ZA +27</option>
                      </select>
                      <Input
                        name="businessPhone"
                        type="tel"
                        value={formData.businessPhone}
                        placeholder="9012345678"
                        variant="tertiary"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <Label>Business Description</Label>
                  <textarea
                    name="businessDescription"
                    value={formData.businessDescription}
                    placeholder="Enter business description here"
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full border bg-[#F6F6F6] focus:ring-[#51F4A6] focus:border-[#51F4A6] border-[#E0E0E0] rounded-md text-sm p-4 focus:outline-none focus:ring-1 text-[#7C7C7C] font-poppinsRegular resize-none"
                  />
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

export default BusinessRegistrationStep1;
