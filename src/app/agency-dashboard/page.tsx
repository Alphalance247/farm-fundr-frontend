"use client";
import Button from "../components/common/Buttons";
import Image from "next/image";
import Link from "next/link";
import Heading from "../components/common/dashboard/heading";
import { useAuth } from "@/context/authContext";
import { getKYCPercentageStore } from "@/stores/settings/getKycPercentage";
import { useEffect, useState } from "react";
import { MdOutlineDateRange } from "react-icons/md";
import { getDashboardStore } from "@/stores/farmer-dashboard/dashboard";
import { getFarmersEarnings } from "@/stores/farmer-dashboard/earnings";
import { getFarmerBidsStore } from "@/stores/farmer-dashboard/bids";
import { getFarmerNotification } from "@/stores/farmer-dashboard/notifications";
import AgencyLayout from "../components/common/agency/agencyLayout";
import OverviewCard from "../components/common/overviewCard";
import RecentGrants from "../components/agency/recentGrants";
import WalletOverview from "../components/agency/walletOverview";
import RecentActivity from "../components/agency/recentActivity";
import RecentApplication from "../components/agency/recentApplications";
import ApplicationSummary from "../components/agency/applicationSummary";
import DisbursementSummary from "../components/agency/disbursementSummary";
import PerformingGrants from "../components/agency/performingGrants";

interface data {
  text?: string;
  link?: string;
  img?: string;
  bgColor?: string;
  textColor?: string;
}

interface dataOverview {
  id: number;
  name: string;
  image: string;
  totalFarms: string | number;
}

const FarmerDashboard = () => {
  const { user } = useAuth();
  const { fetchUserKYC, data: kycData } = getKYCPercentageStore();
  const { fetchDashboardData, loading: isDashboardLoading } =
    getDashboardStore();
  const { fetchFarmerEarnings, loading: isEarningsLoading } =
    getFarmersEarnings();
  const { fetchFarmerBids, loading: isBidsLoading } = getFarmerBidsStore();
  const { fetchNotification } = getFarmerNotification();

  useEffect(() => {
    fetchFarmerEarnings();
    fetchFarmerBids();
    fetchDashboardData();
    fetchNotification();
  }, [
    fetchFarmerEarnings,
    fetchFarmerBids,
    fetchDashboardData,
    fetchNotification,
  ]);

  const date = new Date();
  date.getUTCDay();
  const [greeting, setGreeting] = useState("");
  const [dateTime, setDayTime] = useState("");

  useEffect(() => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const today = new Date();
    const fullDate = today.toLocaleDateString("en-US", {
      weekday: "long", // e.g., Monday
      year: "numeric", // e.g., 2025
      month: "long", // e.g., August
      day: "numeric", // e.g., 5
    });
    const currentDay = days[today.getDay()];
    setDayTime(fullDate);
    setGreeting(`${currentDay}`);
  }, []);

  useEffect(() => {
    fetchUserKYC();
  }, [fetchUserKYC]);

  const data: data[] = [
    {
      text: "Create Grant",
      link: "/farmer-dashboard/my-farms/add-farm",
      img: "/assets/DashBoard/overview/plus.svg",
      bgColor: "bg-[#ECF2FF]",
    },
    {
      text: "View All Grant",
      link: "/farmer-dashboard/my-farms",
      img: "/assets/DashBoard/overview/copy.svg",
      bgColor: "bg-[#EEFEF6]",
    },
    {
      text: "Withdraw Funds",
      link: "/farmer-dashboard/wallet",
      img: "/assets/DashBoard/overview/bank.svg",
      bgColor: "bg-[#FFE6E6]",
    },
    {
      text: "Update Bank Details",
      link: "/farmer-dashboard/settings",
      img: "/assets/DashBoard/overview/withdraw.svg",
      bgColor: "bg-[#FFFAE6]",
    },
  ];
  const dat = kycData?.kyc_percentage || 0;

  const dataOverview: dataOverview[] = [
    {
      id: 1,
      name: "Total Grant Published",
      image: "/assets/Agency/landing/4.svg",
      totalFarms: "12 Grants",
    },
    {
      id: 2,
      name: "Application Received",
      image: "/assets/Agency/landing/3.svg",
      totalFarms: "135",
    },
    {
      id: 3,
      name: "Wallet Balance",
      image: "/assets/Agency/landing/2.svg",
      totalFarms: " ₦2,000,000",
    },
    {
      id: 4,
      name: "Funds Disbursed",
      image: "/assets/Agency/landing/1.svg",
      totalFarms: "₦700,000",
    },
  ];

  return (
    <AgencyLayout>
      <main className="px-10 py-8 bg-gray-50 overflow-auto xl:px-4 xl:py-6 lg:mb-4">
        <Heading overview="Overview" />
        <div className="grid grid-cols-[60%auto] gap-6 xl:gap-4 lg:grid-cols-1 lg:mt-6">
          <div className="bg-[url('/assets/DashBoard/overview/avatarbg.png')] h-fit bg-cover bg-no-repeat bg-center items-center rounded-2xl flex gap-x-8 xl:gap-x-6 justify-between md:flex-col md:gap-y-3 md:items-start">
            <div className="pl-8 py-11 xl:py-6 xl:pl-4 md:pl-4 md:py-3 md:pr-4">
              {dat !== 100 ? (
                <>
                  <h2 className="text-3xl font-aristoBold text-[#FCFCFC] mb-4 md:text-lg">
                    Welcome {user?.fullname?.split(" ")[0] || "AgroSupport"} !
                  </h2>

                  <div>
                    <p className="text-sm font-poppinsRegular text-[#FCFCFC] mb-2 md:text-xs">
                      Profile Completion
                    </p>
                    <div className="w-full bg-[#F0F2F5] rounded-[20px] h-3 mb-2">
                      <div
                        className="bg-[#51F4A6] w-[70%] h-3 rounded-[20px]"
                        style={{ width: `${kycData?.kyc_percentage}%` }}
                      ></div>
                    </div>
                    <p className="text-sm font-poppinsRegular text-[#FCFCFC] mb-4 md:text-[10px]">
                      {kycData?.kyc_percentage}% Complete • Complete profile to
                      stand out
                    </p>
                    <Link href={"/farmer-dashboard/settings"}>
                      <Button
                        className="w-fit"
                        variant="secondary"
                        size="small"
                      >
                        Complete profile
                      </Button>
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex gap-x-3 mb-3 items-center">
                    <span>
                      <MdOutlineDateRange size={20} fill="white" />
                    </span>
                    <p className="font-poppinsSemiBold text-xs text-white">
                      {dateTime}
                    </p>
                  </div>
                  {/* <div className="flex gap-3 items-center bg-[#F5F5F533] py-2 px-4 rounded-2xl mt-7 mb-7 w-fit">
                      <Image
                        src="/assets/DashBoard/sunny.svg"
                        width={32}
                        height={32}
                        alt="sunny"
                      />
                      <div className="">
                        <p className="text-xs text-white font-poppinsSemiBold mb-1">
                          Weather for today
                        </p>
                        <p className="text-[10px] text-white font-poppinsSemiBold">
                          50% Sunny
                        </p>
                      </div>
                    </div> */}
                  <h2 className="text-3xl font-aristoBold text-[#FCFCFC] mb-3 md:text-lg">
                    Good Day, {user?.fullname.split(" ")[0] || "Farmer Nelson"}!
                  </h2>
                  <p className="text-sm font-poppinsRegular text-[#FCFCFC] mb-2 md:text-xs">
                    Have a Nice {greeting} !
                  </p>
                </>
              )}
            </div>

            <div className="pr-8 pt-8 md:pr-3 md:pt-3 align-bottom">
              <div className="bg-[#EEFEF61A] p-4 rounded-full border border-[#E2E2E233]">
                <div className="h-[175px] w-[175px] rounded-full bg-[#EEFEF6] text-[#2D865B] flex items-center justify-center text-[54px] tracking-[0.34px] font-medium">
                  {user?.fullname
                    .split(" ")
                    .slice(0, 2)
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase()}
                </div>
              </div>
            </div>
          </div>

          <div className="px-[22px] py-8 border border-[#E4E7EC] bg-[white] rounded-xl h-fit xl:px-4 xl:py-6">
            <h2 className="text-[#5F5F5F] text-2xl font-aristoBold mb-4">
              Quick Actions
            </h2>
            <div className="grid grid-cols-2 gap-x-2 gap-y-2">
              {data.map((item, index) => {
                return (
                  <Link href={item?.link || "/"} key={index}>
                    <div
                      className={`flex flex-col justify-center items-center gap-x-3 cursor-pointer ${item?.bgColor} rounded-md py-4 `}
                    >
                      <Image
                        src={item?.img || ""}
                        width={22}
                        height={25}
                        alt="asset icons"
                      />
                      <p className="text-[#5F5F5F] text-xs mt-[6px]">
                        {" "}
                        {item?.text}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mt-10 mb-4  xl:grid-cols-3 xl:gap-4 lg:grid-cols-2 md:grid-cols-2 md:gap-2">
          {dataOverview.map((item) => (
            <OverviewCard
              key={item?.id}
              img={item?.image}
              head={item?.name}
              subhead={item?.totalFarms.toString()}
            />
          ))}
        </div>

        <div className="grid grid-cols-[65%auto] gap-6 xl:gap-4 lg:grid-cols-1">
          <RecentGrants />
          <WalletOverview />
        </div>

        <div className="grid grid-cols-3 gap-6 xl:gap-4 lg:grid-cols-1">
          <ApplicationSummary />
          <DisbursementSummary />
          <PerformingGrants />
        </div>

        <div className="grid grid-cols-2 gap-6 xl:gap-4 lg:grid-cols-1">
          <RecentApplication />
          <RecentActivity />
        </div>
      </main>
    </AgencyLayout>
  );
};

export default FarmerDashboard;
