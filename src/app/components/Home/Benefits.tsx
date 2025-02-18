import Container from "../common/container";
import HeadingTextWithSubHead from "../common/headingTextWithSubHead";
import TabSwitch from "../common/tabSwitch";
import Image from "next/image";
import Button from "../common/Buttons";
import { GoArrowRight } from "react-icons/go";

const Benefits = () => {
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
  return (
    <section className="bg-[#fcfcfc] relative">
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
          className="text-center mb-10"
          width={778}
          height={50}
          iconImage="/assets/LandingPage/icons/vector2.svg"
          heading={"Benefits for you in our platform"}
          subhead={
            "Explore the Benefits: Secure, Sustainable, and Profitable Farmland Investments with FarmFundr"
          }
        />

        <TabSwitch />

        <div className="grid grid-cols-2 gap-x-20 mb-20">
          <div className="flex flex-col gap-y-6">
            {data?.map((item, i) => {
              return (
                <div
                  className={`shadow-md border-l-[15px] py-5 px-8 flex gap-x-2 rounded-[20px]`}
                  key={i}
                  style={{ borderColor: item?.border }}
                >
                  <div>
                    <p className="text-2xl font-aristoBold font-semibold text-[#5F5F5F] mb-2">
                      {item?.heading}
                    </p>
                    <p className="text-[#7C7C7C] text-lg font-poppinsRegular w-[90%]">
                      {item?.paragraph}
                    </p>
                  </div>
                  <Image
                    width={134}
                    height={141}
                    src={item?.icon}
                    alt={item?.heading}
                  />
                </div>
              );
            })}
          </div>

          <Image
            width={577}
            height={595}
            src="/assets/LandingPage/images/1.png"
            alt="frame1"
          />
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
  );
};

export default Benefits;
