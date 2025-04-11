"use client";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineHome } from "react-icons/hi2";
import { usePathname } from "next/navigation";
import {
  MdOutlineMessage,
  MdOutlineAnalytics,
  MdOutlineAccountBalanceWallet,
  MdOutlinePayment,
} from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { CiSettings } from "react-icons/ci";
import { PiHeadsetLight } from "react-icons/pi";
import Subsribe from "../../dashboard/subscribe";
import { GoSignOut } from "react-icons/go";

interface sideBarData {
  heading?: string;
  text?: string;
  link?: string;
  icons?: React.ReactNode;
  notification?: string;
  bgColor?: string;
  textColor?: string;
}

const Sidebar: React.FC = () => {
  const pathname = usePathname();

  const sideBarData: sideBarData[] = [
    {
      text: "Dashboard",
      link: "/farmer-dashboard",
      icons: <HiOutlineHome size={20} fill="white" />,
    },
    {
      text: "My Farms",
      link: "/farmer-dashboard/iiiio",
      icons: <TbReportAnalytics size={20} />,
      notification: "10",
      bgColor: "bg-[#F2F2F2]",
      textColor: "text-[#2D865B]",
    },
    {
      text: "Message",
      link: "/farmer-dashboard/hhhjs",
      icons: <MdOutlineMessage size={20} />,
      notification: "10",
      bgColor: "bg-[#2D865B]",
      textColor: "text-white",
    },
    {
      text: "Analytics",
      link: "/compliance",
      icons: <MdOutlineAnalytics size={20} />,
    },
    {
      text: "Wallet",
      link: "/compliance",
      icons: <MdOutlineAccountBalanceWallet size={20} />,
    },
    {
      text: "Subscription",
      link: "/compliance",
      icons: <MdOutlinePayment size={20} />,
    },
    {
      text: "Settings",
      link: "/compliance",
      icons: <CiSettings size={20} />,
    },
    {
      text: "Help Center",
      link: "/compliance",
      icons: <PiHeadsetLight size={20} />,
    },
  ];

  return (
    <aside className="w-80 bg-white overflow-y-scroll h-screen ">
      {/* Logo / Brand Name */}
      <div className="flex flex-col justify-between ">
        <div className="font-bold">
          <div className="pl-[51px] pt-[36px]">
            <Image
              src="/assets/LandingPage/icons/fundrlogo.svg"
              width={169}
              height={41}
              alt="alluviumlogo"
            />
          </div>

          <div className="flex justify-end items-end mt-2">
            <button>
              <Image
                src="/assets/DashBoard/closeIcon.svg"
                width={35}
                height={30}
                alt="collapse"
              />
            </button>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="mt-2 px-2 mb-20">
          <nav className="">
            <ul className="flex flex-col gap-y-4">
              {sideBarData.map((item, i) => {
                return (
                  <div key={i}>
                    <div className="flex flex-col gap-y-2">
                      <Link href={item?.link || "/"} passHref key={i}>
                        <div
                          className={` flex justify-between items-center py-3 px-4 ${
                            item.text === "Subscription"
                              ? "border-b border-[#F0F2F5] pb-6"
                              : ""
                          }  hover:bg-[#F0F2F5] hover:rounded-lg ${
                            pathname === item?.link
                              ? "bg-[linear-gradient(90deg,#2D865B_0%,#12482F_100%)] text-[white] rounded-lg text-sm font-poppinsSemiBold"
                              : "bg-transparent text-[#7C7C7C] text-sm font-poppinsRegular"
                          }`}
                        >
                          <div className="flex gap-x-3 items-center">
                            <span className=" fill-white text-[#7C7C7C]">
                              {item?.icons}
                            </span>
                            <li className="text-sm  font-medium font-Graphik">
                              {item?.text}
                            </li>
                          </div>
                          {item?.notification && (
                            <p
                              className={`rounded-full h-4 w-7 pt-[2px] flex flex-col items-center justify-center text-xs font-Graphik font-semibold font-Graphik ${item?.textColor} ${item?.bgColor}`}
                            >
                              {item?.notification}
                            </p>
                          )}
                        </div>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>

      <Subsribe />

      <div className="flex justify-between items-center py-4 pl-2 pr-2 pb-10 mt-3">
        <div className="flex items-center gap-x-3">
          <Image
            src="/assets/DashBoard/overview/avatar.svg"
            width={40}
            height={40}
            alt="avatar"
          />
          <div>
            <p className="text-[#282A03] text-sm font-poppinsSemiBold mb-1">
              Nelson Ade
            </p>
            <p className="text-[#7C7C7C] text-xs font-poppinsRegular">
              Nelson@gmail.com
            </p>
          </div>
        </div>
        <span>
          <GoSignOut color="#282A03" size={20} />
        </span>
      </div>
    </aside>
  );
};

export default Sidebar;
