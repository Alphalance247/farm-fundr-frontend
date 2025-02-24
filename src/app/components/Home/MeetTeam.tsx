import Container from "../common/container";
import Image from "next/image";
import Button from "../common/Buttons";
import { GoArrowRight } from "react-icons/go";
import SlideInSection from "../common/slideInSection";

const MeetTeam = () => {
  return (
    <SlideInSection>
      <section className="bg-[#FCFCFC]">
        <Container>
          <div className="bg-[#2D865B] w-full relative rounded-[20px]">
            <div className="absolute bottom-0 left-0 md:hidden">
              <Image
                width={290}
                height={390}
                src="/assets/LandingPage/images/3.png"
                alt="positon1"
              />
            </div>
            <div className="absolute top-[1rem] z-[1] left-[10rem]">
              <Image
                width={120}
                height={140}
                src="/assets/LandingPage/icons/position4.svg"
                alt="positionlogo"
              />
            </div>
            <div className="absolute bottom-0 right-0 z-[1]">
              <Image
                src="/assets/LandingPage/icons/position3.svg"
                width={150}
                height={300}
                alt="positionlogo"
              />
            </div>

            <div className="relative z-10 py-28 w-[45%] mx-auto lg:w-[60%] lg:mr-[1rem] md:w-[95%] md:mr-0 md:px-1">
              <h3 className="text-6xl font-aristoBold font-bold text-[#51F4A6] mb-6">
                {" "}
                Farmfundr Team
              </h3>
              <p className=" font-poppinsSemiBold text-2xl text-[#FFFFFF] mb-16">
                Get to meet our professional team on this platform
              </p>
              <Button
                size="medium"
                variant="tertiary"
                className="flex items-center gap-x-4 justify-center"
              >
                <span>Meet team</span>
                <span>
                  <GoArrowRight size={24} className="text-black" />
                </span>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </SlideInSection>
  );
};

export default MeetTeam;
