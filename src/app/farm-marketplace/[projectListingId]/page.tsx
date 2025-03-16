"use client";
import Container from "@/app/components/common/container";
import Image from "next/image";
import Button from "@/app/components/common/Buttons";
import { TbIdBadge2 } from "react-icons/tb";
import { MdOutlineCalendarViewMonth } from "react-icons/md";
import { useState } from "react";
import React from "react";
import ReachOut from "@/app/components/common/reachout";

const ProjectListingPage: React.FC = () => {
  const tabs = ["Overview", "Analytics"];
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);
  return (
    <>
      <section className="bg-[#FCFCFC]">
        <Container>
          <div className="border border-[#E2E2E2] shadow-sm bg-white py-8 px-8 rounded-[20px] grid grid-cols-2 gap-x-16 lg:grid-cols-1 lg:gap-y-8 md:px-4 md:py-6">
            <div>
              <div className="flex flex-col gap-y-5 mb-2">
                <Image
                  src="/assets/LandingPage/card/logo.svg"
                  width={102}
                  height={102}
                  alt="logo"
                />
                <div className="">
                  <p className="text-[30px] font-aristoBold font-semibold text-[#5F5F5F] mb-1">
                    Organic Apple Harvest
                  </p>
                </div>
              </div>
              <p className="text-lg font-poppinsRegular text-[#7C7C7C] mb-4">
                Invest in sustainable apple farming.
              </p>
              <div className=" w-fit lg:w-full">
                <div className="flex items-center gap-x-2 py-4 border-t border-b border-[#F2F2F2] md:flex-col md:gap-y-4 md:items-start">
                  <Image
                    src="/assets/LandingPage/card/analytics.svg"
                    width={32}
                    height={32}
                    alt="open"
                  />
                  <p className="text-lg text-[#7C7C7C]">
                    <span className="font-poppinsRegular">
                      Return On Investment:
                    </span>{" "}
                    <span className=" font-poppinsSemiBold font-semibold text-[#2D865B]">
                      15% Annually
                    </span>
                  </p>
                </div>

                <div className="flex items-center gap-x-2 py-4 border-b border-[#F2F2F2] md:flex-col md:gap-y-4 md:items-start">
                  <Image
                    src="/assets/LandingPage/card/location.svg"
                    width={24}
                    height={24}
                    alt="open"
                  />
                  <p className="text-lg text-[#7C7C7C] font-poppinsRegular">
                    Farm Address:
                    <span className=" font-poppinsSemiBold font-semibold text-[#5F5F5F] ml-1 mr-1">
                      Lagos, Nigeria.
                    </span>
                  </p>
                </div>

                <div className="flex items-center gap-x-2 py-4 border-b border-[#F2F2F2]">
                  <p className="text-lg text-[#7C7C7C] flex items-center">
                    <span className="font-poppinsRegular">Farm Name:</span>{" "}
                    <span className=" font-poppinsSemiBold font-semibold text-[#5F5F5F] ml-1 mr-1">
                      Farmfund farm
                    </span>
                  </p>
                </div>

                <div className="flex items-center gap-x-2 py-4 border-b border-[#F2F2F2]">
                  <p className="text-lg text-[#7C7C7C] flex items-center">
                    <span className="font-poppinsRegular">CAC Reg No:</span>{" "}
                    <span className=" font-poppinsSemiBold font-semibold text-[#5F5F5F] ml-1 mr-1">
                      #122334455
                    </span>
                  </p>
                </div>

                <div className="flex items-center gap-x-2 py-4 border-b border-[#F2F2F2]">
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

              <div className="mt-3 flex items-center justify-between mb-6"></div>

              <div className="flex items-center gap-x-3 md:flex-col md:gap-y-6">
                <Button
                  size="medium"
                  className="flex items-center gap-x-4 justify-center text-center w-[230px]"
                >
                  <TbIdBadge2 size={24} color="white" /> Bid Now
                </Button>
                <Button
                  className="flex items-center gap-x-4 justify-center text-center w-[230px]"
                  variant="secondary"
                  size="small"
                >
                  <MdOutlineCalendarViewMonth size={24} color="#2D865B" /> View
                  Details
                </Button>
              </div>
            </div>

            <div>
              <Image
                src="/assets/marketplaceID/image.png"
                width={576}
                height={561}
                alt="land"
                className="h-full lg:w-full"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#EEFEF6]">
        <Container>
          <div className="flex gap-x-4 items-center mb-8">
            {tabs.map((el, i) => (
              <button
                className={`text-base ${
                  activeTab === el
                    ? "text-[#2D865B] border-[#2D865B] border-b "
                    : "text-[#7C7C7C] border-transparent"
                }  font-Graphik font-semibold px-16 pt-1 pb-4 lg:px-8`}
                onClick={() => setActiveTab(el)}
                key={i}
              >
                {el}
              </button>
            ))}
          </div>

          {activeTab === "Overview" && (
            <>
              <div className="">
                <div className="">
                  <p className="text-lg mb-[14px] text-[#5F5F5F] font-poppinsSemiBold">
                    Organic Apple Harvest Overview
                  </p>

                  <p className="text-lg text-[#7C7C7C] font-poppinsRegular mb-4">
                    The Organic Apple Harvest initiative is centered on the
                    cultivation of premium organic apples that meet the
                    increasing global demand for healthier, chemical-free
                    produce. The project takes place in [specific
                    location/region], a prime area with a naturally favorable
                    climate, rich soil composition, and an established
                    agricultural ecosystem for apple production.
                  </p>

                  <p className="text-lg text-[#7C7C7C] font-poppinsRegular mb-4">
                    The project’s primary goal is to merge sustainable farming
                    practices with modern agricultural technology to achieve
                    optimal yields without compromising the organic integrity of
                    the produce. This involves the use of eco-friendly pest
                    management systems, organic fertilizers, and precision
                    farming techniques to monitor and maintain soil health,
                    water use, and plant growth.
                  </p>

                  <p className="text-lg text-[#7C7C7C] font-poppinsRegular mb-4">
                    The apple variety selected for this project is [specific
                    variety, if applicable], known for its resilience, high
                    yield, and market appeal. These apples are cultivated
                    following rigorous organic farming standards to ensure
                    certification and consumer trust. Post-harvest, the apples
                    are carefully graded and packaged to maintain freshness and
                    quality before being distributed to premium markets.
                  </p>

                  <p className="text-lg text-[#7C7C7C] font-poppinsRegular mb-4">
                    Beyond profitability, the Organic Apple Harvest contributes
                    to environmental and community development goals. It reduces
                    environmental impact by avoiding harmful chemicals, promotes
                    biodiversity by preserving natural habitats around the
                    orchards, and supports local farmers by offering fair wages
                    and training on sustainable farming techniques.
                  </p>
                  <p className="text-lg text-[#7C7C7C] font-poppinsRegular mb-4">
                    By participating in this project, investors not only gain
                    financial returns but also become part of a movement that
                    champions healthier food production, environmental
                    conservation, and rural community empowerment.
                  </p>
                </div>

                <div className="mt-12">
                  <p className="text-lg mb-[14px] text-[#5F5F5F] font-poppinsSemiBold">
                    Performance Over Time
                  </p>

                  <ul className="list-disc">
                    <li className="text-lg text-[#7C7C7C] font-poppinsRegular mb-1 ml-6">
                      Consistent Growth: Over the last three harvest seasons,
                      the Organic Apple Harvest project has achieved steady
                      growth in yield and profitability, averaging an annual
                      increase of 8% in output due to improved farming
                      techniques.
                    </li>
                    <li className="text-lg text-[#7C7C7C] font-poppinsRegular mb-1 list-item ml-6">
                      Sustainability: The project`s organic certification has
                      enhanced market demand, allowing for premium pricing and
                      positioning in competitive markets.
                    </li>
                    <li className="text-lg text-[#7C7C7C] font-poppinsRegular mb-1 list-item ml-6">
                      Return on Investment (ROI): Investors have experienced an
                      average ROI of 12-15% per cycle, depending on market
                      conditions and yield.
                    </li>
                    <li className="text-lg text-[#7C7C7C] font-poppinsRegular mb-1 list-item ml-6">
                      Environmental Impact: The project emphasizes
                      sustainability, significantly reducing its carbon
                      footprint through water conservation techniques and
                      natural pest control methods.
                    </li>
                  </ul>
                  <p className="text-lg text-[#7C7C7C] font-poppinsRegular">
                    By participating in this project, investors not only gain
                    financial returns but also become part of a movement that
                    champions healthier food production, environmental
                    conservation, and rural community empowerment.
                  </p>
                </div>

                <div className="mt-12">
                  <p className="text-lg mb-[14px] text-[#5F5F5F] font-poppinsSemiBold">
                    How It Works
                  </p>

                  <p className="text-lg text-[#7C7C7C] font-poppinsRegular mb-4">
                    FarmFundr investors contribute to funding the cultivation,
                    maintenance, and harvesting of organic apples. The
                    investment covers essential costs like organic fertilizers,
                    irrigation, pest control (via natural methods), labor, and
                    packaging. Once harvested, the apples are sold through
                    established channels, including wholesale markets, organic
                    food stores, and direct-to-consumer delivery. Profits are
                    distributed to investors based on their share of the
                    project, with FarmFundr handling the logistics, sales, and
                    marketing to maximize returns.
                  </p>
                </div>
              </div>

              <ReachOut />
            </>
          )}

          {activeTab === "Analytics" && (
            <div>
              <p className="text-[#282A03] font-aristoBold text-3xl mb-16 text-center md:mb-8">
                Insights
              </p>

              <div className="grid grid-cols-2 gap-x-24 mb-24 md:grid-cols-1 md:gap-y-10 md:mb-14">
                <div className="flex flex-col gap-y-8 items-center md:flex-col-reverse md:items-start">
                  <ul className="list-disc">
                    <li className="text-lg text-[#7C7C7C] font-poppinsRegular mb-8 ml-6">
                      The highest yields were observed in August, driven by
                      favorable climatic conditions.
                    </li>
                    <li className="text-lg text-[#7C7C7C] font-poppinsRegular ml-6">
                      Despite fluctuations in the agricultural market, organic
                      apples have maintained a competitive market price,
                      ensuring stable returns for investors.
                    </li>
                  </ul>

                  <Image
                    src="/assets/marketplaceID/settings.svg"
                    width={100}
                    height={100}
                    alt="settings"
                  />
                </div>

                <div className="flex flex-col gap-y-8 items-center md:items-start">
                  <Image
                    src="/assets/marketplaceID/insights.svg"
                    width={100}
                    height={100}
                    alt="insights"
                  />

                  <ul className="list-disc">
                    <li className="text-lg text-[#7C7C7C] font-poppinsRegular mb-8 ml-6">
                      The highest yields were observed in August, driven by
                      favorable climatic conditions.
                    </li>
                    <li className="text-lg text-[#7C7C7C] font-poppinsRegular ml-6">
                      Despite fluctuations in the agricultural market, organic
                      apples have maintained a competitive market price,
                      ensuring stable returns for investors.
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-[#CA3C04] font-poppinsRegular text-base">
                While farming is inherently subject to weather and market
                fluctuations, this project mitigates risks by employing
                precision farming techniques and securing advance contracts with
                buyers. Backup Strategy; Insurance partnerships and diversified
                market access ensure investor protection against unexpected
                losses.
              </p>

              <ReachOut />
            </div>
          )}
        </Container>
      </section>
    </>
  );
};

export default ProjectListingPage;
