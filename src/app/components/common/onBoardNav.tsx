import React from "react";
import Link from "next/link";
import Image from "next/image";

const OnBoardNav: React.FC = () => {
  return (
    <nav className="bg-[#EEFEF6] sticky z-[1000] top-0 h-[86px]">
      <Link href="/">
        <Image
          src="/assets/LandingPage/icons/fundrlogo.svg"
          width={187}
          height={41}
          alt="logo"
        />
      </Link>
    </nav>
  );
};

export default OnBoardNav;
