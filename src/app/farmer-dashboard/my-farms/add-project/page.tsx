"use client";
import DashboardLayout from "../../../components/common/dashboardLayout";
import { Topbar } from "../../../components/common/dashboard/topBar";
import Image from "next/image";
import { useState } from "react";
import GoBackBtn from "@/app/components/common/goBack";
import ProjectInformation from "@/app/components/dashboard/my-farms/farm-projects/projectInformation";
import FundingDetails from "@/app/components/dashboard/my-farms/farm-projects/fundingDetails";
import OptionalInfo from "@/app/components/dashboard/my-farms/farm-projects/optionalInfo";
import toast from "react-hot-toast";
import ProtectedRoute from "@/app/components/common/ProtectedRoute/protectedRoute";
import SpinnerModal from "@/app/components/common/modals/SpinnerModal";
import axiosInstance from "@/lib/axios";
import { AxiosError } from "axios";
import { set } from "react-hook-form";

const AddPoject = () => {
  const [formStep, setFormStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [selectedFarmId, setSelectedFarmId] = useState("");
  const [selectedBranchId, setSelectedBranchId] = useState("");
  const [loading, setLoading] = useState(false);
  // const [loading, setLoading] = useState(false);
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

  const handleProjectSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if at least 3 images are uploaded
    const uploadedImageCount = Object.values(uploadedImages).filter(
      (img) => img.file !== null
    ).length;

    const decriptionLength24 = form?.howItWorks.trim().length > 100;

    if (uploadedImageCount < 3) {
      toast.error(
        `Please upload at least 3 farm images. You have uploaded ${uploadedImageCount} image(s).`
      );

      return;
    }
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
        formData.append("plots", form.branchSize);
        formData.append("ROI", form.expectedReturn);
        formData.append("published", "true");

        // Add images
        Object.entries(uploadedImages).forEach(([, imageData]) => {
          if (imageData.file) {
            formData.append("images", imageData.file);
          }
        });

        // Make API call to create project
        const response = await axiosInstance.post(
          `/farms/${selectedFarmId}/branches/${selectedBranchId}/projects/`,
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

          setFormStep(1);

          // Reset steps
          setCompletedSteps([]);
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

    // Validate form fields
  };

  return (
    <ProtectedRoute requiredUserType="farmer">
      <DashboardLayout>
        <Topbar overview="My farm" />

        {loading && (
          <SpinnerModal
            message="Creating project, please wait... This may take a few minutes."
            onClose={() => {}}
          />
        )}

        <main className="px-10 py-10 bg-gray-50 overflow-auto">
          <div className="flex gap-x-6">
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
                      All field must be filled and for your project to go live.
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
                  ? "create project information"
                  : formStep === 2
                  ? "Investment and funding details"
                  : formStep === 3
                  ? "Optional Information"
                  : ""}
              </h3>
            </div>
          </div>

          <div className="">
            {/* Form steps */}
            <div className="text-sm font-poppinsSemiBold text-[#303030] mt-2 mb-2 text-center">
              Step {formStep}/3
            </div>
            <div className="flex gap-x-2 justify-center mt-4 mb-6">
              {[1, 2, 3].map((el, i) => (
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
              action="submit"
              className="w-[70%] mx-auto"
              onSubmit={handleProjectSubmit}
            >
              {formStep === 1 && (
                <ProjectInformation
                  form={form}
                  setForm={setForm}
                  setFormStep={setFormStep}
                  formStep={formStep}
                  setCompletedSteps={setCompletedSteps}
                  setSelectedFarmId={setSelectedFarmId}
                  selectedFarmId={selectedFarmId}
                  setSelectedBranchId={setSelectedBranchId}
                />
              )}
              {formStep === 2 && (
                <FundingDetails
                  form={form}
                  setForm={setForm}
                  setFormStep={setFormStep}
                  formStep={formStep}
                  setCompletedSteps={setCompletedSteps}
                />
              )}
              {formStep === 3 && (
                <OptionalInfo
                  form={form}
                  setForm={setForm}
                  setFormStep={setFormStep}
                  formStep={formStep}
                  setCompletedSteps={setCompletedSteps}
                  setUploadedImages={setUploadedImages}
                  uploadedImages={uploadedImages}
                />
              )}
            </form>
          </div>
        </main>
      </DashboardLayout>
    </ProtectedRoute>
  );
};

export default AddPoject;
