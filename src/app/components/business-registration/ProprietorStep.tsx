"use client";
import Label from "../common/label";
import Input from "../common/input";
import Select from "../common/select";
import Button from "../common/Buttons";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { toast } from "react-hot-toast";
import { useState } from "react";
import Image from "next/image";
import businessInfo from "../../../../public/assets/image 96.png";
import StepProgressBar from "../common/stepProgressBar";
import FileUpload from "../common/fileUpload";
import { ProprietorFormData } from "./types";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useLocationData } from "@/hooks/useLocationData";

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
  const [errors, setErrors] = useState<Record<string, string>>({});
  const {
    countries,
    states,
    filteredCities,
    filteredLGAs,
    loading,
    error,
    fetchCitiesByState,
    fetchLGAsByState,
    clearFilteredData,
  } = useLocationData();
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

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Handle country change for residential address
  const handleResidentialCountryChange = async (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const countryName = e.target.value;

    onFormDataChange({
      ...formData,
      residentialCountry: countryName,
      residentialState: "",
      residentialLGA: "",
      residentialTown: "",
    });

    // Clear filtered data
    clearFilteredData();
  };

  // Handle state change for residential address
  const handleResidentialStateChange = async (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const stateName = e.target.value;

    onFormDataChange({
      ...formData,
      residentialState: stateName,
      residentialLGA: "",
      residentialTown: "",
    });
    clearFilteredData();

    // Fetch LGAs and cities for the selected state
    if (stateName) {
      await fetchLGAsByState(stateName);
      await fetchCitiesByState(stateName);
    }
  };

  // Handle country change for postal address
  const handlePostalCountryChange = async (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const countryName = e.target.value;

    onFormDataChange({
      ...formData,
      postalCountry: countryName,
      postalState: "",
      postalLGA: "",
      postalTown: "",
    });
  };

  // Handle state change for postal address
  const handlePostalStateChange = async (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const stateName = e.target.value;

    onFormDataChange({
      ...formData,
      postalState: stateName,
      postalLGA: "",
      postalTown: "",
    });
    if (stateName) {
      await fetchLGAsByState(stateName);
      await fetchCitiesByState(stateName);
    }
  };

  const handleSaveAndContinue = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First Name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last Name is required";
    }
    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = "Date of Birth is required";
    }
    if (!formData.occupation.trim()) {
      newErrors.occupation = "Occupation is required";
    }
    if (!formData.gender) {
      newErrors.gender = "Gender is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email Address is required";
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone Number is required";
    }
    if (!formData.meansOfId) {
      newErrors.meansOfId = "Means of ID is required";
    }
    if (!formData.idNumber.trim()) {
      newErrors.idNumber = "ID Number is required";
    }
    if (!formData.idDocument) {
      newErrors.idDocument = "ID Document upload is required";
    }
    if (!formData.passportPhoto) {
      newErrors.passportPhoto = "Passport Photograph upload is required";
    }
    if (!formData.signature) {
      newErrors.signature = "Signature upload is required";
    }
    if (!formData.residentialCountry) {
      newErrors.residentialCountry = "Residential Country is required";
    }
    if (!formData.residentialState) {
      newErrors.residentialState = "Residential State is required";
    }
    if (!formData.residentialLGA) {
      newErrors.residentialLGA = "Residential LGA is required";
    }
    if (!formData.residentialTown.trim()) {
      newErrors.residentialTown = "Residential Town is required";
    }
    if (!formData.residentialPostalCode.trim()) {
      newErrors.residentialPostalCode = "Residential Postal Code is required";
    }
    if (!formData.residentialStreetAddress.trim()) {
      newErrors.residentialStreetAddress =
        "Residential Street Address is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
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
        {error && (
          <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
            <p className="text-sm text-yellow-800">{error}</p>
          </div>
        )}
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
                  error={errors.firstName}
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
                  error={errors.lastName}
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
                  error={errors.dateOfBirth}
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
                  error={errors.occupation}
                />
              </div>
              <div>
                <Label>Gender</Label>
                <Select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  placeholder="Select Gender"
                  error={errors.gender}
                  options={[
                    { value: "male", label: "Male" },
                    { value: "female", label: "Female" },
                    { value: "other", label: "Other" },
                  ]}
                />
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
                  error={errors.email}
                />
              </div>
              <div>
                <Label>Phone Number</Label>
                <PhoneInput
                  placeholder="Enter phone number"
                  international
                  defaultCountry="NG"
                  required
                  value={formData.phoneNumber || ""}
                  onChange={(value) => {
                    onFormDataChange({ ...formData, phoneNumber: value || "" });
                    // Clear error when user starts typing
                    if (errors.phoneNumber) {
                      setErrors((prev) => ({ ...prev, phoneNumber: "" }));
                    }
                  }}
                  className="phone-input"
                  numberInputProps={{
                    className: `outline-none border-[#E0E0E0] bg-[#F6F6F6] border-[1px] text-[#5F5F5F] rounded-tr-md rounded-br-md rounded-tl-none rounded-bl-none text-sm w-[100%] px-3 py-[14px] ${
                      errors.phoneNumber ? "border-red-500" : ""
                    }`,
                  }}
                />
                {errors.phoneNumber && (
                  <p className="text-red-500 text-xs mt-1 font-poppinsRegular">
                    {errors.phoneNumber}
                  </p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-4 mt-4">
              <div>
                <Label>Means Of ID</Label>
                <Select
                  name="meansOfId"
                  value={formData.meansOfId}
                  onChange={handleInputChange}
                  placeholder="Select ID Type"
                  error={errors.meansOfId}
                  options={[
                    { value: "national-id", label: "National ID" },
                    { value: "passport", label: "Passport" },
                    { value: "drivers-license", label: "Driver's License" },
                    { value: "voters-card", label: "Voter's Card" },
                  ]}
                />
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
                  error={errors.idNumber}
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
                onFileChange={(file) => {
                  onFormDataChange({ ...formData, idDocument: file });
                  // Clear error when user uploads file
                  if (errors.idDocument) {
                    setErrors((prev) => ({ ...prev, idDocument: "" }));
                  }
                }}
                currentFile={formData.idDocument}
                error={errors.idDocument}
              />
              <div className="grid grid-cols-2 xl:grid-cols-1 gap-4">
                <FileUpload
                  label="Upload Passport Photograph"
                  accept=".pdf,.jpeg,.jpg,.png"
                  maxSize={5 * 1024 * 1024}
                  maxSizeText="5mb size, pdf, jpeg, png format only"
                  onFileChange={(file) => {
                    onFormDataChange({ ...formData, passportPhoto: file });
                    // Clear error when user uploads file
                    if (errors.passportPhoto) {
                      setErrors((prev) => ({ ...prev, passportPhoto: "" }));
                    }
                  }}
                  currentFile={formData.passportPhoto}
                  error={errors.passportPhoto}
                />
                <FileUpload
                  label="Upload Signature (kindly sign on a white paper)"
                  accept=".pdf,.jpeg,.jpg,.png"
                  maxSize={5 * 1024 * 1024}
                  maxSizeText="5mb size, pdf, jpeg, png format only"
                  onFileChange={(file) => {
                    onFormDataChange({ ...formData, signature: file });
                    // Clear error when user uploads file
                    if (errors.signature) {
                      setErrors((prev) => ({ ...prev, signature: "" }));
                    }
                  }}
                  currentFile={formData.signature}
                  error={errors.signature}
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
                <Select
                  name="residentialCountry"
                  value={formData.residentialCountry}
                  onChange={handleResidentialCountryChange}
                  disabled={loading.countries}
                  loading={loading.countries}
                  loadingText="Loading countries..."
                  placeholder="Select Country"
                  error={errors.residentialCountry}
                  options={
                    countries?.map((country) => ({
                      value: country.name,
                      label: country.name,
                    })) || []
                  }
                />
              </div>
              <div>
                <Label>State</Label>
                <Select
                  name="residentialState"
                  value={formData.residentialState}
                  onChange={handleResidentialStateChange}
                  disabled={loading.states || !formData.residentialCountry}
                  loading={loading.states}
                  loadingText="Loading states..."
                  placeholder={
                    !formData.residentialCountry
                      ? "Select Country first"
                      : "Select State"
                  }
                  error={errors.residentialState}
                  options={
                    states?.map((state) => ({
                      value: state.name,
                      label: state.name,
                    })) || []
                  }
                />
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-4 mt-4">
              <div>
                <Label>LGA</Label>
                <Select
                  name="residentialLGA"
                  value={formData.residentialLGA}
                  onChange={handleInputChange}
                  disabled={loading.lgas || !formData.residentialState}
                  loading={loading.lgas}
                  loadingText="Loading LGAs..."
                  placeholder={
                    !formData.residentialState
                      ? "Select State first"
                      : "Select LGA"
                  }
                  error={errors.residentialLGA}
                  options={
                    filteredLGAs?.map((lga) => ({
                      value: lga.name,
                      label: lga.name,
                    })) || []
                  }
                />
              </div>
              <div>
                <Label>Town</Label>
                <Select
                  name="residentialTown"
                  value={formData.residentialTown}
                  onChange={handleInputChange}
                  disabled={loading.cities || !formData.residentialState}
                  loading={loading.cities}
                  loadingText="Loading cities..."
                  placeholder={
                    !formData.residentialState
                      ? "Select State first"
                      : "Select Town/City"
                  }
                  error={errors.residentialTown}
                  options={
                    filteredCities?.map((city) => ({
                      value: city.name,
                      label: city.name,
                    })) || []
                  }
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
                  error={errors.residentialPostalCode}
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
                  error={errors.residentialStreetAddress}
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
                    <Select
                      name="postalCountry"
                      value={formData.postalCountry}
                      onChange={handlePostalCountryChange}
                      disabled={loading.countries}
                      loading={loading.countries}
                      loadingText="Loading countries..."
                      placeholder="Select Country"
                      options={
                        countries?.map((country) => ({
                          value: country.name,
                          label: country.name,
                        })) || []
                      }
                    />
                  </div>
                  <div>
                    <Label>State</Label>
                    <Select
                      name="postalState"
                      value={formData.postalState}
                      onChange={handlePostalStateChange}
                      disabled={loading.states || !formData.postalCountry}
                      loading={loading.states}
                      loadingText="Loading states..."
                      placeholder={
                        !formData.postalCountry
                          ? "Select Country first"
                          : "Select State"
                      }
                      options={
                        states?.map((state) => ({
                          value: state.name,
                          label: state.name,
                        })) || []
                      }
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-1 gap-4 mt-4">
                  <div>
                    <Label>LGA</Label>
                    <Select
                      name="postalLGA"
                      value={formData.postalLGA}
                      onChange={handleInputChange}
                      disabled={loading.lgas || !formData.postalState}
                      loading={loading.lgas}
                      loadingText="Loading LGAs..."
                      placeholder={
                        !formData.postalState
                          ? "Select State first"
                          : "Select LGA"
                      }
                      options={
                        filteredLGAs?.map((lga) => ({
                          value: lga.name,
                          label: lga.name,
                        })) || []
                      }
                    />
                  </div>
                  <div>
                    <Label>Town</Label>
                    <Select
                      name="postalTown"
                      value={formData.postalTown}
                      onChange={handleInputChange}
                      disabled={loading.cities || !formData.postalState}
                      loading={loading.cities}
                      loadingText="Loading cities..."
                      placeholder={
                        !formData.postalState
                          ? "Select State first"
                          : "Select Town/City"
                      }
                      options={
                        filteredCities?.map((city) => ({
                          value: city.name,
                          label: city.name,
                        })) || []
                      }
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


