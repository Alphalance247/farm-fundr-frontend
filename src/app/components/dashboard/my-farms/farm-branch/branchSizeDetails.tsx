import Label from "@/app/components/common/label";
import Input from "@/app/components/common/input";
import { branchFormData } from "@/utils/form";
import Button from "@/app/components/common/Buttons";
import { FaArrowRightLong } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import Image from "next/image";
import { useState } from "react";

const BranchSizeDetails = ({
  form,
  setForm,
  setFile,
  setFormStep,
}: {
  form: branchFormData;
  setForm: (form: branchFormData) => void;
  setFile: (file: File) => void;
  setFormStep: (formStep: number) => void;
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
        <div className="grid grid-cols-2 gap-2">
          <div>
            <Label className="">Branch Size</Label>
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
          <div>
            <Label>Select Farm</Label>
            <select
              id="fieldType"
              name="fieldType"
              value={form?.fieldType || ""}
              onChange={(e) => setForm({ ...form, fieldType: e.target.value })}
              className="w-full border bg-[#F6F6F6] focus:ring-[#51F4A6] focus:border-[#51F4A6] border-[#E0E0E0] rounded-md text-sm p-4 focus:outline-none focus:ring-1 text-[#7C7C7C] font-poppinsRegular"
            >
              <option value="">Select field type</option>

              <option value="Loamy">Loamy</option>
              <option value="Loamy">Sandy</option>
              <option value="Loamy">Clay</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div>
            <Label>Work Hours</Label>
            <select
              id="workHours"
              name="workHours"
              value={form?.workHours || ""}
              onChange={(e) => setForm({ ...form, workHours: e.target.value })}
              className="w-full border bg-[#F6F6F6] focus:ring-[#51F4A6] focus:border-[#51F4A6] border-[#E0E0E0] rounded-md text-sm p-4 focus:outline-none focus:ring-1 text-[#7C7C7C] font-poppinsRegular"
            >
              <option value="">8:00am</option>

              <option value="8:00am">9:00am</option>
              <option value="8:00am">8:00am</option>
              <option value="8:00am">8:00am</option>
            </select>
          </div>
          <div>
            <Label>Off time</Label>
            <select
              id="time"
              name="time"
              value={form?.time || ""}
              onChange={(e) => setForm({ ...form, time: e.target.value })}
              className="w-full border bg-[#F6F6F6] focus:ring-[#51F4A6] focus:border-[#51F4A6] border-[#E0E0E0] rounded-md text-sm p-4 focus:outline-none focus:ring-1 text-[#7C7C7C] font-poppinsRegular"
            >
              <option value="">9:00pm</option>

              <option value="9:00pm">9:00pm</option>
              <option value="9:00pm">9:00pm</option>
              <option value="9:00pm">9:00pm</option>
            </select>
          </div>
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

export default BranchSizeDetails;
