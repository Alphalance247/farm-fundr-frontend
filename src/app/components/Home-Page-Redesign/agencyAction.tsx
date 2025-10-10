import Image from "next/image";
import Container from "../common/container";
import OurServicesCards from "./common/OurServicesCards";

const AgencyAction = () => {
  const benefit = [
    {
      list: "Create grant programs with requirements.",
    },
    {
      list: " Each grant automatically gets a  ",
      span: "Public GrantPage",
      rest: " (professional online profile).",
    },
    {
      list: "Farmers apply directly via the Grant Page and Dashboard.",
    },
    {
      list: "Review, approve, and fund — All digitally.",
    },
  ];
  return (
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
          btnLink="/user-select"
          btnText="Create a Grant"
          benefit={benefit}
          isAgency={true}
          heading="Create Grants-Empower Farmers."
          imageSrc="/assets/Homepage-Redesign/agency.png"
        />
      </Container>
    </section>
  );
};

export default AgencyAction;
