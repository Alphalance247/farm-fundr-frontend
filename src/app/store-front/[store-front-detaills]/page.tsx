"use client";
import Button from "@/app/components/common/Buttons";
import GoBackBtn from "@/app/components/common/goBack";
import StoreFrontHeading from "@/app/components/dashboard/common/storeFrontHeading";
import { color } from "@/app/components/data";
import StoreFontCard from "@/app/components/store-font/storeFontCard";
import StoreFontFooter from "@/app/components/store-font/storeFontFooter";
import { useTab } from "@/context/TabContext";
import { TabProvider } from "@/context/TabContext";
import Image from "next/image";
import { useState } from "react";
import { MdCardTravel } from "react-icons/md";
import HowItWorks from "@/app/components/store-font/how-it-works";
import FarmPerformance from "@/app/components/store-font/performance";
import RiskAssurance from "@/app/components/store-font/riskAssurance";

const StoreFrontDetails = () => {
  const { activeTab } = useTab();
  const [activeBtn, setActiveBtn] = useState<string>("About Project");
  const tabs: { id: number; name: string }[] = [
    { id: 1, name: "About Project" },
    { id: 2, name: "How It works" },
    { id: 3, name: "Performance Over Time" },
    { id: 4, name: "Risk Assurance" },
  ];
  return (
    <div>
      <TabProvider>
        <StoreFrontHeading
          color={color[activeTab].color}
          textColor={color[activeTab].textColor}
          badgeColor={color[activeTab].badgeColor}
          iconColor={color[activeTab].iconColor}
          withBorderRadius={false}
        />

        <section className="max-w-[1300px] mx-auto px-4 py-10 md:px-4 md:py-12">
          <div className="">
            <GoBackBtn href="/store-front" />
            <h3 className="text-2xl font-aristoBold text-[#5F5F5F] mt-8 mb-8">
              Organic Apple Harvest
            </h3>
            <div className="grid grid-cols-2 gap-x-10">
              <div>
                <Image
                  src="/assets/store-front/store1.png"
                  alt="store-front-details"
                  width={609}
                  height={491}
                />
              </div>
              <div className="grid grid-cols-1 gap-y-2">
                <div className="grid grid-cols-2 gap-x-2">
                  <Image
                    src="/assets/store-front/store2.png"
                    alt="store-front-details"
                    width={296}
                    height={237}
                  />
                  <Image
                    src="/assets/store-front/store3.png"
                    alt="store-front-details"
                    width={296}
                    height={237}
                  />
                </div>

                <Image
                  src="/assets/store-front/store4.png"
                  alt="store-front-details"
                  width={609}
                  height={237}
                />
              </div>
            </div>

            <h3 className="text-2xl font-aristoBold text-[#5F5F5F] mt-8 mb-8">
              Organic Apple Harvest
            </h3>

            <div className="flex gap-x-2 mt-1">
              <Image
                src="/assets/store-front/location.svg"
                alt="location"
                width={24}
                height={24}
              />
              <p className="text-lg font-poppinsRegular text-[#7C7C7C]">
                Lagos, Nigeria.
              </p>
            </div>

            <div className="grid grid-cols-[2fr_1fr] gap-x-10 mt-6 pb-8 border-b border-[#E2E2E2]">
              <div className="p-4 bg-[#F6F6F6] rounded-xl flex-1">
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

                <div className="mt-4">
                  {activeBtn === "About Project" && (
                    <p className="text-sm text-[#7C7C7C] font-poppinsRegular">
                      The Apple Farm Project focuses on cultivating high-yield
                      apple varieties using sustainable farming practices.
                      Located in [insert location], the farm spans [insert size]
                      and leverages modern agricultural techniques to optimize
                      growth and ensure a healthy harvest.
                    </p>
                  )}

                  {activeBtn === "How It works" && <HowItWorks />}
                  {activeBtn === "Performance Over Time" && <FarmPerformance />}
                  {activeBtn === "Risk Assurance" && <RiskAssurance />}
                </div>
              </div>

              <div className="bg-white shadow-lg p-6 border border-[#F6F6F6] rounded-xl h-fit">
                <div className="flex justify-between">
                  <div className="flex items-center gap-x-2">
                    <Image
                      src="/assets/LandingPage/card/analytics.svg"
                      width={24}
                      height={24}
                      alt="open"
                    />
                    <p className="text-sm text-[#7C7C7C]">
                      <span className="font-poppinsRegular">ROI:</span>{" "}
                      <span className=" font-poppinsSemiBold font-semibold">
                        15% Annually
                      </span>
                    </p>
                  </div>

                  <div className="">
                    <p className="text-sm text-[#7C7C7C] flex items-center">
                      <span className="font-poppinsRegular">Farm Rating:</span>{" "}
                      <span className=" font-poppinsSemiBold font-semibold text-[#5F5F5F] ml-1 mr-1">
                        4.5{" "}
                      </span>
                      <Image
                        src="/assets/LandingPage/card/star.svg"
                        width={15}
                        height={15}
                        alt="star"
                      />
                    </p>
                  </div>
                </div>

                <div className="mt-12 mb-10 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[#7C7C7C]">
                      <span className="font-poppinsRegular">ROI:</span>{" "}
                      <span className=" font-poppinsSemiBold font-semibold text-[#5F5F5F]">
                        15% Annually
                      </span>
                    </p>
                  </div>

                  <div className="flex items-center gap-x-2">
                    <Image
                      src="/assets/LandingPage/card/location.svg"
                      width={24}
                      height={24}
                      alt="open"
                    />
                    <p className="text-sm text-[#7C7C7C] font-poppinsRegular">
                      Lagos, Nigeria.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-x-3">
                  <Button
                    variant="primary"
                    size="small"
                    className="w-full flex items-center justify-center gap-x-2"
                  >
                    <MdCardTravel color="white" size={24} />
                    Bid Now
                  </Button>
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-aristoBold text-[#5F5F5F] mt-8 mb-8">
                  Explore similar Projects
                </h3>

                <button className="text-sm text-[#226646] font-poppinsSemiBold p-[10px] rounded-xl border border-[#E2E2E2]">
                  View All
                </button>
              </div>

              <div className="grid grid-cols-3 gap-10">
                <StoreFontCard
                  imageUrl="/assets/my-farms/f1.png"
                  status="Active"
                  onViewProjects={() => {
                    /* handle click */
                  }}
                  href="/farmer-dashboard/my-farms/projects/Ibadan Branch"
                />
                <StoreFontCard
                  imageUrl="/assets/my-farms/2.png"
                  status="Active"
                  onViewProjects={() => {
                    /* handle click */
                  }}
                  href="/farmer-dashboard/my-farms/projects/Ibadan Branch"
                />
                <StoreFontCard
                  imageUrl="/assets/my-farms/f2.png"
                  status="Active"
                  onViewProjects={() => {
                    /* handle click */
                  }}
                  href="/farmer-dashboard/my-farms/projects/Ibadan Branch"
                />
              </div>
            </div>
          </div>
        </section>
        <StoreFontFooter />
      </TabProvider>
    </div>
  );
};

export default StoreFrontDetails;
