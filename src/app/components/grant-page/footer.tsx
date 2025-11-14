import Image from "next/image";

const Footer = () => {
  const socialMedia = [
    {
      id: "",
    },
  ];
  return (
    <footer className="bg-[url('/assets/Grant-page/bg.png')] bg-center bg-cover">
      <div className="flex justify-between items-center max-w-[1400px] mx-auto px-10 relative z-20">
        <div>
          <p className="text-2xl font-aristoBold text-white w-[50%]">
            {" "}
            Send us a message on our social platform
          </p>

          <div className="flex gap-x-3 items-center">
            {socialMedia?.map((el, i) => (
              <div
                className="flex items-center gap-x-2 bg-[#EEFEF6] py-2 px-6"
                key={i}
              >
                <Image
                  src="/assets/ContactUs/instgram.svg"
                  width={30}
                  height={30}
                  alt="instagram"
                />

                <p className="text-sm text-[#7C7C7C] font-poppinsSemiBold">
                  Instagram
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="md:mt-6">
          <p className="text-white text-sm font-poppinsSemiBold mb-6 md:text-center md:mb-8">
            Powered By
          </p>
          <Image
            src="/assets/LandingPage/icons/fundrlogo.svg"
            width={256}
            height={61}
            alt="logo"
            className="md:mx-auto"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
