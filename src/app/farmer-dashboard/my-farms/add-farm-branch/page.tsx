"use client";
import DashboardLayout from "@/app/components/common/dashboardLayout";
import Image from "next/image";
import GoBackBtn from "@/app/components/common/goBack";
import { useState } from "react";
import BranchInformation from "@/app/components/dashboard/my-farms/farm-branch/branchInformation";
import BranchSizeDetails from "@/app/components/dashboard/my-farms/farm-branch/branchSizeDetails";

const AddFarmBranch = () => {
  const [formStep, setFormStep] = useState(1);
  const [file, setFile] = useState<File | null>(null);
  const [form, setForm] = useState({
    selectFarm: "",
    branchName: "",
    branchAddress: "",
    description: "",
    branchSize: "",
    fieldType: "",
    workHours: "",
    time: "",
  });

  return (
    <DashboardLayout>
      <main className="px-10 py-10 bg-gray-50 overflow-auto">
        <div className="flex gap-x-6">
          <div className="w-[30%]">
            <GoBackBtn href="/my-farms" />

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
                  All field must be filled and for your farm branch to go live.
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
            <h3 className="text-[#303030] font-aristoBold text-3xl mt-4">
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
            <div
              className={`w-[114px] h-[3px]  rounded-xl ${
                formStep === 1 ? "bg-[#51F4A6]" : "bg-[#E2E2E2]"
              }
              `}
            ></div>
            <div
              className={`w-[114px] h-[3px]  rounded-xl ${
                formStep === 2 ? "bg-[#51F4A6]" : "bg-[#E2E2E2]"
              }
              `}
            ></div>

            {/* {[1, 2].map((el, i) => (
              <div
                className={`w-[114px] h-[3px]  rounded-xl ${
                  formStep === 2 ? "bg-[#51F4A6]" : "bg-[#E2E2E2]"
                }
                `}
                key={i}
              ></div>
            ))} */}
          </div>

          <form action="" className="w-[70%] mx-auto">
            {formStep === 1 && (
              <BranchInformation
                form={form}
                setForm={setForm}
                setFormStep={setFormStep}
              />
            )}
            {formStep === 2 && (
              <BranchSizeDetails
                form={form}
                setForm={setForm}
                setFile={setFile}
                setFormStep={setFormStep}
              />
            )}
          </form>
        </div>
      </main>
    </DashboardLayout>
  );
};

export default AddFarmBranch;
