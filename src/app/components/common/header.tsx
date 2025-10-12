"use client";
import Image from "next/image";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import Button from "./Buttons";
import { motion } from "framer-motion";
import { FaCaretDown } from "react-icons/fa";
import { useAuth } from "@/context/authContext";
import { useRouter } from "next/navigation";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState("Home");
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showDropDown, setShowDropDown] = useState<number | null>(null);
  const router = useRouter();

  const navs = [
    { id: 1, name: "Home", scrollSection: "about", link: "/" },
    {
      id: 3,
      name: "About Us",
      link: "/about-us",
    },
    {
      id: 2,
      name: "Services",
      subMenu: [
        {
          name: "For Farmers",
          link: "/for-farmers",
        },
        {
          name: "For Investors",
          link: "/for-investors",
        },
        {
          name: "For Agency",
          link: "/for-agency",
        },
      ],
      icon: <FaCaretDown size={16} />,
    },
    // {
    //   id: 4,
    //   name: "How It Works",
    //   scrollSection: "serve",
    //   link: "/how-it-works",
    // },
    {
      id: 5,
      name: "MarketPlace",
      scrollSection: "technology",
      link: "/farm-marketplace",
    },
    {
      id: 6,
      name: "Contact Us",
      scrollSection: "technology",
      link: "/contact-us",
    },
  ];

  const navsMobile = [
    { id: 1, name: "Home", link: "/" },
    {
      id: 2,
      name: "About Us",
      link: "/about-us",
    },
    {
      id: 3,
      name: "Services",
      subMenu: [
        {
          name: "For Farmers",
          link: "/for-farmers",
        },
        {
          name: "For Investors",
          link: "/for-investors",
        },
        {
          name: "For Agency",
          link: "/for-agency",
        },
      ],
      icon: <FaCaretDown size={16} />,
    },
    {
      id: 5,
      name: "MarketPlace",
      link: "/farm-marketplace",
    },
    {
      id: 6,
      name: "Contact Us",
      link: "/contact-us",
    },
  ];

  const { isAuthenticated, user, isLoading, logout, isLoggingOut } = useAuth();

  const handleLogout = async () => {
    await logout();
    router.push("/login");
  };

  // Loading skeleton component
  const LoadingSkeleton = () => (
    <div className="flex items-center gap-x-3 xl:hidden">
      <div className="w-[180px] h-[40px] bg-gray-200 rounded-md animate-pulse"></div>
      <div className="w-[180px] h-[40px] bg-gray-200 rounded-md animate-pulse"></div>
    </div>
  );

  // Mobile loading skeleton
  const MobileLoadingSkeleton = () => (
    <div className="flex flex-col gap-y-6 md:block items-center">
      <div className="w-[180px] h-[40px] bg-gray-200 rounded-md animate-pulse"></div>
      <div className="w-[180px] h-[40px] bg-gray-200 rounded-md animate-pulse"></div>
    </div>
  );

  return (
    <header className="bg-[#EEFEF6] sticky z-[1000] top-0 h-[86px]">
      <div className="transition-all duration-500 max-w-[1300px] mx-auto px-8 flex justify-between items-center py-3 md:px-4">
        <Link href="/">
          <Image
            src="/assets/LandingPage/icons/fundrlogo.svg"
            width={187}
            height={41}
            alt="logo"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="transition-all duration-500 xl:hidden">
          {navs.map((items, i) => {
            return (
              <ul
                key={items?.id}
                className="inline-flex relative items-end cursor-pointer lg:flex lg:flex-col lg:pt-12 lg:items-center sm:pt-4"
              >
                <li
                  className={`${
                    activeMenu === items?.name
                      ? "text-[#51F4A6] border-b-[2px] border-[#51F4A6] pb-2"
                      : "text-[#282A03]"
                  }  cursor-pointer  hover:text-[#51F4A6] px-4 text-base font-poppinsRegular xl:text-xs xl:px-2`}
                  onClick={() => setActiveMenu(items?.name)}
                  onMouseLeave={() => setShowDropDown(null)}
                >
                  {items?.subMenu ? (
                    <button
                      className={`flex gap-x-2 items-center transition-colors duration-300 cursor-pointer`}
                      onClick={() => {
                        if (showDropDown === i) {
                          setShowDropDown(null);
                        } else {
                          setShowDropDown(i);
                        }
                      }}
                    >
                      {items?.name} <span>{items?.icon}</span>
                    </button>
                  ) : (
                    <Link href={items?.link}>{items?.name}</Link>
                  )}

                  {items?.subMenu && showDropDown === i && (
                    <div className="absolute left-0 top-6 mt-2 w-48 bg-[#2D865B] shadow-lg p-4 rounded-xl">
                      {items?.subMenu.map((subLink, subIndex) => (
                        <Link key={subIndex} href={subLink?.link}>
                          <span className="block px-4 border-[#E2E2E2] border-[0.3px] text-[#FCFCFC] rounded-xl cursor-pointer py-[15px] mb-3">
                            {subLink?.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              </ul>
            );
          })}
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="flex items-center gap-x-3 xl:hidden">
          {isLoading ? (
            <LoadingSkeleton />
          ) : (
            <>
              {isAuthenticated ? (
                <>
                  <Link
                    href={
                      user?.user_type === "farmer"
                        ? "/farmer-dashboard"
                        : "/investor-dashboard"
                    }
                  >
                    <Button
                      variant="secondary"
                      size="small"
                      className="w-[180px] "
                    >
                      Dashboard
                    </Button>
                  </Link>
                  <Button
                    variant="secondary"
                    size="small"
                    className={`w-[180px] ${
                      isLoggingOut
                        ? "opacity-50 cursor-not-allowed"
                        : "cursor-pointer"
                    }`}
                    onClick={handleLogout}
                    disabled={isLoggingOut}
                  >
                    {isLoggingOut ? "Logging out..." : "Logout"}
                  </Button>
                </>
              ) : (
                <>
                  <Link href={"/login"}>
                    <Button
                      variant="secondary"
                      size="small"
                      className="w-[180px]"
                    >
                      Login
                    </Button>
                  </Link>
                  <Link href={"/user-select"}>
                    <Button className="w-fit" size="small">
                      Join FarmPady
                    </Button>
                  </Link>
                </>
              )}
            </>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="hidden lg:transition-all lg:duration-500 lg:grow xl:flex xl:justify-end xl:items-center xl:h-10 xl:gap-8 ">
          <button
            className="transition-all duration-500 text-black p-1 text-4xl hover:p-2"
            onClick={() => setShowMobileMenu((prev) => !prev)}
          >
            {showMobileMenu ? <IoClose /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`xl:transition-all xl:duration-500 xl:overflow-hidden xl:bg-[#EEFEF6]  ${
          showMobileMenu ? "xl:h-auto" : "xl:h-0"
        }`}
        initial={{ x: "100%" }}
        animate={{ x: showMobileMenu ? "0%" : "100%" }}
        transition={{ duration: 0.1 }}
      >
        <nav className="hidden xl:justify-start xl:items-left gap-4 xl:flex xl:flex-col xl:py-8 xl:px-3">
          {navsMobile.map((items, i) => {
            return (
              <ul key={items?.id} className="relative">
                {items?.subMenu ? (
                  <button
                    className={`flex gap-x-2 items-center text-[#2D865B] px-4 text-sm font-semibold font-geist transition-colors duration-300 cursor-pointer`}
                    onClick={() => {
                      if (showDropDown === i) {
                        setShowDropDown(null);
                      } else {
                        setShowDropDown(i);
                      }
                    }}
                  >
                    {items?.name} <span>{items?.icon}</span>
                  </button>
                ) : (
                  <Link href={items?.link || ""}>
                    <li
                      className="text-[#2D865B] cursor-pointer px-4 text-sm font-semibold font-geist block"
                      onClick={() => setShowMobileMenu(false)}
                    >
                      {items?.name}
                    </li>
                  </Link>
                )}

                {items?.subMenu && showDropDown === i && (
                  <div className="mt-2 w-full bg-[#C9FCE3] shadow-lg px-4 py-3 rounded-xl">
                    {items?.subMenu.map((subLink, subIndex) => (
                      <Link key={subIndex} href={subLink?.link}>
                        <div className="flex justify-between border-[#E2E2E2] border-[0.3px] gap-x-3 items-center bg-[#EEFEF6] px-4 rounded-xl cursor-pointer py-[15px] mb-3">
                          <span className="block font-poppinsSemiBold text-sm  text-[#2D865B] ">
                            {subLink?.name}
                          </span>

                          <span className="block text-[#2D865B]">
                            <MdOutlineKeyboardArrowRight
                              size={24}
                              color="#2D865B"
                              fill="#2D865B"
                            />
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </ul>
            );
          })}

          {/* Mobile Auth Buttons */}
          <div className="flex flex-col gap-y-6 md:block items-center">
            {isLoading ? (
              <MobileLoadingSkeleton />
            ) : (
              <>
                {isAuthenticated ? (
                  <>
                    <Link
                      href={
                        user?.user_type === "farmer"
                          ? "/farmer-dashboard"
                          : "/investor-dashboard"
                      }
                    >
                      <Button
                        variant="secondary"
                        size="small"
                        className="w-[180px] md:mb-4"
                      >
                        Dashboard
                      </Button>
                    </Link>
                    <Button
                      variant="secondary"
                      size="small"
                      className={`w-[180px] ${
                        isLoggingOut
                          ? "opacity-50 cursor-not-allowed"
                          : "cursor-pointer"
                      }`}
                      onClick={handleLogout}
                      disabled={isLoggingOut}
                    >
                      {isLoggingOut ? "Logging out..." : "Logout"}
                    </Button>
                  </>
                ) : (
                  <>
                    <Link href={"/login"}>
                      <Button
                        variant="secondary"
                        size="small"
                        className="w-[180px] md:mb-4"
                      >
                        Login
                      </Button>
                    </Link>
                    <Link href={"/user-select"}>
                      <Button className="w-fit" size="small">
                        Get Started
                      </Button>
                    </Link>
                  </>
                )}
              </>
            )}
          </div>
        </nav>
      </motion.div>
    </header>
  );
};

export default Header;
