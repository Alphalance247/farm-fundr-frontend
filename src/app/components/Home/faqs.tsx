"use client";
import { useState } from "react";
import Image from "next/image";
import Container from "../common/container";
import FaqContainer from "../common/faqContainer";

const Faqs = () => {
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
      question: " What is farmfundr?",
      answer: `FarmFundr is a platform where investors and farmers connect to
          collaborate on Agricultural products, fostering partnerships that
          drive agricultural innovation and mutual growth`,
    },
    {
      question: " What is farmfundr?",
      answer: `FarmFundr is a platform where investors and farmers connect to
          collaborate on Agricultural products, fostering partnerships that
          drive agricultural innovation and mutual growth`,
    },
    {
      question: " What is farmfundr?",
      answer: `FarmFundr is a platform where investors and farmers connect to
          collaborate on Agricultural products, fostering partnerships that
          drive agricultural innovation and mutual growth`,
    },
    {
      question: " What is farmfundr?",
      answer: `FarmFundr is a platform where investors and farmers connect to
          collaborate on Agricultural products, fostering partnerships that
          drive agricultural innovation and mutual growth`,
    },
    {
      question: " What is farmfundr?",
      answer: `FarmFundr is a platform where investors and farmers connect to
          collaborate on Agricultural products, fostering partnerships that
          drive agricultural innovation and mutual growth`,
    },
  ];

  return (
    <section className="relative bg-[#fcfcfc]">
      <div className="absolute bottom-0">
        <Image
          src="/assets/LandingPage/icons/position2.svg"
          width={200}
          height={400}
          alt="positionlogo"
        />
      </div>
      <Container>
        {/* <div className="flex flex-col gap-y-3">
        {Offerings.map((item, i) => {
          return (
            <div
              key={i}
              className={`bg-[#f5f5f5] cursor-pointer  rounded-lg hover:transition-all hover:duration-700 hover:scale-[1.01] hover:bg-white ${
                isOpen === i ? "border-none" : "border-[#d9d9d9] border"
              }`}
            >
              {isOpen === i && (
                <hr className="w-[284px] h-[6px] bg-[#6BD051] rounded-tl-lg" />
              )}
              <div className="px-6 py-5">
                <div
                  className="flex justify-between"
                  onClick={() => handleToggle(i)}
                >
                  <p className="text-[#141414] text-lg font-semibold font-geist">
                    {item?.offer}
                  </p>
                  <button className="text-2xl">
                    {isOpen === i ? <HiOutlineMinus /> : <GoPlus />}
                  </button>
                </div>
                {isOpen === i && (
                  <div className="mt-6">
                    {item?.benefits.map((el, i) => {
                      return (
                        <p
                          className="text-[#262626] text-base text-wrap mb-1 font-geist"
                          key={i}
                        >
                          <span className="font-semibold">{el?.heading}</span>
                          <span className="font-normal">{el?.subhead}</span>
                        </p>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          );
        })}

        <FaqContainer />
      </div> */}
        <div className="grid grid-cols-[40%auto]">
          <div className="">
            <h3 className="text-5xl font-aristoBold font-bold text-[#5F5F5F] mb-10">
              Frequently Asked questions
            </h3>
            <Image
              src={"/assets/LandingPage/images/faq.png"}
              width={317}
              height={317}
              alt="faqs"
            />
          </div>

          <div className="flex flex-col gap-y-4">
            {faqs.map((item, i) => (
              <FaqContainer
                key={i}
                i={i}
                answer={item?.answer}
                question={item?.question}
                isOpen={isOpen}
                onClick={() => handleToggle(i)}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Faqs;
