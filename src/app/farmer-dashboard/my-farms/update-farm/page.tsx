"use client";
import DashboardLayout from "../../../components/common/dashboardLayout";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Label from "@/app/components/common/label";
import { FiDownload } from "react-icons/fi";
import { toast } from "react-hot-toast";
import { AxiosError } from "axios";
import axiosInstance from "@/lib/axios";
import { environment } from "@/env/env.local";
import ProtectedRoute from "@/app/components/common/ProtectedRoute/protectedRoute";
import SpinnerModal from "@/app/components/common/modals/SpinnerModal";
import { Country, IState, ICountry, State } from "country-state-city";
import PhoneInput from "react-phone-number-input";
import Input from "@/app/components/common/input";
import "react-phone-number-input/style.css";
import GoBackBtn from "@/app/components/common/goBack";
import Button from "@/app/components/common/Buttons";
import { getFarmDetails } from "@/stores/farms/getFarmDetails";
import { useRouter } from "next/navigation";
import ConfirmationModal from "@/app/components/common/dashboard/confirmationModal";

const UpdateFarm = () => {
  const { data, fetchFarmDetails } = getFarmDetails();
  const [selectedEditFarmId, setSelectedEditFarmId] = useState("");
  const farmData = data?.data?.farm;
  const router = useRouter();

  // Get the farm ID from localStorage on component mount
  useEffect(() => {
    const storedFarmId = localStorage.getItem("selectedEditFarmId");
    if (storedFarmId) {
      setSelectedEditFarmId(storedFarmId);
      // Fetch farm details using the stored ID
      fetchFarmDetails(storedFarmId);
    } else {
      // If no farm ID is stored, redirect back to farms list
      window.location.href = "/farmer-dashboard/my-farms";
    }
  }, [fetchFarmDetails]);

  useEffect(() => {
    fetchFarmDetails(selectedEditFarmId);
  }, [fetchFarmDetails, selectedEditFarmId]);

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
  // Update the state to handle multiple images
  const [uploadedImages, setUploadedImages] = useState<{
    [key: string]: { file: File | null; preview: string | null };
  }>({
    image1: { file: null, preview: null },
    image2: { file: null, preview: null },
    image3: { file: null, preview: null },
    image4: { file: null, preview: null },
  });
  const [preview, setPreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [successModal, setSuccessModal] = useState(false);
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [states, setStates] = useState<IState[]>([]);
  const [loadingUploadImage, setUploadingImages] = useState(false);

  useEffect(() => {
    if (farmData) {
      setForm((prev) => ({
        ...prev,
        country: farmData?.country || "",
        state: farmData?.state || "",
        phone: farmData?.farm_whatsapp_number || "",
        farmName: farmData?.name || "",
        farmAddress: farmData?.street || "",
        farmSize: farmData?.land_size || "",
        fieldType: farmData?.land_size_type || "",
        fieldDescription: farmData?.description || "",
        ownershipType: farmData?.land_ownership || "",
        cacNumber: farmData?.cac_reg_no || "",
        operatingSince: farmData?.started_date || "",
        farmEmail: farmData?.farm_email || "",
        farmPhone: farmData?.farm_phone_number || "",
        city: farmData?.city || "",
      }));

      setFile(farmData?.cac_reg_doc);

      // // Prefill images with backend data
      if (farmData?.farm_images && farmData?.farm_images.length > 0) {
        const imageKeys = ["image1", "image2", "image3", "image4"];
        const newUploadedImages: {
          [key: string]: { file: File | null; preview: string | null };
        } = {
          image1: { file: null, preview: null },
          image2: { file: null, preview: null },
          image3: { file: null, preview: null },
          image4: { file: null, preview: null },
        };

        // Map backend images to the image slots
        farmData?.images.forEach((projectImage, index) => {
          if (index < imageKeys.length) {
            const imageKey = imageKeys[index];
            newUploadedImages[imageKey] = {
              file: null, // Keep as null since we're displaying existing images
              preview: projectImage,
            };
          }
        });
        setUploadedImages(newUploadedImages);
      }
    }
  }, [farmData]);

  // Load countries on component mount
  useEffect(() => {
    const loadCountries = () => {
      const countriesData = Country.getAllCountries();
      setCountries(countriesData);
    };
    loadCountries();
  }, []);

  //   Load states when country changes
  useEffect(() => {
    const loadStates = () => {
      if (form?.country) {
        const statesData = State.getStatesOfCountry(form?.country);
        setStates(statesData);
      }
    };
    loadStates();
  }, [form?.country]);

  const handlePdfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.size <= 5 * 1024 * 1024) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    } else {
      alert("File must be less than 10MB");
    }
  };

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

      const img1 = uploadedImages.image1?.file;
      const img2 = uploadedImages.image2?.file;
      const img3 = uploadedImages.image3?.file;
      const img4 = uploadedImages.image4?.file;

      if (img1) {
        formData.append("images", img1);
      }
      if (img2) {
        formData.append("images", img2);
      }
      if (img3) {
        formData.append("images", img3);
      }
      if (img4) {
        formData.append("images", img4);
      }

      const res = await axiosInstance.put(
        `${environment.addFarm}${selectedEditFarmId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (res.status === 201 || res.status === 200) {
        toast.success(
          res.data?.statusmessage || "Farm details successfully updated"
        );
        setSuccessModal(true);
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

  const handleImageUpload = async () => {
    try {
      setUploadingImages(true);

      // Create FormData for file upload
      const formData = new FormData();

      const img1 = uploadedImages.image1?.file;
      const img2 = uploadedImages.image2?.file;
      const img3 = uploadedImages.image3?.file;
      const img4 = uploadedImages.image4?.file;

      if (img1 && farmData) {
        formData.append("images", img1);
        formData.append("old_image_links", farmData?.images[0]);
      }
      if (img2 && farmData) {
        formData.append("images", img2);
        formData.append("old_image_links", farmData?.images[1]);
      }
      if (img3 && farmData) {
        formData.append("images", img3);
        formData.append("old_image_links", farmData?.images[2]);
      }
      if (img4 && farmData) {
        formData.append("images", img4);
        formData.append("old_image_links", farmData?.images[3]);
      }

      const res = await axiosInstance.post(
        `/farms/${selectedEditFarmId}/update-farm-image`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (res.status === 200) {
        setSuccessModal(true);
      }

      setUploadingImages(false);
    } catch (err) {
      // Extract the error message from the response
      let errorMessage =
        "Please make sure all fields are filled correctly. and try again.";

      if (err instanceof AxiosError) {
        // Check if err is an instance of AxiosError
        errorMessage = err.response?.data?.statusmessage || errorMessage;
      }

      toast.error(errorMessage);

      setUploadingImages(false);
    }
  };

  return (
    <ProtectedRoute requiredUserType="farmer">
      <DashboardLayout>
        {loadingUploadImage && (
          <SpinnerModal
            onClose={() => {}}
            message="Updating farm images, please wait this might take a while...."
          />
        )}

        {loading && (
          <SpinnerModal
            onClose={() => {}}
            message="Updating farm details, please wait this might take a while...."
          />
        )}

        <main className="px-10 py-10 bg-gray-50 overflow-y-auto lg:px-6 md:px-4">
          <GoBackBtn href="/farmer-dashboard/my-farms" />
          <div className="mt-6 text-center">
            <h5 className="text-xl font-semibold text-[#5F5F5F]">Edit Farm</h5>
            <p className=" font-poppinsRegular text-sm text-[#7C7C7C] mt-3 mb-4">
              {farmData?.name}
            </p>
          </div>
          {/* form section */}

          <div className="w-[70%] mx-auto xl:w-[80%] lg:w-[90%] md:w-full">
            <div className="p-6 bg-white rounded-lg shadow-lg md:px-3">
              {/* Upload Farm Images */}
              <div className="">
                <p className="mb-2 font-poppinsSemiBold text-[#121212] text-lg border-b border-[#F6F6F6] pb-3">
                  Farm Image{" "}
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
                                  <img
                                    width={556}
                                    height={158}
                                    src={`${uploadedImages.image1.preview}`}
                                    alt="Uploaded image1"
                                    className="object-cover w-[759px] h-[308px]"
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

                  <div className="grid gap-4 grid-cols-1">
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
                                    <img
                                      width={177}
                                      height={95}
                                      src={`${preview}`}
                                      alt={`Uploaded ${key}`}
                                      className="object-cover w-[759px] h-[308px]"
                                    />
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
                      ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-x-4 items-end justify-end">
              <Button
                className="w-fit flex items justify-center gap-x-4 text-right"
                type="submit"
                onClick={handleImageUpload}
              >
                Update Farm Image
              </Button>
            </div>
          </div>

          <form
            action=""
            className="w-[70%] mx-auto xl:w-[80%] lg:w-[90%] md:w-full mt-10"
            onSubmit={(e) => handleFinalSubmit(e)}
          >
            <div className="p-6 bg-white rounded-lg shadow-lg md:px-3">
              {/*  Farm Information*/}

              <div className="mt-6 flex flex-col gap-y-6">
                <p className="mb-4 font-poppinsSemiBold text-[#121212] text-lg border-y border-[#F6F6F6] py-3">
                  Farm Information
                </p>

                <div className="grid grid-cols-2 gap-6 md:grid-cols-1">
                  <div>
                    <Label className="">farm Name</Label>
                    <Input
                      name="farmName"
                      className=""
                      type="text"
                      value={form?.farmName || ""}
                      placeholder="Enter Your Farm Name"
                      variant="tertiary"
                      onChange={(e) =>
                        setForm({ ...form, farmName: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <Label className="">farm Address</Label>

                    <Input
                      name="farmAddress"
                      className=""
                      type="text"
                      value={form?.farmAddress}
                      placeholder="Enter your Farm address"
                      variant="tertiary"
                      onChange={(e) =>
                        setForm({ ...form, farmAddress: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <Label> Country</Label>
                    <select
                      id="country"
                      name="country"
                      value={form?.country || ""}
                      onChange={(e) =>
                        setForm({ ...form, country: e.target.value })
                      }
                      className="w-full border bg-[#F6F6F6] focus:ring-[#51F4A6] focus:border-[#51F4A6] border-[#E0E0E0] rounded-md text-sm p-4 focus:outline-none focus:ring-1 text-[#7C7C7C] font-poppinsRegular"
                    >
                      <option value="">Select Country</option>
                      {countries.map((country) => (
                        <option key={country.isoCode} value={country.isoCode}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <Label>State Located</Label>
                    <select
                      id="state"
                      name="state"
                      value={form?.state || ""}
                      onChange={(e) =>
                        setForm({ ...form, state: e.target.value })
                      }
                      className="w-full border bg-[#F6F6F6] border-[#E0E0E0] text-[#7C7C7C] font-poppinsRegular rounded-md text-sm p-4 focus:outline-none focus:ring-1 focus:ring-[#51F4A6] focus:border-[#51F4A6]"
                      disabled={!form?.country}
                    >
                      <option value="">Select State</option>
                      {states.map((state) => (
                        <option key={state.isoCode} value={state?.name}>
                          {state.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <Label>City</Label>
                    <Input
                      name="city"
                      type="text"
                      value={form?.city || ""}
                      placeholder="Enter your city"
                      variant="tertiary"
                      onChange={(e) =>
                        setForm({ ...form, city: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <Label>Farm Email</Label>
                    <Input
                      name="farmEmail"
                      type="email"
                      value={form?.farmEmail || ""}
                      placeholder="Enter your Farm email"
                      variant="tertiary"
                      onChange={(e) =>
                        setForm({ ...form, farmEmail: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <Label>farm Whatsapp Number</Label>
                    <PhoneInput
                      placeholder="8140686688"
                      international
                      defaultCountry="NG"
                      required
                      value={form?.phone || ""}
                      onChange={(value) =>
                        setForm({ ...form, phone: value || "" })
                      }
                      className={`${PhoneInput} outline-green-400`}
                      numberInputProps={{
                        className: `outline-none border-[#E0E0E0] bg-[#F6F6F6] border-[1px] text-[#5F5F5F] rounded-tr-md rounded-br-md rounded-tl-none rounded-bl-none text-sm w-[100%] px-3 py-[14px]`,
                      }}
                    />
                  </div>

                  <div>
                    <Label>Farm Phone Number</Label>
                    <PhoneInput
                      placeholder="8140686688"
                      international
                      defaultCountry="NG"
                      required
                      value={form?.farmPhone || ""}
                      onChange={(value) =>
                        setForm({ ...form, farmPhone: value || "" })
                      }
                      className={`${PhoneInput} outline-green-400`}
                      numberInputProps={{
                        className: `outline-none border-[#E0E0E0] bg-[#F6F6F6] border-[1px] text-[#5F5F5F] rounded-tr-md rounded-br-md rounded-tl-none rounded-bl-none text-sm w-[100%] px-3 py-[14px]`,
                      }}
                    />
                  </div>
                </div>
              </div>

              <div>
                <div className="mt-6 flex flex-col gap-y-6">
                  <div className="grid grid-cols-2 gap-x-4">
                    <div>
                      <Label className="">Farm Size</Label>

                      <Input
                        type="text"
                        placeholder="Enter farm size (e.g., 10 or 10.5)"
                        name="farmSize"
                        value={form?.farmSize || ""}
                        onChange={(e) =>
                          setForm({ ...form, farmSize: e.target.value })
                        }
                      />
                    </div>

                    <div>
                      <Label>{" - "} </Label>
                      <select
                        name="fieldType"
                        value={form?.fieldType || ""}
                        onChange={(e) =>
                          setForm({ ...form, fieldType: e.target.value })
                        }
                        className={`w-full border bg-[#F6F6F6] focus:ring-[#51F4A6] focus:border-[#51F4A6] border-[#E0E0E0] rounded-md text-sm p-4 focus:outline-none focus:ring-1 text-[#7C7C7C] font-poppinsRegular`}
                      >
                        <option value="">Select field type</option>
                        <option value="hectares">Hectares</option>
                        <option value="acres">Acres</option>
                        <option value="plots">plots</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label>Description</Label>
                    <textarea
                      name="fieldDescription"
                      value={form?.fieldDescription || ""}
                      onChange={(e) =>
                        setForm({ ...form, fieldDescription: e.target.value })
                      }
                      cols={20}
                      rows={5}
                      className={`bg-[#F6F6F6] border-[#E2E2E2] border w-full text-[#7C7C7C] rounded-lg text-sm p-4 focus:ring-[#51F4A6]`}
                      placeholder="Enter description here (minimum 10 characters)"
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-y-6">
                <p className="font-poppinsSemiBold text-[#121212] text-lg border-y border-[#F6F6F6] py-3">
                  Farm Document
                </p>
                <div className="flex flex-col gap-y-6">
                  <div>
                    <Label className="">CAC registration Number</Label>
                    <Input
                      type="text"
                      placeholder="Enter number here"
                      name="cacNumber"
                      value={form?.cacNumber || ""}
                      onChange={(e) =>
                        setForm({ ...form, cacNumber: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <Label> Ownership Type</Label>
                    <select
                      id="ownershipType"
                      name="ownershipType"
                      value={form?.ownershipType || ""}
                      onChange={(e) =>
                        setForm({ ...form, ownershipType: e.target.value })
                      }
                      className={`w-full border bg-[#F6F6F6] focus:ring-[#51F4A6] focus:border-[#51F4A6] border-[#E0E0E0] rounded-md text-sm p-4 focus:outline-none focus:ring-1 text-[#7C7C7C] font-poppinsRegular`}
                    >
                      <option value="">Select ownership type</option>

                      <option value="Owned">Owned</option>
                      <option value="Leased">Leased</option>
                    </select>
                  </div>

                  <div>
                    <Label className="">Operating Since</Label>
                    <Input
                      type="date"
                      placeholder="Enter date"
                      name="operatingSince"
                      value={form?.operatingSince || ""}
                      onChange={(e) =>
                        setForm({ ...form, operatingSince: e.target.value })
                      }
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
              </div>
            </div>

            <div className="mt-8 flex gap-x-4 items-center justify-between">
              <Button
                className="w-full flex items-center justify-center gap-x-4"
                variant="secondary"
                type="button"
              >
                Cancel
              </Button>
              <Button
                className="w-full flex items-center justify-center gap-x-4"
                type="submit"
              >
                Save Changes
              </Button>
            </div>
          </form>
          <ConfirmationModal
            isOpen={successModal}
            onClose={() => setSuccessModal(false)}
            title="Farm details Updated"
            description="Your farm details have been successfully updated. Would you like to go home or continue updating your farm information?"
            confirmText="Keep Updating"
            cancelText="Go To Farms"
            onConfirm={() => setSuccessModal(false)}
            onCancel={() => router.push("/farmer-dashboard/my-farms")}
          />
        </main>
      </DashboardLayout>
    </ProtectedRoute>
  );
};

export default UpdateFarm;
