"use client";
import React, { useState } from "react";
import GoBackBtn from "../../components/common/goBack";
import Button from "../../components/common/Buttons";
import Select from "../../components/common/select";
import { IoAdd } from "react-icons/io5";
import Image from "next/image";
import icon from "../../../../public/Avatars.png";
import DashboardLayout from "@/app/components/common/dashboardLayout";
import { LuDot } from "react-icons/lu";
import file from "../../../../public/Frame 1618869707.png";
import noIncompleteApplication from "../../../../public/freepik__background__29038.png";
import { MdDelete } from "react-icons/md";
import noApplication from "../../../../public/3d-render-hand-holding-smartphone-with-checklist 1.png";
interface Application {
  id: string;
  businessName: string;
  status: "In Review" | "Approved" | "Rejected";
  applicationId: string;
  registrationNumber?: string;
  lastUpdated: string;
  amount?: string;
}

const BusinessNameRegistration = () => {
  const [incompleteFilter, setIncompleteFilter] = useState("Today");
  const [allStatusFilter, setAllStatusFilter] = useState("All status");
  const [allDateFilter, setAllDateFilter] = useState("Today");

  const incompleteApplications: Application[] = [
    {
      id: "1",
      businessName: "Bamidele Farms",
      status: "In Review",
      applicationId: "#BN-002145",
      lastUpdated: "Today, 09:20 AM",
      amount: "N100,000",
    },
    {
      id: "2",
      businessName: "Bamidele Farms",
      status: "In Review",
      applicationId: "#BN-002146",
      lastUpdated: "Today, 09:20 AM",
      amount: "N100,000",
    },
  ];

  const allApplications: Application[] = [
    {
      id: "3",
      businessName: "FarmPady",
      status: "In Review",
      applicationId: "#BN-002145",
      lastUpdated: "June 9, 2025",
    },
    {
      id: "4",
      businessName: "Evergreen Poultry",
      status: "Approved",
      applicationId: "#BN-003192",
      registrationNumber: "BN2025/OG/00921",
      lastUpdated: "June 4, 2025",
    },
    {
      id: "5",
      businessName: "Sunrise Food Ventures",
      status: "Rejected",
      applicationId: "#BN-002145",
      lastUpdated: "June 11, 2025",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Review":
        return "bg-[#FFFAE6] font-poppinsSemiBold text-xs text-[#695700]";
      case "Approved":
        return "bg-[#E6FAEE] font-poppinsSemiBold text-xs text-[#005423]";
      case "Rejected":
        return "bg-[#FFE6E6] font-poppinsSemiBold text-xs text-[#6B0201]";
      default:
        return "bg-gray-500 font-poppinsSemiBold text-xs text-white";
    }
  };

  const incompleteFilterOptions = [
    { value: "Today", label: "Today" },
    { value: "This Week", label: "This Week" },
    { value: "This Month", label: "This Month" },
  ];

  const statusFilterOptions = [
    { value: "All status", label: "All status" },
    { value: "In Review", label: "In Review" },
    { value: "Approved", label: "Approved" },
    { value: "Rejected", label: "Rejected" },
  ];

  const dateFilterOptions = [
    { value: "Today", label: "Today" },
    { value: "This Week", label: "This Week" },
    { value: "This Month", label: "This Month" },
  ];

  return (
    <DashboardLayout>
      <div className="bg-white relative overflow-y-auto pb-12">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F0FDF4] rounded-full opacity-50 -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F0FDF4] rounded-full opacity-50 translate-y-40 -translate-x-40"></div>

        <div className="relative z-10 px-4 py-8 max-w-7xl mx-auto">
          <div className="mb-8">
            <GoBackBtn href="/farmer-dashboard" />
            <div className="mt-6">
              <h1 className="text-4xl md:text-xl  text-[#5F5F5F] font-aristoBold mb-2">
                Business Name Registration
              </h1>
              <p className="text-lg md:text-sm text-[#7C7C7C] font-poppinsRegular">
                Apply and track the status of your business name application.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-1  gap-8">
            <div className="space-y-8">
              <div className="bg-white border border-[#E4E7EC] rounded-2xl p-6 md:p-2">
                <h2 className="text-lg md:text-sm font-aristoBold text-[#5F5F5F]  mb-4">
                  Start New Application
                </h2>
                <div className="flex bg-[#EEFEF6] rounded-2xl p-4 gap-2 items-center">
                  <div className="p-4 rounded-full bg-white">
                    <button className="bg-[#226646] rounded-md flex items-center justify-center transition-colors">
                      <IoAdd size={32} color="white" />
                    </button>
                  </div>
                  <div className="space-y-2">
                    <p className="w-full text-[#7C7C7C] md:text-xs font-semibold">
                      Start A New Application
                    </p>
                    <p className="text-xs md:text-[9px] bg-white p-2 rounded-md text-[#B40402] font-poppinsRegular">
                      Already Started? Resume It Under &apos;Active
                      Applications&apos;
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-[#E2E2E2] rounded-2xl p-6 md:p-4">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl md:text-base font-aristoBold text-[#5F5F5F] ">
                    Incomplete Applications
                  </h2>
                  <div className="w-32 md:w-24">
                    <Select
                      name="incompleteFilter"
                      value={incompleteFilter}
                      onChange={(e) => setIncompleteFilter(e.target.value)}
                      options={incompleteFilterOptions}
                      variant="tertiary"
                      withWidth={true}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  {incompleteApplications.length > 0 ? (
                    incompleteApplications.map((app) => (
                      <div
                        key={app.id}
                        className="flex items-center xl:items-start flex-row xl:flex-col xl:gap-3 justify-between p-4 bg-[#FCFCFC] rounded-xl"
                      >
                        <div className="flex items-start space-x-4">
                          <div className="">
                            <Image
                              src={file}
                              width={48}
                              height={48}
                              alt="document"
                            />
                          </div>
                          <div className="space-y-2">
                            <h3 className="text-[#5F5F5F] text-sm md:text-xs font-poppinsSemiBold">
                              {app.businessName}
                            </h3>
                            <p className="text-sm md:text-xs text-[#5F5F5F] font-poppinsRegular">
                              {app.amount}
                            </p>
                            <p className="text-sm md:text-xs text-[#7C7C7C] font-poppinsRegular">
                              Last Updated: {app.lastUpdated}
                            </p>
                          </div>
                        </div>
                        <div className="gap-2 w-full flex flex-col">
                          <Button variant="secondary" size="small" className="!md:!w-full">
                            Resume
                          </Button>
                          <Button
                            variant="danger"
                            className="!bg-[#F6F6F6] !text-[#7C7C7C] flex items-center gap-2 !justify-center !border-[#FFE6E6] !border-[1px] !md:!w-full"
                            size="small"
                          >
                            <MdDelete color="#FE0503" size={20} /> Remove
                          </Button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="flex flex-col items-center justify-center py-12">
                        <div className="relative mb-6">
                        <Image
                          src={noIncompleteApplication}
                          alt="document"
                          width={100}
                          height={100}
                        />
                      </div>

                      <h3 className="text-lg md:text-sm font-poppinsSemiBold text-[#5F5F5F] mb-2">
                        No Incomplete Application
                      </h3>
                      <p className="text-sm text-[#7C7C7C] font-poppinsRegular text-center max-w-xs">
                        All incomplete applications will appear here when you
                        have one.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-6 rounded-2xl bg-white border border-[#E2E2E2] p-6 md:p-4">
              <div className="flex  justify-between items-center">
                <h2 className="text-lg md:text-sm font-aristoBold text-[#5F5F5F] ">
                  All Application
                </h2>
                <div className="flex space-x-3">
                  <div className="w-32 md:w-20">
                    <Select
                      name="statusFilter"
                      value={allStatusFilter}
                      onChange={(e) => setAllStatusFilter(e.target.value)}
                      options={statusFilterOptions}
                      variant="tertiary"
                      withWidth={true}
                    />
                  </div>
                  <div className="w-32 md:w-20">
                    <Select
                      name="dateFilter"
                      value={allDateFilter}
                      onChange={(e) => setAllDateFilter(e.target.value)}
                      options={dateFilterOptions}
                      variant="tertiary"
                      withWidth={true}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {allApplications.length > 0 ? (
                  allApplications.map((app) => (
                    <div
                      key={app.id}
                      className="bg-[#FCFCFC] border border-[#E4E7EC] rounded-2xl p-6 md:p-4"
                    >
                      <div className="flex items-center justify-between border-b border-[#E4E7EC] pb-4">
                        <div className="flex items-center gap-2">
                          <Image
                            src={icon}
                            width={32}
                            height={32}
                            alt="document"
                          />
                          <h3 className="text-[#5F5F5F] md:text-xs font-poppinsSemiBold">
                            {app.businessName}
                          </h3>
                        </div>
                        <div className="cursor-pointer mb-2">
                          <span
                            className={` p-2 rounded-full  ${getStatusColor(
                              app.status
                            )}`}
                          >
                            {app.status}
                          </span>
                        </div>
                      </div>
                      <div className="mt-4">
                        {app.registrationNumber && (
                          <p className="text-sm md:text-xs text-[#5F5F5F] font-poppinsSemiBold mb-1">
                            Registration Number: {app.registrationNumber}
                          </p>
                        )}

                        <p className="text-sm md:text-xs text-[#5F5F5F] font-poppinsSemiBold mb-1">
                          Application ID: {app.applicationId}
                        </p>

                        <p className="text-sm md:text-xs flex flex-row md:flex-col items-center md:gap-2 md:items-start   text-[#7C7C7C] font-poppinsRegular mb-4">
                          Last Updated: {app.lastUpdated}
                          {app.status === "Rejected" && (
                            <span className="text-sm md:text-xs flex items-center  text-[#FE0503] font-poppinsSemiBold cursor-pointer">
                              <LuDot size={16} />
                              Submit A New Name
                            </span>
                          )}
                        </p>

                        {app.status === "Approved" && (
                          <Button
                            variant="primary"
                            size="small"
                            className="flex items-center w-full justify-center gap-2"
                          >
                            Download Certificate
                          </Button>
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center py-12">
                    <div className="mb-6">
                      <Image
                        src={noApplication}
                        alt="document"
                        width={200}
                        height={300}
                      />
                    </div>

                    <h3 className="text-lg font-poppinsSemiBold text-[#5F5F5F] mb-2">
                      No Application In Progress
                    </h3>
                    <p className="text-sm text-[#7C7C7C] font-poppinsRegular text-center max-w-xs">
                      Track the status of all your active applications here.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default BusinessNameRegistration;
