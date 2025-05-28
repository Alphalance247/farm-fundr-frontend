"use client";
import StoreFrontHeading from "@/app/components/dashboard/common/storeFrontHeading";
import { color } from "@/app/components/data";
import StoreFontFooter from "@/app/components/store-font/storeFontFooter";
import { useTab } from "@/context/TabContext";
import GoBackBtn from "@/app/components/common/goBack";
import { useState } from "react";
import Overview from "@/app/components/store-font/store-front-farm-details/overview";
import FarmersProfile from "@/app/components/store-font/store-front-farm-details/farmersProfile";

const StoreFrontFarmDetails = () => {
  const { activeTab } = useTab();
  const [activeBtn, setActiveBtn] = useState<string>("Overview");
  const tabs: { id: number; name: string }[] = [
    { id: 1, name: "Overview" },
    { id: 2, name: "Farmer’s Profile" },
  ];
  return (
    <div>
      <StoreFrontHeading
        color={color[activeTab]?.color}
        textColor={color[activeTab]?.textColor}
        badgeColor={color[activeTab]?.badgeColor}
        iconColor={color[activeTab]?.iconColor}
        withBorderRadius={false}
      />

      <section className="max-w-[1300px] mx-auto px-4 py-10 md:px-4 md:py-12 mt-8">
        <GoBackBtn href="/store-front" />
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

        <div className="mt-8">
          {activeBtn === "Overview" && <Overview />}
          {activeBtn === "Farmer’s Profile" && <FarmersProfile />}
        </div>
      </section>

      <StoreFontFooter />
    </div>
  );
};

export default StoreFrontFarmDetails;
