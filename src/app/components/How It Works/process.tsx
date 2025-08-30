"use client";
import Container from "../common/container";
import TabSwitch from "../common/tabSwitch";
import { useState } from "react";
import Image from "next/image";
import Button from "../common/Buttons";
import { GoArrowRight } from "react-icons/go";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/context/authContext";

const Process = () => {
  const [activeTab, setActiveTab] = useState<string>("investors");
  const [isOpen, setIsOpen] = useState<number | null>(null);
  const { isAuthenticated } = useAuth();
  const handleToggle = (i: number) => {
    if (isOpen === i) {
      setIsOpen(null);
    } else {
      setIsOpen(i);
    }
  };

  const guide1 = [
    {
      step: "1",
      description: "Register/Login",
      answer: `Sign up or log in with your full name, email, and password to get started.`,
    },
    {
      step: "2",
      description: " Complete KYC Verification",
      answer: `Upload your ID and required details to verify your account.`,
    },
    {
      step: "3",
      description: "Search for Projects to Bid On",
      answer: `Browse and select farm projects that match your interests.`,
    },
    {
      step: "4",
      description: "Select mode of operation",
      answer: `Choose your preferred investment type - lump-sum, or milestone.`,
    },
    {
      step: "5",
      description: "Monitor your Investment",
      answer: `Get live updates and performance reports on your investments.`,
    },
  ];

  const guide2 = [
    {
      step: "1",
      description: "Register/Login",
      answer: `Sign up or log in with your full name, email, and password to get started.`,
    },
    {
      step: "2",
      description: "Complete KYC Verification",
      answer: `Upload your ID and details to verify your farmer profile.`,
    },
    {
      step: "3",
      description: "Create and setup farm",
      answer: `Add your farm details, location, and crops you grow.`,
    },
    {
      step: "4",
      description: "Create and publish your project",
      answer: `Describe your project, funding needs, and goals, then make it public.`,
    },
    {
      step: "5",
      description: "Review and Accept/reject investor bids",
      answer: `Check investor offers and decide which to accept or reject.`,
    },
    {
      step: "6",
      description: "Run Project",
      answer: `Start farming with secured funding and update investors on progress.`,
    },
  ];

  const tab = activeTab === "investors" ? guide1 : guide2;

  return (
    <section className="bg-[#FCFCFC]">
      <Container>
        <TabSwitch
          tab1="For Investors"
          tab2="For Farmers"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-10 items-center mt-4 lg:items-start md:grid-cols-1"
          >
            <div>
              <Image
                src={
                  activeTab === "investors"
                    ? "/assets/HowItWorks/1.png"
                    : "/assets/HowItWorks/2.png"
                }
                width={577}
                height={573}
                alt=""
              />
            </div>
            <div className="flex flex-col gap-y-7">
              {tab.map((item, i) => (
                <div key={i}>
                  <div
                    className={`px-5  flex justify-between hover:transition-all hover:duration-700 hover:scale-[1.01] bg-[#F6F6F6] cursor-pointer ${
                      isOpen === i
                        ? "items-start rounded-[10px] py-6"
                        : "items-center rounded-[20px] py-3"
                    } lg:px-3 `}
                    onClick={() => handleToggle(i)}
                  >
                    <div
                      className={`flex gap-x-4 lg:gap-x-2 ${
                        isOpen === i ? "items-start" : "items-center"
                      }`}
                    >
                      <p
                        className={`text-[13px] leading-[21px] px-[10px] py-[7px] font-poppinsSemiBold text-[#2D865B]  rounded-[26.67px] bg-white lg:text-[10px] lg:leading-3 flex gap-x-1 items-center  ${
                          isOpen === i && "px-[19px] py-2 flex-col"
                        } `}
                      >
                        <span>Step </span>{" "}
                        <span
                          className={`${
                            isOpen === i && "text-4xl leading-[52px]"
                          } `}
                        >
                          {" "}
                          {item?.step}
                        </span>
                      </p>

                      <div>
                        <p className="text-lg font-poppinsSemiBold text-[#7C7C7C] lg:text-base md:text-sm">
                          {item?.description}
                        </p>

                        {isOpen === i && (
                          <div className=" bg-[#F6F6F6] pt-3 ">
                            <p className="text-lg font-poppinsRegular text-[#7C7C7C] md:text-xs lg:text-base">
                              {item?.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    <Image
                      src={`${
                        isOpen === i
                          ? "/assets/LandingPage/icons/times.svg"
                          : "/assets/HowItWorks/plus.svg"
                      }`}
                      width={40}
                      height={40}
                      alt="plus"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {!isAuthenticated && (
          <Button
            size="medium"
            className="flex items-center gap-x-4 justify-center mt-20 text-center w-[535px] mx-auto relative z-10"
          >
            <span>Get Started</span>
            <span>
              <GoArrowRight size={24} className="text-white" />
            </span>
          </Button>
        )}
      </Container>
    </section>
  );
};

export default Process;
