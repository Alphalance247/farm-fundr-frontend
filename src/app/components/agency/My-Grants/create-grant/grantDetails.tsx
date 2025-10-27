"use client";
import Label from "@/app/components/common/label";
import Input from "@/app/components/common/input";
import { grantFormData } from "@/utils/form";
import Button from "@/app/components/common/Buttons";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import toast from "react-hot-toast";
import Image from "next/image";
import { useState } from "react";
import { FiDownload } from "react-icons/fi";

const GrantDetails = ({
  form,
  setForm,
  setFormStep,
  setCompletedSteps,
  formStep,
}: {
  form: grantFormData;
  setForm: (form: grantFormData) => void;
  setFormStep: (formStep: number) => void;
  setCompletedSteps: (steps: number[] | ((prev: number[]) => number[])) => void;
  formStep: number;
}) => {
  const decriptionLength24 = form?.description.trim().length > 24;
  const [preview, setPreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleProceed = () => {
    const errors = [];

    if (form?.funding_amount === "") {
      errors.push("Select Farm is required");
    }
    if (form?.eligibility === "") {
      errors.push("Select Branch is required");
    }
    if (form?.application__deadline === "") {
      errors.push("Project Name is required");
    }
    if (form?.disburse_type === "") {
      errors.push("Project Type is required");
    }

    if (errors.length > 0) {
      toast.error(errors.join("\n"));
    } else {
      setFormStep(3);
      setCompletedSteps((prev) => [...prev, formStep]);
    }
  };

  const handlePdfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.size <= 5 * 1024 * 1024) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    } else {
      alert("File must be less than 10MB");
    }
  };

  return (
    <div>
      <div className="p-6 md:p-4 bg-white mt-6 rounded-lg flex flex-col gap-y-6">
        <h3 className="text-3xl font-aristoBold text-[#5F5F5F]">
          Grant details
        </h3>

        <div>
          <Label className="">Funding Amount</Label>
          <Input
            name="funding_amount"
            className=""
            type="number"
            value={form?.funding_amount}
            placeholder=""
            variant="tertiary"
            onChange={(e) =>
              setForm({ ...form, funding_amount: e.target.value })
            }
          />
        </div>

        <div>
          <Label>
            Eligibility Criteria
            <span className=" font-poppinsRegular text-[#DE4204] text-sm">
              (Max 250 characters)
            </span>{" "}
          </Label>

          <textarea
            name="eligibility"
            id=""
            value={form?.eligibility || ""}
            cols={20}
            rows={5}
            className="bg-[#F6F6F6] border-[#E2E2E2] border w-full text-[#7C7C7C] rounded-lg text-sm p-4 focus:ring-[#51F4A6]"
            placeholder="Enter description here"
            onChange={(e) => {
              setForm({ ...form, eligibility: e.target.value });
            }}
          ></textarea>
        </div>

        <div>
          <Label className="">Application Deadline</Label>
          <Input
            name="application__deadline"
            className=""
            type="date"
            value={form?.application__deadline}
            placeholder="Grant name"
            variant="tertiary"
            onChange={(e) =>
              setForm({ ...form, application__deadline: e.target.value })
            }
          />
        </div>

        <div>
          <Label>Disbursement Type</Label>
          <select
            id="disburse_type"
            name="disburse_type"
            value={form?.disburse_type || ""}
            onChange={(e) => {
              setForm({ ...form, disburse_type: e.target.value });
            }}
            className="w-full border bg-[#F6F6F6] focus:ring-[#51F4A6] focus:border-[#51F4A6] border-[#E0E0E0] rounded-md text-sm p-4 focus:outline-none focus:ring-1 text-[#7C7C7C] font-poppinsRegular"
          >
            <option value="">Select field type</option>
            <option key="" value="jjj">
              nill
            </option>
          </select>
        </div>

        <div>
          <label
            htmlFor="file-upload"
            className="text-sm font-poppinsSemiBold text-[#5F5F5F]  block"
          >
            <p className="mb-2">
              Supporting Files (Optional)
              <span className=" font-poppinsRegular text-[#DE4204]">
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
                <div className="bg-[#EEFEF6] border border-[#51F4A6] border-dashed flex flex-col gap-y-3 cursor-pointer items-center w-full py-12 rounded-xl">
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

      <div className="mt-8 flex flex-row gap-4 md:flex-col md:gap-4 items-center justify-between">
        <Button
          className="w-full flex items-center justify-center gap-x-4"
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
          Previous
        </Button>

        <Button
          className="w-full flex items-center justify-center gap-x-4"
          onClick={handleProceed}
          type="button"
        >
          Proceed{" "}
          <span>
            <FaArrowRightLong />
          </span>{" "}
        </Button>
      </div>
    </div>
  );
};

export default GrantDetails;
