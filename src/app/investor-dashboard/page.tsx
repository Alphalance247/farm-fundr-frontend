"use client";
// import Heading from "../components/common/dashboard/heading";
import Image from "next/image";
import Link from "next/link";
import InvestorLayout from "../components/common/investor/investorsLayout";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/authContext";
import { getKYCPercentageStore } from "@/stores/settings/getKycPercentage";
import Button from "../components/common/Buttons";
import { MdOutlineDateRange } from "react-icons/md";
import InvestorAnalyticsTab from "../components/dashboard/overview/investorAnalyticsTab";
import InvestorRecentActivity from "../components/dashboard/overview/investorRecentActivity";
import InvestorMilestoneRequest from "../components/dashboard/overview/investorMilestoneRequest";
import ProjectList from "../components/dashboard/overview/investments";
import WalletCard from "../components/dashboard/overview/walletCard";

interface data {
  text?: string;
  link?: string;
  img?: string;
  borderColor?: string;
  bgColor?: string;
  textColor?: string;
}

const InvestorDashboardPage = () => {
  const { user } = useAuth();
  const { fetchUserKYC, data: kycData } = getKYCPercentageStore();
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
      text: "Fund Wallet",
      link: "/farmer-dashboard/my-farms/add-farm",
      img: "/assets/DashBoard/overview/investorWithdraw.svg",
      bgColor: "bg-[#C5D5FF]/30",
      borderColor: "border-[#C5D5FF] border",
    },
    {
      text: "Withdraw Funds",
      link: "/farmer-dashboard/wallet",
      img: "/assets/DashBoard/overview/investorFund.svg",
      bgColor: "bg-[#C9FCE3]/30",
      borderColor: "border-[#C9FCE3] border",
    },
    {
      text: "Update Bank Details",
      link: "/farmer-dashboard",
      img: "/assets/DashBoard/overview/investorwalletIcon.svg",
      borderColor: "border-[#FEF0B0] border",
      bgColor: "bg-[#FEF0B0]/30",
    },
  ];
  const dat = kycData?.kyc_percentage || 0;
  return (
    <InvestorLayout>
      <main className="px-10 py-8 bg-gray-50 overflow-y-scroll h-full xl:px-4 xl:py-6 lg:mb-4">
        <div className="grid grid-cols-[60%auto] gap-6 xl:gap-4 lg:grid-cols-1 lg:mt-6">
          <div className="bg-[url('/assets/DashBoard/overview/investorBg.png')] h-fit bg-cover bg-no-repeat bg-center rounded-2xl flex  xl:gap-x-6 lg:justify-between md:flex-col md:gap-y-3">
            <div className="pl-6 py-11 xl:py-6 xl:pl-4 md:pl-4 md:py-3 md:pr-4">
              {dat !== 100 ? (
                <>
                  <h2 className="text-3xl font-aristoBold text-[#FCFCFC] mb-4 md:text-lg">
                    Welcome {user?.fullname || "Investor Nelson"}
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
                  <div className="flex gap-3 items-center bg-[#F5F5F533] py-2 px-4 rounded-2xl mt-7 mb-7 w-fit">
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
                  </div>
                  <h2 className="text-3xl font-aristoBold text-[#FCFCFC] mb-3 md:text-lg">
                    Good Day, {user?.fullname || "Investor Nelson"}
                  </h2>
                  <p className="text-sm font-poppinsRegular text-[#FCFCFC] mb-2 md:text-xs">
                    Have a Nice {greeting} !
                  </p>
                </>
              )}
            </div>

            <div className=" pt-8 md:pr-3 md:pt-3 align-bottom">
              <Image
                src="/assets/DashBoard/overview/investorAvatar.png"
                width={222}
                height={330}
                alt="avatar"
                className="md:h-[150px] md:w-[150px]"
              />
            </div>
          </div>

          <div className="px-[22px] py-8 border border-[#E4E7EC] bg-[white] rounded-xl h-fit xl:px-4 xl:py-6">
            <h2 className="text-[#5F5F5F] text-2xl font-aristoBold mb-4">
              Quick Actions
            </h2>
            <div className="grid grid-cols-2 gap-2">
              {data.map((item, i) => (
                <Link
                  href={item?.link || "/"}
                  key={i}
                  className="block first:col-span-2"
                >
                  <div
                    className={`flex flex-col ${item?.borderColor} justify-center items-center cursor-pointer ${item?.bgColor} rounded-md py-4 w-full`}
                  >
                    <Image
                      src={item?.img || ""}
                      width={100}
                      height={100}
                      alt="asset icons"
                    />
                    <p className="text-[#5F5F5F] text-xs mt-[6px]">
                      {item?.text}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div>
          <InvestorAnalyticsTab />
        </div>
        <div className="flex flex-row lg:flex-col justify-between gap-6">
          <ProjectList />
          <WalletCard />
        </div>
        <div className="flex flex-row lg:flex-col justify-between gap-6">
          <InvestorRecentActivity />
          <InvestorMilestoneRequest />
        </div>
      </main>
    </InvestorLayout>
    // </ProtectedRoute>
  );
};

export default InvestorDashboardPage;
