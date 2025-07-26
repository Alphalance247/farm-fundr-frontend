import Image from "next/image";

const StoreFontFooter = () => {
  return (
    <footer className="bg-[#525535]">
      <div className="max-w-[1300px] mx-auto px-4 py-10 md:px-4 md:py-12 flex justify-between md:flex-col">
        <div className="border-[#6E7055] pb-8 border-b">
          <h4 className="text-white text-2xl font-aristoBold mb-6">
            Send us a message on our social platform
          </h4>
          <div className="flex justify-center gap-x-20 md:grid md:grid-cols-2 md:gap-y-6 justify-items-center md:justify-items-start md:mb-6">
            <div className="flex items-center gap-x-[10px]">
              <Image
                src="/assets/ContactUs/instgram.svg"
                width={40}
                height={40}
                alt=""
              />

              <p className="text-lg text-white font-poppinsRegular">
                Instagram
              </p>
            </div>

            <div className="flex items-center gap-x-[10px]">
              <Image
                src="/assets/ContactUs/linkdIn.svg"
                width={40}
                height={40}
                alt="linkedIn"
              />
              <p className="text-lg text-white font-poppinsRegular">Linkedin</p>
            </div>

            <div className="flex items-center gap-x-[10px] md:items-start">
              <Image
                src="/assets/ContactUs/x.svg"
                width={40}
                height={40}
                alt="X"
              />
              <p className="text-lg text-white font-poppinsRegular">X</p>
            </div>
          </div>
        </div>

        <div className="md:mt-6">
          <p className="text-white text-sm font-poppinsSemiBold mb-6 md:text-center md:mb-8">
            Powered By
          </p>
          <Image
            src="/assets/my-farms/newlogo.svg"
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

export default StoreFontFooter;
