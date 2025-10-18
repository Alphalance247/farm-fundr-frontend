import Link from "next/link";
import Button from "../../common/Buttons";
import HeroHeading from "../../Home-Page-Redesign/common/heroHeading";
import { GoArrowRight } from "react-icons/go";
import Image from "next/image";
import SlideInSection from "../../common/slideInSection";

const FarmerInvestorHero = ({
  btnLink,
  btnText,
  text,
  subheadText,
  investFarmText,
  name,
  imgSrc,
}: {
  btnLink: string;
  btnText: string;
  text: string;
  subheadText: string;
  investFarmText: string;
  name: string;
  imgSrc: string;
}) => {
  return (
    <SlideInSection>
      <div className="relative z-10 grid grid-cols-2 items-center gap-16 xl:gap-10 lg:gap-4 md:grid-cols-1 md:gap-8">
        <div>
          <HeroHeading
            text={text || "Grow Your Farm. Grow Your Future"}
            withSubhead={true}
            subheadText={
              subheadText ||
              "No upfront fees. Get seen by trusted investors and agencies ready to support you."
            }
          />
          <div className="mt-6 flex gap-x-4 items-center">
            <p className="text-lg font-poppinsRegular text-[#7C7C7C]  xl:text-base">
              {investFarmText || "Farm like "}
            </p>
            <p className="font-poppinsSemiBold text-2xl text-[#2D865B] border-none px-3 py-1 bg-[#C9FCE3] rounded-lg">
              {name || "Rofiah"}
            </p>
          </div>

          <Link href={btnLink || "/farmer-dashboard"}>
            <Button className="flex gap-x-2 items-center mt-8 justify-center lg:w-full">
              {btnText || "Get Started - Take 5 Minutes"}
              <span>
                <GoArrowRight />
              </span>
            </Button>
          </Link>
        </div>

        <div>
          <Image
            src={imgSrc || "/assets/HowItWorks/redesign/1aa.png"}
            width={588}
            height={511}
            className="w-full h-full"
            alt="Farmer - Investor"
          />
        </div>
      </div>
    </SlideInSection>
  );
};

export default FarmerInvestorHero;
