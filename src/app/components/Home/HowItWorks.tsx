import Container from "../common/container";
import HeadingTextWithSubHead from "../common/headingTextWithSubHead";
import Image from "next/image";
import Button from "../common/Buttons";
import { GoArrowRight } from "react-icons/go";
import SlideInSection from "../common/slideInSection";

const HowItWorks = () => {
  const data = [
    {
      bgColor: "#2D865B",
      numberStep: "1",
      heading: "Sign Up/Login",
      subhead:
        "Begin your journey by creating an account or logging into your existing one. This gives you access to all features designed to streamline your investment process.",
    },
    {
      bgColor: "#3D6EE8",
      numberStep: "2",
      heading: "Bid for Projects",
      subhead:
        "Browse through a curated list of projects available for bidding. Each project comes with detailed information, helping you make informed investment decisions.",
    },
    {
      bgColor: "#2DC7E8",
      numberStep: "3",
      heading: "Monitor Your investments",
      subhead:
        "Track your investment’s progress in real-time through your dashboard. Stay updated with project milestones, financial performance, and regular reports to ensure transparency and growth.",
    },
  ];
  return (
    <SlideInSection>
      <section className="relative bg-[#fcfcfc]">
        <div className="absolute bottom-0">
          <Image
            src="/assets/LandingPage/icons/position1.svg"
            width={200}
            height={400}
            alt="positionlogo"
          />
        </div>
        <Container>
          <HeadingTextWithSubHead
            iconImage="/icons/vector2.svg"
            width={332}
            height={50}
            heading={"How it works"}
            withSubHead={false}
            className="text-center mb-16 lg:mb-12"
          />
          <div className="grid grid-cols-2 gap-x-20 mb-20 xl:gap-x-12 lg:gap-x-8 md:grid-cols-1 md:gap-y-12">
            <Image
              width={577}
              height={536}
              src="/assets/LandingPage/images/2.png"
              alt="frame1"
            />

            <div className="flex flex-col gap-y-12 lg:gap-y-7">
              {data?.map((item, i) => {
                return (
                  <div className="flex gap-x-6 items-start " key={i}>
                    <div
                      className="rounded-[27px] bg-[#2D865B] px-[19px] py-2 flex flex-col items-center "
                      style={{ background: item?.bgColor }}
                    >
                      <p className="text-[13px] leading-[52px] text-white font-semibold font-poppinsSemiBold">
                        Step
                      </p>
                      <p className="text-4xl leading-[52px] text-white font-poppinsSemiBold font-semibold">
                        {item?.numberStep}
                      </p>
                    </div>
                    <div>
                      <p
                        className="text-2xl font-aristoBold font-bold mb-2 lg:text-base"
                        style={{ color: item?.bgColor }}
                      >
                        {item?.heading}
                      </p>
                      <p className="text-lg font-poppinsRegular text-[#7C7C7C] lg:text-sm">
                        {item?.subhead}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <Button
            size="medium"
            className="flex items-center gap-x-4 justify-center mt-10 text-center w-[535px] mx-auto"
          >
            <span>Get Started</span>
            <span>
              <GoArrowRight size={24} className="text-white" />
            </span>
          </Button>
        </Container>
      </section>
    </SlideInSection>
  );
};

export default HowItWorks;
