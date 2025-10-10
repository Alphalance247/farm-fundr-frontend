"use client";
import DashboardLayout from "@/app/components/common/dashboardLayout";
import Image from "next/image";
import GoBackBtn from "@/app/components/common/goBack";
import { useState } from "react";
import BranchInformation from "@/app/components/dashboard/my-farms/farm-branch/branchInformation";
import BranchSizeDetails from "@/app/components/dashboard/my-farms/farm-branch/branchSizeDetails";
import toast from "react-hot-toast";
import axiosInstance from "@/lib/axios";
import { AxiosError } from "axios";
import ProtectedRoute from "@/app/components/common/ProtectedRoute/protectedRoute";
import SpinnerModal from "@/app/components/common/modals/SpinnerModal";
import { useRouter } from "next/navigation";

const AddFarmBranch = () => {
  const [formStep, setFormStep] = useState(1);
  const [file, setFile] = useState<File | null>(null);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedFarmId, setSelectedFarmId] = useState<string | null>(null);
  const router = useRouter();
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
  const handleFinalSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const sizeValidation = /^[0-9]+(\.[0-9]+)?$/;
    const branchSizeValidation = sizeValidation.test(form?.branchSize);
    const errors = [];

    if (file === null) {
      errors.push("Upload farm images is required");
    }
    if (!branchSizeValidation) {
      errors.push("Branch size must be a number");
    }
    if (form?.workHours === "") {
      errors.push("Work hours is required");
    }
    if (form?.time === "") {
      errors.push("Off time is required");
    }

    if (errors.length > 0) {
      toast.error(errors.join("\n"));
    } else {
      try {
        setLoading(true);

        // Create FormData for file upload
        const formData = new FormData();

        formData.append("name", form?.branchName);
        formData.append("description", form?.description);
        formData.append("street", form?.branchAddress);
        formData.append("city", form?.city);
        formData.append("state", form?.state);
        formData.append("plots", form?.branchSize);
        formData.append("images", file as Blob);
        formData.append("open_time", form?.workHours);
        formData.append("close_time", form?.time);

        const res = await axiosInstance.post(
          `farms/${selectedFarmId}/branches`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (res.status === 201) {
          toast.success(
            res.data?.statusmessage || "Farm successfully submitted for review"
          );

          router?.push("/farmer-dashboard/my-farms");

          // Reset form
          setFormStep(1);
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

          // Reset files
          setFile(null);

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
    }
  };

  return (
    <ProtectedRoute requiredUserType="farmer">
      <DashboardLayout>
        {loading && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50 flex items-center justify-center">
            <SpinnerModal
              onClose={() => {}}
              message="Submitting your farm branch details..."
            />
          </div>
        )}

        <main className="px-10 md:px-4 py-10 bg-gray-50 overflow-auto">
          <div className="flex flex-row md:flex-col md:gap-6 gap-x-6">
            <div className="w-[30%] xl:w-[60%] lg:w-[50%] md:w-full">
              <GoBackBtn href="/farmer-dashboard/my-farms" />

              <div className="border lg:items-center border-[#FEF0B0] bg-[#FFFAE6] rounded-lg p-3 flex gap-x-5 items-start mt-6 ">
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
                    All field must be filled and for your farm branch to go
                    live.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Image
                src="/assets/my-farms/farmform.svg"
                width={112}
                height={90}
                alt="warning"
                className="mx-auto"
              />
              <h3 className="text-[#303030] font-aristoBold text-3xl xl:text-2xl  mt-4">
                {formStep === 1
                  ? " Set Up Your farm Details"
                  : formStep === 2
                  ? "Set Up Your Farm Ownership"
                  : ""}
              </h3>
            </div>
          </div>

          <div className="">
            {/* Form steps */}
            <div className="text-sm font-poppinsSemiBold text-[#303030] mt-2 mb-2 text-center">
              Step {formStep}/2
            </div>
            <div className="flex gap-x-2 justify-center mt-4 mb-6">
              {[1, 2].map((el, i) => (
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

            <form
              action="submit"
              onSubmit={(e) => handleFinalSubmit(e)}
              className="w-[70%] xl:w-full mx-auto"
            >
              {formStep === 1 && (
                <BranchInformation
                  form={form}
                  setForm={setForm}
                  setFormStep={setFormStep}
                  formStep={formStep}
                  setCompletedSteps={setCompletedSteps}
                  setSelectedFarmId={setSelectedFarmId}
                />
              )}
              {formStep === 2 && (
                <BranchSizeDetails
                  form={form}
                  setForm={setForm}
                  setFile={setFile}
                  setFormStep={setFormStep}
                  formStep={formStep}
                  setCompletedSteps={setCompletedSteps}
                />
              )}
            </form>
          </div>
        </main>
      </DashboardLayout>
    </ProtectedRoute>
  );
};

export default AddFarmBranch;
