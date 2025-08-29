import Label from "@/app/components/common/label";
import Input from "@/app/components/common/input";
import { branchFormData } from "@/utils/form";
import Button from "@/app/components/common/Buttons";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-hot-toast";

// hello
const BranchSizeDetails = ({
  form,
  setForm,
  setFile,
  setFormStep,
  setCompletedSteps,
  formStep,
}: {
  form: branchFormData;
  setForm: (form: branchFormData) => void;
  setFile: (file: File) => void;
  setFormStep: (formStep: number) => void;
  setCompletedSteps: (steps: number[] | ((prev: number[]) => number[])) => void;
  formStep: number;
}) => {
  const [preview, setPreview] = useState<string | null>(null);

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

  return (
    <div>
      <div className="p-6 md:p-4 bg-white mt-6 rounded-lg flex flex-col gap-y-6">
        <div>
          <Label className="">Branch Size (plots, hectares, e.g 20)</Label>
          <Input
            name="branchSize"
            className=""
            type="text"
            value={form?.branchSize}
            placeholder="Enter farm size"
            variant="tertiary"
            onChange={(e) => setForm({ ...form, branchSize: e.target.value })}
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
              onChange={(e) => setForm({ ...form, workHours: e.target.value })}
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
              onChange={(e) => setForm({ ...form, time: e.target.value })}
            />
          </div>
        </div>

        <div className="w-full">
          <p className="mb-2 flex flex-row md:flex-col">
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

      <div className="mt-8 flex flex-row md:flex-col md:gap-4 items-center justify-between">
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
          Previous
        </Button>
        <Button
          className="w-fit flex items-center justify-center gap-x-4"
          type="submit"
        >
          Proceed to branch review
          <span>
            <FaArrowRightLong />
          </span>{" "}
        </Button>
      </div>
    </div>
  );
};

export default BranchSizeDetails;
