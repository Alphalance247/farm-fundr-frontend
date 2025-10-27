"use client";
import AgencyLayout from "@/app/components/common/agency/agencyLayout";
import Button from "@/app/components/common/Buttons";
import ConfirmationModal from "@/app/components/common/dashboard/confirmationModal";
import GoBackBtn from "@/app/components/common/goBack";
import Input from "@/app/components/common/input";
import Label from "@/app/components/common/label";
import Image from "next/image";
import { useState } from "react";
import { FiDownload } from "react-icons/fi";

const EditGrant = () => {
  const [preview, setPreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
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
    <AgencyLayout>
      <main className="px-10 py-10 bg-gray-50 overflow-y-auto lg:px-6 md:px-4">
        <GoBackBtn href="/farmer-dashboard/my-farms" />
        <div className="mt-6 text-center">
          <h5 className="text-xl font-semibold text-[#5F5F5F]">Edit Grants</h5>
          <p className=" font-poppinsRegular text-sm text-[#7C7C7C] mt-3 mb-4">
            Green Valey Farm
          </p>
        </div>
        {/* form section */}

        <form
          action=""
          className="w-[70%] mx-auto xl:w-[80%] lg:w-[90%] md:w-full mt-10"
          //   onSubmit={(e) => handleFinalSubmit(e)}
        >
          <div className="p-6 bg-white rounded-lg shadow-lg md:px-3">
            {/*  Farm Information*/}

            <div className="">
              <p className="mb-2 font-poppinsSemiBold text-[#121212] text-lg border-b border-[#F6F6F6] pb-3">
                Grant Logo
              </p>
              <div>
                <label
                  htmlFor="file-upload"
                  className="text-sm font-poppinsSemiBold text-[#5F5F5F]  block"
                >
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

            <div className="mt-6 flex flex-col gap-y-6">
              <p className="mb-4 font-poppinsSemiBold text-[#121212] text-lg border-y border-[#F6F6F6] py-3">
                Basic Information
              </p>

              <div className="grid grid-cols-2 gap-6 md:grid-cols-1">
                <div>
                  <Label className="">Grant Title</Label>
                  <Input
                    name="grant_name"
                    className=""
                    type="text"
                    value={"grant_name"}
                    placeholder="Grant name"
                    variant="tertiary"
                    onChange={
                      (e) => {}
                      //   setForm({ ...form, grant_name: e.target.value })
                    }
                  />
                </div>

                <div>
                  <Label>Grant Category</Label>
                  <select
                    id="grant_category"
                    name="grant_category"
                    value={""}
                    onChange={(e) => {
                      //   setForm({ ...form, grant_category: e.target.value });
                      {
                      }
                    }}
                    className="w-full border bg-[#F6F6F6] focus:ring-[#51F4A6] focus:border-[#51F4A6] border-[#E0E0E0] rounded-md text-sm p-4 focus:outline-none focus:ring-1 text-[#7C7C7C] font-poppinsRegular"
                  >
                    <option value="">Select field type</option>
                    <option key="" value="nill">
                      nill
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <Label>Funding Type</Label>
                <select
                  id="fund_type"
                  name="fund_type"
                  value={""}
                  onChange={(e) => {
                    // setForm({ ...form, fund_type: e.target.value });
                    {
                    }
                  }}
                  className={`w-full border bg-[#F6F6F6] focus:ring-[#51F4A6] focus:border-[#51F4A6] border-[#E0E0E0] rounded-md text-sm p-4 focus:outline-none focus:ring-1 text-[#7C7C7C] font-poppinsRegular`}
                >
                  <option value="">Select branch</option>

                  <option key="" value="nill">
                    nill
                  </option>
                </select>
              </div>

              <div>
                <Label>
                  Grant Description
                  <span className=" font-poppinsRegular text-[#DE4204] text-sm">
                    {" "}
                    (Max 250 characters)
                  </span>{" "}
                </Label>

                <textarea
                  name="description"
                  id=""
                  value={""}
                  cols={20}
                  rows={5}
                  className="bg-[#F6F6F6] border-[#E2E2E2] border w-full text-[#7C7C7C] rounded-lg text-sm p-4 focus:ring-[#51F4A6]"
                  placeholder="Enter description here"
                  onChange={(e) => {
                    // setForm({ ...form, description: e.target.value });
                    {
                    }
                  }}
                ></textarea>
              </div>

              <div>
                <Label>
                  Eligibility Criteria
                  <span className=" font-poppinsRegular text-[#DE4204] text-sm">
                    {" "}
                    (Max 250 characters)
                  </span>{" "}
                </Label>

                <textarea
                  name="eligibility"
                  id=""
                  value={""}
                  cols={20}
                  rows={5}
                  className="bg-[#F6F6F6] border-[#E2E2E2] border w-full text-[#7C7C7C] rounded-lg text-sm p-4 focus:ring-[#51F4A6]"
                  placeholder="Enter description here"
                  onChange={(e) => {
                    {
                    }
                    // setForm({ ...form, eligibility: e.target.value });
                  }}
                ></textarea>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-y-6">
              <p className="mb-4 font-poppinsSemiBold text-[#121212] text-lg border-y border-[#F6F6F6] py-3">
                Grant Details
              </p>
              <div className="grid grid-cols-2 gap-6 md:grid-cols-1">
                <div>
                  <Label className="">Application Deadline</Label>
                  <Input
                    name="funding_amount"
                    className=""
                    type="number"
                    value={"form?.funding_amount"}
                    placeholder=""
                    variant="tertiary"
                    onChange={(e) =>
                      //   setForm({ ...form, funding_amount: e.target.value })
                      {}
                    }
                  />
                </div>

                <div>
                  <Label className="">Application Deadline</Label>
                  <Input
                    name="application__deadline"
                    className=""
                    type="date"
                    // value={form?.application__deadline}
                    value=""
                    placeholder="Grant name"
                    variant="tertiary"
                    onChange={
                      (e) => {}
                      //   setForm({
                      //     ...form,
                      //     application__deadline: e.target.value,
                      //   })
                    }
                  />
                </div>
              </div>

              <div>
                <Label>Disbursement Type</Label>
                <select
                  id="disburse_type"
                  name="disburse_type"
                  value={"form?.disburse_type"}
                  onChange={(e) => {
                    // setForm({ ...form, disburse_type: e.target.value });
                    {
                    }
                  }}
                  className="w-full border bg-[#F6F6F6] focus:ring-[#51F4A6] focus:border-[#51F4A6] border-[#E0E0E0] rounded-md text-sm p-4 focus:outline-none focus:ring-1 text-[#7C7C7C] font-poppinsRegular"
                >
                  <option value="">Select field type</option>
                  <option key="" value="jjj">
                    nill
                  </option>
                </select>
              </div>
            </div>

            <div className="mt-6">
              <p className="mb-4 font-poppinsSemiBold text-[#121212] text-lg border-y border-[#F6F6F6] py-3">
                Grant Document
              </p>

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
          </div>

          <div className="mt-8 flex gap-x-4 items-center justify-between">
            {/* <Button
                className="w-full flex items-center justify-center gap-x-4"
                variant="secondary"
                type="button"
              >
                Cancel
              </Button> */}
            <Button
              className="w-full flex items-center justify-center gap-x-4"
              type="submit"
            >
              Save Changes
            </Button>
          </div>
        </form>
        {/* <ConfirmationModal
          isOpen={successModal}
          onClose={() => setSuccessModal(false)}
          title="Farm details Updated"
          description="Your farm details have been successfully updated. Would you like to go home or continue updating your farm information?"
          confirmText="Keep Updating"
          cancelText="Go To Farms"
          onConfirm={() => setSuccessModal(false)}
          onCancel={() => router.push("/farmer-dashboard/my-farms")}
        /> */}
      </main>
    </AgencyLayout>
  );
};

export default EditGrant;
