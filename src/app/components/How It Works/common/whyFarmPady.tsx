"use client";
import Image from "next/image";
import Heading from "../../Home-Page-Redesign/common/heading";
import Container from "../../common/container";
import Subhead from "../../Home-Page-Redesign/common/subhead";
import { useState } from "react";

const WhyFarmPady = ({
  list,
  text,
  subheadText,
  className,
}: {
  list: {
    image: string;
    head: string;
    subhed: string;
  }[];
  text: string;
  subheadText: string;
  className: string;
}) => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  return (
    <section className="relative bg-[#FCFCFC]">
      <div className="absolute z-[0] top-0 right-0 bottom-0 left-0">
        <Image
          src="/assets/Homepage-Redesign/v2.png"
          width={1440}
          height={512}
          className="w-full h-full"
          alt="positionlogo"
        />
      </div>
      <div className="absolute bottom-0 lg:h-[150px]">
        <Image
          src="/assets/LandingPage/icons/position1.svg"
          width={200}
          height={400}
          alt="positionlogo"
        />
      </div>
      <Container>
        <div className=" relative z-10">
          <div className="mb-20 lg:mb-10">
            <Heading
              className="text-center "
              text={text || "Why List Your Farm on FarmPady?"}
            />
            <p className="text-[#7C7C7C] font-poppinsRegular text-sm text-center w-[40%] mx-auto xl:w-[60%] lg:w-[80%] md:w-[90%]">
              {subheadText ||
                "Listing your farm on FarmPady gives you visibility, credibility, and direct access to funding opportunities from investors and agencies."}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 lg:grid-cols-2 md:grid-cols-1">
            {list?.map((item, i) => (
              <div
                className={` ${
                  hoverIndex === i
                    ? "bg-[#2D865B] animate-bounce"
                    : "bg-[#C9FCE3]"
                }  rounded-[20px] p-6  border border-[#51F4A6] lg:p-4 ${className}`}
                key={i}
                onMouseEnter={() => setHoverIndex(i)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <Image
                  src={item?.image || "/assets/HowItWorks/redesign/1.png"}
                  width={60}
                  height={60}
                  alt="farmpady investment platform icons"
                />

                <p
                  className={`font-aristoBold text-2xl mt-6 mb-2 lg:text-xl  ${
                    hoverIndex === i ? "text-[#FCFCFC]" : "text-[#5F5F5F]"
                  }`}
                >
                  {item?.head}
                </p>
                <Subhead
                  subheadText={item?.subhed}
                  className={`${hoverIndex === i ? "text-[#F6F6F6]" : ""}`}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyFarmPady;
