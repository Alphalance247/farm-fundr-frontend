import Container from "../common/container";
import HeadingTextWithSubHead from "../common/headingTextWithSubHead";
import Image from "next/image";
import Button from "../common/Buttons";
import { GoArrowRight } from "react-icons/go";
import SlideInSection from "../common/slideInSection";

const About = () => {
  return (
    <SlideInSection>
      <section className="bg-[#fcfcfc] relative">
        <div className="absolute bottom-0 lg:h-[150px]">
          <Image
            src="/assets/LandingPage/icons/position1.svg"
            width={200}
            height={400}
            alt="positionlogo"
            layout="responsive"
          />
        </div>
        <Container>
          <HeadingTextWithSubHead
            iconImage="/icons/vector1.svg"
            width={227}
            height={40}
            heading={"About us"}
            withSubHead={false}
            className="text-center mb-16 lg:mb-8"
          />

          <div className="grid grid-cols-2 gap-x-12 md:grid-cols-1 gap-y-10">
            <div>
              <HeadingTextWithSubHead
                iconImage=""
                heading={
                  "Empowering farmers and growing investments through collaboration"
                }
                className="mb-8 text-left lg:mb-3"
                subhead={
                  "FarmFundr is a platform designed to connect farmers and investors, fostering  collaboration and innovation in the agricultural sector. The platform aims to drive  agricultural growth and sustainability while providing mutual benefits to farmers  and investors"
                }
                withImage={false}
              />
              <Button
                size="medium"
                className="flex items-center gap-x-4 justify-center mt-10 lg:mt-4 md:mt-8"
              >
                <span>Learn More</span>
                <span>
                  <GoArrowRight size={24} className="text-white" />
                </span>
              </Button>
            </div>

            <Image
              width={577}
              height={573}
              src="/images/frame1.png"
              alt="frame1"
            />
          </div>
        </Container>
      </section>
    </SlideInSection>
  );
};

export default About;
