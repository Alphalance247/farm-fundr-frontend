"use client";
// import StoreFrontHeading from "@/app/components/dashboard/common/storeFrontHeading";
// import { color } from "@/app/components/data";
// import StoreFontFooter from "@/app/components/store-font/storeFontFooter";
// import { useTab } from "@/context/TabContext";
// import GoBackBtn from "@/app/components/common/goBack";
// import { useEffect, useState } from "react";
// import Overview from "@/app/components/store-font/store-front-farm-details/overview";
// import FarmersProfile from "@/app/components/store-font/store-front-farm-details/farmersProfile";
// import { getFarmPageListStore } from "@/stores/farmpage/farmPageList";
// import Spinner from "@/app/components/common/modals/spinner";
// import ErrorFetch from "@/app/components/common/errorFetch";
// import { useFarmName } from "@/stores/farmpage/useFarmName";
// import { WithSuspense } from "@/app/components/dashboard/common/suspense";

// hjhsjhashj

import { SearchIcon } from "lucide-react";
import StoreFrontHeading from "../../components/dashboard/common/storeFrontHeading";
import { color } from "../../components/data";
import { TabProvider, useTab } from "@/context/TabContext";
import { useEffect, useState } from "react";
import Input from "../../components/common/input";
import Button from "../../components/common/Buttons";
import StoreFontCard from "../../components/store-font/storeFontCard";
import { FaSortDown } from "react-icons/fa";
import StoreFontFooter from "../../components/store-font/storeFontFooter";
import { getFarmPageListStore } from "@/stores/farmpage/farmPageList";
import { getFarmPageProjectListStore } from "@/stores/farmpage/farmPageProjectList";
import ErrorFetch from "../../components/common/errorFetch";
import Spinner from "../../components/common/modals/spinner";
import { useFarmName } from "@/stores/farmpage/useFarmName";
import { WithSuspense } from "../../components/dashboard/common/suspense";
import GoBackBtn from "@/app/components/common/goBack";

const StoreFrontFarmDetails = () => {
  const FarmMainPageContent = () => {
    const { activeTab } = useTab();
    const [activeButton, setActiveButton] = useState<string>("All");
    const buttons: { id: number; name: string }[] = [
      { id: 1, name: "All" },
      { id: 2, name: "Open" },
      { id: 3, name: "Closed" },
    ];
    const { data, fetchFarmPageList } = getFarmPageListStore();
    const {
      data: projectDataList,
      error: projectError,
      loading,
      fetchFarmPageProjectList,
    } = getFarmPageProjectListStore();

    const farmName = useFarmName();

    const farmPageData = data?.farm_data;

    useEffect(() => {
      if (farmName) {
        fetchFarmPageList(farmName);
        fetchFarmPageProjectList(farmName);
      }
    }, [fetchFarmPageList, fetchFarmPageProjectList, farmName]);

    return (
      <TabProvider>
        <StoreFrontHeading
          color={color[activeTab].color}
          textColor={color[activeTab].textColor}
          badgeColor={color[activeTab].badgeColor}
          iconColor={color[activeTab].iconColor}
          withBorderRadius={false}
          farmerAddress={`${farmPageData?.street} ${farmPageData?.country}`}
          farmName={farmPageData?.name}
          farmerName={farmPageData?.owner_name}
          cacRegNo={farmPageData?.cac_reg_no || "N/A"}
          verifiedText={farmPageData?.cac_reg_no ? "Verified" : "Unverified"}
          farmpageLogo={farmPageData?.logo}
          farmWhatsAppNumber={`https://wa.me/${farmPageData?.farm_whatsapp_number}`}
        />

        <section className="max-w-[1300px] mx-auto px-4 py-10 md:px-4 md:py-12">
          <div className="mb-8">
            <GoBackBtn href="/farm-page/" />
          </div>
          <div className="flex gap-3 justify-between mb-16 lg:flex-col-reverse">
            <div className="flex gap-x-2">
              {buttons.map((button) => (
                <div key={button.id} className="w-fit block lg:w-full">
                  <button
                    key={button.id}
                    className={` rounded-xl p-2 block text-sm font-poppinsRegular w-full text-[#7C7C7C] ${
                      activeButton === button.name
                        ? "bg-[#51F4A6] border border-[#2D865B] text-[#282A03]"
                        : " border border-[#E2E2E2] bg-white"
                    }`}
                    onClick={() => setActiveButton(button.name)}
                  >
                    {button.name}
                  </button>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-x-3 md:hidden">
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 w-[111px] text-sm font-poppinsRegular text-[#7C7C7C] bg-[#F6F6F6] p-[10px] rounded-lg ">
                  All Project
                  <span className="text-sm font-poppinsRegular text-[#7C7C7C]">
                    <FaSortDown color="#6E7055" />
                  </span>
                </button>
                <button className="flex items-center gap-2 text-sm w-[111px] font-poppinsRegular text-[#7C7C7C] bg-[#F6F6F6] p-[10px] rounded-lg">
                  Filter by
                  <span className="text-sm font-poppinsRegular text-[#7C7C7C]">
                    <FaSortDown color="#6E7055" />
                  </span>
                </button>
              </div>

              <div className="flex items-center gap-3">
                <Input
                  placeholder="Search"
                  type="text"
                  name="search"
                  value=""
                  className="w-[310px] block lg:w-full"
                  variant="primary"
                  onChange={() => {}}
                />

                <Button className="flex items-center gap-2 md:w-full">
                  Search
                  <SearchIcon />
                </Button>
              </div>
            </div>
          </div>

          {loading ? (
            <Spinner />
          ) : projectError ? (
            <ErrorFetch
              message="Error Fetching branch List"
              onRefetch={() => {
                fetchFarmPageProjectList(farmName);
              }}
            />
          ) : (
            <>
              {projectDataList?.projects?.length === 0 ? (
                <p>No project found yet</p>
              ) : (
                <div className="grid grid-cols-3 gap-10 xl:grid-cols-2 md:grid-cols-1 lg:gap-4">
                  {projectDataList?.projects?.map((card) => (
                    <StoreFontCard
                      key={card?.id}
                      farmName={card?.farm_name}
                      projAddress={`${card?.project_location}`}
                      projectDescription={`${card?.description?.slice(
                        0,
                        40
                      )}....`}
                      projectName={`${card?.name?.slice(0, 20)}...`}
                      projectROI={card?.ROI?.toString()}
                      imageUrl={`${card?.images[0]}`}
                      status={card?.status}
                      onViewProjects={() => {
                        /* handle click */
                      }}
                      href={`/farm-page/projects/${card?.id}`}
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </section>

        <StoreFontFooter />
      </TabProvider>
    );
  };

  return (
    <WithSuspense>
      <FarmMainPageContent />
    </WithSuspense>
  );
};

export default StoreFrontFarmDetails;
