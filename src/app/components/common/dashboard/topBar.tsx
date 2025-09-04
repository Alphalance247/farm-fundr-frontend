"use client";
import { BiSearch } from "react-icons/bi";
import { FaTimesCircle } from "react-icons/fa";
import { IoClose, IoNotificationsOutline } from "react-icons/io5";
import { useRef, useState } from "react";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import { useEffect } from "react";
import Heading from "./heading";
import { useAuth } from "@/context/authContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { IoMdPerson } from "react-icons/io";
import { TbLogout2 } from "react-icons/tb";
import Button from "../Buttons";
import ModalOverlay from "../modals/modalOverlay";
import BackIcon from "../backIcon";
import { getUserDetailsStore } from "@/stores/settings/getUserDetails";
import { FiMenu } from "react-icons/fi";

export function Topbar({
  overview,
  showMobileMenu,
  setShowMobile,
}: {
  overview: string;
  showMobileMenu: boolean;
  setShowMobile: (showMobileMenu: boolean) => void;
}) {
  const { fetchUserDetails, data: userDetails } = getUserDetailsStore();
  useEffect(() => {
    fetchUserDetails();
  }, [fetchUserDetails]);
  // const [search, setSearch] = useState<string>("");
  const [dateTime, setDateTime] = useState<string>("21-02-2025. 12:02:00 PM");
  const { user, isLoading, logout, isLoggingOut } = useAuth();
  const router = useRouter();
  const [isDropdownOpen, setIsDropdown] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
      const formattedTime = now.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setDateTime(`${formattedDate} ${formattedTime}`);
    };

    updateDateTime(); // Set initial date and time
    const interval = setInterval(updateDateTime, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const ProfileImageHolder = () => {
    return (
      <div>
        {userDetails?.user_details?.image ? (
          <img
            src={`${userDetails?.user_details?.image}` || ""}
            height={40}
            width={40}
            alt="profileImage"
            className="h-[40px] w-[40px]  rounded-full"
          />
        ) : (
          <div className="h-[40px] w-[40px] rounded-full bg-[#EEFEF6] text-[#2D865B] flex items-center justify-center text-[1.3rem] tracking-[0.34px] font-medium">
            {user?.fullname
              .split(" ")
              .map((n) => n[0])
              .join("")
              .toUpperCase()}
          </div>
        )}
      </div>
    );
  };
  return (
    <header className="flex items-center justify-between gap-x-6 h-[93px] px-10 py-5 bg-white shadow-sm sticky top-0 z-10 lg:px-2">
      <div className="">
        <Link href={"/farmer-dashboard/"}>
          <Image
            src="/assets/LandingPage/icons/fundrlogo.svg"
            width={169}
            height={41}
            alt="alluviumlogo"
          />
        </Link>
      </div>

      <div className="flex items-center gap-x-3">
        {/* <div className="hidden items-center gap-x-3 xl:flex">
          <Image
            src="/assets/DashBoard/overview/profile.svg"
            width={32}
            height={32}
            alt="profile"
          />

          <div className="rounded-full bg-[#F6F6F6] w-10 h-10 flex items-center justify-center relative cursor-pointer hover:bg-[#cac6c6]">
            <IoNotificationsOutline size={24} color="#4E4E4E" />
            <p className="w-3 h-3 text-[10px] flex flex-col items-center justify-center rounded-full absolute bg-[#EA5455] text-white top-3 right-2">
              4
            </p>
          </div>
        </div> */}
        <Heading overview={overview} className="xl:hidden" />
        <div className="relative xl:hidden">
          <BiSearch
            className="absolute top-4 left-2"
            size={20.28}
            color="#226646"
          />
          <FaTimesCircle
            className="absolute top-5 right-2"
            size={14}
            color="white"
            fill="#F63232"
          />
          <input
            type="text"
            name="search"
            placeholder="Search"
            onChange={handleChange}
            value=""
            className="pl-8 w-[329px] py-[14px] bg-[#F6F6F6] rounded-[40px] lg:w-full"
            // variant="primary"
            // withWidth={false}
          />
        </div>
        <div className="relative" ref={dropdownRef}>
          <img
            src={userDetails?.user_details?.image || "/assets/Profile.svg"}
            width={32}
            height={32}
            alt="profile"
            className="hidden lg:block cursor-pointer h-[35px] w-[35px]  rounded-full"
            onClick={() => setIsDropdown(!isDropdownOpen)}
          />
        </div>
        <div className="rounded-full bg-[#F6F6F6] w-16 h-16 flex items-center justify-center relative cursor-pointer hover:bg-[#cac6c6] xl:w-10 xl:h-10 ">
          <IoNotificationsOutline
            className="text-[38px] lg:text-2xl"
            color="#4E4E4E"
          />
          <p className="w-4 h-4 text-[10px] flex flex-col items-center justify-center rounded-full absolute bg-[#EA5455] text-white top-3 right-4">
            4
          </p>
        </div>{" "}
        <div className="w-10 h-10 rounded-full bg-[#F6F6F6] items-center justify-center cursor-pointer hidden xl:flex">
          <button
            className="transition-all duration-500 text-black text-4xl hover:p-2"
            onClick={() => setShowMobile(!showMobileMenu)}
          >
            {showMobileMenu ? (
              <IoClose fill="#0000008A" size={20} color="#0000008A" />
            ) : (
              <FiMenu fill="#0000008A" size={20} color="#0000008A" />
            )}
          </button>
        </div>
        <div className="px-6 py-4 rounded-[40px] bg-[#F6F6F6] w-[full] xl:hidden">
          <p className="text-sm font-poppinsRegular text-[#5F5F5F]">
            {dateTime}
          </p>
        </div>
        {isLoading ? (
          <div className="flex items-center gap-x-3 xl:hidden">
            <div className="w-[180px] h-[40px] bg-gray-200 rounded-md animate-pulse"></div>
            <div className="w-[180px] h-[40px] bg-gray-200 rounded-md animate-pulse"></div>
          </div>
        ) : (
          <div className="relative" ref={dropdownRef}>
            <div
              className="flex justify-between gap-x-4 items-center px-[6px] py-[5px] bg-[#F6F6F6] rounded-[40px] cursor-pointer hover:bg-[#cac6c6] xl:hidden"
              onClick={() => {
                setIsDropdown(!isDropdownOpen);
              }}
            >
              <div className="flex items-center gap-x-3">
                <ProfileImageHolder />

                <div>
                  <p className="text-[#282A03] text-sm font-poppinsSemiBold mb-1">
                    {user?.fullname}
                  </p>
                </div>
              </div>
              <span>
                <FaChevronDown color="#7C7C7C" size={20} />
              </span>
            </div>
            {isDropdownOpen && (
              <div className="absolute right-0 top-3 mt-2 py-3 bg-white rounded-lg shadow-lg z-20 w-[267px]">
                <div className="px-4 flex gap-x-2 items-center pb-3 border-b-[2px] border-[#D0D0D0]">
                  <ProfileImageHolder />

                  <div>
                    <p className="text-[#282A03] text-sm font-poppinsSemiBold mb-1">
                      {user?.fullname}
                    </p>

                    <p className="text-xs tracking-[-2%] text-[#83827E]">
                      {userDetails?.user_details?.email}
                    </p>
                  </div>
                </div>

                <div
                  onClick={() => router?.push("/farmer-dashboard/settings")}
                  className="text-sm text-[#101928] flex gap-3 px-4 py-6 cursor-pointer"
                >
                  <span>
                    {" "}
                    <IoMdPerson size={20} color="#292D32" />
                  </span>
                  Profile Settings
                </div>

                <div
                  onClick={() => setLogoutModal(true)}
                  className="text-sm text-[#101928] flex gap-3 px-4 pb-6 cursor-pointer"
                >
                  <span>
                    {" "}
                    <TbLogout2 color="#CA0A0A" size={20} />
                  </span>
                  Logout
                </div>

                <div className=" px-4 ">
                  <Button
                    onClick={() => {
                      router.push("/");
                    }}
                    className="w-full"
                  >
                    Go to Homepage
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {logoutModal && (
        <ModalOverlay
          onClose={() => {
            setLogoutModal(false);
          }}
        >
          <div className="md:px-2 z-50">
            <div className="bg-white  w-full max-w-[600px] mx-auto rounded-[10px] shadow-lg">
              <div className="py-4 px-8 bg-[#EEFEF6] rounded-tr-[10px] rounded-tl-[10px] flex items-center justify-between">
                <div className="flex items-center gap-x-4">
                  <Image
                    src="/assets/DashBoard/wallet/deactivate.svg"
                    width={40}
                    height={40}
                    alt="deactivate"
                  />

                  <h4 className="text-lg font-poppinsSemiBold text-[#0B222A]">
                    Logout?
                  </h4>
                </div>

                <BackIcon onCloseLink={() => setLogoutModal(false)} />
              </div>

              <div className="px-8 py-6 bg-white rounded-br-[10px] rounded-bl-[10px]">
                <p className="text-sm font-poppinsRegular text-[#5C6C71] mb-10 text-center">
                  Are you sure you want to log out from the platform? You are
                  about to sign out.
                </p>

                <div className="flex items-center gap-x-4">
                  <div className="w-full">
                    <Button
                      variant="secondary"
                      className="w-full"
                      onClick={() => setLogoutModal(false)}
                    >
                      No, Thank you
                    </Button>
                  </div>

                  <Button
                    className="w-full"
                    onClick={() => {
                      logout();
                      router?.push("/login");
                    }}
                  >
                    {isLoggingOut ? "Loging Out" : "Yes, Logout"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </ModalOverlay>
      )}
    </header>
  );
}
