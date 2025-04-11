import DashboardLayout from "../components/common/dashboardLayout";
import { Topbar } from "../components/common/dashboard/topBar";
import Button from "../components/common/Buttons";
import Image from "next/image";
import Link from "next/link";
import WeatherReport from "../components/dashboard/overview/weatherReports";

interface data {
  text?: string;
  link?: string;
  img?: string;
  bgColor?: string;
  textColor?: string;
}

const FarmerDashboard = () => {
  const data: data[] = [
    {
      text: "Create farm",
      link: "/farmer-dashboard",
      img: "/assets/DashBoard/overview/plus.svg",
      bgColor: "bg-[#ECF2FF]",
    },
    {
      text: "Manage farms",
      link: "/farmer-dashboard/iiiio",
      img: "/assets/DashBoard/overview/copy.svg",
      bgColor: "bg-[#EEFEF6]",
    },
    {
      text: "Withdraw Funds",
      link: "/farmer-dashboard/hhhjs",
      img: "/assets/DashBoard/overview/bank.svg",
      bgColor: "bg-[#FFE6E6]",
    },
    {
      text: "Update Bank Details",
      link: "/farmer-dashboard/hhhjs",
      img: "/assets/DashBoard/overview/withdraw.svg",
      bgColor: "bg-[#FFFAE6]",
    },
  ];
  return (
    <DashboardLayout>
      <Topbar />

      <main className="px-10 py-8 bg-gray-50 overflow-auto">
        <div className="grid grid-cols-[60%auto] gap-6">
          <div className="bg-[url('/assets/DashBoard/overview/avatarbg.png')]  bg-cover bg-no-repeat bg-center  rounded-2xl flex gap-x-14">
            <div className="pl-8 py-11">
              <h2 className="text-3xl font-aristoBold text-[#FCFCFC] mb-4">
                Welcome! Farmer Nelson
              </h2>
              <p className="text-sm font-poppinsRegular text-[#FCFCFC] mb-2">
                Profile Completion
              </p>
              <div className="w-full bg-[#F0F2F5] rounded-[20px] h-3 mb-2">
                <div className="bg-[#51F4A6] w-[70%] h-3 rounded-[20px]"></div>
              </div>
              <p className="text-sm font-poppinsRegular text-[#FCFCFC] mb-4">
                70% Complete • Complete profile to stand out
              </p>
              <Button className="w-fit" variant="secondary" size="small">
                Complete profile
              </Button>
            </div>

            <div className="pr-8 pt-8">
              <Image
                src="/assets/DashBoard/overview/avatar.png"
                width={222}
                height={330}
                alt="avatar"
              />
            </div>
          </div>

          <div className="px-[22px] py-8 border border-[#E4E7EC] bg-[white] rounded-xl ">
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
                        src={item?.img}
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
      </main>
    </DashboardLayout>
  );
};

export default FarmerDashboard;
