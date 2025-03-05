import React from "react";
import Link from "next/link";
import Image from "next/image";
import SlideInSection from "./slideInSection";

interface HeroCommonProps {
  text?: string;
}

const HeroCommon: React.FC<HeroCommonProps> = ({ text }) => {
  return (
    <SlideInSection>
      <section className="relative bg-center bg-cover bg-[url('/assets/about/hero.png')]">
        <div className="bg-[linear-gradient(270deg,rgba(132,132,132,0)_0%,#0D281B_100%)] absolute top-0 left-0 h-full w-full z-10"></div>
        <div className="max-w-[1300px] mx-auto px-8 pt-8 relative z-20">
          <Link href={"/"}>
            <button className="text-white flex items-center gap-x-3 text-lg font-poppinsRegular">
              <span>
                <Image
                  src="/assets/about/back.svg"
                  width={32}
                  height={32}
                  alt="Go back"
                />{" "}
              </span>{" "}
              Go back
            </button>
          </Link>
          <div className="py-28 text-center">
            <h1 className="text-6xl text-white font-aristoBold">
              {text || "About Us"}
            </h1>
          </div>
        </div>
      </section>
    </SlideInSection>
  );
};

export default HeroCommon;
