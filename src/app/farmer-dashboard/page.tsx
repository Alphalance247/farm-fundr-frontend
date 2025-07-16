"use client";
import DashboardLayout from "../components/common/dashboardLayout";
import { Topbar } from "../components/common/dashboard/topBar";
import Button from "../components/common/Buttons";
import Image from "next/image";
import Link from "next/link";
import WeatherReport from "../components/dashboard/overview/weatherReports";
import InvestmentOverview from "../components/dashboard/overview/investmentOverview";
import EarningOverview from "../components/dashboard/overview/earningOverview";
import PendingPayment from "../components/dashboard/overview/pendingPayment";
import FarmingSummary from "../components/dashboard/overview/farmingSummary";
import RecentActivity from "../components/dashboard/overview/recentActivity";
import BidSummary from "../components/dashboard/overview/bidSummary";
import Heading from "../components/common/dashboard/heading";
import { useAuth } from "@/context/authContext";
import ProtectedRoute from "../components/common/ProtectedRoute/protectedRoute";

interface data {
  text?: string;
  link?: string;
  img?: string;
  bgColor?: string;
  textColor?: string;
}

const FarmerDashboard = () => {
  const { user } = useAuth();

  const data: data[] = [
    {
      text: "Create farm",
      link: "/farmer-dashboard/my-farms/add-farm",
      img: "/assets/DashBoard/overview/plus.svg",
      bgColor: "bg-[#ECF2FF]",
    },
    {
      text: "Manage farms",
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
      link: "/farmer-dashboard",
      img: "/assets/DashBoard/overview/withdraw.svg",
      bgColor: "bg-[#FFFAE6]",
    },
  ];
  return (
    <ProtectedRoute requiredUserType="farmer">
      <DashboardLayout>
        <Topbar overview="overview" />

        <main className="px-10 py-8 bg-gray-50 overflow-auto xl:px-4 xl:py-6 lg:mb-4">
          <Heading overview="Overview" />
          <div className="grid grid-cols-[60%auto] gap-6 xl:gap-4 lg:grid-cols-1 lg:mt-6">
            <div className="bg-[url('/assets/DashBoard/overview/avatarbg.png')]  bg-cover bg-no-repeat bg-center rounded-2xl flex gap-x-14 xl:gap-x-6 lg:justify-between md:flex-col md:gap-y-3">
              <div className="pl-8 py-11 xl:py-6 xl:pl-4 md:pl-4 md:py-3 md:pr-4">
                <h2 className="text-3xl font-aristoBold text-[#FCFCFC] mb-4 md:text-lg">
                  Welcome {user?.fullname || "Farmer Nelson"} !
                </h2>
                <p className="text-sm font-poppinsRegular text-[#FCFCFC] mb-2 md:text-xs">
                  Profile Completion
                </p>
                <div className="w-full bg-[#F0F2F5] rounded-[20px] h-3 mb-2">
                  <div className="bg-[#51F4A6] w-[70%] h-3 rounded-[20px]"></div>
                </div>
                <p className="text-sm font-poppinsRegular text-[#FCFCFC] mb-4 md:text-[10px]">
                  70% Complete • Complete profile to stand out
                </p>
                <Button className="w-fit" variant="secondary" size="small">
                  Complete profile
                </Button>
              </div>

              <div className="pr-8 pt-8 md:pr-3 md:pt-3">
                <Image
                  src="/assets/DashBoard/overview/avatar.png"
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

          <WeatherReport />

          <div className="grid grid-cols-2 gap-x-6 mt-6 xl:gap-x-3 md:grid-cols-1">
            <div>
              <InvestmentOverview />
              <EarningOverview />
              <PendingPayment />
            </div>

            <div>
              <FarmingSummary />
              <RecentActivity />
              <BidSummary />
            </div>
          </div>
        </main>
      </DashboardLayout>
    </ProtectedRoute>
  );
};

export default FarmerDashboard;
