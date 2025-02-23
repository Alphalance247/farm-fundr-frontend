"use client";
import Container from "./container";
import Image from "next/image";
import Link from "next/link";
import Button from "./Buttons";
import { useState } from "react";

const Footer = () => {
  const [activeMenu, setActiveMenu] = useState("Home");
  const navs = [
    {
      id: 1,
      name1: "Navigation",
      name2: "Navigation",
      name3: "Get Started",
      link1: "/",
      link2: "/",
      link3: "/",
    },
    {
      id: 3,
      name1: "About Us",
      name2: "Pricing",
      name3: "Create free account",
      link1: "/",
      link2: "/",
      link3: "/",
    },
    {
      id: 4,
      name1: "Project Listing",
      name2: "Contact Us",
      name3: "Login",
      link1: "/",
      link2: "/",
      link3: "/",
    },
    {
      id: 5,
      name1: "How it works",
      name2: "FAQs",
      name3: "Home",
      link1: "/",
      link2: "/",
      link3: "/",
    },
  ];
  return (
    <footer className="bg-[#282A03]">
      <Container>
        <Image
          width={565}
          height={141}
          src="/assets/LandingPage/icons/logofooter.svg"
          alt="footer logo"
          className="mx-auto"
        />
        <div className="py-10 px-5 border-[#51F4A6]  border flex justify-between gap-20 rounded-[20px] mt-16">
          <div className="w-[45%]">
            <p className="text-[white] text-4xl font-aristoBold mb-6">
              Subscribe to our newsletter
            </p>
            <p className="text-lg font-poppinsRegular text-white">
              Receive weekly newsletter to stay informed on the latest trends of
              your investment
            </p>
          </div>

          <div className="w-[37%]">
            <div className="flex gap-x-2 mb-6">
              <input
                type="text"
                placeholder="Enter your email address"
                className="px-4 py-3 text-[#EEFEF6] border border-[#51F4A6] rounded-md w-[100%]"
              />
              <Button variant="tertiary">Subscribe</Button>
            </div>

            <p className="text-xs text-white">
              By submitting your email address, you agree to receive weekly news
              from farmfundr.{" "}
              <span className="text-[#51F4A6] underline-offset-2">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  Click here
                </a>
              </span>{" "}
              to unsubscribe
            </p>
          </div>
        </div>
        <div className="grid grid-cols-[25%auto] gap-x-20 mt-24">
          <div>
            <Image
              src="/assets/LandingPage/icons/fundrlogo.svg"
              width={187}
              height={41}
              alt="logo"
            />
            <p className="mt-4 text-lg font-poppinsRegular text-[#FFFFFF]">
              Empowering Farmers, Connecting Investors.
            </p>

            <div className="flex gap-x-8 mt-6">
              <Image
                src="/assets/LandingPage/icons/x.svg"
                width={24}
                height={24}
                alt="logo"
              />
              <Image
                src="/assets/LandingPage/icons/instagram.svg"
                width={24}
                height={24}
                alt="logo"
              />
            </div>
          </div>

          <div>
            {navs.map((items) => {
              return (
                <div key={items?.id}>
                  <ul className="grid grid-cols-3 justify-between gap-x-28">
                    <li
                      className={`${
                        activeMenu === items?.name1
                          ? " border-b-[3px] text-[white] border-[#51F4A6] pb-2"
                          : "text-[white]"
                      }  cursor-pointer mb-3 w-fit text-base font-poppinsRegular max-xl:text-xs`}
                      onClick={() => setActiveMenu(items?.name1)}
                    >
                      <Link href={items?.link1}>{items?.name1}</Link>
                    </li>

                    <li
                      className={`${
                        activeMenu === items?.name2
                          ? " border-b-[3px] text-[white] border-[#51F4A6] pb-2"
                          : "text-[white]"
                      }  cursor-pointer mb-3 w-fit text-base font-poppinsRegular max-xl:text-xs`}
                      onClick={() => setActiveMenu(items?.name2)}
                    >
                      <Link href={items?.link2}>{items?.name2}</Link>
                    </li>
                    <li
                      className={`${
                        activeMenu === items?.name3
                          ? " border-b-[3px] text-[white] border-[#51F4A6] pb-2"
                          : "text-[white]"
                      }  cursor-pointer mb-3 w-fit text-base font-poppinsRegular max-xl:text-xs`}
                      onClick={() => setActiveMenu(items?.name3)}
                    >
                      <Link href={items?.link3}>{items?.name3}</Link>
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
