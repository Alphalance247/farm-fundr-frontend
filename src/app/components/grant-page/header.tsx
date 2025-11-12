import Image from "next/image";

const Header = () => {
  return (
    <nav className="relative">
      <div className="bg-[url('/assets/Grant-page/background.png')] bg-center bg-cover absolute top-0 left-0 h-full w-full z-10"></div>
      <div className="bg-[linear-gradient(90deg,#2D865B_0%,#12482F_100%)] absolute top-0 left-0 h-full w-full z-5"></div>
      <div className="flex  justify-between items-center max-w-[1400px] mx-auto px-10 relative z-20">
        <div className="flex gap-x-10 items-center">
          <Image
            src="/assets/Grant-page/logo.png"
            width={217}
            height={217}
            alt="Grant Brand Logo"
          />
          <div className=" w-[50%]">
            <h1 className=" text-4xl font-aristoBold text-[#F6F6F6]">
              AgroSupport
            </h1>
            <p className=" font-poppinsRegular text-[#E2E2E2] text-base pb-3 border-b border-b-[#FAFAFA33]">
              Empowering sustainable farming through innovation & funding.
            </p>
            <p className=" font-poppinsRegular text-[#E2E2E2] text-base pt-3">
              Location.:{" "}
              <span className="font-semibold text-[#F6F6F6]">
                Lagos, Nigeria
              </span>
            </p>
          </div>
        </div>

        <div>
          <Image
            src="/assets/Grant-page/money.png"
            width={401}
            height={402}
            alt="grant-pay"
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
