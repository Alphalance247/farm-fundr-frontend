import React from "react";
import Link from "next/link";
import Image from "next/image";

const OnBoardNav: React.FC = () => {
  return (
    <header className="bg-[#EEFEF6] sticky z-[1000] top-0 shadow-sm">
      <nav className="max-w-[1300px] mx-auto px-8  py-6 md:px-4">
        <Link href="/">
          <Image
            src="/assets/LandingPage/icons/fundrlogo.svg"
            width={187}
            height={41}
            alt="logo"
          />
        </Link>
      </nav>
    </header>
  );
};

export default OnBoardNav;
