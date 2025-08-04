"use client";
import DashboardLayout from "@/app/components/common/dashboardLayout";
import { Topbar } from "@/app/components/common/dashboard/topBar";
import { MdVerifiedUser } from "react-icons/md";
import FarmerInfo from "@/app/components/dashboard/my-farms/farmerInfo";
import Image from "next/image";
import Copy from "@/app/components/common/copy";
import { useState, useEffect } from "react";
import FarmBranches from "@/app/components/dashboard/my-farms/farmBranches";
import FarmHeadingOverview from "@/app/components/dashboard/my-farms/farmHeadingOverview";
import CustomizeStore from "@/app/components/dashboard/my-farms/customizeStore";
import { TabProvider } from "@/context/TabContext";
import { getFarmDetails } from "@/stores/farms/getFarmDetails";
import Spinner from "@/app/components/common/modals/spinner";
import Button from "@/app/components/common/Buttons";

const FarmDetails = ({ farmDetailsId }: { farmDetailsId: string }) => {
  const { data, fetchFarmDetails, error, loading } = getFarmDetails();
  const [activeTab, setActiveTab] = useState<string>(``);

  useEffect(() => {
    fetchFarmDetails(farmDetailsId);
  }, [fetchFarmDetails, farmDetailsId]);

  useEffect(() => {
    localStorage.setItem("selectedfarmIDDetails", farmDetailsId);
  }, [farmDetailsId]);

  const farmData = data?.data?.farm;
  const farmBranchData = data?.data?.branches;

  const tabs: { id: number; name: string }[] = [
    { id: 1, name: `Branches (${farmBranchData?.length})` },
    { id: 3, name: "StoreFront Settings" },
  ];

  useEffect(() => {
    if (farmBranchData?.length !== undefined) {
      setActiveTab(`Branches (${farmBranchData.length})`);
    }
  }, [farmBranchData?.length]);

  return (
    <TabProvider>
      <DashboardLayout>
        <Topbar overview="My farm" />

        <main className="px-10 py-10 bg-gray-50 overflow-auto xl:px-4 xl:py-6">
          <FarmHeadingOverview
            farmName={farmData?.name}
            overview={farmData?.description}
          />

          {loading ? (
            <Spinner />
          ) : error ? (
            <div className="flex justify-center items-center h-screen">
              <div className="flex flex-col items-center">
                <p className="text-red-500">Error fetching farm details</p>
                <Button
                  type="button"
                  onClick={() => fetchFarmDetails(farmDetailsId)}
                  className="mt-4"
                >
                  Retry
                </Button>
              </div>
            </div>
          ) : (
            <>
              <div className="px-6 py-4 bg-white rounded-lg border border-[#F6F6F6] mt-4">
                <div className="pb-3 border-b border-[#F6F6F6] flex justify-between items-center">
                  <h5 className="text-sm font-poppinsSemiBold text-[#5F5F5F]">
                    {farmData?.name || "N/A"}
                  </h5>

                  <p
                    className={`text-sm  w-fit font-poppinsRegular  px-3 py-1 border  rounded-xl bg-[#E7F6EC] ${
                      farmData?.status !== "published"
                        ? " bg-[#FDEDED] text-red-600 border-red-200"
                        : "bg-[#E7F6EC] text-[#006E2E] border-[#B0EECA]"
                    }`}
                  >
                    {farmData?.status !== "published" ? "In Active" : "Active"}
                  </p>
                </div>

                <div className="mt-3 flex justify-between items-center gap-x-10 flex-wrap lg:flex-nowrap lg:flex-col lg:gap-4 lg:items-start">
                  <div className="flex gap-x-8">
                    <div className="border-r border-[#E4E7EC] pl-8 pr-12 flex flex-col gap-3 justify-center items-center">
                      <Image
                        src="/assets/my-farms/farmlogo.svg"
                        alt="farmer"
                        width={64}
                        height={64}
                      />
                      <p className="text-xs font-poppinsRegular text-[#475367]">
                        {farmData?.cac_reg_no || "N/A"}
                      </p>

                      {farmData?.cac_reg_status === "Unregistered" ? (
                        <p className="text-sm font-poppinsRegular text-red-600 border-red-200 bg-[#FDEDED] px-3 py-1 rounded-lg flex items-center justify-center gap-2 border">
                          Unverified
                        </p>
                      ) : (
                        <p className="text-sm font-poppinsRegular text-[#7C7C7C] bg-[#EEFEF6] px-3 py-1 rounded-lg flex items-center justify-center gap-2 border border-[#8AE6B0]">
                          Verified
                          <MdVerifiedUser size={16} color="#006E2E" />
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col gap-y-5">
                      <FarmerInfo
                        title="Farmer’s Name"
                        name={farmData?.owner_name || "N/A"}
                      />
                      <FarmerInfo
                        title="Date Created"
                        name={farmData?.created || "N/A"}
                      />
                    </div>
                  </div>

                  <div className="flex ">
                    <div className="flex flex-col gap-y-5">
                      <FarmerInfo
                        title="Location"
                        name={`${farmData?.city}, ${
                          farmData?.country || "N/A"
                        }`}
                      />
                      <FarmerInfo title="Branches" name="6" />
                    </div>
                    <div className="flex flex-col gap-y-5">
                      <FarmerInfo
                        title="Project (Active)"
                        name={farmData?.active_projects || "0"}
                      />
                      <FarmerInfo
                        title="Project (Inactive)"
                        name={farmData?.inactive_projects || "0"}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-x-3 bg-[#EEFEF6] w-fit px-3 py-2 rounded-lg border border-[#C9FCE3]">
                  <p className="text-sm font-poppinsRegular text-[#5F5F5F]">
                    Storefront Link:
                  </p>

                  <p className="text-sm font-poppinsRegular text-[#7C7C7C]">
                    {farmData?.farm_link || "N//A"}
                  </p>

                  <Copy />
                </div>
              </div>

              <div className="px-6 py-4 bg-white rounded-lg border border-[#F6F6F6] mt-8">
                <div className="flex gap-x-5 items-center border-b border-[#E4E7EC]">
                  {tabs.map((el, i) => (
                    <button
                      className={`${
                        activeTab === el.name
                          ? "text-[#2D865B] border-b-[3px] border-[#2D865B] bg-white text-sm"
                          : "text-[#7C7C7C] border-transparent "
                      }   font-medium text-sm p-4 border-b-2`}
                      onClick={() => setActiveTab(el.name)}
                      key={i}
                    >
                      {el.name}
                    </button>
                  ))}
                </div>

                <div className="mt-4">
                  {activeTab === `Branches (${farmBranchData?.length})` && (
                    <FarmBranches />
                  )}

                  {activeTab === "StoreFront Settings" && <CustomizeStore />}
                </div>
              </div>
            </>
          )}
        </main>
      </DashboardLayout>
    </TabProvider>
  );
};

export default FarmDetails;
