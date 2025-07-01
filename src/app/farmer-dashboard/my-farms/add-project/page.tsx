"use client";
import DashboardLayout from "../../../components/common/dashboardLayout";
import { Topbar } from "../../../components/common/dashboard/topBar";
import Image from "next/image";
import { useState } from "react";
import GoBackBtn from "@/app/components/common/goBack";
import ProjectInformation from "@/app/components/dashboard/my-farms/farm-projects/projectInformation";
import FundingDetails from "@/app/components/dashboard/my-farms/farm-projects/fundingDetails";
import OptionalInfo from "@/app/components/dashboard/my-farms/farm-projects/optionalInfo";

const AddPoject = () => {
  const [formStep, setFormStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [form, setForm] = useState({
    selectFarm: "",
    selectBranch: "",
    projectName: "",
    projectType: "",
    branchAddress: "",
    description: "",
    investmentStart: "",
    investmentEnd: "",
    paymentType: "",
    howItWorks: "",
    fundingDetails: "",
    progressOvertime: "",
    branchSize: "",
    fieldType: "",
    workHours: "",
    time: "",
    expectedReturn: "",
  });
  const [file, setFile] = useState<File | null>(null);
  console.log(file);

  return (
    <DashboardLayout>
      <Topbar overview="My farm" />

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
          <form action="" className="w-[70%] mx-auto">
            {formStep === 1 && (
              <ProjectInformation
                form={form}
                setForm={setForm}
                setFormStep={setFormStep}
                formStep={formStep}
                setCompletedSteps={setCompletedSteps}
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
                setFile={setFile}
                formStep={formStep}
                setCompletedSteps={setCompletedSteps}
              />
            )}
          </form>
        </div>
      </main>
    </DashboardLayout>
  );
};

export default AddPoject;
