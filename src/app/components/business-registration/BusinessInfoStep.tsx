"use client";
import Label from "../common/label";
import Input from "../common/input";
import Button from "../common/Buttons";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { toast } from "react-hot-toast";
import { useState } from "react";
import Image from "next/image";
import businessInfo from "../../../../public/assets/image 96.png";
import { IoMdInformationCircleOutline } from "react-icons/io";
import StepProgressBar from "../common/stepProgressBar";
import { BusinessFormData } from "./types";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

interface BusinessInfoStepProps {
  formData: BusinessFormData;
  onFormDataChange: (data: BusinessFormData) => void;
  onNext: () => void;
  onBack: () => void;
  currentStep: number;
  totalSteps: number;
}

const BusinessInfoStep: React.FC<BusinessInfoStepProps> = ({
  formData,
  onFormDataChange,
  onNext,
  onBack,
  currentStep,
  totalSteps,
}) => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    onFormDataChange({
      ...formData,
      [name]: value,
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSaveAndContinue = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.proposedName1.trim()) {
      newErrors.proposedName1 = "Proposed Name 1 is required";
    }
    if (!formData.proposedName2.trim()) {
      newErrors.proposedName2 = "Proposed Name 2 is required";
    }
    if (!formData.typeOfBusiness) {
      newErrors.typeOfBusiness = "Type of Business is required";
    }
    if (!formData.specificBusinessCategory) {
      newErrors.specificBusinessCategory =
        "Specific Business Category is required";
    }
    if (!formData.businessEmail.trim()) {
      newErrors.businessEmail = "Business Email is required";
    }
    if (!formData.businessPhone.trim()) {
      newErrors.businessPhone = "Business Phone Number is required";
    }
    if (!formData.businessDescription.trim()) {
      newErrors.businessDescription = "Business Description is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Save business data to localStorage
      localStorage.setItem(
        "businessRegistrationData",
        JSON.stringify(formData)
      );
      toast.success("Business information saved successfully!");
      onNext();
    }
  };

  return (
    <div className="flex-1">
      <div className="text-center block lg:hidden  mb-8">
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
        <StepProgressBar currentStep={currentStep} totalSteps={totalSteps} />
      </div>

      <div className="bg-white shadow rounded-lg p-6 md:p-3">
        <div className="space-y-6 md:space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
            <div>
              <Label>Proposed Name 1</Label>
              <Input
                name="proposedName1"
                type="text"
                value={formData.proposedName1}
                placeholder="Enter name 1"
                variant="tertiary"
                onChange={handleInputChange}
                error={errors.proposedName1}
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
                error={errors.proposedName2}
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
          <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
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
                className={`w-full border bg-[#F6F6F6] focus:ring-[#51F4A6] focus:border-[#51F4A6] border-[#E0E0E0] rounded-md text-sm p-4 focus:outline-none focus:ring-1 text-[#7C7C7C] font-poppinsRegular ${
                  errors.typeOfBusiness
                    ? "border-red-500 focus:border-red-500"
                    : ""
                }`}
              >
                <option value="">Select type</option>
                <option value="sole-proprietorship">Sole Proprietorship</option>
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
                className={`w-full border bg-[#F6F6F6] focus:ring-[#51F4A6] focus:border-[#51F4A6] border-[#E0E0E0] rounded-md text-sm p-4 focus:outline-none focus:ring-1 text-[#7C7C7C] font-poppinsRegular ${
                  errors.specificBusinessCategory
                    ? "border-red-500 focus:border-red-500"
                    : ""
                }`}
              >
                <option value="">Select type</option>
                <option value="crop-farming">Crop Farming</option>
                <option value="livestock">Livestock Farming</option>
                <option value="poultry">Poultry Farming</option>
                <option value="aquaculture">Aquaculture</option>
                <option value="mixed-farming">Mixed Farming</option>
              </select>
              {errors.specificBusinessCategory && (
                <p className="text-red-500 text-xs mt-1 font-poppinsRegular">
                  {errors.specificBusinessCategory}
                </p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
            <div>
              <Label>Business Email</Label>
              <Input
                name="businessEmail"
                type="email"
                value={formData.businessEmail}
                placeholder="Enter business email"
                variant="tertiary"
                onChange={handleInputChange}
                error={errors.businessEmail}
              />
            </div>

            <div>
              <Label>Business Phone Number</Label>
              <PhoneInput
                placeholder="Enter business phone number"
                international
                defaultCountry="NG"
                required
                value={formData.businessPhone || ""}
                onChange={(value) => {
                  onFormDataChange({ ...formData, businessPhone: value || "" });
                  // Clear error when user starts typing
                  if (errors.businessPhone) {
                    setErrors((prev) => ({ ...prev, businessPhone: "" }));
                  }
                }}
                className="phone-input"
                numberInputProps={{
                  className: `outline-none border-[#E0E0E0] bg-[#F6F6F6] border-[1px] text-[#5F5F5F] rounded-tr-md rounded-br-md rounded-tl-none rounded-bl-none text-sm w-[100%] px-3 py-[14px] ${
                    errors.businessPhone ? "border-red-500" : ""
                  }`,
                }}
              />
              {errors.businessPhone && (
                <p className="text-red-500 text-xs mt-1 font-poppinsRegular">
                  {errors.businessPhone}
                </p>
              )}
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
              className={`w-full border bg-[#F6F6F6] focus:ring-[#51F4A6] focus:border-[#51F4A6] border-[#E0E0E0] rounded-md text-sm p-4 focus:outline-none focus:ring-1 text-[#7C7C7C] font-poppinsRegular resize-none ${
                errors.businessDescription
                  ? "border-red-500 focus:border-red-500"
                  : ""
              }`}
            />
            {errors.businessDescription && (
              <p className="text-red-500 text-xs mt-1 font-poppinsRegular">
                {errors.businessDescription}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-row md:flex-col md:gap-4 justify-between mt-8">
        <Button
          variant="secondary"
          size="medium"
          onClick={onBack}
          className="flex items-center justify-center gap-2"
        >
          <FaArrowLeftLong size={16} />
          Go Back To Previous
        </Button>
        <Button
          variant="primary"
          size="medium"
          onClick={handleSaveAndContinue}
          className="flex items-center justify-center gap-2"
        >
          Save And Continue
          <FaArrowRightLong size={16} />
        </Button>
      </div>
    </div>
  );
};

export default BusinessInfoStep;
