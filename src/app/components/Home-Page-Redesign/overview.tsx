import { GoArrowRight } from "react-icons/go";
import Button from "../common/Buttons";
import Container from "../common/container";

const Overview = () => {
  return (
    <section
      className={`relative bg-center bg-cover bg-[url('/assets/Homepage-Redesign/overview.jpg')]`}
    >
      <div className="bg-[linear-gradient(270deg,rgba(132,132,132,0)_0%,#0D281B_100%)] absolute top-0 left-0 h-full w-full z-10"></div>
      <Container>
        <div className="relative z-20 text-center">
          <p className=" font-poppinsSemiBold mx-auto bg-transparent text-center text-sm text-[#FFFFFF] px-3 py-2 border border-[#FFFFFF]  rounded-br-[12px] rounded-tl-[12px] w-fit mb-8">
            Farmpady
          </p>
          <h1 className="text-6xl font-aristoBold text-[#EEFEF6] w-[84%] mx-auto mb-10 lg:text-5xl lg:w-[90%] md:w-full md:text-4xl">
            FarmPady — Bridging Farmers, Investors & Agencies in One Platform
          </h1>

          <div className="flex gap-x-3 justify-center md:flex-col md:gap-y-3">
            <Button
              className="flex gap-x-2 items-center justify-center md:w-full"
              variant="tertiary"
            >
              Create your farm
              <span>
                <GoArrowRight color="#2D865B" />
              </span>
            </Button>

            <Button
              className="flex gap-x-2 items-center !text-[#2D865B] !bg-[#EEFEF6] justify-center  md:w-full"
              variant="search"
            >
              Start Investing
              <span>
                <GoArrowRight color="#2D865B" />
              </span>
            </Button>

            <Button
              className="flex gap-x-2 items-center !text-[#2D865B] !bg-[#EEFEF6] justify-center  md:w-full"
              variant="search"
            >
              Create your grant
              <span>
                <GoArrowRight color="#2D865B" />
              </span>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Overview;
