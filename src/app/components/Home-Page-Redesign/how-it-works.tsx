import Image from "next/image";
import Container from "../common/container";
import Heading from "./common/heading";
import HowItWorksCards from "./common/howItWorksCard";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
const HowItWorks = () => {
  return (
    <section className="bg-[#fcfcfc] relative">
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
        <div className="mb-20 relative z-10">
          <Heading className="text-center " text="How FarmPady Works" />
          <p className="text-[#7C7C7C] font-poppinsRegular text-sm text-center w-[40%] mx-auto xl:w-[60%] lg:w-[80%] md:w-[90%]">
            From creating your FarmPage to securing funding or grants — FarmPady
            makes the journey simple.
          </p>
        </div>

        <div className="flex items-center gap-10 mb-14 lg:gap-6 md:flex-col">
          <HowItWorksCards
            imageSrc="/assets/Homepage-Redesign/1.svg"
            heading="Farmers Join & Create Profiles"
            subhead="Farmers create a verified digital FarmPage to showcase their farms, projects, and funding needs."
          />
          <span className="lg:hidden">
            <HiOutlineArrowLongRight />
          </span>
          <HowItWorksCards
            imageSrc="/assets/Homepage-Redesign/2.svg"
            heading="Agencies & Investors Explore"
            subhead="Agencies publish grant opportunities while investors explore verified farms and projects"
          />
        </div>

        <div className="flex items-center gap-10 justify-center lg:gap-6 md:flex-col">
          <HowItWorksCards
            imageSrc="/assets/Homepage-Redesign/3.svg"
            heading="Farmers Apply or Receive Interest"
            subhead="Farmers apply for grants or attract investor funding directly from their FarmPages
"
          />
          <span className="lg:hidden">
            <HiOutlineArrowLongRight />
          </span>
          <HowItWorksCards
            imageSrc="/assets/Homepage-Redesign/4.svg"
            heading="Funding Secured & Growth Tracked"
            subhead="Investments and grants are disbursed securely, with impact and progress tracked transparently on FarmPady."
          />
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;
