"use client";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineHome } from "react-icons/hi2";
import { usePathname } from "next/navigation";
import {
  MdOutlineAccountBalanceWallet,
  MdOutlinePayment,
} from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { CiSettings } from "react-icons/ci";
import { PiHeadsetLight } from "react-icons/pi";
import { useEffect, useRef } from "react";
import { SiCoinmarketcap } from "react-icons/si";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { MdOutlineMoney } from "react-icons/md";

interface sideBarData {
  heading?: string;
  text?: string;
  link?: string;
  icons?: React.ReactNode;
  notification?: number | string | null;
  bgColor?: string;
  textColor?: string;
}

interface mobileMenuProps {
  showMobileMenu: boolean;
  setShowMobile: (showMobileMenu: boolean) => void;
}

const AgencySideBar: React.FC<mobileMenuProps> = ({
  showMobileMenu,
  setShowMobile,
}) => {
  const pathname = usePathname();

  const sideBarData: sideBarData[] = [
    {
      text: "Dashboard",
      link: "/agency-dashboard",
      icons: <HiOutlineHome size={20} />,
    },
    {
      text: "My Grants",
      link: "/agency-dashboard/my-grants",
      icons: <TbReportAnalytics size={20} />,
      notification: 4,
      bgColor: "bg-[#2D865B]",
      textColor: "text-white",
    },
    {
      text: "Applications",
      link: "/investor-dashboard/bids",
      icons: <MdOutlinePeopleAlt size={20} />,
      notification: 0,
      bgColor: "bg-[#2D865B]",
      textColor: "text-white",
    },
    {
      text: "Disbursement",
      link: "/investor-dashboard/marketplace",
      icons: <MdOutlineMoney size={20} />,
    },
    {
      text: "Wallet",
      link: "/investor-dashboard/wallet",
      icons: <MdOutlineAccountBalanceWallet size={20} />,
    },
    {
      text: "Subscription",
      link: "/farmer-dashboard/subscription",
      icons: <MdOutlinePayment size={20} />,
    },
    {
      text: "Settings",
      link: "/investor-dashboard/settings",
      icons: <CiSettings size={20} />,
    },
    {
      text: "Help Center",
      link: "/investor-dashboard/help-center",
      icons: <PiHeadsetLight size={20} />,
    },
  ];

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowMobile(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showMobileMenu, setShowMobile]);

  return (
    <aside
      className={`bg-white overflow-y-auto  ${
        showMobileMenu
          ? "xl:block xl:absolute xl:w-[80%] xl:z-20 xl:overflow-y-auto xl:h-auto"
          : "xl:hidden"
      } `}
      ref={dropdownRef}
    >
      {/* Logo / Brand Name */}
      <div className="flex flex-col justify-between ">
        <div className="font-bold">
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
        <div className="mt-2 px-2 mb-10">
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
                          }  hover:bg-[#F0F2F5] hover:animate-out hover:rounded-lg ${
                            (
                              item.text === "Dashboard"
                                ? pathname === item?.link
                                : pathname.startsWith(item?.link || "")
                            )
                              ? "bg-[linear-gradient(90deg,#2D865B_0%,#12482F_100%)] text-[white] rounded-lg text-sm font-poppinsSemiBold"
                              : "bg-transparent text-[#7C7C7C] text-sm font-poppinsRegular"
                          }`}
                        >
                          <div className="flex gap-x-3 items-center">
                            <span
                              className={` ${
                                pathname === item?.link
                                  ? "fill-white"
                                  : "fill-[#7C7C7C]"
                              }`}
                            >
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
    </aside>
  );
};

export default AgencySideBar;
