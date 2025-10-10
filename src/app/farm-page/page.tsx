"use client";
import StoreFrontHeading from "@/app/components/dashboard/common/storeFrontHeading";
import { color } from "@/app/components/data";
import StoreFontFooter from "@/app/components/store-font/storeFontFooter";
import { useTab } from "@/context/TabContext";
import { useEffect, useState } from "react";
import Overview from "@/app/components/store-font/store-front-farm-details/overview";
import FarmersProfile from "@/app/components/store-font/store-front-farm-details/farmersProfile";
import { getFarmPageListStore } from "@/stores/farmpage/farmPageList";
import Spinner from "@/app/components/common/modals/spinner";
import ErrorFetch from "@/app/components/common/errorFetch";
import { useFarmName } from "@/stores/farmpage/useFarmName";
import { WithSuspense } from "@/app/components/dashboard/common/suspense";
import FarmNotFound from "../components/dashboard/common/farmNotFound";

const StoreFront = () => {
  const FarmPageContent = () => {
    const { activeTab } = useTab();
    const [activeBtn, setActiveBtn] = useState<string>("Overview");
    const [hasAttemptedFetch, setHasAttemptedFetch] = useState<boolean>(false);
    const farmName = useFarmName();
    const tabs: { id: number; name: string }[] = [
      { id: 1, name: "Overview" },
      { id: 2, name: "Farmer’s Profile" },
    ];
    const { data, loading, error, fetchFarmPageList } = getFarmPageListStore();

    const farmPageData = data?.farm_data;

    useEffect(() => {
      if (farmName) {
        setHasAttemptedFetch(true);
        fetchFarmPageList(farmName);
      }
    }, [fetchFarmPageList, farmName]);

    useEffect(() => {
      if (farmName) {
        fetchFarmPageList(farmName);
      }
    }, [fetchFarmPageList, farmName]);

    // Show loading state while fetching farm data
    if (loading || (!hasAttemptedFetch && !error && !farmPageData)) {
      return <Spinner />;
    }

    // Check if farm doesn't exist (only after we've attempted to fetch)
    const isFarmNotFound =
      hasAttemptedFetch &&
      !loading &&
      ((error && (error.includes("404") || error.includes("not found"))) ||
        (!error && !farmPageData));

    // Show farm not found UI
    if (isFarmNotFound) {
      return <FarmNotFound farmName={farmName} />;
    }

    if (!farmPageData || farmPageData?.active_farm === false) {
      return (
        <FarmNotFound
          notFoundText="Farm not Active"
          farmNotExistText="Farm is not available for public view. Please contact the farm owner."
          farmName={farmName}
        />
      );
    }

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
          verifiedText={farmPageData?.verified ? "Verified" : "Unverified"}
          farmpageLogo={farmPageData?.logo}
          farmWhatsAppNumber={`https://wa.me/${farmPageData?.farm_whatsapp_number}`}
        />

        <section className="max-w-[1300px] mx-auto px-4 py-10 md:px-4 md:py-12 mt-8">
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

export default StoreFront;
