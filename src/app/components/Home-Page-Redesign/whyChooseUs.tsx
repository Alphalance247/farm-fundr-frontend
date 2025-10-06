import Image from "next/image";
import Container from "../common/container";
import Heading from "./common/heading";
import Button from "../common/Buttons";
import { GoArrowRight } from "react-icons/go";

const WhyChooseUs = () => {
  const data = [
    {
      border: "#4379FF",
      heading: "Secure Investments",
      paragraph:
        "Protect your funding with milestone-based payments and risk mitigation strategies",
      icon: "/assets/LandingPage/icons/investment.svg",
    },
    {
      border: "#5F5F5F",
      heading: "Transparency",
      paragraph:
        "Track progress and ROI(Return in Investment) in real-time through detailed analytics.",
      icon: "/assets/LandingPage/icons/settings.svg",
    },
    {
      border: "#51F4A6",
      heading: "Positive Impact",
      paragraph:
        "Support sustainable farming while earning returns on your investments.",
      icon: "/assets/LandingPage/icons/hands.svg",
    },
  ];
  const data2 = [
    {
      border: "#282A03",
      heading: "Access to Capital",
      paragraph:
        "Secure funding for your projects from trusted investors to ensure smooth execution.",
      icon: "/assets/LandingPage/icons/cash.svg",
    },
    {
      border: "#4379FF",
      heading: "Sustainability Focus",
      paragraph:
        "Promote eco-friendly practices and contribute to global food security.",
      icon: "/assets/LandingPage/icons/leaf.svg",
    },
    {
      border: "#31DBFF",
      heading: "Expert Support",
      paragraph:
        "Enhance your skills with our comprehensive resources and support.",
      icon: "/assets/LandingPage/icons/light.svg",
    },
  ];
  return (
    <section className="bg-[#2D865B] relative">
      <div className="absolute z-[5] top-0 right-0 bottom-0 left-0">
        <Image
          src="/assets/Homepage-Redesign/background.png"
          width={2000}
          height={1505}
          className="w-full h-full"
          alt="positionlogo"
        />
      </div>
      <div className="absolute z-[7] top-0 left-0 right-0 opacity-90">
        <Image
          src="/assets/Homepage-Redesign/s1.png"
          width={1581}
          height={967}
          className="w-full h-full"
          alt="positionlogo"
        />
      </div>

      <div className="absolute z-[8] right-0 left-0 bottom-0 opacity-90">
        <Image
          src="/assets/Homepage-Redesign/s2.png"
          width={1581}
          height={967}
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
        <div className="relative z-10">
          <Heading text="Why Choose Us" className="text-center !text-[white]" />

          <div className="mt-14">
            <Heading text="For Farmers" className="text-4xl !text-[white]" />

            <div className="grid grid-cols-3 gap-6 mb-14 lg:grid-cols-2 md:grid-cols-1">
              {data.map((item, i) => {
                return (
                  <div
                    className={`shadow-md border-l-[15px] py-5 px-8 flex bg-[#EEFEF6] gap-x-2 rounded-[20px] xl:flex-col-reverse xl:px-6 xl:py-3`}
                    key={i}
                    style={{ borderColor: item?.border }}
                  >
                    <div>
                      <p className="text-2xl font-aristoBold font-semibold text-[#5F5F5F] mb-2 xl:mb-0 lg:text-lg">
                        {item?.heading}
                      </p>
                      <p className="text-[#7C7C7C] text-lg font-poppinsRegular w-[90%] lg:text-sm">
                        {item?.paragraph}
                      </p>
                    </div>
                    <Image
                      width={134}
                      height={141}
                      src={item?.icon}
                      alt={item?.heading}
                      className="!mt-0 xl:mb-3"
                    />
                  </div>
                );
              })}
            </div>

            <div className="mb-[5rem]">
              <Heading
                text="For Investors"
                className="text-4xl !text-[white]"
              />
              <div className="grid grid-cols-3 gap-6 mt-6 lg:grid-cols-2 md:grid-cols-1">
                {data2.map((item, i) => {
                  return (
                    <div
                      className={`shadow-md border-l-[15px] py-5 px-8 flex bg-[#EEFEF6] gap-x-2 rounded-[20px] xl:flex-col-reverse xl:px-6 xl:py-3`}
                      key={i}
                      style={{ borderColor: item?.border }}
                    >
                      <div>
                        <p className="text-2xl font-aristoBold font-semibold text-[#5F5F5F] mb-2 lg:text-lg">
                          {item?.heading}
                        </p>
                        <p className="text-[#7C7C7C] text-lg font-poppinsRegular w-[90%] lg:text-sm">
                          {item?.paragraph}
                        </p>
                      </div>
                      <Image
                        width={134}
                        height={141}
                        src={item?.icon}
                        alt={item?.heading}
                        className="!mt-0 xl:mb-3"
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <Button
                className="flex gap-x-2 items-center !text-[#2D865B] !bg-[#EEFEF6] justify-center w-[470px] mx-auto"
                variant="search"
              >
                Let’s Get you Started
                <span>
                  <GoArrowRight color="#2D865B" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
