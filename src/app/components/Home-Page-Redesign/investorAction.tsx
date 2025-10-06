import Image from "next/image";
import Container from "../common/container";
import OurServicesCards from "./common/OurServicesCards";

const InvestorAction = () => {
  const benefit = [
    {
      list: "Browse certified farms with CAC verification.",
    },
    {
      list: "Compare project details, returns, and timelines.",
    },
    {
      list: "Invest securely with legal assurance.",
    },
    {
      list: "Track your investments with real-time update.",
    },
  ];
  return (
    <section className="bg-[#FCFCFC] relative">
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
        <OurServicesCards
          btnLink="/"
          btnText="Start Investing"
          isRowReverse={true}
          isFarmMarketPlace={true}
          benefit={benefit}
          heading="Verified Farms-Transparent Opportunities."
          imageSrc="/assets/Homepage-Redesign/investor.png"
        />
      </Container>
    </section>
  );
};

export default InvestorAction;
