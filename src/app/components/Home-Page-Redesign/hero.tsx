import Image from "next/image";
import Button from "../common/Buttons";
import Container from "../common/container";
import { GoArrowRight } from "react-icons/go";
import HeroHeading from "./common/heroHeading";

const Hero = () => {
  return (
    <section className="bg-[#EEFEF6] relative">
      <div className="absolute z-[0] top-0 right-0 bottom-0 left-0">
        <Image
          src="/assets/Homepage-Redesign/background.png"
          width={2000}
          height={1505}
          className="w-full h-full"
          alt="positionlogo"
        />
      </div>
      <div className="absolute z-[7] top-0 left-0 right-0 opacity-50">
        <Image
          src="/assets/Homepage-Redesign/s1.png"
          width={1581}
          height={967}
          className="w-full h-full"
          alt="positionlogo"
        />
      </div>
      <Container>
        <div className="relative z-10">
          <p className=" font-poppinsSemiBold text-sm text-[#2D865B] px-3 py-2 border border-[#2D865B] rounded-[12px] w-fit mb-8">
            Welcome to Farmpady
          </p>
          <div className="grid grid-cols-[50%auto] gap-x-20 xl:gap-x-12 lg:grid-cols-2 lg:gap-8 md:grid-cols-1">
            <HeroHeading text="Where Farmers, Investors & Agencies Build Agriculture’s Future" />

            <div>
              <p className="text-lg font-poppinsRegular text-[#7C7C7C] mb-8 xl:text-base">
                FarmPady connects certified farms with investors and agencies.
                Farmers can{" "}
                <span className="text-[#2D865B] italic font-poppinsSemiBold text-lg">
                  {" "}
                  raise funds
                </span>{" "}
                through investments or apply for grants — all in one trusted
                digital marketplace
              </p>

              <Button className="flex gap-x-2 items-center justify-center">
                Join FarmPady{" "}
                <span>
                  <GoArrowRight />
                </span>
              </Button>
            </div>
          </div>

          <div className="mt-6">
            <Image
              src="/assets/Homepage-Redesign/connect.png"
              width={1200}
              height={554}
              alt="connecting farmers with investors"
              className="w-full"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
