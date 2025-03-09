import Container from "../common/container";
import Card from "../common/card";
import Button from "../common/Buttons";
import { GoArrowRight } from "react-icons/go";
import Image from "next/image";

const ProjectListing = () => {
  return (
    <section className="bg-[#FCFCFC] relative">
      <div className="absolute bottom-0 z-[1]">
        <Image
          src="/assets/LandingPage/icons/position2.svg"
          width={200}
          height={400}
          alt="positionlogo"
        />
      </div>
      <Container>
        <h5 className="text-lg font-poppinsSemiBold text-[#5F5F5F] mb-16">
          120 Project Listings
        </h5>

        <div>
          <div className="grid grid-cols-3 gap-6 lg:grid-cols-2 lg:gap-x-4 lg:gap-y-10 md:grid-cols-1 md:gap-y-8">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>

        <Button
          size="medium"
          className="flex items-center gap-x-4 justify-center mt-20 text-center w-[535px] mx-auto relative z-10"
        >
          <span>Explore More and Invest Now</span>
          <span>
            <GoArrowRight size={24} className="text-white" />
          </span>
        </Button>
      </Container>
    </section>
  );
};

export default ProjectListing;
