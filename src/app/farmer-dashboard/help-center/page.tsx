"use client";
import DashboardLayout from "../../components/common/dashboardLayout";
import { Topbar } from "../../components/common/dashboard/topBar";
import { FaShapes } from "react-icons/fa";
import {
  MdOutlinePayment,
  MdLocalPhone,
  MdOutlineMessage,
} from "react-icons/md";
import React, { useState } from "react";
import { IoPersonSharp } from "react-icons/io5";
import { IoMdBusiness, IoMdMail } from "react-icons/io";
import { PiHeadsetLight } from "react-icons/pi";
import Image from "next/image";

interface tabsBtn {
  text: string;
  icons: React.ReactNode;
}

const FarmerDashboard = () => {
  const [tab, setTab] = useState<string>("General");
  const [isOpen, setIsOpen] = useState<number>(0);

  const handleToggle = (i: number) => {
    if (isOpen === i) {
      setIsOpen(0);
    } else {
      setIsOpen(i);
    }
  };

  const faqs = [
    {
      feedback: [
        {
          question: " What is FarmPady?",
          answer: `FarmPady is a platform where investors and farmers connect to
                    collaborate on Agricultural products, fostering partnerships that
                    drive agricultural innovation and mutual growth`,
        },
        {
          question: "Who can invest on Farmpady?",
          answer: `FarmPady is a platform where investors and farmers connect to
                    collaborate on Agricultural products, fostering partnerships that
                    drive agricultural innovation and mutual growth`,
        },
        {
          question: "How can I reach Farmpady support team?",
          answer: `FarmPady is a platform where investors and farmers connect to
                    collaborate on Agricultural products, fostering partnerships that
                    drive agricultural innovation and mutual growth`,
        },
        {
          question: "How can I reach Farmpady support team?",
          answer: `FarmPady is a platform where investors and farmers connect to
                    collaborate on Agricultural products, fostering partnerships that
                    drive agricultural innovation and mutual growth`,
        },
        {
          question: "Is my investment secure?",
          answer: `FarmPady is a platform where investors and farmers connect to
                    collaborate on Agricultural products, fostering partnerships that
                    drive agricultural innovation and mutual growth`,
        },
      ],
      tab: "General",
    },
    {
      feedback: [
        {
          question: " What is FarmPady?",
          answer: `FarmPady is a platform where investors and farmers connect to
                        collaborate on Agricultural products, fostering partnerships that
                        drive agricultural innovation and mutual growth`,
        },
        {
          question: " What is FarmPady?",
          answer: `FarmPady is a platform where investors and farmers connect to
                        collaborate on Agricultural products, fostering partnerships that
                        drive agricultural innovation and mutual growth`,
        },
        {
          question: " What is FarmPady?",
          answer: `FarmPady is a platform where investors and farmers connect to
                        collaborate on Agricultural products, fostering partnerships that
                        drive agricultural innovation and mutual growth`,
        },
      ],
      tab: "Payment",
    },
    {
      feedback: [
        {
          question: "How can I reset my password?",
          answer: `FarmPady is a platform where investors and farmers connect to
                        collaborate on Agricultural products, fostering partnerships that
                        drive agricultural innovation and mutual growth`,
        },
        {
          question: "Can I update my account details?",
          answer: `FarmPady is a platform where investors and farmers connect to
                        collaborate on Agricultural products, fostering partnerships that
                        drive agricultural innovation and mutual growth`,
        },
        {
          question: "Why is my KYC getting rejected?",
          answer: `FarmPady is a platform where investors and farmers connect to
                        collaborate on Agricultural products, fostering partnerships that
                        drive agricultural innovation and mutual growth`,
        },
        {
          question: "Why is my account suspended?",
          answer: `FarmPady is a platform where investors and farmers connect to
                        collaborate on Agricultural products, fostering partnerships that
                        drive agricultural innovation and mutual growth`,
        },
        {
          question: "How do I delete my account?",
          answer: `FarmPady is a platform where investors and farmers connect to
                        collaborate on Agricultural products, fostering partnerships that
                        drive agricultural innovation and mutual growth`,
        },
      ],
      tab: "Account",
    },
    {
      feedback: [
        {
          question: " What is FarmPady?",
          answer: `FarmPady is a platform where investors and farmers connect to
                        collaborate on Agricultural products, fostering partnerships that
                        drive agricultural innovation and mutual growth`,
        },
        {
          question: " What is FarmPady?",
          answer: `FarmPady is a platform where investors and farmers connect to
                        collaborate on Agricultural products, fostering partnerships that
                        drive agricultural innovation and mutual growth`,
        },
        {
          question: " What is FarmPady?",
          answer: `FarmPady is a platform where investors and farmers connect to
                        collaborate on Agricultural products, fostering partnerships that
                        drive agricultural innovation and mutual growth`,
        },
      ],
      tab: "About us",
    },
  ];

  const tabsBtn: tabsBtn[] = [
    {
      text: "General",
      icons: <FaShapes size={48} />,
    },
    {
      text: "Payment",
      icons: <MdOutlinePayment size={48} />,
    },
    {
      text: "Account",
      icons: <IoPersonSharp size={48} />,
    },
    {
      text: "About us",
      icons: <IoMdBusiness size={48} />,
    },
    {
      text: "Support",
      icons: <PiHeadsetLight size={48} />,
    },
  ];
  return (
    <DashboardLayout>
      <Topbar overview="Help Center" />

      <main className=" overflow-auto pb-12">
        <div className="text-center px-8 pt-16 pb-32 bg-[linear-gradient(90deg,#2D865B_0%,#12482F_100%)]">
          <h1 className="text-2xl font-aristoBold text-white mb-2">
            Help Center
          </h1>
          <p className="text-white text-sm font-poppinsRegular  w-[50%] mx-auto">
            Browse through the sections below or reach out to our support team
            if you need further assistance.
          </p>
        </div>

        <div className="mt-[-4rem] max-w-[1000px] mx-auto">
          <div className=" flex items-center gap-x-8 justify-center">
            {tabsBtn.map((items, i) => (
              <button
                className={`py-6 px-10 border-[1.76px] shadow-md rounded-[21.16px] flex gap-y-2 flex-col justify-center w-fit items-center h-[126px] ${
                  tab === items?.text
                    ? "bg-[#EEFEF6] border-[#2D865B]"
                    : " bg-white border-[#E8E8E8]"
                }`}
                key={i}
                onClick={() => setTab(items?.text)}
              >
                <span
                  className={`${
                    tab === items?.text ? "text-[#226646]" : "text-[#A0A0A0]"
                  }`}
                >
                  {items?.icons}
                </span>
                <span className="text-sm text-[#5F5F5F] font-poppinsSemiBold">
                  {items?.text}
                </span>
              </button>
            ))}
          </div>

          <div className="mt-8">
            {faqs.map((el, i) => (
              <div key={i} className="flex flex-col gap-y-4">
                {tab === el?.tab &&
                  el?.feedback?.map((el, i) => (
                    <div
                      className=" shadow-lg border border-[#E8E8E8] rounded-[10px]"
                      key={i}
                    >
                      <div
                        className={`px-6 py-4 flex justify-between items-center border-b border-b-[#E8E8E8] hover:transition-all hover:duration-700 hover:scale-[1.01] bg-[#FFFFFF] cursor-pointer  ${
                          isOpen === i
                            ? "rounded-tr-[10px] rounded-tl-[10px]"
                            : "rounded-[10px]"
                        }`}
                        onClick={() => handleToggle(i)}
                      >
                        <p className="text-sm font-poppinsSemiBold text-[#282A03]">
                          {el?.question}
                        </p>

                        <Image
                          src={`${
                            isOpen === i
                              ? "/assets/LandingPage/icons/times.svg"
                              : "/assets/LandingPage/icons/plus.svg"
                          }`}
                          width={40}
                          height={40}
                          alt="plus"
                        />
                      </div>

                      {isOpen === i && (
                        <div className="bg-[#FFFFFF] px-6 pb-4  pt-3 rounded-br-[10px] rounded-bl-[10px]">
                          <p className="text-sm font-poppinsRegular text-[#282A03] w-[50%] md:text-sm">
                            {el?.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            ))}

            {tab === "Support" && (
              <div className=" shadow-md border border-[#E8E8E8] rounded-[10px]">
                <div
                  className={`px-6 py-4 text-center border-b border-b-[#E8E8E8] bg-[#FFFFFF] rounded-tr-lg rounded-tl-xl`}
                >
                  <p className="text-sm font-poppinsSemiBold text-[#282A03]">
                    contact customer support
                  </p>
                </div>

                <div className="bg-[#FFFFFF] px-6 pb-16  pt-8 rounded-br-lg rounded-bl-xl flex flex-wrap gap-x-4 items-center justify-center">
                  <div className="flex items-center gap-x-1">
                    <span>
                      <IoMdMail size={24} fill="#2D865B" />
                    </span>
                    <p className="text-sm font-poppinsRegular text-[#282A03] md:text-sm">
                      Email: support@farmpady.com
                    </p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <span>
                      <MdLocalPhone size={24} fill="#2D865B" />
                    </span>
                    <p className="text-sm font-poppinsRegular text-[#282A03]  md:text-sm">
                      Phone: +234 XXXXXXXX
                    </p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <span>
                      <MdOutlineMessage size={24} fill="#2D865B" />
                    </span>
                    <p className="text-sm font-poppinsRegular text-[#282A03] md:text-sm">
                      Live Chat: Available on our website
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </DashboardLayout>
  );
};

export default FarmerDashboard;
