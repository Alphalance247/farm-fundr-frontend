"use client";
import StoreFrontHeading from "@/app/components/dashboard/common/storeFrontHeading";
import { useTab } from "@/context/TabContext";
import { color } from "@/app/components/data";
import StoreFontFooter from "@/app/components/store-font/storeFontFooter";
import GoBackBtn from "@/app/components/common/goBack";
import BranchFarmCard from "@/app/components/dashboard/my-farms/branchCard";
import { getFarmPageListStore } from "@/stores/farmpage/farmPageList";
import { getFarmPageBranchesListStore } from "@/stores/farmpage/farmPageBranchList";
import { useEffect } from "react";
import Spinner from "@/app/components/common/modals/spinner";
import ErrorFetch from "@/app/components/common/errorFetch";
import { useFarmName } from "@/stores/farmpage/useFarmName";
import { WithSuspense } from "@/app/components/dashboard/common/suspense";

const Farms = () => {
  const BranchDetailsContent = () => {
    const { activeTab } = useTab();
    const farmName = useFarmName();
    const { data: farmData, fetchFarmPageList } = getFarmPageListStore();
    const {
      data: farmBranch,
      fetchFarmPageBranchList,
      loading,
      error,
    } = getFarmPageBranchesListStore();

    const farmPageData = farmData?.farm_data;
    const data = farmBranch?.branches;

    useEffect(() => {
      if (farmName) {
        fetchFarmPageList(farmName);
        fetchFarmPageBranchList(farmName);
      }
    }, [fetchFarmPageList, fetchFarmPageBranchList, farmName]);
    return (
      <>
        <StoreFrontHeading
          color={color[activeTab].color}
          textColor={color[activeTab].textColor}
          badgeColor={color[activeTab].badgeColor}
          iconColor={color[activeTab].iconColor}
          withBorderRadius={false}
          farmerAddress={`${farmPageData?.city}, ${farmPageData?.country}`}
          farmName={farmPageData?.name}
          farmerName={farmPageData?.owner_name}
          cacRegNo={farmPageData?.cac_reg_no || "N/A"}
          verifiedText={farmPageData?.cac_reg_no ? "Verified" : "Unverified"}
          farmpageLogo={farmPageData?.logo}
          farmWhatsAppNumber={`https://wa.me/${farmPageData?.farm_whatsapp_number}`}
        />

        <section className="max-w-[1300px] mx-auto px-4 py-10 md:px-4 md:py-12 mt-8">
          <GoBackBtn href="/farm-page" />
          {loading ? (
            <Spinner />
          ) : error ? (
            <ErrorFetch
              message="Error Fetching branch List"
              onRefetch={() => {
                fetchFarmPageBranchList(farmName);
              }}
            />
          ) : (
            <>
              {data?.length === 0 ? (
                <p className="text-lg text-blue-900 items-center justify-center flex">
                  No branches found under this farm
                </p>
              ) : (
                <div className="grid grid-cols-3 gap-x-10 gap-y-10 mt-8 lg:grid-cols-2 md:grid-cols-1">
                  {data?.map((data) => (
                    <BranchFarmCard
                      branchName={data?.name || "N/A"}
                      farmName={data?.farm_name || "N/A"}
                      address={data?.street || "N/A"}
                      projectsCount={`projects - ${
                        data?.projects?.length || "0"
                      }`}
                      openingHours={`Open ${data?.open_time || "N/A"} Close ${
                        data?.close_time || "N/A"
                      }`}
                      status={data?.status}
                      imageUrl={
                        `${data?.branch_images[0]?.image}` ||
                        "/assets/my-farms/2.png"
                      }
                      onViewProjects={() => {
                        /* handle click */
                      }}
                      href={`/farm-page/projects`}
                      key={data?.id}
                      id={data?.id}
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </section>

        <StoreFontFooter />
      </>
    );
  };

  return (
    <WithSuspense>
      <BranchDetailsContent />
    </WithSuspense>
  );
};

export default Farms;
