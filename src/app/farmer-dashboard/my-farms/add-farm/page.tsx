"use client";
import DashboardLayout from "../../../components/common/dashboardLayout";
import Image from "next/image";
import React, { useState } from "react";
import GoBackBtn from "@/app/components/common/goBack";
import Label from "@/app/components/common/label";
import Button from "@/app/components/common/Buttons";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import FarmDetails from "@/app/components/dashboard/my-farms/form-steps/farmDetails";
import FarmHeading from "@/app/components/dashboard/my-farms/common/farmHeading";
import EditBtn from "@/app/components/common/editBtn";
import { useForm } from "react-hook-form";
import {
  step2Validation,
  AddFarmFormData,
  step3Validation,
} from "@/utils/form";
import InputField from "@/app/components/common/inputField";
import { toast } from "react-hot-toast";
import { AxiosError } from "axios";
import axiosInstance from "@/lib/axios";
import { environment } from "@/env/env.local";
import ProtectedRoute from "@/app/components/common/ProtectedRoute/protectedRoute";
import SpinnerModal from "@/app/components/common/modals/SpinnerModal";

const AddFarm = () => {
  const [formStep, setFormStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [useSameAsPhone, setUseSameAsPhone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    country: "",
    state: "",
    phone: "",
    farmName: "",
    farmAddress: "",
    farmSize: "",
    fieldType: "",
    fieldDescription: "",
    ownershipType: "",
    cacNumber: "",
    operatingSince: "",
    farmEmail: "",
    farmPhone: "",
    city: "",
  });
  const [preview, setPreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  // Update the state to handle multiple images
  const [uploadedImages, setUploadedImages] = useState<{
    [key: string]: { file: File | null; preview: string | null };
  }>({
    image1: { file: null, preview: null },
    image2: { file: null, preview: null },
    image3: { file: null, preview: null },
    image4: { file: null, preview: null },
  });

  const handlePdfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.size <= 5 * 1024 * 1024) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    } else {
      alert("File must be less than 10MB");
    }
  };

  const farmDetailsConfirmation = [
    {
      name: "Farm Name",
      details: form?.farmName || "-",
    },
    {
      name: "Farm Address",
      details: form?.farmAddress || "-",
    },
    {
      name: "State & Country Located",
      details: `${form?.country} ,  ${form?.state} ` || "-",
    },
    {
      name: "City",
      details: form?.city || "-",
    },
    {
      name: "Farm Size",
      details: `${form?.farmSize} plot ` || "- plot",
    },
    {
      name: "Ownership Type",
      details: form?.ownershipType || "-",
    },
    {
      name: "CAC Registration Number",
      details: form?.cacNumber || "-",
    },
    {
      name: "Operating Since",
      details: form?.operatingSince || "-",
    },
  ];

  // React Hook Form for step 2
  const {
    register,
    formState: { errors },
    watch,
    trigger,
  } = useForm<AddFarmFormData>({
    defaultValues: {
      farmSize: form.farmSize,
      fieldType: form.fieldType,
      fieldDescription: form.fieldDescription,
    },
  });

  const {
    register: step3Register,
    formState: step3FormState,
    watch: step3Watch,
    trigger: step3Trigger,
  } = useForm<AddFarmFormData>({
    defaultValues: {
      ownershipType: form.ownershipType,
      cacNumber: form.cacNumber,
      operatingSince: form.operatingSince,
    },
  });

  // Update the file change handler to handle multiple images
  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    imageKey: string
  ) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.size <= 5 * 1024 * 1024) {
        setUploadedImages((prev) => ({
          ...prev,
          [imageKey]: {
            file: selectedFile,
            preview: URL.createObjectURL(selectedFile),
          },
        }));
      } else {
        toast.error("File must be less than 5MB");
      }
    }
  };

  // Handle going back from step 2
  const handleStep2Back = () => {
    setCompletedSteps((prev) => prev.filter((step) => step !== formStep));
    setFormStep(formStep - 1);
  };

  const handleStep2Proceed = async () => {
    // Trigger validation for all fields
    const isValid = await trigger();

    if (isValid) {
      // Get the current form values
      const currentValues = watch();

      // Update the main form state
      setForm((prev) => ({
        ...prev,
        ...currentValues,
      }));
      // Move to next step
      setFormStep(3);
      setCompletedSteps((prev) => [...prev, formStep]);
    }
  };

  const handleStep3Proceed = async () => {
    const isValid = await step3Trigger();
    if (isValid) {
      const currentValues = step3Watch();
      setForm((prev) => ({
        ...prev,
        ...currentValues,
      }));
      setFormStep(4);
      setCompletedSteps((prev) => [...prev, formStep]);
    }
  };

  // Handle step 4 proceed button click
  const handleStep4Proceed = async () => {
    console.log("Step 4 Proceed clicked");

    // Check if at least 3 images are uploaded
    const uploadedImageCount = Object.values(uploadedImages).filter(
      (img) => img.file !== null
    ).length;

    if (uploadedImageCount < 3) {
      toast.error(
        `Please upload at least 3 farm images. You have uploaded ${uploadedImageCount} image(s).`
      );
      return;
    }

    // Check for any validation errors
    const isValid = await trigger();

    if (isValid) {
      // Move to next step
      setFormStep(5);
      setCompletedSteps((prev) => [...prev, formStep]);
    }
  };

  const handleFinalSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      // Create FormData for file upload
      const formData = new FormData();

      // Add farm data
      formData.append("name", form.farmName);
      formData.append("street", form.farmAddress);
      formData.append("status", "published");
      formData.append("country", form.country);
      formData.append("state", form.state);
      formData.append("farm_whatsapp_number", form.farmPhone);
      formData.append("farm_phone_number", form.phone);
      formData.append("farm_email", form.farmEmail);
      formData.append("land_size", form.farmSize);
      formData.append("land_size_type", form.fieldType);
      formData.append("description", form.fieldDescription);
      formData.append("land_ownership", form.ownershipType);
      formData.append("cac_reg_no", form.cacNumber);
      formData.append("started_date", form.operatingSince);
      formData.append("city", form.city);

      // Add files
      if (file) {
        formData.append("cac_reg_doc", file);
      }

      // Add images
      Object.entries(uploadedImages).forEach(([, imageData]) => {
        if (imageData.file) {
          formData.append("images", imageData.file);
        }
      });

      const res = await axiosInstance.post(environment.addFarm, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.status === 201) {
        toast.success(
          res.data?.statusmessage || "Farm successfully submitted for review"
        );

        // Reset form
        setFormStep(1);
        setForm({
          farmSize: "",
          fieldType: "",
          fieldDescription: "",
          ownershipType: "",
          cacNumber: "",
          operatingSince: "",
          farmEmail: "",
          farmPhone: "",
          farmName: "",
          farmAddress: "",
          country: "",
          state: "",
          phone: "",
          city: "",
        });

        // Reset files
        setFile(null);
        setPreview(null);
        setUploadedImages({
          image1: { file: null, preview: null },
          image2: { file: null, preview: null },
          image3: { file: null, preview: null },
          image4: { file: null, preview: null },
        });

        // Reset steps
        setCompletedSteps([]);
      }

      setLoading(false);
    } catch (err) {
      // Extract the error message from the response
      let errorMessage =
        "Please make sure all fields are filled correctly. and try again.";

      if (err instanceof AxiosError) {
        // Check if err is an instance of AxiosError
        errorMessage = err.response?.data?.statusmessage || errorMessage;
      }

      toast.error(errorMessage);

      setLoading(false);
    }
  };

  return (
    <ProtectedRoute requiredUserType="farmer">
      <DashboardLayout>
        {loading && (
          <SpinnerModal
            onClose={() => {}}
            message="Uploading farm details, please wait this might take a while...."
          />
        )}

        <main className="px-10 py-10 bg-gray-50 overflow-auto">
          <div
            className={`flex gap-x-6  ${
              formStep !== 5 ? "" : "justify-center"
            }`}
          >
            {formStep !== 5 && (
              <div className="w-[30%]">
                <GoBackBtn href="/farmer-dashboard/my-farms" />

                <div className="border border-[#FEF0B0] bg-[#FFFAE6] rounded-lg p-3 flex gap-x-5 items-start mt-6 ">
                  <Image
                    src="/assets/my-farms/danger.svg"
                    width={46}
                    height={46}
                    alt="warning"
                  />

                  <div className="">
                    <p className="font-poppinsSemiBold text-sm text-[#5F5F5F] mb-1">
                      Important
                    </p>
                    <p className=" text-[#7C7C7C] text-xs font-poppinsRegular ">
                      All field must be filled and your{" "}
                      <span className=" font-poppinsSemiBold">
                        {" "}
                        CAC Reg Document
                      </span>{" "}
                      must be uploaded for your farm to go active.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div>
              <Image
                src="/assets/my-farms/farmform.svg"
                width={112}
                height={90}
                alt="warning"
                className="mx-auto"
              />
              <h3 className="text-[#303030] font-aristoBold text-3xl mt-4">
                {formStep === 1
                  ? " Set Up Your farm Details"
                  : formStep === 3
                  ? "Set Up Your Farm Ownership"
                  : formStep === 4
                  ? "Farm Images"
                  : formStep === 5
                  ? "Project Summary"
                  : ""}
              </h3>
            </div>
          </div>

          <div className="">
            {/* Form steps */}
            <div className="text-sm font-poppinsSemiBold text-[#303030] mt-2 mb-2 text-center">
              Step {formStep}/5
            </div>
            <div className="flex gap-x-2 justify-center mt-4 mb-6">
              {[1, 2, 3, 4, 5].map((el, i) => (
                <div
                  className={`w-[114px] h-[3px]  rounded-xl ${
                    completedSteps.includes(i + 1) || formStep === i + 1
                      ? "bg-[#51F4A6]"
                      : "bg-[#E2E2E2]"
                  }`}
                  key={i}
                ></div>
              ))}
            </div>

            {/* form section */}
            <form
              action=""
              className="w-[70%] mx-auto"
              onSubmit={(e) => handleFinalSubmit(e)}
            >
              {formStep === 1 && (
                <FarmDetails
                  form={form}
                  setForm={setForm}
                  setFormStep={setFormStep}
                  setCompletedSteps={setCompletedSteps}
                  formStep={formStep}
                  useSameAsPhone={useSameAsPhone}
                  setUseSameAsPhone={setUseSameAsPhone}
                />
              )}
              {/* second step */}

              {formStep === 2 && (
                <div>
                  <div className=" p-6 bg-white mt-6 rounded-lg flex flex-col gap-y-6">
                    <div className="grid grid-cols-2 gap-x-4">
                      <div>
                        <Label className="">Farm Size</Label>

                        <InputField
                          type="text"
                          placeholder="Enter farm size (e.g., 10 or 10.5)"
                          error={errors.farmSize?.message}
                          className={`${
                            errors.farmSize ? "border-red-500" : ""
                          }`}
                          {...register("farmSize", step2Validation.farmSize)}
                        />
                      </div>

                      <div>
                        <Label>{" - "} </Label>
                        <select
                          {...register("fieldType", step2Validation.fieldType)}
                          className={`w-full border bg-[#F6F6F6] focus:ring-[#51F4A6] focus:border-[#51F4A6] border-[#E0E0E0] rounded-md text-sm p-4 focus:outline-none focus:ring-1 text-[#7C7C7C] font-poppinsRegular ${
                            errors.fieldType ? "border-red-500" : ""
                          }`}
                        >
                          <option value="">Select field type</option>
                          <option value="hectares">Hectares</option>
                          <option value="acres">Acres</option>
                          <option value="plots">plots</option>
                        </select>
                        {errors.fieldType && (
                          <p className="text-red-500 text-xs mt-1 font-poppinsRegular">
                            {errors.fieldType.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label>Description</Label>
                      <textarea
                        {...register(
                          "fieldDescription",
                          step2Validation.fieldDescription
                        )}
                        cols={20}
                        rows={5}
                        className={`bg-[#F6F6F6] border-[#E2E2E2] border w-full text-[#7C7C7C] rounded-lg text-sm p-4 focus:ring-[#51F4A6] ${
                          errors.fieldDescription ? "border-red-500" : ""
                        }`}
                        placeholder="Enter description here (minimum 10 characters)"
                      ></textarea>
                      {errors.fieldDescription && (
                        <p className="text-red-500 text-xs mt-1 font-poppinsRegular">
                          {errors.fieldDescription.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mt-8 flex items-center justify-between">
                    <Button
                      className="w-fit flex items-center justify-center gap-x-4"
                      onClick={handleStep2Back}
                      variant="secondary"
                    >
                      <span>
                        <FaArrowLeftLong />
                      </span>{" "}
                      Previous
                    </Button>

                    <Button
                      className="w-fit flex items-center justify-center gap-x-4"
                      onClick={handleStep2Proceed}
                    >
                      Proceed{" "}
                      <span>
                        <FaArrowRightLong />
                      </span>{" "}
                    </Button>
                  </div>
                </div>
              )}

              {/* third form */}
              {formStep === 3 && (
                <div>
                  <div className=" p-6 bg-white mt-6 rounded-lg flex flex-col gap-y-6">
                    <div>
                      <Label> Ownership Type</Label>
                      <select
                        id="ownershipType"
                        {...step3Register(
                          "ownershipType",
                          step3Validation?.ownershipType
                        )}
                        className={`w-full border bg-[#F6F6F6] focus:ring-[#51F4A6] focus:border-[#51F4A6] border-[#E0E0E0] rounded-md text-sm p-4 focus:outline-none focus:ring-1 text-[#7C7C7C] font-poppinsRegular ${
                          step3FormState.errors.ownershipType
                            ? "border-red-500"
                            : ""
                        }`}
                      >
                        <option value="">Select ownership type</option>

                        <option value="Owned">Owned</option>
                        <option value="Leased">Leased</option>
                      </select>
                      {step3FormState.errors.ownershipType && (
                        <p className="text-red-500 text-xs mt-1 font-poppinsRegular">
                          {step3FormState.errors.ownershipType.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label className="">CAC registration Number</Label>
                      <InputField
                        type="text"
                        placeholder="Enter number here"
                        {...step3Register("cacNumber")}
                      />
                    </div>

                    <div>
                      <Label className="">Operating Since</Label>
                      <InputField
                        type="date"
                        placeholder="Enter date"
                        error={step3FormState.errors.operatingSince?.message}
                        className={`${
                          step3FormState.errors.operatingSince
                            ? "border-red-500"
                            : ""
                        }`}
                        {...step3Register(
                          "operatingSince",
                          step3Validation?.operatingSince
                        )}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="file-upload"
                        className="text-sm font-poppinsSemiBold text-[#5F5F5F]  block"
                      >
                        <p className="mb-2">
                          Upload CAC Registration Document{" "}
                          <span className=" font-poppinsRegular text-[#5F5F5F]">
                            (5mb size, jpg, png format only)
                          </span>
                        </p>
                        <input
                          id="file-upload"
                          type="file"
                          accept=".pdf"
                          // accept="image/*"
                          onChange={handlePdfChange}
                          className=" hidden"
                        />
                        <div>
                          {preview ? (
                            <div className="bg-[#E6FAEE] w-full p-4 rounded-xl">
                              <div className="flex items-center gap-2">
                                <Image
                                  width={40}
                                  height={40}
                                  src="/assets/my-farms/pdf.svg"
                                  alt="pdf"
                                />
                                <div>
                                  <p className="text-sm text-[#5F5F5F] font-poppinsSemiBold">
                                    {file?.name || ""}
                                  </p>
                                  <p>
                                    {file?.lastModified}{" "}
                                    <span>
                                      {file?.type} {file?.size}
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="bg-[#EEFEF6] border border-[#51F4A6] border-dashed flex flex-col gap-y-3 cursor-pointer items-center w-full py-6 rounded-xl">
                              <span>
                                <FiDownload size={24} color="#2D865B" />{" "}
                              </span>
                              <p className="text-xs text-[#616161] tracking-[-0.8%] font-poppinsRegular">
                                Upload image or <br />{" "}
                                <span className=" font-poppinsSemiBold block mt-1">
                                  click to browse
                                </span>
                              </p>
                            </div>
                          )}
                        </div>
                      </label>
                    </div>
                  </div>

                  <div className="mt-8 flex items-center justify-between">
                    <Button
                      className="w-fit flex items-center justify-center gap-x-4"
                      onClick={(e) => {
                        e.preventDefault();
                        setFormStep(formStep - 1);
                        // Remove the current step from completedSteps
                        setCompletedSteps((prev) =>
                          prev.filter((step) => step !== formStep)
                        );
                      }}
                      variant="secondary"
                    >
                      <span>
                        <FaArrowLeftLong />
                      </span>{" "}
                      Previous{" "}
                    </Button>

                    <Button
                      className="w-fit flex items-center justify-center gap-x-4"
                      onClick={handleStep3Proceed}
                    >
                      Proceed{" "}
                      <span>
                        <FaArrowRightLong />
                      </span>{" "}
                    </Button>
                  </div>
                </div>
              )}
              {/* Fourth form */}

              {formStep === 4 && (
                <div>
                  <div className="p-6 bg-white rounded-lg">
                    <p className="mb-2">
                      Upload Farm Images
                      <span className=" font-poppinsRegular text-[#5F5F5F]">
                        (5mb size, jpg, png format only)
                      </span>
                    </p>
                    <div className=" flex flex-col gap-y-6">
                      <div className="flex flex-col gap-4">
                        {/* First row - Single image */}
                        <div className="w-full">
                          <label
                            htmlFor="file-upload-image1"
                            className="text-sm font-poppinsSemiBold text-[#5F5F5F] block"
                          >
                            <input
                              id="file-upload-image1"
                              type="file"
                              accept="image/*"
                              onChange={(e) => handleFileChange(e, "image1")}
                              className="hidden"
                            />
                            <div>
                              {uploadedImages.image1.preview ? (
                                <div className="border border-[#51F4A6] border-dashed w-full rounded-xl relative">
                                  <div className="relative">
                                    <div className="relative">
                                      <Image
                                        width={556}
                                        height={158}
                                        src={uploadedImages.image1.preview}
                                        alt="Uploaded image1"
                                        className="object-cover w-full"
                                      />
                                    </div>

                                    <div className="flex items-center justify-center absolute gap-x-1 bg-[#FFFFFFE5] px-2 py-1 cursor-pointer rounded-lg bottom-[8rem] left-[20rem]">
                                      <p className="text-xs font-poppinsRegular text-[#616161]">
                                        Change Cover
                                      </p>
                                      <span>
                                        <FiDownload color="#2D865B" size={14} />
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <div className="bg-[#EEFEF6] border border-[#51F4A6] border-dashed flex flex-col gap-y-3 cursor-pointer items-center w-full py-6 rounded-xl">
                                  <span>
                                    <FiDownload size={24} color="#2D865B" />
                                  </span>
                                  <p className="text-xs text-[#616161] tracking-[-0.8%] font-poppinsRegular">
                                    Upload image or <br />
                                    <span className="font-poppinsSemiBold block mt-1">
                                      click to browse
                                    </span>
                                  </p>
                                </div>
                              )}
                            </div>
                          </label>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        {Object.entries(uploadedImages)
                          .filter(([key]) => key !== "image1")
                          .map(([key, { preview }]) => (
                            <div key={key}>
                              <label
                                htmlFor={`file-upload-${key}`}
                                className="text-sm font-poppinsSemiBold text-[#5F5F5F] block"
                              >
                                <input
                                  id={`file-upload-${key}`}
                                  type="file"
                                  accept="image/*"
                                  onChange={(e) => handleFileChange(e, key)}
                                  className="hidden"
                                />
                                <div>
                                  {preview ? (
                                    <div
                                      className={`border border-[#51F4A6] border-dashed w-full rounded-xl relative`}
                                    >
                                      <div className="relative">
                                        <Image
                                          width={177}
                                          height={95}
                                          src={preview}
                                          alt={`Uploaded ${key}`}
                                          className="object-cover w-full"
                                        />
                                        <div className="flex items-center justify-center absolute gap-x-1 bg-[#FFFFFFE5] px-2 py-1 cursor-pointer rounded-lg bottom-[4rem] right-[3rem]">
                                          <p className="text-xs font-poppinsRegular text-[#616161]">
                                            Change Cover
                                          </p>
                                          <span>
                                            <FiDownload
                                              color="#2D865B"
                                              size={14}
                                            />
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  ) : (
                                    <div className="bg-[#EEFEF6] border border-[#51F4A6] border-dashed flex flex-col gap-y-3 cursor-pointer items-center w-full py-6 rounded-xl">
                                      <span>
                                        <FiDownload size={24} color="#2D865B" />
                                      </span>
                                      <p className="text-xs text-[#616161] tracking-[-0.8%] font-poppinsRegular">
                                        Upload image or <br />
                                        <span className="font-poppinsSemiBold block mt-1">
                                          click to browse
                                        </span>
                                      </p>
                                    </div>
                                  )}
                                </div>
                              </label>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex items-center justify-between">
                    <Button
                      className="w-fit flex items-center justify-center gap-x-4"
                      onClick={(e) => {
                        e.preventDefault();
                        setCompletedSteps((prev) =>
                          prev.filter((step) => step !== formStep)
                        );
                        setFormStep(formStep - 1);
                      }}
                      variant="secondary"
                    >
                      <span>
                        <FaArrowLeftLong />
                      </span>{" "}
                      Previous{" "}
                    </Button>

                    <Button
                      className="w-fit flex items-center justify-center gap-x-4"
                      onClick={handleStep4Proceed}
                    >
                      Proceed{" "}
                      <span>
                        <FaArrowRightLong />
                      </span>{" "}
                    </Button>
                  </div>
                </div>
              )}

              {/* Fifth form */}
              {formStep === 5 && (
                <div className="p-6 bg-white rounded-lg">
                  <div className="flex flex-col gap-y-6">
                    <div>
                      <div className="flex gap-x-2 items-center justify-center pb-4 border-b border-[#F6F6F6]">
                        {" "}
                        <FarmHeading text="Project Image" />
                        <EditBtn onButtonEdit={() => setFormStep(4)} />
                      </div>

                      <div className="pt-6">
                        <Image
                          width={556}
                          height={158}
                          src={
                            uploadedImages.image1.preview ||
                            "/assets/my-farms/no-img.avif"
                          }
                          alt="Uploaded image1"
                          className="object-cover w-full mb-6"
                        />

                        <div className="grid grid-cols-3 gap-3">
                          <Image
                            width={177}
                            height={95}
                            src={
                              uploadedImages.image2.preview ||
                              "/assets/my-farms/no-img.avif"
                            }
                            alt={`Uploaded images`}
                            className="object-cover w-full"
                          />
                          <Image
                            width={177}
                            height={95}
                            src={
                              uploadedImages.image3.preview ||
                              "/assets/my-farms/no-img.avif"
                            }
                            alt={`Uploaded images`}
                            className="object-cover w-full"
                          />
                          <Image
                            width={177}
                            height={95}
                            src={
                              uploadedImages.image4.preview ||
                              "/assets/my-farms/no-img.avif"
                            }
                            alt={`Uploaded images`}
                            className="object-cover w-full"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex gap-x-2 items-center justify-center pt-6 border-t border-[#F6F6F6] mb-4">
                        {" "}
                        <FarmHeading text="Farm Information" />
                        <EditBtn onButtonEdit={() => setFormStep(1)} />
                      </div>

                      <div>
                        {farmDetailsConfirmation.slice(0, 5).map((el, i) => (
                          <div
                            key={i}
                            className="flex justify-between items-center py-3 border-t border-[#F6F6F6] font-poppinsRegular text-sm text-[#5F5F5F]"
                          >
                            <p>{el?.name}</p>
                            <p className=" font-poppinsSemiBold">
                              {el?.details}
                            </p>
                          </div>
                        ))}
                        <div className="border-t border-[#F6F6F6] pt-3 ">
                          <p className="font-poppinsRegular text-sm text-[#5F5F5F] pb-2">
                            Description
                          </p>

                          <p className="bg-[#FCFCFC] border p-5 border-[#F6F6F6] rounded-xl text-[#5F5F5F] font-poppinsSemiBold">
                            We specialize in apple
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex gap-x-2 items-center justify-center pt-6 border-t border-[#F6F6F6] mb-4">
                        {" "}
                        <FarmHeading text="Farm Ownership Details" />
                        <EditBtn onButtonEdit={() => setFormStep(3)} />
                      </div>

                      <div>
                        {farmDetailsConfirmation.slice(5, 8).map((el, i) => (
                          <div
                            key={i}
                            className="flex justify-between items-center py-3 border-t border-[#F6F6F6] font-poppinsRegular text-sm text-[#5F5F5F]"
                          >
                            <p>{el?.name}</p>
                            <p className=" font-poppinsSemiBold">
                              {el?.details}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex gap-x-2 items-center justify-center pt-6 border-t border-[#F6F6F6] mb-4">
                        {" "}
                        <FarmHeading text="Document Details" />
                        <EditBtn onButtonEdit={() => setFormStep(3)} />
                      </div>

                      <div className="bg-[#FCFCFC] w-full p-4 rounded-xl border border-[#F6F6F6]">
                        <div className="flex items-center gap-2">
                          <Image
                            width={40}
                            height={40}
                            src={
                              file
                                ? "/assets/my-farms/pdf.svg"
                                : "/assets/my-farms/no-file.svg"
                            }
                            alt="pdf"
                          />
                          {file ? (
                            <div>
                              <p className="text-sm text-[#5F5F5F] font-poppinsSemiBold">
                                {file?.name || ""}
                              </p>
                              <p>
                                {file?.lastModified}{" "}
                                <span>
                                  {file?.type} {file?.size}
                                </span>
                              </p>
                            </div>
                          ) : (
                            <p className="text-sm text-[#5F5F5F] font-poppinsSemiBold">
                              No file
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 ">
                    <Button
                      className="w-full flex items-center justify-center gap-x-4"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? "Submitting..." : "Submit For review"}
                      <span>
                        <FaArrowRightLong />
                      </span>{" "}
                    </Button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </main>
      </DashboardLayout>
    </ProtectedRoute>
  );
};

export default AddFarm;
