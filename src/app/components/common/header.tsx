"use client";
import Image from "next/image";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import Button from "./Buttons";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState("Home");
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const navs = [
    { id: 1, name: "Home", scrollSection: "about", link: "/" },
    { id: 3, name: "About Us", scrollSection: "solution", link: "/" },
    { id: 4, name: "How It Works", scrollSection: "serve", link: "/" },
    { id: 5, name: "MarketPlace", scrollSection: "technology", link: "/" },
    { id: 6, name: "Contact Us", scrollSection: "technology", link: "/" },
  ];

  return (
    <header className="bg-[#EEFEF6]">
      <div className="transition-all duration-500 max-w-[1300px] mx-auto px-8 flex justify-between items-center py-3">
        <Link href="/">
          <Image
            src="/assets/LandingPage/icons/fundrlogo.svg"
            width={187}
            height={41}
            alt="logo"
          />
        </Link>

        <nav className="transition-all duration-500 max-lg:hidden">
          {navs.map((items) => {
            return (
              <ul
                key={items?.id}
                className="inline-flex items-end cursor-pointer max-lg:flex max-lg:flex-col max-lg:pt-12 max-lg:items-center max-sm:pt-4"
              >
                <li
                  className={`${
                    activeMenu === items?.name
                      ? "text-[#2D865B] border-b-[2px] border-[#2D865B] pb-2"
                      : "text-[#282A03]"
                  }  cursor-pointer px-4 text-base font-poppinsRegular max-xl:text-xs max-xl:px-2`}
                  onClick={() => setActiveMenu(items?.name)}
                >
                  <Link href={items?.link}>{items?.name}</Link>
                </li>
              </ul>
            );
          })}
        </nav>

        <div className="flex items-center gap-x-3 max-lg:hidden">
          <Button variant="secondary" size="small" className="w-fit">
            Login
          </Button>
          <Button className="w-fit" size="small">
            Get Started
          </Button>
        </div>

        <div className="lg:hidden transition-all duration-500 grow flex justify-end items-center h-10 gap-8">
          <button
            className="transition-all duration-500 text-black p-1 text-4xl hover:p-2"
            onClick={() => setShowMobileMenu((prev) => !prev)}
          >
            {showMobileMenu ? <IoClose /> : <FiMenu />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden transition-all duration-500 overflow-hidden bg-white ${
          showMobileMenu ? "h-auto" : "h-0"
        }`}
      >
        <nav className="justify-start items-center gap-4 flex flex-col py-8 px-3">
          {navs.map((items) => {
            return (
              <ul key={items?.id} className="">
                <li className="text-[#4f4f4f] cursor-pointer px-4 text-sm font-semibold font-geist block">
                  {items?.name}
                </li>
              </ul>
            );
          })}

          <div>
            {/* <Button onClick={() => handleNavClick(null, "get-in-touch")} /> */}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
