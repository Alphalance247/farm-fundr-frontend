"use client";
import DashboardLayout from "../../../components/common/dashboardLayout";
import { Topbar } from "../../../components/common/dashboard/topBar";
import Image from "next/image";
import { useState } from "react";
import GoBackBtn from "@/app/components/common/goBack";
import ProjectInformation from "@/app/components/dashboard/my-farms/farm-projects/projectInformation";
import FundingDetails from "@/app/components/dashboard/my-farms/farm-projects/fundingDetails";
import OptionalInfo from "@/app/components/dashboard/my-farms/farm-projects/optionalInfo";

const AddFarm = () => {
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
  });
  const [file, setFile] = useState<File | null>(null);

  return (
    <DashboardLayout>
      <Topbar overview="My farm" />

      <main className="px-10 py-10 bg-gray-50 overflow-auto">
        <div className="flex gap-x-6">
          {formStep !== 5 && (
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
              />
            )}
            {formStep === 2 && (
              <FundingDetails
                form={form}
                setForm={setForm}
                setFormStep={setFormStep}
              />
            )}
            {formStep === 3 && (
              <OptionalInfo
                form={form}
                setForm={setForm}
                setFormStep={setFormStep}
                setFile={setFile}
              />
            )}
            {/* second step */}

            {/* {formStep === 2 && (
              <div>
                <div className=" p-6 bg-white mt-6 rounded-lg flex flex-col gap-y-6">
                  <div className="grid grid-cols-2 gap-x-4">
                    <div>
                      <Label className="">Farm Size</Label>
                      <Input
                        name="farmSize"
                        className=""
                        type="text"
                        value={form?.farmSize}
                        placeholder="Enter farm size"
                        variant="tertiary"
                        onChange={(e) =>
                          setForm({ ...form, farmSize: e.target.value })
                        }
                      />
                    </div>

                    <div>
                      <Label>Field Type</Label>
                      <select
                        id="fieldType"
                        name="fieldType"
                        value={form?.fieldType || ""}
                        onChange={(e) =>
                          setForm({ ...form, fieldType: e.target.value })
                        }
                        className="w-full border bg-[#F6F6F6] focus:ring-[#51F4A6] focus:border-[#51F4A6] border-[#E0E0E0] rounded-md text-sm p-4 focus:outline-none focus:ring-1 text-[#7C7C7C] font-poppinsRegular"
                      >
                        <option value="">Select field type</option>

                        <option value="">Loamy</option>
                        <option value="">Sandy</option>
                        <option value="">Clay</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label>Description</Label>

                    <textarea
                      name="fieldDescription"
                      id=""
                      value={form?.fieldDescription || ""}
                      cols={20}
                      rows={5}
                      className="bg-[#F6F6F6] border-[#E2E2E2] border w-full text-[#7C7C7C] rounded-lg text-sm p-4 focus:ring-[#51F4A6]"
                      placeholder="Enter description here"
                      onChange={(e) => {
                        setForm({ ...form, fieldDescription: e.target.value });
                      }}
                    ></textarea>
                  </div>
                </div>

                <div className="mt-8">
                  <Button
                    className="w-full flex items-center justify-center gap-x-4"
                    onClick={(e) => {
                      e.preventDefault();
                      setFormStep(3);
                      setCompletedSteps((prev) => [...prev, formStep]);
                    }}
                  >
                    Back{" "}
                    <span>
                      <FaArrowRightLong />
                    </span>{" "}
                  </Button>
                </div>
              </div>
            )} */}

            {/* third form */}
            {/* {formStep === 3 && (
              <div>
                <div className=" p-6 bg-white mt-6 rounded-lg flex flex-col gap-y-6">
                  <div>
                    <Label> Ownership Type</Label>
                    <select
                      id="ownershipType"
                      name="ownershipType"
                      value={form?.ownershipType || ""}
                      onChange={(e) =>
                        setForm({ ...form, ownershipType: e.target.value })
                      }
                      className="w-full border bg-[#F6F6F6] focus:ring-[#51F4A6] focus:border-[#51F4A6] border-[#E0E0E0] rounded-md text-sm p-4 focus:outline-none focus:ring-1 text-[#7C7C7C] font-poppinsRegular"
                    >
                      <option value="">Select ownership type</option>

                      <option value="Investor">Investor</option>
                      <option value="Manager">Manager</option>
                      <option value="Consultant">Consultant</option>
                    </select>
                  </div>

                  <div>
                    <Label className="">CAC registration Number</Label>
                    <Input
                      name="cacNumber"
                      className=""
                      type="text"
                      value={form?.cacNumber}
                      placeholder="Enter number here"
                      variant="tertiary"
                      onChange={(e) =>
                        setForm({ ...form, cacNumber: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <Label className="">Operating Since</Label>
                    <Input
                      name="operatingSince"
                      className=""
                      type="date"
                      value={form?.operatingSince}
                      placeholder="Enter date"
                      variant="tertiary"
                      onChange={(e) =>
                        setForm({ ...form, operatingSince: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="file-upload"
                      className="text-sm font-poppinsSemiBold text-[#5F5F5F]  block"
                    >
                      <p className="mb-2">
                        Upload CAC Registration Document{" "}
                        <span className=" font-poppinsRegular text-[#5F5F5F]">
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
                          <div className="bg-[#EEFEF6] border border-[#51F4A6] border-dashed flex flex-col gap-y-3 cursor-pointer items-center w-full py-6 rounded-xl">
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

                <div className="mt-8">
                  <Button
                    className="w-full flex items-center justify-center gap-x-4"
                    onClick={(e) => {
                      e.preventDefault();
                      setFormStep(4);
                      setCompletedSteps((prev) => [...prev, formStep]);
                    }}
                  >
                    Proceed{" "}
                    <span>
                      <FaArrowRightLong />
                    </span>{" "}
                  </Button>
                </div>
              </div>
            )} */}
            {/* Fourth form */}

            {/* {formStep === 4 && (
              <div>
                <div className="p-6 bg-white rounded-lg">
                  <p className="mb-2">
                    Upload Farm Images
                    <span className=" font-poppinsRegular text-[#5F5F5F]">
                      (5mb size, jpg, png format only)
                    </span>
                  </p>
                  <div className=" flex flex-col gap-y-6">
                    <div className="flex flex-col gap-4">
                      <div className="w-full">
                        <label
                          htmlFor="file-upload-image1"
                          className="text-sm font-poppinsSemiBold text-[#5F5F5F] block"
                        >
                          <input
                            id="file-upload-image1"
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleFileChange(e, "image1")}
                            className="hidden"
                          />
                          <div>
                            {uploadedImages.image1.preview ? (
                              <div className="border border-[#51F4A6] border-dashed w-full rounded-xl relative">
                                <div className="relative">
                                  <div className="relative">
                                    <Image
                                      width={556}
                                      height={158}
                                      src={uploadedImages.image1.preview}
                                      alt="Uploaded image1"
                                      className="object-cover w-full"
                                    />
                                  </div>

                                  <div className="flex items-center justify-center absolute gap-x-1 bg-[#FFFFFFE5] px-2 py-1 cursor-pointer rounded-lg bottom-[8rem] left-[20rem]">
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

                    <div className="grid grid-cols-3 gap-4">
                      {Object.entries(uploadedImages)
                        .filter(([key]) => key !== "image1")
                        .map(([key, { preview }]) => (
                          <div key={key}>
                            <label
                              htmlFor={`file-upload-${key}`}
                              className="text-sm font-poppinsSemiBold text-[#5F5F5F] block"
                            >
                              <input
                                id={`file-upload-${key}`}
                                type="file"
                                accept="image/*"
                                onChange={(e) => handleFileChange(e, key)}
                                className="hidden"
                              />
                              <div>
                                {preview ? (
                                  <div
                                    className={`border border-[#51F4A6] border-dashed w-full rounded-xl relative`}
                                  >
                                    <div className="relative">
                                      <Image
                                        width={177}
                                        height={95}
                                        src={preview}
                                        alt={`Uploaded ${key}`}
                                        className="object-cover w-full"
                                      />
                                      <div className="flex items-center justify-center absolute gap-x-1 bg-[#FFFFFFE5] px-2 py-1 cursor-pointer rounded-lg bottom-[4rem] right-[3rem]">
                                        <p className="text-xs font-poppinsRegular text-[#616161]">
                                          Change Cover
                                        </p>
                                        <span>
                                          <FiDownload
                                            color="#2D865B"
                                            size={14}
                                          />
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
                        ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button
                    className="w-full flex items-center justify-center gap-x-4"
                    onClick={(e) => {
                      e.preventDefault();
                      setFormStep(5);
                      setCompletedSteps((prev) => [...prev, formStep]);
                    }}
                  >
                    Proceed{" "}
                    <span>
                      <FaArrowRightLong />
                    </span>{" "}
                  </Button>
                </div>
              </div>
            )} */}

            {/* Fifth form */}
            {/* {formStep === 5 && (
              <div className="p-6 bg-white rounded-lg">
                <div className="flex flex-col gap-y-6">
                  <div>
                    <div className="flex gap-x-2 items-center justify-center pb-4 border-b border-[#F6F6F6]">
                      {" "}
                      <FarmHeading text="Project Image" />
                      <EditBtn onButtonEdit={() => setFormStep(4)} />
                    </div>

                    <div className="pt-6">
                      <Image
                        width={556}
                        height={158}
                        src={
                          uploadedImages.image1.preview ||
                          "/assets/my-farms/no-img.avif"
                        }
                        alt="Uploaded image1"
                        className="object-cover w-full mb-6"
                      />

                      <div className="grid grid-cols-3 gap-3">
                        <Image
                          width={177}
                          height={95}
                          src={
                            uploadedImages.image2.preview ||
                            "/assets/my-farms/no-img.avif"
                          }
                          alt={`Uploaded images`}
                          className="object-cover w-full"
                        />
                        <Image
                          width={177}
                          height={95}
                          src={
                            uploadedImages.image3.preview ||
                            "/assets/my-farms/no-img.avif"
                          }
                          alt={`Uploaded images`}
                          className="object-cover w-full"
                        />
                        <Image
                          width={177}
                          height={95}
                          src={
                            uploadedImages.image4.preview ||
                            "/assets/my-farms/no-img.avif"
                          }
                          alt={`Uploaded images`}
                          className="object-cover w-full"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex gap-x-2 items-center justify-center pt-6 border-t border-[#F6F6F6] mb-4">
                      {" "}
                      <FarmHeading text="Farm Information" />
                      <EditBtn onButtonEdit={() => setFormStep(1)} />
                    </div>

                    <div>
                      {farmDetailsConfirmation.slice(0, 4).map((el, i) => (
                        <div
                          key={i}
                          className="flex justify-between items-center py-3 border-t border-[#F6F6F6] font-poppinsRegular text-sm text-[#5F5F5F]"
                        >
                          <p>{el?.name}</p>
                          <p className=" font-poppinsSemiBold">{el?.details}</p>
                        </div>
                      ))}
                      <div className="border-t border-[#F6F6F6] pt-3 ">
                        <p className="font-poppinsRegular text-sm text-[#5F5F5F] pb-2">
                          Description
                        </p>

                        <p className="bg-[#FCFCFC] border p-5 border-[#F6F6F6] rounded-xl text-[#5F5F5F] font-poppinsSemiBold">
                          We specialize in apple
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex gap-x-2 items-center justify-center pt-6 border-t border-[#F6F6F6] mb-4">
                      {" "}
                      <FarmHeading text="Farm Ownership Details" />
                      <EditBtn onButtonEdit={() => setFormStep(3)} />
                    </div>

                    <div>
                      {farmDetailsConfirmation.slice(4, 7).map((el, i) => (
                        <div
                          key={i}
                          className="flex justify-between items-center py-3 border-t border-[#F6F6F6] font-poppinsRegular text-sm text-[#5F5F5F]"
                        >
                          <p>{el?.name}</p>
                          <p className=" font-poppinsSemiBold">{el?.details}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex gap-x-2 items-center justify-center pt-6 border-t border-[#F6F6F6] mb-4">
                      {" "}
                      <FarmHeading text="Document Details" />
                      <EditBtn onButtonEdit={() => setFormStep(3)} />
                    </div>

                    <div className="bg-[#FCFCFC] w-full p-4 rounded-xl border border-[#F6F6F6]">
                      <div className="flex items-center gap-2">
                        <Image
                          width={40}
                          height={40}
                          src={
                            file
                              ? "/assets/my-farms/pdf.svg"
                              : "/assets/my-farms/no-file.svg"
                          }
                          alt="pdf"
                        />
                        {file ? (
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
                        ) : (
                          <p className="text-sm text-[#5F5F5F] font-poppinsSemiBold">
                            No file
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )} */}
          </form>
        </div>
      </main>
    </DashboardLayout>
  );
};

export default AddFarm;
