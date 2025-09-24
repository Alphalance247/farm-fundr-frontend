"use client";
import Button from "../common/Buttons";
import { GoArrowRight } from "react-icons/go";
import SlideInSection from "../common/slideInSection";
import AnimateBackground from "../common/animateBackground";
import Link from "next/link";
import { useAuth } from "@/context/authContext";

const Hero = () => {
  const { isAuthenticated } = useAuth();
  return (
    <SlideInSection>
      <section className="relative bg-center bg-cover">
        {/* Animated Background Image */}
        <AnimateBackground />

        <div className="bg-[linear-gradient(270deg,rgba(132,132,132,0)_0%,#0D281B_100%)] absolute top-0 left-0 h-full w-full z-10"></div>
        <div className="max-w-[1300px] mx-auto px-8 pt-[12rem] pb-[15rem] relative top-0 left-0 z-50 xl:pb-[12rem] xl:pt-[9rem] md:px-4 md:py-16">
          <div className="w-[55%] mx-auto xl:w-[60%] lg:w-[83%] md:w-full">
            <p className="font-poppinsRegular text-center font-medium text-base text-white mb-8">
              Welcome to FarmPady
            </p>
            <h1 className="text-white text-7xl font-bold font-aristoBold mb-6 md:text-4xl">
              <span className="text-[#51F4A6]">Invest</span> in Farmers, Grow
              your
              <span className="text-[#51F4A6]"> Wealth</span>.
            </h1>
            <p className="text-2xl text-center  mx-auto font-poppinsRegular font-medium mb-10 text-white w-[80%] md:text-base">
              Dream Big, Empower Farmers, and Watch Your Investment
              Flourish with FarmPady.
            </p>

            {!isAuthenticated && (
              <Link href={"/user-select"}>
                <Button
                  size="medium"
                  variant="tertiary"
                  className="flex items-center gap-x-4 mx-auto !justify-center w-fit"
                >
                  <span>Get started for free</span>
                  <span>
                    <GoArrowRight size={24} className="text-black" />
                  </span>
                </Button>
              </Link>
            )}
          </div>
        </div>
      </section>
    </SlideInSection>
  );
};

export default Hero;
