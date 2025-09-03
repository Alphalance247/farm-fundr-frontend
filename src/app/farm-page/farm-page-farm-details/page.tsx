"use client";
import StoreFrontHeading from "@/app/components/dashboard/common/storeFrontHeading";
import { color } from "@/app/components/data";
import StoreFontFooter from "@/app/components/store-font/storeFontFooter";
import { useTab } from "@/context/TabContext";
import GoBackBtn from "@/app/components/common/goBack";
import { useEffect, useState } from "react";
import Overview from "@/app/components/store-font/store-front-farm-details/overview";
import FarmersProfile from "@/app/components/store-font/store-front-farm-details/farmersProfile";
import { getFarmPageListStore } from "@/stores/farmpage/farmPageList";
import Spinner from "@/app/components/common/modals/spinner";
import ErrorFetch from "@/app/components/common/errorFetch";
import { useFarmName } from "@/stores/farmpage/useFarmName";
import { WithSuspense } from "@/app/components/dashboard/common/suspense";

const StoreFrontFarmDetails = () => {
  const FarmPageContent = () => {
    const { activeTab } = useTab();
    const [activeBtn, setActiveBtn] = useState<string>("Overview");
    const farmName = useFarmName();
    const tabs: { id: number; name: string }[] = [
      { id: 1, name: "Overview" },
      { id: 2, name: "Farmer’s Profile" },
    ];
    const { data, loading, error, fetchFarmPageList } = getFarmPageListStore();

    const farmPageData = data?.farm_data;

    useEffect(() => {
      if (farmName) {
        fetchFarmPageList(farmName);
      }
    }, [fetchFarmPageList, farmName]);
    return (
      <div>
        <StoreFrontHeading
          color={color[activeTab].color}
          textColor={color[activeTab].textColor}
          badgeColor={color[activeTab].badgeColor}
          iconColor={color[activeTab].iconColor}
          withBorderRadius={false}
          farmerAddress={`${farmPageData?.street}, ${farmPageData?.country}`}
          farmName={farmPageData?.name}
          farmerName={farmPageData?.owner_name}
          cacRegNo={farmPageData?.cac_reg_no || "N/A"}
          verifiedText={farmPageData?.cac_reg_no ? "Verified" : "Unverified"}
          farmpageLogo={farmPageData?.logo}
        />

        <section className="max-w-[1300px] mx-auto px-4 py-10 md:px-4 md:py-12 mt-8">
          <GoBackBtn href="/farm-page" />
          <div className="flex gap-x-5 items-center border-b border-[#E4E7EC]">
            {tabs.map((el, i) => (
              <button
                className={`${
                  activeBtn === el.name
                    ? "text-[#2D865B] border-b-[2px] border-[#2D865B] text-sm"
                    : "text-[#7C7C7C] border-transparent "
                }   font-medium text-sm p-4 border-b-2`}
                onClick={() => setActiveBtn(el.name)}
                key={i}
              >
                {el.name}
              </button>
            ))}
          </div>

          {loading ? (
            <Spinner />
          ) : error ? (
            <ErrorFetch
              message="Error fetching Farm details"
              onRefetch={() => {
                fetchFarmPageList(farmName);
              }}
            />
          ) : (
            <div className="mt-8">
              {activeBtn === "Overview" && <Overview />}
              {activeBtn === "Farmer’s Profile" && <FarmersProfile />}
            </div>
          )}
        </section>

        <StoreFontFooter />
      </div>
    );
  };
  return (
    <WithSuspense>
      <FarmPageContent />
    </WithSuspense>
  );
};

export default StoreFrontFarmDetails;
