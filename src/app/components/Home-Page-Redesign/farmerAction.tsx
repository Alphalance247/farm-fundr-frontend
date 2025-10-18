import Image from "next/image";
import Container from "../common/container";
import OurServicesCards from "./common/OurServicesCards";
import SlideInSection from "../common/slideInSection";

const FarmerAction = () => {
  const benefit = [
    {
      list: "Farmers create profiles, farms, branch and project",
    },
    {
      list: "Only CAC certified farms are visible on the marketplace- It builds trust and credibility.",
    },
    {
      list: "Each farm automatically gets a ",
      span: "Public FarmPage ",
      rest: "(professional online profile).",
    },
    {
      list: "Farmers can configure farms, showcase projects, and attract investors  directly",
    },
  ];
  return (
    <SlideInSection>
      <section className="bg-[#EEFEF6] relative">
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
            btnLink="/farmer-dashboard"
            btnText=""
            benefit={benefit}
            heading="Your Farm Deserves Digital Visibility"
            imageSrc="/assets/Homepage-Redesign/farmer.png"
          />
        </Container>
      </section>
    </SlideInSection>
  );
};

export default FarmerAction;
