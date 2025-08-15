import Image from "next/image";
import HeadingTextWithSubHead from "./headingTextWithSubHead";
import Container from "./container";
import Button from "./Buttons";
import { GoArrowRight } from "react-icons/go";
import SlideInSection from "./slideInSection";

interface aboutUsProp {
  withAboutUsHeading?: boolean;
  heading?: string;
  subhead?: string;
  paragraphHeading?: boolean;
  btnAvailable?: boolean;
  btnText?: string;
  imgUrl?: string;
  alignment?: string;
}

const AboutUsCommon: React.FC<aboutUsProp> = ({
  withAboutUsHeading,
  heading,
  subhead,
  paragraphHeading,
  btnAvailable,
  btnText,
  imgUrl,
  alignment,
}) => {
  return (
    <SlideInSection>
      <section className="bg-[#fcfcfc] relative">
        <div className="absolute bottom-0 lg:h-[150px]">
          <Image
            src="/assets/LandingPage/icons/position1.svg"
            width={200}
            height={400}
            alt="positionlogo"
          />
        </div>
        <Container>
          {withAboutUsHeading && (
            <HeadingTextWithSubHead
              iconImage="/icons/vector1.svg"
              width={227}
              height={40}
              heading={"About us"}
              withSubHead={false}
              className="text-center mb-16 lg:mb-8"
            />
          )}

          <div
            className={`grid grid-cols-2 gap-x-12 lg:grid-cols-1 gap-y-10 ${alignment} `}
          >
            <div>
              {paragraphHeading && (
                <p className="mb-9 text-lg lg:mx-auto font-poppinsSemiBold pb-2 text-[#282A03] border-b-[3px] border-[#51F4A6] w-fit">
                  Get to know us
                </p>
              )}
              <HeadingTextWithSubHead
                iconImage=""
                heading={
                  heading ||
                  "Empowering farmers and growing investments through collaboration"
                }
                className="mb-8 text-left lg:text-center lg:mb-3"
                subhead={
                  subhead ||
                  "FarmPady is a platform designed to connect farmers and investors, fostering  collaboration and innovation in the agricultural sector. The platform aims to drive  agricultural growth and sustainability while providing mutual benefits to farmers  and investors"
                }
                withImage={false}
              />
              {btnAvailable && (
                <Button
                  size="medium"
                  className="flex lg:mx-auto items-center gap-x-4 justify-center mt-10 lg:mt-4 md:mt-8"
                >
                  <span>{btnText || "Learn More"}</span>
                  <span>
                    <GoArrowRight size={24} className="text-white" />
                  </span>
                </Button>
              )}
            </div>

            <Image
              width={577}
              height={573}
              className="w-full"
              src={imgUrl || "/assets/LandingPage/images/5.png"}
              alt="frame1"
            />
          </div>
        </Container>
      </section>
    </SlideInSection>
  );
};

export default AboutUsCommon;
