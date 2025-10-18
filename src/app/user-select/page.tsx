"use client";
import React, { useEffect, useState } from "react";
import OnBoardNav from "../components/common/onBoardNav";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import Image from "next/image";
import Button from "../components/common/Buttons";
import { GoArrowRight } from "react-icons/go";
import Container from "../components/common/container";
import { HiCheckCircle } from "react-icons/hi";
import { FiCircle } from "react-icons/fi";

const UserSelectPage: React.FC = () => {
  const [select, setSelect] = useState<string>("farmer");

  const handleUserSelect = (userType: string) => {
    setSelect(userType);
  };

  useEffect(() => {
    localStorage.setItem("userType", select);
  }, [select]);

  const data = [
    {
      svg: "/assets/UserOnboarding/1.svg",
      usertype: "investor",
      desc: "Invest in farms and grow your wealth.",
    },

    {
      svg: "/assets/UserOnboarding/2.svg",
      usertype: "farmer",
      desc: "List your farm and secure funding from investors.",
    },

    {
      svg: "/assets/UserOnboarding/3.svg",
      usertype: "agency",
      desc: "Transform agriculture with grants that promote sustainable growth. (coming soon)",
    },
  ];

  return (
    <section className="bg-[#FCFCFC]">
      <OnBoardNav />

      <section className="relative">
        <div className="absolute bottom-0 md:hidden">
          <Image
            src="/assets/LandingPage/icons/position1.svg"
            width={200}
            height={400}
            alt="positionlogo"
            layout="responsive"
          />
        </div>
        <div className="absolute top-0 right-0 z-[1] md:hidden">
          <Image
            src="/assets/UserOnboarding/rect.png"
            width={150}
            height={250}
            alt="positionlogo"
          />
        </div>
        <Container>
          <Link href={"/"}>
            <button className="text-[#7C7C7C] px-2 py-1 rounded-xl bg-[#F6F6F6] flex items-center gap-x-3 text-lg font-poppinsRegular hover:text-[#51F4A6]">
              <span className=" bg-white rounded-full p-4 hover:bg-[#51F4A6]">
                <IoIosArrowBack size={24} color="#7C7C7C" />
              </span>{" "}
              Go back
            </button>
          </Link>

          <h1 className="mb-16 text-5xl font-aristoBold text-[#5F5F5F] text-center mt-12 md:text-3xl">
            Select User Type To Continue
          </h1>

          <div className="mb-20 flex justify-center gap-4 md:flex-col ">
            {data.map((el, i) => (
              <div
                key={i}
                className={`px-10 py-5 rounded-[20px] border-[#E2E2E2] border w-[400px]  ${
                  select === el?.usertype ? "bg-[#EEFEF6]" : "bg-[#FFFFFF]"
                } md:w-full   ${
                  el?.usertype === "agency"
                    ? "cursor-not-allowed opacity-60"
                    : "cursor-pointer"
                }`}
                onClick={() => {
                  if (el?.usertype !== "agency") handleUserSelect(el?.usertype);
                }}
              >
                <div className="flex justify-end mb-4">
                  {select === el?.usertype ? (
                    <HiCheckCircle size={20} color="#2D865B" />
                  ) : (
                    <FiCircle size={20} color="#7C7C7C" />
                  )}
                </div>
                <Image
                  src={el?.svg}
                  width={338}
                  height={133}
                  alt="user"
                  className="mb-8"
                />

                <p className=" font-aristoBold text-[#2D865B] text-2xl mb-2 capitalize">
                  {el?.usertype}
                </p>
                <p className="text-[#7C7C7C] font-poppinsRegular text-lg">
                  {el?.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center relative md:z-20">
            <Link href={"/signup"}>
              <Button
                className={`w-[400px] flex items-center gap-x-4 justify-center text-center mx-auto ${
                  select === "" ? "cursor-not-allowed" : ""
                }`}
                variant={select === "" ? "search" : "primary"}
                size="small"
                disabled={select === "" ? true : false}
              >
                <span>{"Sign up as " + select}</span>
                <span>
                  {" "}
                  <GoArrowRight
                    size={24}
                    className={
                      select === "" ? "text-[#7C7C7C]" : "text-[white]"
                    }
                  />
                </span>
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </section>
  );
};

export default UserSelectPage;
