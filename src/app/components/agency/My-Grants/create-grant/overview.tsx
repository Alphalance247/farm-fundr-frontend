"use client";
import Button from "@/app/components/common/Buttons";
import EditBtn from "@/app/components/common/editBtn";
import FarmHeading from "@/app/components/dashboard/my-farms/common/farmHeading";
import Image from "next/image";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Overview = ({
  form,
  setForm,
  setFormStep,
  setCompletedSteps,
  formStep,
}: {
  form: projectFormData;
  setForm: (form: projectFormData) => void;
  setFormStep: (formStep: number) => void;
  setCompletedSteps: (steps: number[] | ((prev: number[]) => number[])) => void;
  formStep: number;
}) => {
  const [file, setFile] = useState<File | null>(null);
  const farmDetailsConfirmation = [
    {
      name: "Grant Title",
      details: "Youth in Farm 2025",
    },
    {
      name: "Grant category",
      details: "Live Stock, Crop",
    },
    {
      name: "Funding Type",
      details: "Grant",
    },
    {
      name: "Funding Type",
      details: "Grant",
    },
    {
      name: "Funding Type",
      details: "Grant",
    },
    {
      name: "Funding Type",
      details: "Grant",
    },
  ];
  return (
    <div className="p-6 md:p-4 bg-white rounded-lg">
      <div className="flex flex-col gap-y-6">
        <div>
          <div className="flex gap-x-2 items-center  md:justify-between justify-center pt-6 mb-4">
            {" "}
            <FarmHeading text="Basic Information" />
            <EditBtn onButtonEdit={() => setFormStep(1)} />
          </div>

          <div>
            {farmDetailsConfirmation.slice(0, 3).map((el, i) => (
              <div
                key={i}
                className="flex justify-between flex-row md:flex-col md:items-start items-center py-3 border-t border-[#F6F6F6] font-poppinsRegular text-sm text-[#5F5F5F]"
              >
                <p>{el?.name}</p>
                <p className=" font-poppinsSemiBold">{el?.details}</p>
              </div>
            ))}
            <div className="border-t border-[#F6F6F6] pt-3 ">
              <p className="font-poppinsRegular text-sm text-[#5F5F5F] pb-2">
                Short Description
              </p>

              <p className="bg-[#FCFCFC] border p-5 border-[#F6F6F6] rounded-xl text-[#5F5F5F] font-poppinsSemiBold text-wrap w-fit break-all">
                The Sunshine Agro Fund provides financial support to smallholder
                farmers involved in crop cultivation, livestock, and poultry
                production across Nigeria to help scale operations and improve
                food security.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex gap-x-2  md:justify-between items-center justify-center pt-6 border-t border-[#F6F6F6] mb-4">
            {" "}
            <FarmHeading text="Grant Details" />
            <EditBtn onButtonEdit={() => setFormStep(3)} />
          </div>

          <div>
            {farmDetailsConfirmation.slice(3, 6).map((el, i) => (
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

        <div className="border-t border-[#F6F6F6] pt-3 ">
          <div className="flex gap-x-2  md:justify-between items-center justify-center pt-6 border-t border-[#F6F6F6] mb-4">
            {" "}
            <FarmHeading text="Grant Eligibility Criteria" />
            <EditBtn onButtonEdit={() => setFormStep(3)} />
          </div>
          <p className="font-poppinsRegular text-sm text-[#5F5F5F] pb-2">
            Eligibility Criteria
          </p>

          <p className="bg-[#FCFCFC] border p-5 border-[#F6F6F6] rounded-xl text-[#5F5F5F] font-poppinsSemiBold text-wrap w-fit break-all">
            The Sunshine Agro Fund provides financial support to smallholder
            farmers involved in crop cultivation, livestock, and poultry
            production across Nigeria to help scale operations and improve food
            security.
          </p>
        </div>

        <div>
          <div className="flex gap-x-2  md:justify-between items-center justify-center pt-6 border-t border-[#F6F6F6] mb-4">
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

      <div className="mt-8 ">
        <Button
          className="w-full flex items-center justify-center gap-x-4"
          type="submit"
        >
          submit
          <span>
            <FaArrowRightLong />
          </span>{" "}
        </Button>
      </div>
    </div>
  );
};

export default Overview;
