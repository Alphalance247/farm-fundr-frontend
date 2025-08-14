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

const Farms = () => {
  const { activeTab } = useTab();
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
    fetchFarmPageList();
    fetchFarmPageBranchList();
  }, [fetchFarmPageList, fetchFarmPageBranchList]);
  return (
    <div>
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
      />

      <section className="max-w-[1300px] mx-auto px-4 py-10 md:px-4 md:py-12 mt-8">
        <GoBackBtn href="/store-front" />
        {loading ? (
          <Spinner />
        ) : error ? (
          <ErrorFetch
            message="Error Fetching branch List"
            onRefetch={() => {
              fetchFarmPageBranchList();
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
                      `https://padycvgcoops.name.ng/${data?.branch_images[0]?.image}` ||
                      "/assets/my-farms/2.png"
                    }
                    onViewProjects={() => {
                      /* handle click */
                    }}
                    href={`/store-front/`}
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
    </div>
  );
};

export default Farms;
