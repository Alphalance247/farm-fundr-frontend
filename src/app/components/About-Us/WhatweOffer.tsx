"use client";
import Container from "../common/container";
import HeadingTextWithSubHead from "../common/headingTextWithSubHead";
import Image from "next/image";
import Button from "../common/Buttons";
import { GoArrowRight } from "react-icons/go";
import SlideInSection from "../common/slideInSection";
import { useAuth } from "@/context/authContext";

const WhatWeOffer = () => {
  const { isAuthenticated } = useAuth();
  const data = [
    {
      title: "Certified Farming Network",
      description:
        "Only certified farmers, vetted by FarmFundr, can offer investment plans, ensuring expertise and reliability.",
      image: "/assets/about/2.png",
    },
    {
      title: "Ongoing Support",
      description:
        "FarmFundr provides regular project updates and recommendations for investors and hands-on assistance for farmers.",
      image: "/assets/about/3.png",
    },
    {
      title: "Secure Funds and Data",
      description:
        "Strong security measures protect both funds and data, ensuring safe and transparent transactions for investors and farmers.",
      image: "/assets/about/1.png",
    },
  ];

  return (
    <SlideInSection>
      <section className="bg-[#FCFCFC]">
        <Container>
          <HeadingTextWithSubHead
            iconImage="/icons/vector1.svg"
            width={506}
            height={50}
            heading={"FarmFundr Provides"}
            withSubHead={false}
            className="text-center mb-16 lg:mb-8"
          />
          <div className="flex flex-col gap-y-16">
            {data.map((el, i) => (
              <div
                key={i}
                className={`flex justify-between gap-x-20 items-center   ${
                  i % 2 === 0 ? "flex-row" : "flex-row-reverse"
                } lg:gap-x-10 md:flex-col md:gap-y-8`}
              >
                <div className="w-[40%] lg:w-[55%] md:w-full">
                  <p className="text-2xl font-aristoBold text-[#2D865B] mb-2">
                    {el?.title}
                  </p>
                  <p className="text-[#7C7C7C] text-lg font-poppinsRegular">
                    {el?.description}
                  </p>
                </div>

                <div
                  className={`border-[#51F4A6] rounded-[20px] ${
                    i % 2 === 0
                      ? "border-r-4 pr-11 lg:pr-5"
                      : "border-l-4 pl-11 lg:pl-5"
                  }`}
                >
                  <Image
                    width={486}
                    height={310}
                    src={el?.image}
                    alt={el?.title}
                  />
                </div>
              </div>
            ))}
          </div>
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
    </SlideInSection>
  );
};

export default WhatWeOffer;
