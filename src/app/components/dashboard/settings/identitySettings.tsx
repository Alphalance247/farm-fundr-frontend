"use client";
import Image from "next/image";
import Input from "../../common/input";
import Label from "../../common/label";
import { useEffect, useState } from "react";
import Button from "../../common/Buttons";
import SettingHeading from "./common/settingHeading";
import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { getUserDetailsStore } from "@/stores/settings/getUserDetails";
import { FiDownload } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

interface UserDetails {
  fullname: string;
  email: string;
  city: string;
  username: string;
  state: string;
  country: string;
  phone: string;
  street_address: string;
  image: string;
  id_doc?: string;
  id_type?: string;
  id_digits?: string;
}

const IdentitySettings = ({ UserDetails }: { UserDetails: UserDetails }) => {
  const { fetchUserDetails } = getUserDetailsStore();
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const [form, setForm] = useState({
    documentType: UserDetails?.id_type || "",
    identityNumber: UserDetails?.id_digits || "",
  });

  const [loading, setIsLoading] = useState(false);

  const handleDocumentUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.size <= 5 * 1024 * 1024) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    } else {
      toast.error("File must be less than 5MB");
    }
  };

  const removeFile = () => {
    setFile(null);
    setPreview(null);
  };

  useEffect(() => {
    fetchUserDetails();
  }, [fetchUserDetails]);

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("documentType", form.documentType);
      formData.append("identityNumber", form.identityNumber);

      if (file) {
        formData.append("document", file);
      }

      const res = await axiosInstance.patch(
        `accounts/auth/update-profile`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (res.status === 200) {
        toast.success("Identity uploaded successfully");
        await fetchUserDetails();
      }
    } catch (err) {
      let errorMessage = "An error occurred please try again or contact Admin";
      if (err instanceof AxiosError) {
        errorMessage = err.response?.data?.statusmessage || errorMessage;
      }
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="mt-8">
      <SettingHeading
        heading="Identity Verification"
        subHead="Update your identity with the options provided"
      />

      <div className="mt-8 pb-10 border-b border-[#E4E7EC]">
        <form onSubmit={handleProfileUpdate}>
          <div className="flex flex-col gap-y-8">
            {/* Document Type */}
            <div>
              <Label>Document Type</Label>
              <select
                value={form.documentType}
                onChange={(e) =>
                  setForm({ ...form, documentType: e.target.value })
                }
                className="w-full border bg-[#F6F6F6] focus:ring-[#51F4A6] focus:border-[#51F4A6] border-[#CECECE] placeholder:text-[#858585] placeholder:text-base rounded-lg text-sm p-4 focus:outline-none focus:ring-1 text-[#5F5F5F]"
              >
                <option value="">Select document type</option>
                <option value="NIN">
                  National Identification Number (NIN)
                </option>
              </select>
            </div>
            <div>
              <Label className="mb-1 block">Identity Number (ID)</Label>
              <Input
                name="identityNumber"
                type="text"
                value={form.identityNumber}
                placeholder="12345678900"
                variant="tertiary"
                onChange={(e) =>
                  setForm({ ...form, identityNumber: e.target.value })
                }
              />
            </div>
            <div>
              <Label className="mb-2 block">
                Upload Document{" "}
                <span className="text-red-600 text-sm">
                  (5mb size, jpg, png, pdf format only)
                </span>
              </Label>
              <input
                id="file-upload"
                type="file"
                accept=".pdf,.jpg,.png"
                onChange={handleDocumentUpload}
                className="hidden"
              />
              <label htmlFor="file-upload" className="cursor-pointer w-full">
                {preview ? (
                  <>
                    <div className="bg-[#E6FAEE] w-full p-4 rounded-xl flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Image
                          width={40}
                          height={40}
                          src="/assets/my-farms/pdf.svg"
                          alt="pdf"
                        />
                        <div>
                          <p className="text-sm text-[#5F5F5F] font-semibold">
                            {file?.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {new Date(file?.lastModified || 0).toLocaleString()}{" "}
                            • 2MB
                          </p>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={removeFile}
                      className="flex items-center gap-1 mt-2 text-[#616161] text-sm px-3 py-1 rounded-md bg-[#FCECE6] hover:bg-red-100"
                    >
                      <MdDelete size={14} className="text-[#DE4204]" /> Remove
                    </button>
                  </>
                ) : (
                  <div className="bg-[#EEFEF6] border border-[#51F4A6] border-dashed flex flex-col gap-y-3 items-center w-full py-16 rounded-xl">
                    <FiDownload size={24} color="#2D865B" />
                    <p className="text-xs text-gray-600 text-center">
                      Upload document or <br />
                      <span className="font-semibold mt-1 block">
                        click to browse
                      </span>
                    </p>
                  </div>
                )}
              </label>
            </div>
          </div>
          <div className="text-right">
            <Button
              variant="primary"
              className="w-[211px] mt-10"
              type="submit"
              disabled={loading}
            >
              {loading ? "Saving..." : "Save"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default IdentitySettings;
