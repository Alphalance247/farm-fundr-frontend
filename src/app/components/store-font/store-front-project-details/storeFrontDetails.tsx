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
import { useEffect, useState } from "react";
import { MdCardTravel } from "react-icons/md";
import HowItWorks from "@/app/components/store-font/how-it-works";
import FarmPerformance from "@/app/components/store-font/performance";
import RiskAssurance from "@/app/components/store-font/riskAssurance";
import { getFarmPageProjectListStore } from "@/stores/farmpage/farmPageProjectList";
import { getFarmPageProjectDetails } from "@/stores/farmpage/farmPageProjectDetails";
import Spinner from "../../common/modals/spinner";
import ErrorFetch from "../../common/errorFetch";
import { getFarmPageListStore } from "@/stores/farmpage/farmPageList";
import { useFarmName } from "@/stores/farmpage/useFarmName";
import { WithSuspense } from "../../dashboard/common/suspense";

const StoreFrontDetails = ({ id }: { id: string }) => {
  const { activeTab } = useTab();
  const farmName = useFarmName();
  const [activeBtn, setActiveBtn] = useState<string>("About Project");
  const tabs: { id: number; name: string }[] = [
    { id: 1, name: "About Project" },
    { id: 2, name: "How It works" },
    { id: 3, name: "Performance Over Time" },
    { id: 4, name: "Risk Assurance" },
  ];
  const { data: projectDataList, fetchFarmPageProjectList } =
    getFarmPageProjectListStore();
  const { data, fetchFarmPageList } = getFarmPageListStore();
  const {
    data: projectDetailsData,
    loading,
    error,
    fetchProjectsDetails,
  } = getFarmPageProjectDetails();

  useEffect(() => {
    if (farmName) {
      fetchFarmPageProjectList(farmName);
      fetchProjectsDetails(farmName, id);
      fetchFarmPageList(farmName);
    }
  }, [
    fetchFarmPageProjectList,
    fetchProjectsDetails,
    id,
    farmName,
    fetchFarmPageList,
  ]);

  const detailsData = projectDetailsData?.data?.project;
  const farmPageData = data?.farm_data;

  const StoreDetailsContent = () => {
    return (
      <div>
        <TabProvider>
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

          <section className="max-w-[1300px] mx-auto px-4 py-10 md:px-4 md:py-12">
            <div className="">
              <GoBackBtn href="/farm-page" />
              {loading ? (
                <Spinner />
              ) : error ? (
                <ErrorFetch
                  message="Error project details"
                  onRefetch={() => {
                    fetchProjectsDetails(farmName, id);
                  }}
                />
              ) : (
                <>
                  <h3 className="text-2xl font-aristoBold text-[#5F5F5F] mt-8 mb-8">
                    {detailsData?.farm_branch_name}
                  </h3>
                  <div className="grid grid-cols-2 gap-x-10 lg:grid-cols-1 lg:gap-y-6">
                    <div className="w-full">
                      <img
                        src={
                          `${detailsData?.project_images[0]?.image}` ||
                          "/assets/my-farms/no-img.avif"
                        }
                        alt={`store-front-details-image-${id}`}
                        width={609}
                        height={491}
                        className="w-[609px] h-[491px] rounded-lg lg:w-full lg:h-[250px]"
                      />
                    </div>
                    <div className="grid grid-cols-1 gap-y-2">
                      <div className="grid grid-cols-2 gap-x-2">
                        <img
                          src={
                            `${detailsData?.project_images[1]?.image}` ||
                            "/assets/my-farms/no-img.avif"
                          }
                          alt={`store-front-details-image-2`}
                          width={296}
                          height={237}
                          className="w-[296px] h-[237px] rounded-lg lg:w-full lg:h-[137px]"
                        />
                        <img
                          src={
                            `${detailsData?.project_images[2]?.image}` ||
                            "/assets/my-farms/no-img.avif"
                          }
                          alt="store-front-details-image-3"
                          width={296}
                          height={237}
                          className="w-[296px] h-[237px] rounded-lg lg:w-full lg:h-[137px]"
                        />
                      </div>

                      <img
                        src={
                          `${detailsData?.project_images[3]?.image}` ||
                          "/assets/my-farms/no-img.avif"
                        }
                        alt="store-front-details-image-4"
                        width={609}
                        height={237}
                        className="w-[609px] h-[237px] rounded-lg lg:w-[400px] lg:h-[257px]"
                      />
                    </div>
                  </div>

                  <h3 className="text-2xl font-aristoBold text-[#5F5F5F] mt-8 mb-8">
                    {detailsData?.farm_branch_name}
                  </h3>

                  <div className="flex gap-x-2 mt-1">
                    <Image
                      src="/assets/store-front/location.svg"
                      alt="location"
                      width={24}
                      height={24}
                    />
                    <p className="text-lg font-poppinsRegular text-[#7C7C7C]">
                      {detailsData?.project_location}
                    </p>
                  </div>

                  <div className="grid grid-cols-[2fr_1fr] gap-x-10 mt-6 pb-8 border-b border-[#E2E2E2] lg:grid-cols-1 lg:gap-y-8">
                    <div className="p-4 bg-[#F6F6F6] rounded-xl flex-1">
                      <div className="flex gap-x-5 items-center border-b border-[#E4E7EC] md:flex-col">
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
                            {detailsData?.description}
                          </p>
                        )}

                        {activeBtn === "How It works" && <HowItWorks />}
                        {activeBtn === "Performance Over Time" && (
                          <FarmPerformance />
                        )}
                        {activeBtn === "Risk Assurance" && <RiskAssurance />}
                      </div>
                    </div>

                    <div className="bg-white shadow-lg p-6 border border-[#F6F6F6] rounded-xl h-fit">
                      {/* <div className="flex justify-between">
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
                        {detailsData?.ROI}% Annually
                      </span>
                    </p>
                  </div>

                  <div className="">
                    <p className="text-sm text-[#7C7C7C] flex items-center">
                      <span className="font-poppinsRegular">
                        Farm Rating:
                      </span>{" "}
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
                </div> */}

                      <div className="mt-12 mb-6 flex flex-col gap-y-6 items-start justify-between">
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
                              {detailsData?.ROI}% Annually
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
                            {detailsData?.project_location}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-x-3">
                      <a href={`https://wa.me/${farmPageData?.farm_whatsapp_number}`} target="_blank" className="w-full">
               
                        <Button
                          variant="primary"
                          size="small"
                          className="w-full flex items-center justify-center gap-x-2"
                        >
                          <MdCardTravel color="white" size={24} />
                          Bid Now
                        </Button>
              </a>
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
                          imageUrl={`${card?.images[2]}`}
                          status={card?.status}
                          onViewProjects={() => {
                            /* handle click */
                          }}
                          href={`/farm-page/${card?.id}`}
                          onViewBid={() => {}}
                        />
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </section>
          <StoreFontFooter />
        </TabProvider>
      </div>
    );
  };

  return (
    <WithSuspense>
      <StoreDetailsContent />
    </WithSuspense>
  );
};

export default StoreFrontDetails;
