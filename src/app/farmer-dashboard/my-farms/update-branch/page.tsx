"use client";
import DashboardLayout from "../../../components/common/dashboardLayout";
import React, { useEffect, useState } from "react";
import ProtectedRoute from "@/app/components/common/ProtectedRoute/protectedRoute";
import SpinnerModal from "@/app/components/common/modals/SpinnerModal";
import "react-phone-number-input/style.css";
import GoBackBtn from "@/app/components/common/goBack";
import Label from "@/app/components/common/label";
import Input from "@/app/components/common/input";
import Image from "next/image";
import { toast } from "react-hot-toast";
import { FiDownload } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { getBranchDetails } from "@/stores/farms/getBranchDetails";
import { AxiosError } from "axios";
import axiosInstance from "@/lib/axios";
import Button from "@/app/components/common/Buttons";

const UpdateBranch = () => {
  const [loadingProject, setLoading] = useState(false);
  const [selectedFarmId, setSelectedFarmId] = useState("");
  const [selectedBranchId, setSelectedBranchId] = useState("");
  const { fetchBranchDetails, data: branchList } = getBranchDetails();
  const router = useRouter();

  const farmBranchData = branchList?.data;

  useEffect(() => {
    if (farmBranchData) {
      setForm((prev) => ({
        ...prev,
        branchName: farmBranchData?.name || "",
        branchAddress: farmBranchData?.street || "",
        branchSize: farmBranchData?.plots || "",
        workHours: farmBranchData?.open_time || "",
        time: farmBranchData?.close_time || "",
        state: farmBranchData?.state || "",
        city: farmBranchData?.city || "",
        description: farmBranchData?.description || "",
      }));
    }
  }, [farmBranchData]);

  // Get the farm ID from localStorage on component mount
  useEffect(() => {
    const storedFarmId = localStorage.getItem("selectedEditFarmId");
    if (storedFarmId) {
      setSelectedFarmId(storedFarmId);
    } else {
      // If no farm ID is stored, redirect back to farms list
      router?.push(
        `/farmer-dashboard/my-farms/${selectedFarmId}/farm-branches/`
      );
    }
  }, [selectedFarmId, router]);

  // Get the farm ID from localStorage on component mount
  useEffect(() => {
    const storedBranchId = localStorage.getItem("slectedEditBranchId");
    if (storedBranchId) {
      fetchBranchDetails(storedBranchId);
      setSelectedBranchId(storedBranchId);
    } else {
      // If no farm ID is stored, redirect back to farms list
      router?.push(
        `/farmer-dashboard/my-farms/${selectedFarmId}/farm-branches/`
      );
    }
  }, [fetchBranchDetails, selectedBranchId, selectedFarmId, router]);

  const [form, setForm] = useState({
    selectFarm: "",
    branchName: "",
    branchAddress: "",
    description: "",
    branchSize: "",
    fieldType: "",
    workHours: "",
    time: "",
    state: "",
    city: "",
  });

  const [preview, setPreview] = useState<string | null | undefined>(
    farmBranchData?.images[0]
  );
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.size <= 5 * 1024 * 1024) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    } else if (!selectedFile?.type.includes("image")) {
      toast.error("Only image files are allowed");
      return;
    } else {
      toast.error("File must be less than 5MB");
      return;
    }
  };

  const handleProjectSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const decriptionLength24 = form?.description.trim().length > 50;

    if (!decriptionLength24) {
      toast.error("Description must be at least 100 characters long.");
      return;
    } else {
      try {
        setLoading(true);

        // Create FormData for file upload
        const formData = new FormData();
        if (file) {
          formData.append("images", file);
        }

        formData.append("name", form.branchName);
        formData.append("street", form.branchAddress);
        formData.append("description", form.description);
        formData.append("plots", form?.branchSize);
        formData.append("state", form?.state);
        formData.append("city", form?.city);
        formData.append("close_time", form?.time);
        formData.append("open_time", form?.workHours);

        // Make API call to create project
        const response = await axiosInstance.patch(
          `/farms/branches/${selectedBranchId}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (response.status === 201 || response.status === 200) {
          toast.success(
            response.data.message || "Branch updated successfully!"
          );
          router.push(
            `/farmer-dashboard/my-farms/${selectedFarmId}/farm-branches/`
          );

          setForm({
            selectFarm: "",
            branchName: "",
            branchAddress: "",
            description: "",
            branchSize: "",
            fieldType: "",
            workHours: "",
            time: "",
            state: "",
            city: "",
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

  return (
    <ProtectedRoute requiredUserType="farmer">
      <DashboardLayout>
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
              Edit Branch
            </h5>
            <p className=" font-poppinsRegular text-sm text-[#7C7C7C] mt-3 mb-4">
              {farmBranchData?.name}
            </p>
          </div>
          {/* form section */}

          <form
            action=""
            className="w-[70%] mx-auto xl:w-[80%] lg:w-[90%] md:w-full"
            onSubmit={(e) => handleProjectSubmit(e)}
          >
            <div className="p-6 bg-white rounded-lg shadow-lg md:px-3">
              <div className="flex flex-col gap-y-6">
                <p className="mb-4 font-poppinsSemiBold text-[#121212] text-lg border-y border-[#F6F6F6] py-3">
                  Branch Information
                </p>
                <div className="grid grid-cols-2 gap-6 md:grid-cols-1">
                  <div>
                    <Label className="">Branch Name</Label>
                    <Input
                      name="branchName"
                      className=""
                      type="text"
                      value={form?.branchName || ""}
                      placeholder="Enter farm size"
                      variant="tertiary"
                      onChange={(e) =>
                        setForm({ ...form, branchName: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <Label className="">Branch Address</Label>
                    <Input
                      name="branchAddress"
                      className=""
                      type="text"
                      value={form?.branchAddress}
                      placeholder="Enter farm size"
                      variant="tertiary"
                      onChange={(e) =>
                        setForm({ ...form, branchAddress: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 md:grid-cols-1 md:gap-4">
                  <div>
                    <Label className="">State</Label>
                    <Input
                      name="state"
                      className=""
                      type="text"
                      value={form?.state || ""}
                      placeholder="Enter farm state"
                      variant="tertiary"
                      onChange={(e) =>
                        setForm({ ...form, state: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <Label className="">City</Label>
                    <Input
                      name="city"
                      className=""
                      type="text"
                      value={form?.city || ""}
                      placeholder="Enter farm city"
                      variant="tertiary"
                      onChange={(e) =>
                        setForm({ ...form, city: e.target.value })
                      }
                    />
                  </div>
                </div>

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
              </div>

              <div className="flex flex-col gap-y-6 mt-8">
                {/* <p className="mb-4 font-poppinsSemiBold text-[#121212] text-lg border-y border-[#F6F6F6] py-3">
                  Branch Size 
                </p> */}

                <div>
                  <Label className="">
                    Branch Size (plots, hectares, e.g 20)
                  </Label>
                  <Input
                    name="branchSize"
                    className=""
                    type="text"
                    value={form?.branchSize}
                    placeholder="Enter farm size"
                    variant="tertiary"
                    onChange={(e) =>
                      setForm({ ...form, branchSize: e.target.value })
                    }
                  />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-1 md:gap-4 gap-x-4">
                  <div>
                    <Label>Work Hours (7am - 7pm)</Label>

                    <Input
                      name="workHours"
                      className=""
                      type="text"
                      value={form?.workHours || ""}
                      placeholder="Enter farm working hours"
                      variant="tertiary"
                      onChange={(e) =>
                        setForm({ ...form, workHours: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <Label>Off time (7pm - 7am)</Label>

                    <Input
                      name="time"
                      value={form?.time || ""}
                      className=""
                      type="text"
                      placeholder="Enter farm off time"
                      variant="tertiary"
                      onChange={(e) =>
                        setForm({ ...form, time: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="w-full">
                  <p className="mb-2 flex flex-row md:flex-col">
                    Update Branch Card Image
                    <span className=" font-poppinsRegular text-[#5F5F5F]">
                      (5mb size, jpg, png format only)
                    </span>
                  </p>
                  <label
                    htmlFor="file-upload-image1"
                    className="text-sm font-poppinsSemiBold text-[#5F5F5F] block"
                  >
                    <input
                      id="file-upload-image1"
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileChange(e)}
                      className="hidden"
                    />
                    <div>
                      {preview ? (
                        <div className="border border-[#51F4A6] border-dashed w-full rounded-xl relative">
                          <div className="relative">
                            <div className="relative">
                              <Image
                                width={100}
                                height={70}
                                src={preview}
                                alt="Uploaded image1"
                                className="object-cover w-full h-[300px]"
                              />
                            </div>

                            <div className="flex items-center justify-center absolute gap-x-1 bg-[#FFFFFFE5] px-2 py-1 cursor-pointer rounded-lg bottom-[10rem] left-[20rem]">
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
            </div>
            <div className="mt-10 flex gap-x-4 items-end justify-end">
              <Button
                className="w-fit flex items justify-center gap-x-4 text-right"
                type="submit"
              >
                Update Branch Details
              </Button>
            </div>
          </form>
        </main>
      </DashboardLayout>
    </ProtectedRoute>
  );
};

export default UpdateBranch;
