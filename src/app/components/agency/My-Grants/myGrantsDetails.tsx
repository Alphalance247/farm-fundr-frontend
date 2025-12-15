"use client";
import Button from "@/app/components/common/Buttons";
import FarmHeading from "@/app/components/dashboard/my-farms/common/farmHeading";
import Image from "next/image";
import { FaArrowLeftLong } from "react-icons/fa6";
import GoBackBtn from "../../common/goBack";
import AgencyLayout from "../../common/agency/agencyLayout";
import { IoPencilSharp } from "react-icons/io5";
import { useGrantDetails } from "@/context/queries/grants/getGrantDetails";

const MyGrantDetails = ({ detailsId }: { detailsId: string }) => {
  const { data } = useGrantDetails({ id: "4" });
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
    <AgencyLayout>
      <main className="px-10 py-10 bg-gray-50 overflow-y-scroll h-full xl:px-4 xl:py-6">
        <GoBackBtn href="/agency-dashboard/my-grants" />
        <div className="mt-8">
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-y-6">
              <div className="p-6 md:p-4 bg-white rounded-lg shadow-lg">
                <div className="flex gap-x-2 items-center  md:justify-between justify-center pt-6 mb-4">
                  {" "}
                  <FarmHeading text="Grant Logo" />
                </div>
                <Image
                  src="/assets/Agency/my-grants/logo.png"
                  width={102}
                  height={102}
                  className="py-4 mx-auto"
                  alt="logo"
                />
              </div>
              <div className="p-6 md:p-4 bg-white rounded-lg shadow-lg">
                <div className="flex gap-x-2 items-center  md:justify-between justify-center pt-6 mb-4">
                  {" "}
                  <FarmHeading text="Basic Information" />
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
                      The Sunshine Agro Fund provides financial support to
                      smallholder farmers involved in crop cultivation,
                      livestock, and poultry production across Nigeria to help
                      scale operations and improve food security.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-y-6">
              <div className="p-6 md:p-4 bg-white rounded-lg shadow-lg">
                <div className="flex gap-x-2  md:justify-between items-center justify-center pt-6 border-t border-[#F6F6F6] mb-4">
                  {" "}
                  <FarmHeading text="Grant Details" />
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

              <div className="border-t border-[#F6F6F6] p-6 md:p-4 bg-white rounded-lg shadow-lg">
                <div className="flex gap-x-2  md:justify-between items-center justify-center pt-6 border-t border-[#F6F6F6] mb-4">
                  {" "}
                  <FarmHeading text="Grant Eligibility Criteria" />
                </div>
                <p className="font-poppinsRegular text-sm text-[#5F5F5F] pb-2">
                  Eligibility Criteria
                </p>

                <p className="bg-[#FCFCFC] border p-5 border-[#F6F6F6] rounded-xl text-[#5F5F5F] font-poppinsSemiBold text-wrap w-fit break-all">
                  The Sunshine Agro Fund provides financial support to
                  smallholder farmers involved in crop cultivation, livestock,
                  and poultry production across Nigeria to help scale operations
                  and improve food security.
                </p>
              </div>

              <div className="p-6 md:p-4 bg-white rounded-lg shadow-lg">
                <div className="flex gap-x-2  md:justify-between items-center justify-center pt-6 border-t border-[#F6F6F6] mb-4">
                  {" "}
                  <FarmHeading text="Document Details" />
                </div>

                <div className="bg-[#FCFCFC] w-full p-4 rounded-xl border border-[#F6F6F6]">
                  <div className="flex items-center gap-2">
                    <Image
                      width={40}
                      height={40}
                      src={"/assets/my-farms/pdf.svg"}
                      alt="pdf"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex gap-x-2">
            <Button
              className="w-full flex items-center justify-center gap-x-4"
              variant="secondary"
            >
              <span>
                <FaArrowLeftLong />
              </span>{" "}
              Go Back
            </Button>
            <Button
              className="w-full flex items-center justify-center gap-x-4"
              variant="secondary"
            >
              <span>
                <IoPencilSharp size={24} />
              </span>{" "}
              Edit Grant Details
            </Button>
          </div>
        </div>
      </main>
    </AgencyLayout>
  );
};

export default MyGrantDetails;
