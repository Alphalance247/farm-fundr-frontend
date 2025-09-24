"use client";
import { useState } from "react";
import Image from "next/image";
import Container from "../common/container";
import FaqContainer from "../common/faqContainer";
import SlideInSection from "../common/slideInSection";

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
      question: " What is FarmPady?",
      answer: `FarmPady is a platform designed to connect investors with farmers, fostering collaboration and innovation in the agricultural sector. Our goal is to drive agricultural growth and sustainability while providing mutual benefits to both parties.`,
    },
    {
      question: "How do I create an account on FarmPady?",
      answer: `Visit our homepage and click on the "Get Started for Free" button. Follow the prompts to complete your registration.`,
    },
    {
      question: "What support is available if I have questions or issues?",
      answer: `FarmPady offers Live chat assistance, Email support, Comprehensive help center and Dedicated account managers for investors and farmers
`,
    },
    {
      question: "Who can use FarmPady?",
      answer: `FarmPady is open to Individuals or entities looking to invest in sustainable agricultural projects and Agricultural producers seeking investment to fund and expand their operations.`,
    },
    {
      question: "What types of projects can I invest in?",
      answer: `FarmPady offers a variety of agricultural projects, including but not limited to Crop cultivation (e.g., organic apple farming), Livestock farming
`,
    },
    {
      question: "Is my personal and financial information safe on FarmPady?",
      answer: `Absolutely. We employ industry-standard encryption and security protocols to protect your data. Our privacy policy outlines our commitment to safeguarding your information.
`,
    },
  ];

  return (
    <SlideInSection>
      <section id="faq" className="relative bg-[#fcfcfc]">
        <div className="absolute bottom-0">
          <Image
            src="/assets/LandingPage/icons/position2.svg"
            width={200}
            height={400}
            alt="positionlogo"
          />
        </div>
        <Container>
          <div className="grid grid-cols-[40%auto] lg:gap-x-6 md:grid-cols-1 md:gap-y-6">
            <div className="">
              <h3 className="text-5xl font-aristoBold font-bold text-[#5F5F5F] mb-10 md:text-[1.6rem] md:capitalize md:text-center">
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
    </SlideInSection>
  );
};

export default Faqs;
