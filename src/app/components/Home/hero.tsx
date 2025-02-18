import Button from "../common/Buttons";
import { GoArrowRight } from "react-icons/go";

const Hero = () => {
  return (
    <section className="bg-[url('/assets/LandingPage/images/hero.png')] relative bg-center bg-cover">
      <div className="bg-[linear-gradient(270deg,rgba(132,132,132,0)_0%,#0D281B_100%)] absolute top-0 left-0 h-full w-full z-10"></div>
      <div className="max-w-[1300px] mx-auto px-8 pt-[12rem] pb-[15rem] relative top-0 left-0 z-50">
        <div className="w-[55%]">
          <p className="font-poppinsRegular font-medium text-base text-white mb-8">
            Welcome to Farmfundr
          </p>
          <h1 className="text-white text-7xl font-bold font-aristoBold mb-6">
            Empower <span className="text-[#51F4A6]">Farmers,</span> Grow your
            wealth.<span className="text-[#51F4A6]">.</span>
          </h1>
          <p className="text-2xl font-poppinsRegular font-medium mb-10 text-white w-[80%]">
            Dream Big, Empower Farmers, and Watch Your Investment
            Flourish with FarmFundr.
          </p>

          <Button
            size="medium"
            variant="tertiary"
            className="flex items-center gap-x-4 justify-center"
          >
            <span>Get started for free</span>
            <span>
              <GoArrowRight size={24} className="text-black" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
