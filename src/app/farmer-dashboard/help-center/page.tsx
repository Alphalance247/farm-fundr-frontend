"use client";
import DashboardLayout from "../../components/common/dashboardLayout";
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
          answer: `FarmPady is a platform designed to connect investors with farmers, fostering collaboration and innovation in the agricultural sector. Our goal is to drive agricultural growth and sustainability while providing mutual benefits to both parties.`,
        },
        {
          question: "Who can invest on Farmpady?",
          answer: `FarmPady is open to Individuals or agencies looking to invest in sustainable agricultural projects.`,
        },
        {
          question: "How can I reach Farmpady support team?",
          answer: `You can drop us a message via https://farmpady.com/contact-us or send us an email at support@farmpady.com `,
        },
      

      ],
      tab: "General",
    },
    {
      feedback: [
        {
          question: "How can I make a subscription payment?",
          answer: `Go to https://farmpady.com/farmer-dashboard/subscription
, choose your preferred plan, and click Make Payment. Once you complete the process, we’ll handle the rest.
`,
        },
        {
          question: "How can I report a payment issue?",
          answer: `If you experience any issues with your payment, please contact us at support@farmpady.com  with the details, and our team will get back to you as soon as possible.`,
        },
     
      ],
      tab: "Payment",
    },
    {
      feedback: [
        {
          question: "How can I reset my password?",
          answer: `To reset your password, visit https://farmpady.com/forgot-password
 and enter your email. A reset token will be sent to your inbox. Use the token to set a new password.
`,
        },
        {
          question: "Can I update my account details?",
          answer: `Yes, you can. Go to your profile settings and update your information as needed.
`,
        },
        {
          question: "Why is my KYC getting rejected?",
          answer: `You should receive an email explaining the reason for the rejection. If you haven’t, please contact us at support@farmpady.com
 for clarification.`,
        },
        {
          question: "Why is my account suspended?",
          answer: `Your account will never be suspended without prior notice. Please check your email for details on the reason for the suspension.`,
        },
     
      ],
      tab: "Account",
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
      text: "Support",
      icons: <PiHeadsetLight size={48} />,
    },
  ];
  return (
    <DashboardLayout>
      <main className=" overflow-auto pb-12">
        <div className="text-center px-8 pt-16 pb-32 bg-[linear-gradient(90deg,#2D865B_0%,#12482F_100%)]">
          <h1 className="text-2xl font-aristoBold text-white mb-2">
            Help Center
          </h1>
          <p className="text-white text-sm font-poppinsRegular lg:w-full w-[50%] mx-auto">
            Browse through the sections below or reach out to our support team
            if you need further assistance.
          </p>
        </div>

        <div className="mt-[-4rem] max-w-[1000px] mx-auto">
          <div
            className="
      grid gap-4 md:gap-x-2
      grid-cols-4 lg:px-4 
      lg:grid-cols-3 
      justify-items-center
    "
          >
            {tabsBtn.map((items, i) => (
              <button
                key={i}
                onClick={() => setTab(items?.text)}
                className={`py-6 px-6 sm:px-8 border-[1.5px] shadow-md rounded-[20px] 
          flex flex-col gap-2 items-center justify-center h-[126px] md:h-[100px]  w-full
          ${
            tab === items?.text
              ? "bg-[#EEFEF6] border-[#2D865B]"
              : "bg-white border-[#E8E8E8]"
          }`}
              >
                <span
                  className={`${
                    tab === items?.text ? "text-[#226646]" : "text-[#A0A0A0]"
                  }`}
                >
                  {items?.icons}
                </span>
                <span className="text-sm lg:text-xs   text-[#5F5F5F] font-poppinsSemiBold">
                  {items?.text}
                </span>
              </button>
            ))}
          </div>

          <div className="mt-8">
            {faqs.map((el, i) => (
              <div key={i} className="flex lg:px-4 flex-col gap-y-4">
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
                          <p className="text-sm font-poppinsRegular text-justify lg:w-full text-[#282A03] w-[80%] md:text-sm">
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
                  <a href="mailto:support@farmpady.com">

                  <div className="flex items-center gap-x-1">
                    <span>
                      <IoMdMail size={24} fill="#2D865B" />
                    </span>
                    <p className="text-sm font-poppinsRegular text-[#282A03] md:text-sm">
                      Email: support@farmpady.com
                    </p>
                  </div>
                  </a>

                  <a href="tel:+2349022291012"></a>
                  <div className="flex items-center gap-x-1">
                    <span>
                      <MdLocalPhone size={24} fill="#2D865B" />
                    </span>
                    <p className="text-sm font-poppinsRegular text-[#282A03]  md:text-sm">
                      Phone: +2349022291012
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
