"use client";
import Label from "@/app/components/common/label";
import { projectFormData } from "@/utils/form";
import Button from "@/app/components/common/Buttons";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";
import Image from "next/image";
import { FiDownload } from "react-icons/fi";

const OptionalInfo = ({
  form,
  setForm,
  setFormStep,
  setFile,
}: {
  form: projectFormData;
  setForm: (form: projectFormData) => void;
  setFormStep: (formStep: number) => void;
  setFile: (file: File) => void;
}) => {
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.size <= 10 * 1024 * 1024) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    } else {
      alert("File must be less than 10MB");
    }
  };
  return (
    <div>
      <div className="p-6 bg-white mt-6 rounded-lg flex flex-col gap-y-6">
        <div>
          <Label>How It Works</Label>

          <textarea
            name="howItWorks"
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

        <div className="w-full">
          <p className="mb-2">
            Upload Farm Images
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
                        className="object-cover w-full"
                      />
                    </div>

                    <div className="flex items-center justify-center absolute gap-x-1 bg-[#FFFFFFE5] px-2 py-1 cursor-pointer rounded-lg bottom-[18rem] left-[20rem]">
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

      <div className="mt-8">
        <Button
          className="w-full flex items-center justify-center gap-x-4"
          onClick={(e) => {
            e.preventDefault();
            setFormStep(2);
          }}
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

export default OptionalInfo;
