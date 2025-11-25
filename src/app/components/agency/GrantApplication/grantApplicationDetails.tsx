"use client";
import Image from "next/image";
import AgencyLayout from "../../common/agency/agencyLayout";
import GoBackBtn from "../../common/goBack";
import FarmHeading from "../../dashboard/my-farms/common/farmHeading";
import Button from "../../common/Buttons";
import { FaArrowRightLong } from "react-icons/fa6";
import { getGrantApplicationDetails } from "@/stores/agency-dashbaord/get-application-details";
import { useEffect } from "react";

const GrantApplicationDetails = ({ detailsId }: { detailsId: string }) => {
  const { fetchGrantApplicationDetails } = getGrantApplicationDetails();

  useEffect(() => {
    fetchGrantApplicationDetails("3");
  }, [fetchGrantApplicationDetails]);
  const farmDetailsConfirmation = [
    {
      name: "Farm Name",
      details: "Apple Gallery farm",
    },
    {
      name: "Location",
      details: "Oymosei town. Ibadan, Nigeria",
    },
    {
      name: "Farm Type",
      details: "Crop farming - Tomatoes, Maize",
    },
    {
      name: "Farm Size",
      details: "3 plot",
    },
    {
      name: "Years In Operation",
      details: "3 years",
    },
    {
      name: "Number Of Workers",
      details: "10 employees",
    },
    {
      name: "Grant Applied for",
      details: "Youth in Agric 2025",
    },
    {
      name: "Amount",
      details: "₦500,000",
    },
    {
      name: "Deadline",
      details: "August 30, 2025",
    },
    {
      name: "Previous Grant Received",
      details: "2",
    },
    {
      name: "Current Outstanding Loan",
      details: "2",
    },
    {
      name: "Financial History",
      details: "Clean",
    },
  ];
  return (
    <AgencyLayout>
      <main className="px-10 py-10 bg-gray-50 overflow-auto xl:px-4 xl:py-6">
        <GoBackBtn href="" />

        <div>
          <div className="grid grid-cols-[60%auto] mt-8 gap-8 lg:grid-cols-1">
            <div>
              <div className="flex justify-between p-4 bg-[#FCFCFC] rounded-lg shadow-lg">
                <div className="flex gap-6 md:flex-col">
                  <Image
                    src="/assets/Agency/landing/user.png"
                    width={127}
                    height={127}
                    alt="user__profile"
                    className=" object-contain"
                  />

                  <div className="flex-1">
                    <div className="text-[#5F5F5F] mb-6">
                      <h3 className="text-[#5F5F5F] font-aristoBold text-2xl">
                        Adamu Michael
                      </h3>
                      <p className="px-[10px] py-[5px] w-fit bg-[#FFFAE6] text-[10px] font-poppinsSemiBold text-[#695700] rounded-md">
                        Pending
                      </p>
                    </div>

                    <div className="flex gap-x-2 items-center mb-2">
                      <Image
                        src="/assets/Agency/Applications/email.svg"
                        width={32}
                        height={32}
                        alt="email"
                      />
                      <p className="text-sm text-[#5F5F5F] font-poppinsRegular">
                        johndoe@gmail.com
                      </p>
                    </div>
                    <div className="flex gap-x-2 items-center">
                      <Image
                        src="/assets/Agency/Applications/phone.svg"
                        width={32}
                        height={32}
                        alt="phone"
                      />
                      <p className="text-sm text-[#5F5F5F] font-poppinsRegular">
                        +234 912 345 578
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-xs text-[#5F5F5F] text-right">
                  <p className=" font-poppinsRegular mb-1 text-[#7C7C7C] ">
                    Application Date
                  </p>
                  <p className=" font-poppinsSemiBold">Jul 19, 2025</p>
                </div>
              </div>
              <div className="p-4 bg-[#FCFCFC] rounded-lg shadow-lg mt-3">
                <div>
                  <div className="pt-6 mb-4">
                    <FarmHeading text="Grant Information" />
                  </div>

                  <div className=" border-b border-[#2D865B] pb-6">
                    {farmDetailsConfirmation.slice(0, 6).map((el, i) => (
                      <div
                        key={i}
                        className="flex  flex-row md:flex-col md:items-start items-center py-3 border-t border-[#F6F6F6] font-poppinsRegular text-sm text-[#5F5F5F]"
                      >
                        <p className="flex-1">{el?.name}</p>
                        <p className="flex-1 font-poppinsSemiBold">
                          {el?.details}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="pt-6 mb-4">
                    <FarmHeading text="Grant Application Details" />
                  </div>

                  <div className=" border-b border-[#2D865B] pb-6">
                    {farmDetailsConfirmation.slice(6, 9).map((el, i) => (
                      <div
                        key={i}
                        className="flex  flex-row md:flex-col md:items-start items-center py-3 border-t border-[#F6F6F6] font-poppinsRegular text-sm text-[#5F5F5F]"
                      >
                        <p className="flex-1">{el?.name}</p>
                        <p className="flex-1 font-poppinsSemiBold">
                          {el?.details}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-[#F6F6F6] pt-3 flex md:flex-col">
                    <p className="font-poppinsRegular text-sm text-[#5F5F5F] pb-2 flex-1">
                      Project Summary
                    </p>

                    <p className="bg-[#F6F6F6] border p-2 flex-1 border-[#F6F6F6] rounded-xl text-[#5F5F5F] font-poppinsSemiBold text-wrap w-fit break-all">
                      Looking to expand tomato production and implement
                      irrigation system to cover dry season. Funding will go
                      into seedlings, irrigation kits, and labor
                    </p>
                  </div>
                </div>

                <div>
                  <div className="pt-6 mb-4">
                    <FarmHeading text="Funding History" />
                  </div>

                  <div className=" border-b border-[#2D865B] pb-6">
                    {farmDetailsConfirmation.slice(9, 12).map((el, i) => (
                      <div
                        key={i}
                        className="flex  flex-row md:flex-col md:items-start items-center py-3 border-t border-[#F6F6F6] font-poppinsRegular text-sm text-[#5F5F5F]"
                      >
                        <p className="flex-1">{el?.name}</p>
                        <p className="flex-1 font-poppinsSemiBold">
                          {el?.details}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div className="p-4 bg-[#FCFCFC] rounded-lg shadow-lg mt-3 flex gap-x-2 md:flex-col md:gap-4">
            <Button className="w-full flex items-center justify-center gap-x-4">
              Approve Request{" "}
              <span>
                <FaArrowRightLong />
              </span>{" "}
            </Button>
            <Button
              className="w-full flex items-center justify-center gap-x-4"
              variant="danger"
            >
              Reject request
              <span>
                <FaArrowRightLong />
              </span>{" "}
            </Button>
            <Button
              className="w-full flex items-center justify-center gap-x-4"
              variant="secondary"
            >
              Request for more Info
              <span>
                <FaArrowRightLong />
              </span>{" "}
            </Button>
          </div>
        </div>
      </main>
    </AgencyLayout>
  );
};

export default GrantApplicationDetails;
