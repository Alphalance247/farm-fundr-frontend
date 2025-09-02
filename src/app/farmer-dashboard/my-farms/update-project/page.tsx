"use client";
import DashboardLayout from "../../../components/common/dashboardLayout";
import React, { useEffect, useState } from "react";
import Label from "@/app/components/common/label";
import { FiDownload } from "react-icons/fi";
import { toast } from "react-hot-toast";
import { AxiosError } from "axios";
import axiosInstance from "@/lib/axios";
import ProtectedRoute from "@/app/components/common/ProtectedRoute/protectedRoute";
import SpinnerModal from "@/app/components/common/modals/SpinnerModal";
import Input from "@/app/components/common/input";
import "react-phone-number-input/style.css";
import GoBackBtn from "@/app/components/common/goBack";
import Button from "@/app/components/common/Buttons";
import { getFarmListStore } from "@/stores/farms/getFarmList";
import { getBranchListStore } from "@/stores/farms/getBranchList";
import { getProjectDetails } from "@/stores/farms/getProjectDetails";
import { useRouter } from "next/navigation";

const UpdateProject = () => {
  const [loadingProject, setLoading] = useState(false);
  const [loadingProjectImage, setIsProjectLoading] = useState(false);
  const [selectedFarmId, setSelectedFarmId] = useState("");
  const [selectedBranchId, setSelectedBranchId] = useState("");
  const [selectedProjectId, setSelectedProjectId] = useState("");
  const { data: farmList, loading, fetchFarmList } = getFarmListStore();
  const { fetchBranchList, data: branchList } = getBranchListStore();
  const router = useRouter();

  const farmListData = farmList?.results?.farms;
  const farmBranchData = branchList?.results?.data;
  const { fetchProjectsDetails, data } = getProjectDetails();

  // Get the farm ID from localStorage on component mount
  useEffect(() => {
    const storedProjectId = localStorage.getItem("selectedEditFarmId");
    if (storedProjectId) {
      fetchProjectsDetails(storedProjectId);
      setSelectedProjectId(storedProjectId);
    } else {
      // If no farm ID is stored, redirect back to farms list
      window.location.href = `/farmer-dashboard/my-farms/${selectedFarmId}/farm-branches/${selectedBranchId}/${storedProjectId}`;
    }
  }, [fetchProjectsDetails, selectedBranchId, selectedFarmId]);

  const projectData = data?.data;

  useEffect(() => {
    fetchFarmList();
  }, [fetchFarmList]);

  useEffect(() => {
    if (selectedFarmId) {
      fetchBranchList(selectedFarmId);
    }
  }, [selectedFarmId, fetchBranchList]);

  const [form, setForm] = useState({
    selectFarm: "",
    selectBranch: "",

    projectName: "",
    projectType: "",
    description: "",
    investmentStart: "",
    investmentEnd: "",
    paymentType: "",
    howItWorks: "",
    fundingDetails: "",
    progressOvertime: "",
    branchSize: "",
    expectedReturn: "",
    plots: "",
  });
  const [uploadedImages, setUploadedImages] = useState<{
    [key: string]: { file: File | null; preview: string | null };
  }>({
    image1: { file: null, preview: null },
    image2: { file: null, preview: null },
    image3: { file: null, preview: null },
    image4: { file: null, preview: null },
  });

  useEffect(() => {
    if (projectData) {
      setForm((prev) => ({
        ...prev,
        selectFarm: projectData?.farm_name || "",
        selectBranch: projectData?.farm_branch_name || "",
        projectName: projectData?.name || "",
        projectType: projectData?.project_type || "",
        description: projectData?.description || "",
        investmentStart: projectData?.start_date || "",
        investmentEnd: projectData?.end_date || "",
        paymentType: projectData?.payment_structure || "",
        howItWorks: projectData?.how_it_works || "",
        fundingDetails: projectData?.budget || "",
        progressOvertime: projectData?.progress_over_time || "",
        branchSize: "",
        expectedReturn: projectData?.ROI || "",
        plots: projectData?.plots || "",
      }));
    }
    // Prefill images with backend data
    if (projectData?.images && projectData.images.length > 0) {
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
      projectData.images.forEach((projectImage, index) => {
        if (index < imageKeys.length) {
          const imageKey = imageKeys[index];
          newUploadedImages[imageKey] = {
            file: null, // Keep as null since we're displaying existing images
            preview: projectImage, // Use the image URL from backend
          };
        }
      });

      setUploadedImages(newUploadedImages);
    }
  }, [projectData]);

  // Add a new useEffect to handle farm and branch selection after data is loaded
  useEffect(() => {
    if (projectData && farmListData && farmListData?.length > 0) {
      // Find the farm ID that matches the farm name from project data
      const matchingFarm = farmListData?.find(
        (farm) => farm.name === projectData.farm_name
      );
      if (matchingFarm) {
        setForm((prev) => ({
          ...prev,
          selectFarm: matchingFarm.id,
        }));
        setSelectedFarmId(matchingFarm.id);
      }
    }
  }, [projectData, farmListData]);

  // Add another useEffect to handle branch selection after branches are loaded
  useEffect(() => {
    if (
      projectData &&
      farmBranchData &&
      farmBranchData?.length > 0 &&
      selectedFarmId
    ) {
      // Find the branch ID that matches the branch name from project data
      const matchingBranch = farmBranchData?.find(
        (branch) => branch.name === projectData.farm_branch_name
      );
      if (matchingBranch) {
        setForm((prev) => ({
          ...prev,
          selectBranch: matchingBranch.id,
        }));
        setSelectedBranchId(matchingBranch.id);
      }
    }
  }, [projectData, farmBranchData, selectedFarmId]);

  const handleProjectSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const decriptionLength24 = form?.howItWorks.trim().length > 100;

    if (!decriptionLength24) {
      toast.error("Description must be at least 100 characters long.");
      return;
    } else {
      try {
        setLoading(true);

        // Create FormData for file upload
        const formData = new FormData();
        formData.append("name", form.projectName);
        formData.append("project_type", form.projectType);
        formData.append("description", form.description);
        formData.append("start_date", form.investmentStart);
        formData.append("end_date", form.investmentEnd);
        formData.append("payment_structure", form.paymentType);
        formData.append("how_it_works", form.howItWorks);
        formData.append("budget", form.fundingDetails);
        formData.append("progress_over_time", form.progressOvertime);
        formData.append("plots", form.plots);
        formData.append("ROI", form.expectedReturn);
        formData.append("published", "true");

        // Make API call to create project
        const response = await axiosInstance.patch(
          `/farms/projects/${selectedProjectId}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (response.status === 201) {
          // Reset form and uploaded images after successful submission
          toast.success(
            response.data.message || "Project created successfully!"
          );
          // router.push(
          //   `/farmer-dashboard/my-farms/${selectedFarmId}/farm-branches/${selectedBranchId}/${selectedProjectId}`
          // );

          setForm({
            selectFarm: "",
            selectBranch: "",
            projectName: "",
            projectType: "",
            description: "",
            investmentStart: "",
            investmentEnd: "",
            paymentType: "",
            howItWorks: "",
            fundingDetails: "",
            progressOvertime: "",
            branchSize: "",
            expectedReturn: "",
            plots: "",
          });

          setUploadedImages({
            image1: { file: null, preview: null },
            image2: { file: null, preview: null },
            image3: { file: null, preview: null },
            image4: { file: null, preview: null },
          });
        }
      } catch (error) {
        if (error instanceof AxiosError) {
          toast.error(
            error.response?.data?.statusmessage || "An error occurred"
          );
        } else {
          toast.error("An unexpected error occurred");
        }
      } finally {
        setLoading(false);
      }
    }
  };

  const handleImageUpload = async () => {
    try {
      setIsProjectLoading(true);

      // Create FormData for file upload
      const formData = new FormData();

      const img1 = uploadedImages.image1?.file;
      const img2 = uploadedImages.image2?.file;
      const img3 = uploadedImages.image3?.file;
      const img4 = uploadedImages.image4?.file;

      if (img1 && projectData) {
        formData.append("images", img1);
        formData.append("old_image_links", projectData?.images[0]);
      }
      if (img2 && projectData) {
        formData.append("images", img2);
        formData.append("old_image_links", projectData?.images[1]);
      }
      if (img3 && projectData) {
        formData.append("images", img3);
        formData.append("old_image_links", projectData?.images[2]);
      }
      if (img4 && projectData) {
        formData.append("images", img4);
        formData.append("old_image_links", projectData?.images[3]);
      }

      const res = await axiosInstance.post(
        `/farms/projects/${selectedProjectId}/update-images`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (res.status === 201 || res.status === 200) {
        toast.success(
          res.data?.statusmessage || "Project Images updated successfully"
        );
        // router.push("/farmer-dashboard/my-farms");
      }

      setIsProjectLoading(false);
    } catch (err) {
      // Extract the error message from the response
      let errorMessage =
        "Please make sure all fields are filled correctly. and try again.";

      if (err instanceof AxiosError) {
        // Check if err is an instance of AxiosError
        errorMessage = err.response?.data?.statusmessage || errorMessage;
      }

      toast.error(errorMessage);

      setIsProjectLoading(false);
    }
  };

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

  return (
    <ProtectedRoute requiredUserType="farmer">
      <DashboardLayout>
        {loadingProjectImage && (
          <SpinnerModal
            onClose={() => {}}
            message="Uploading project images, please wait this might take a while...."
          />
        )}

        {loadingProject && (
          <SpinnerModal
            onClose={() => {}}
            message="Uploading farm details, please wait this might take a while...."
          />
        )}

        <main className="px-10 py-10 bg-gray-50 overflow-auto lg:px-6 md:px-4">
          <GoBackBtn href="/farmer-dashboard/my-farms" />
          <div className="mt-6 text-center">
            <h5 className="text-xl font-semibold text-[#5F5F5F]">
              {" "}
              Edit Project
            </h5>
            <p className=" font-poppinsRegular text-sm text-[#7C7C7C] mt-3 mb-4">
              {projectData?.name}
            </p>
          </div>
          {/* form section */}

          <div className="w-[70%] mx-auto xl:w-[80%] lg:w-[90%] md:w-full">
            <div className="p-6 bg-white rounded-lg shadow-lg md:px-3">
              {/* Upload Farm Images */}
              <div className=" bg-white rounded-lg">
                <p className="mb-2">
                  Upload Project Images
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
                                    className="object-cover w-full h-[458px] rounded-lg"
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

                  {/* Second row - Multiple images */}
                  <div className="grid grid-cols-1 gap-4 lg:grid-cols-1 md:grid-cols-1">
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
                                      className="object-cover w-full h-[458px] rounded-lg"
                                    />
                                    <div className="flex items-center justify-center absolute gap-x-1 bg-[#FFFFFFE5] px-2 py-1 cursor-pointer rounded-lg bottom-[4rem] right-[3rem]">
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

            <div className="my-10 flex gap-x-4 items-end justify-end">
              <Button
                className="w-fit flex items justify-center gap-x-4 text-right"
                type="submit"
                onClick={handleImageUpload}
              >
                Update Project Image
              </Button>
            </div>
          </div>

          <form
            action=""
            className="w-[70%] mx-auto xl:w-[80%] lg:w-[90%] md:w-full"
            onSubmit={(e) => handleProjectSubmit(e)}
          >
            <div className="p-6 bg-white rounded-lg shadow-lg md:px-3">
              {/*  Project Information*/}

              <div className="mt-6 flex flex-col gap-y-6">
                <p className="mb-4 font-poppinsSemiBold text-[#121212] text-lg border-y border-[#F6F6F6] py-3">
                  Farm Information
                </p>

                <div className="grid grid-cols-2 gap-6 md:grid-cols-1">
                  <div>
                    <Label>Select Farm</Label>
                    <select
                      id="selectFarm"
                      name="selectFarm"
                      value={form?.selectFarm || ""}
                      onChange={(e) => {
                        setForm({ ...form, selectFarm: e.target.value });
                        setSelectedFarmId(e.target.value);
                      }}
                      className="w-full border bg-[#F6F6F6] focus:ring-[#51F4A6] focus:border-[#51F4A6] border-[#E0E0E0] rounded-md text-sm p-4 focus:outline-none focus:ring-1 text-[#7C7C7C] font-poppinsRegular"
                    >
                      <option value="">Select field type</option>

                      {loading ? (
                        <option value="" disabled>
                          Loading farms...
                        </option>
                      ) : (
                        farmListData?.map((farm) => (
                          <option key={farm.id} value={farm.id}>
                            {farm.name}
                          </option>
                        ))
                      )}
                    </select>
                  </div>

                  <div>
                    <Label>Select Branch</Label>
                    <select
                      id="selectBranch"
                      name="selectBranch"
                      value={form?.selectBranch || ""}
                      onChange={(e) => {
                        setForm({ ...form, selectBranch: e.target.value });
                        // Set the selected branch ID when a branch is selected
                        setSelectedBranchId(e.target.value);
                      }}
                      className={`w-full border bg-[#F6F6F6] focus:ring-[#51F4A6] focus:border-[#51F4A6] border-[#E0E0E0] rounded-md text-sm p-4 focus:outline-none focus:ring-1 text-[#7C7C7C] font-poppinsRegular ${
                        !selectedFarmId ? "cursor-not-allowed " : ""
                      }`}
                      disabled={!selectedFarmId}
                    >
                      <option value="">Select branch</option>
                      {loading ? (
                        <option value="" disabled>
                          Loading branch...
                        </option>
                      ) : (
                        farmBranchData?.map((farm) => (
                          <option key={farm.id} value={farm.id}>
                            {farm.name}
                          </option>
                        ))
                      )}
                    </select>
                  </div>

                  <div>
                    <Label className="">project Name</Label>
                    <Input
                      name="projectName"
                      className=""
                      type="text"
                      value={form?.projectName}
                      placeholder="Enter project name"
                      variant="tertiary"
                      onChange={(e) =>
                        setForm({ ...form, projectName: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <Label>Project Type</Label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={form?.projectType || ""}
                      onChange={(e) =>
                        setForm({ ...form, projectType: e.target.value })
                      }
                      className="w-full border bg-[#F6F6F6] focus:ring-[#51F4A6] focus:border-[#51F4A6] border-[#E0E0E0] rounded-md text-sm p-4 focus:outline-none focus:ring-1 text-[#7C7C7C] font-poppinsRegular"
                    >
                      <option value="">Select type</option>

                      <option value="crop">Crop</option>
                      <option value="livestock">Livestock</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 md:grid-cols-1">
                  <div>
                    <Label>Description</Label>

                    <textarea
                      name="description"
                      id=""
                      value={form?.description || ""}
                      cols={20}
                      rows={5}
                      className="bg-[#F6F6F6] border-[#E2E2E2] border w-full text-[#7C7C7C] rounded-lg text-sm p-4 focus:ring-[#51F4A6]"
                      placeholder="Enter description here"
                      onChange={(e) => {
                        setForm({ ...form, description: e.target.value });
                      }}
                    ></textarea>
                  </div>

                  <div>
                    <Label className="">Plots</Label>
                    <Input
                      name="plots"
                      className=""
                      type="number"
                      value={form?.plots}
                      placeholder="Enter number of plots"
                      variant="tertiary"
                      onChange={(e) =>
                        setForm({ ...form, plots: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-y-6">
                <p className="mb-4 font-poppinsSemiBold text-[#121212] text-lg border-y border-[#F6F6F6] py-3">
                  Investment Details
                </p>

                <div className="grid grid-cols-2 gap-6 md:grid-cols-1">
                  <div>
                    <Label className="">Total Funding</Label>
                    <Input
                      name="fundingDetails"
                      className=""
                      type="number"
                      value={form?.fundingDetails}
                      placeholder="Enter total funding"
                      variant="tertiary"
                      onChange={(e) =>
                        setForm({ ...form, fundingDetails: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <div>
                      <Label className="">Expected Return (ROI)</Label>
                      <input
                        name="expectedReturn"
                        className="w-full bg-[#EEFEF6]"
                        min="1"
                        max="100"
                        type="range"
                        value={form?.expectedReturn}
                        placeholder="Enter expected return"
                        onChange={(e) =>
                          setForm({ ...form, expectedReturn: e.target.value })
                        }
                      />
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <p className="bg-[#8B8B8B] h-[3px] w-2 rounded-[1px]"></p>
                      <div className="flex items-center gap-x-2">
                        <p className=" font-poppinsSemiBold text-sm text-[#7C7C7C]">
                          ROI%:
                        </p>
                        <p className="px-3 py-[10px] border border-[#E2E2E2] bg-[#FCFCFC] text-[#5F5F5F] font-poppinsSemiBold text-sm rounded-[20px]">
                          {form?.expectedReturn} %
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label>Payment Structure</Label>
                    <select
                      id="paymentType"
                      name="paymentType"
                      value={form?.paymentType || ""}
                      onChange={(e) =>
                        setForm({ ...form, paymentType: e.target.value })
                      }
                      className="w-full border bg-[#F6F6F6] focus:ring-[#51F4A6] focus:border-[#51F4A6] border-[#E0E0E0] rounded-md text-sm p-4 focus:outline-none focus:ring-1 text-[#7C7C7C] font-poppinsRegular"
                    >
                      <option value="">Select type</option>

                      <option value="milestone">
                        Milestones (Every Month)
                      </option>
                      <option value="lump sum">Lump Sum (Once)</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-2 md:grid-cols-1 md:gap-6">
                    <div>
                      <Label className="">Investment Start date</Label>
                      <Input
                        name="investmentStart"
                        className=""
                        type="date"
                        value={form?.investmentStart}
                        placeholder="Enter start date"
                        variant="tertiary"
                        onChange={(e) =>
                          setForm({ ...form, investmentStart: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <Label className="">Investment End date</Label>
                      <Input
                        name="investmentEnd"
                        className=""
                        type="date"
                        value={form?.investmentEnd}
                        placeholder="Enter end date"
                        variant="tertiary"
                        onChange={(e) =>
                          setForm({ ...form, investmentEnd: e.target.value })
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-y-6">
                <p className="mb-4 font-poppinsSemiBold text-[#121212] text-lg border-y border-[#F6F6F6] py-3">
                  Description Details
                </p>

                <div>
                  <Label>How It Works</Label>

                  <textarea
                    name="howItWorks"
                    required
                    id=""
                    value={form?.howItWorks || ""}
                    cols={20}
                    rows={5}
                    className="bg-[#F6F6F6] border-[#E2E2E2] border w-full text-[#7C7C7C] rounded-lg text-sm p-4 focus:ring-[#51F4A6]"
                    placeholder="Enter description here"
                    onChange={(e) => {
                      setForm({ ...form, howItWorks: e.target.value });
                    }}
                  ></textarea>
                </div>

                <div>
                  <Label>Progress Over Time (Optional)</Label>

                  <textarea
                    name="progressOvertime"
                    id=""
                    value={form?.progressOvertime || ""}
                    cols={20}
                    rows={5}
                    className="bg-[#F6F6F6] border-[#E2E2E2] border w-full text-[#7C7C7C] rounded-lg text-sm p-4 focus:ring-[#51F4A6]"
                    placeholder="Enter description here"
                    onChange={(e) => {
                      setForm({ ...form, progressOvertime: e.target.value });
                    }}
                  ></textarea>
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
        </main>
      </DashboardLayout>
    </ProtectedRoute>
  );
};

export default UpdateProject;
