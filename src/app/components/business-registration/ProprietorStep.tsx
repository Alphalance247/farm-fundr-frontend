"use client";
import Label from "../common/label";
import Input from "../common/input";
import Button from "../common/Buttons";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { toast } from "react-hot-toast";
import Image from "next/image";
import businessInfo from "../../../../public/assets/image 96.png";
import StepProgressBar from "../common/stepProgressBar";
import FileUpload from "../common/fileUpload";
import { ProprietorFormData } from "./types";

interface ProprietorStepProps {
  formData: ProprietorFormData;
  onFormDataChange: (data: ProprietorFormData) => void;
  onNext: () => void;
  onBack: () => void;
  currentStep: number;
  totalSteps: number;
}

const ProprietorStep: React.FC<ProprietorStepProps> = ({
  formData,
  onFormDataChange,
  onNext,
  onBack,
  currentStep,
  totalSteps,
}) => {
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      onFormDataChange({
        ...formData,
        [name]: checked,
      });
    } else {
      onFormDataChange({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSaveAndContinue = () => {
    const errors = [];

    if (!formData.firstName.trim()) {
      errors.push("First Name is required");
    }
    if (!formData.lastName.trim()) {
      errors.push("Last Name is required");
    }
    if (!formData.dateOfBirth) {
      errors.push("Date of Birth is required");
    }
    if (!formData.occupation.trim()) {
      errors.push("Occupation is required");
    }
    if (!formData.gender) {
      errors.push("Gender is required");
    }
    if (!formData.email.trim()) {
      errors.push("Email Address is required");
    }
    if (!formData.phoneNumber.trim()) {
      errors.push("Phone Number is required");
    }
    if (!formData.meansOfId) {
      errors.push("Means of ID is required");
    }
    if (!formData.idNumber.trim()) {
      errors.push("ID Number is required");
    }
    if (!formData.idDocument) {
      errors.push("ID Document upload is required");
    }
    if (!formData.passportPhoto) {
      errors.push("Passport Photograph upload is required");
    }
    if (!formData.signature) {
      errors.push("Signature upload is required");
    }
    if (!formData.residentialCountry) {
      errors.push("Residential Country is required");
    }
    if (!formData.residentialState) {
      errors.push("Residential State is required");
    }
    if (!formData.residentialLGA) {
      errors.push("Residential LGA is required");
    }
    if (!formData.residentialTown.trim()) {
      errors.push("Residential Town is required");
    }
    if (!formData.residentialPostalCode.trim()) {
      errors.push("Residential Postal Code is required");
    }
    if (!formData.residentialStreetAddress.trim()) {
      errors.push("Residential Street Address is required");
    }

    if (errors.length > 0) {
      toast.error(errors.join("\n"));
    } else {
      localStorage.setItem(
        "proprietorRegistrationData",
        JSON.stringify(formData)
      );
      toast.success("Proprietor/Partner information saved successfully!");
      onNext();
    }
  };

  return (
    <div className="flex-1">
      <div className="text-center block lg:hidden mb-8">
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
          Proprietor/Partner
        </h1>
        <p className="text-sm text-[#7C7C7C] font-poppinsRegular mb-4">
          Fill all fields to complete registration
        </p>
        <StepProgressBar currentStep={currentStep} totalSteps={totalSteps} />
      </div>

      <div className="bg-white shadow rounded-lg p-6 md:p-3">
        <div className="space-y-6 md:space-y-4">
          <div>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
              <div>
                <Label>First Name</Label>
                <Input
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  placeholder="Enter name 1"
                  variant="tertiary"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label>Middle Name</Label>
                <Input
                  name="middleName"
                  type="text"
                  value={formData.middleName}
                  placeholder="Enter Name 2"
                  variant="tertiary"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-4 mt-4">
              <div>
                <Label>Last Name</Label>
                <Input
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  placeholder="Enter name 1"
                  variant="tertiary"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label>Date Of Birth</Label>
                <Input
                  name="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  placeholder="Enter Date"
                  variant="tertiary"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-4 mt-4">
              <div>
                <Label>Occupation</Label>
                <Input
                  name="occupation"
                  type="text"
                  value={formData.occupation}
                  placeholder="Enter occupation"
                  variant="tertiary"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label>Gender</Label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="w-full border bg-[#F6F6F6] focus:ring-[#51F4A6] focus:border-[#51F4A6] border-[#E0E0E0] rounded-md text-sm p-3.5 focus:outline-none focus:ring-1 text-[#7C7C7C] font-poppinsRegular"
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
              <div>
                <Label>Email Address</Label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  placeholder="Enter business email"
                  variant="tertiary"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label>Phone Number</Label>
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
                    name="phoneNumber"
                    type="tel"
                    value={formData.phoneNumber}
                    placeholder="Enter phone number"
                    variant="tertiary"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-4 mt-4">
              <div>
                <Label>Means Of ID</Label>
                <select
                  name="meansOfId"
                  value={formData.meansOfId}
                  onChange={handleInputChange}
                  className="w-full border bg-[#F6F6F6] focus:ring-[#51F4A6] focus:border-[#51F4A6] border-[#E0E0E0] rounded-md text-sm p-3.5 focus:outline-none focus:ring-1 text-[#7C7C7C] font-poppinsRegular"
                >
                  <option value="">Select type</option>
                  <option value="national-id">National ID</option>
                  <option value="passport">Passport</option>
                  <option value="drivers-license">Driver&apos;s License</option>
                  <option value="voters-card">Voter&apos;s Card</option>
                </select>
              </div>
              <div>
                <Label>ID Number</Label>
                <Input
                  name="idNumber"
                  type="text"
                  value={formData.idNumber}
                  placeholder="Enter id number"
                  variant="tertiary"
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="space-y-4">
              <FileUpload
                label="Upload ID Document"
                accept=".pdf,.jpeg,.jpg,.png"
                maxSize={1 * 1024 * 1024}
                maxSizeText="Max size of 1mb, pdf, jpeg, png format only"
                onFileChange={(file) =>
                  onFormDataChange({ ...formData, idDocument: file })
                }
                currentFile={formData.idDocument}
              />
              <div className="grid grid-cols-2 xl:grid-cols-1 gap-4">
                <FileUpload
                  label="Upload Passport Photograph"
                  accept=".pdf,.jpeg,.jpg,.png"
                  maxSize={5 * 1024 * 1024}
                  maxSizeText="5mb size, pdf, jpeg, png format only"
                  onFileChange={(file) =>
                    onFormDataChange({ ...formData, passportPhoto: file })
                  }
                  currentFile={formData.passportPhoto}
                />
                <FileUpload
                  label="Upload Signature (kindly sign on a white paper)"
                  accept=".pdf,.jpeg,.jpg,.png"
                  maxSize={5 * 1024 * 1024}
                  maxSizeText="5mb size, pdf, jpeg, png format only"
                  onFileChange={(file) =>
                    onFormDataChange({ ...formData, signature: file })
                  }
                  currentFile={formData.signature}
                />
              </div>
            </div>
          </div>
          <div className="border-t border-[#E0E0E0] pt-4">
            <h3 className="text-xl font-aristoBold text-[#303030] mb-4">
              Residential Address Details
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
              <div>
                <Label>Country</Label>
                <select
                  name="residentialCountry"
                  value={formData.residentialCountry}
                  onChange={handleInputChange}
                  className="w-full border bg-[#F6F6F6] focus:ring-[#51F4A6] focus:border-[#51F4A6] border-[#E0E0E0] rounded-md text-sm p-4 focus:outline-none focus:ring-1 text-[#7C7C7C] font-poppinsRegular"
                >
                  <option value="">Select Country</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Ghana">Ghana</option>
                  <option value="Kenya">Kenya</option>
                  <option value="South Africa">South Africa</option>
                </select>
              </div>
              <div>
                <Label>State</Label>
                <select
                  name="residentialState"
                  value={formData.residentialState}
                  onChange={handleInputChange}
                  className="w-full border bg-[#F6F6F6] focus:ring-[#51F4A6] focus:border-[#51F4A6] border-[#E0E0E0] rounded-md text-sm p-4 focus:outline-none focus:ring-1 text-[#7C7C7C] font-poppinsRegular"
                >
                  <option value="">Select State</option>
                  <option value="Lagos">Lagos</option>
                  <option value="Abuja">Abuja</option>
                  <option value="Kano">Kano</option>
                  <option value="Rivers">Rivers</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-4 mt-4">
              <div>
                <Label>LGA</Label>
                <select
                  name="residentialLGA"
                  value={formData.residentialLGA}
                  onChange={handleInputChange}
                  className="w-full border bg-[#F6F6F6] focus:ring-[#51F4A6] focus:border-[#51F4A6] border-[#E0E0E0] rounded-md text-sm p-4 focus:outline-none focus:ring-1 text-[#7C7C7C] font-poppinsRegular"
                >
                  <option value="">Select LGA</option>
                  <option value="Ikeja">Ikeja</option>
                  <option value="Victoria Island">Victoria Island</option>
                  <option value="Surulere">Surulere</option>
                  <option value="Lekki">Lekki</option>
                </select>
              </div>
              <div>
                <Label>Town</Label>
                <Input
                  name="residentialTown"
                  type="text"
                  value={formData.residentialTown}
                  placeholder="Enter town name"
                  variant="tertiary"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-1  gap-4 mt-4">
              <div>
                <Label>Postal Code</Label>
                <Input
                  name="residentialPostalCode"
                  type="text"
                  value={formData.residentialPostalCode}
                  placeholder="Enter postal code"
                  variant="tertiary"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label>Street Address</Label>
                <Input
                  name="residentialStreetAddress"
                  type="text"
                  value={formData.residentialStreetAddress}
                  placeholder="Enter street address"
                  variant="tertiary"
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-poppinsSemiBold text-[#303030] mb-4">
              Postal Address
            </h3>
            <div className="mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="sameAsResidential"
                  checked={formData.sameAsResidential}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                <span className="text-sm text-[#7C7C7C] font-poppinsRegular">
                  Same as my residential address
                </span>
              </label>
            </div>
            {!formData.sameAsResidential && (
              <>
                <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
                  <div>
                    <Label>Country</Label>
                    <select
                      name="postalCountry"
                      value={formData.postalCountry}
                      onChange={handleInputChange}
                      className="w-full border bg-[#F6F6F6] focus:ring-[#51F4A6] focus:border-[#51F4A6] border-[#E0E0E0] rounded-md text-sm p-4 focus:outline-none focus:ring-1 text-[#7C7C7C] font-poppinsRegular"
                    >
                      <option value="">Select Country</option>
                      <option value="Nigeria">Nigeria</option>
                      <option value="Ghana">Ghana</option>
                      <option value="Kenya">Kenya</option>
                      <option value="South Africa">South Africa</option>
                    </select>
                  </div>
                  <div>
                    <Label>State</Label>
                    <select
                      name="postalState"
                      value={formData.postalState}
                      onChange={handleInputChange}
                      className="w-full border bg-[#F6F6F6] focus:ring-[#51F4A6] focus:border-[#51F4A6] border-[#E0E0E0] rounded-md text-sm p-4 focus:outline-none focus:ring-1 text-[#7C7C7C] font-poppinsRegular"
                    >
                      <option value="">Select State</option>
                      <option value="Lagos">Lagos</option>
                      <option value="Abuja">Abuja</option>
                      <option value="Kano">Kano</option>
                      <option value="Rivers">Rivers</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-1 gap-4 mt-4">
                  <div>
                    <Label>LGA</Label>
                    <select
                      name="postalLGA"
                      value={formData.postalLGA}
                      onChange={handleInputChange}
                      className="w-full border bg-[#F6F6F6] focus:ring-[#51F4A6] focus:border-[#51F4A6] border-[#E0E0E0] rounded-md text-sm p-4 focus:outline-none focus:ring-1 text-[#7C7C7C] font-poppinsRegular"
                    >
                      <option value="">Select LGA</option>
                      <option value="Ikeja">Ikeja</option>
                      <option value="Victoria Island">Victoria Island</option>
                      <option value="Surulere">Surulere</option>
                      <option value="Lekki">Lekki</option>
                    </select>
                  </div>
                  <div>
                    <Label>Town</Label>
                    <Input
                      name="postalTown"
                      type="text"
                      value={formData.postalTown}
                      placeholder="Enter town name"
                      variant="tertiary"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-1 gap-4 mt-4">
                  <div>
                    <Label>Postal Code</Label>
                    <Input
                      name="postalPostalCode"
                      type="text"
                      value={formData.postalPostalCode}
                      placeholder="Enter postal code"
                      variant="tertiary"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label>Street Address</Label>
                    <Input
                      name="postalStreetAddress"
                      type="text"
                      value={formData.postalStreetAddress}
                      placeholder="Enter street address"
                      variant="tertiary"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-row md:flex-col md:gap-4  justify-between mt-8">
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

export default ProprietorStep;
