import React from "react";
import Link from "next/link";
import Image from "next/image";
import SlideInSection from "./slideInSection";
import { IoIosArrowBack } from "react-icons/io";

interface HeroCommonProps {
  text?: string;
  img?: string;
}

const HeroCommon: React.FC<HeroCommonProps> = ({ text, img }) => {
  return (
    <SlideInSection>
      <section className={`relative bg-center  ${img}`}>
        <div className="bg-[linear-gradient(270deg,rgba(132,132,132,0)_0%,#0D281B_100%)] absolute top-0 left-0 h-full w-full z-10"></div>
        <div className="max-w-[1300px] mx-auto px-8 pt-8 relative z-20">
          <Link href={"/"}>
            <button className="text-white flex items-center gap-x-3 text-lg font-poppinsRegular hover:text-[#51F4A6]">
              <span className="bg-[white] rounded-full p-4 hover:bg-[#51F4A6]">
                {/* <Image
                  src="/assets/about/back.svg"
                  width={32}
                  height={32}
                  alt="Go back"
                  className=" hover:bg-[#51F4A6]"
                />{" "} */}
                <IoIosArrowBack size={24} color="#226646" />
              </span>{" "}
              Go back
            </button>
          </Link>
          <div className="py-28 text-center">
            <h1 className="text-6xl text-white font-aristoBold md:text-4xl">
              {text || "About Us"}
            </h1>
          </div>
        </div>
      </section>
    </SlideInSection>
  );
};

export default HeroCommon;
